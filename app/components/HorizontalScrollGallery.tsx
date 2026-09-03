"use client";

import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { MoveHorizontal } from "lucide-react";

interface HorizontalScrollGalleryProps<T> {
  /** Data items to render as cards */
  items: T[];
  /** Accessible label for the gallery region */
  ariaLabel: string;
  /** Tailwind gradient classes for the progress bar */
  progressGradient?: string;
  /** Renders the card content for a single item */
  renderItem: (item: T, index: number) => ReactNode;
}

/**
 * Scales / fades a card based on how far its "center point" in the scroll
 * timeline is from the current scroll progress — creating the depth effect
 * where the active card is fully visible and neighbours recede slightly.
 */
function GalleryItem({
  progress,
  center,
  children,
}: {
  progress: MotionValue<number>;
  center: number;
  children: ReactNode;
}) {
  const scale = useTransform(progress, (latest) => {
    const distance = Math.abs(latest - center);
    return 1 - Math.min(0.05, distance * 0.12);
  });
  const opacity = useTransform(progress, (latest) => {
    const distance = Math.abs(latest - center);
    return 1 - Math.min(0.35, distance * 0.7);
  });

  return (
    <motion.div
      style={{ scale, opacity }}
      className="flex-none w-[min(84vw,48rem)] max-h-[88vh] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {children}
    </motion.div>
  );
}


/**
 * Sticky horizontal scrolling gallery.
 *
 * Desktop (md+, and no reduced-motion preference): the section pins to the
 * viewport while vertical scroll drives the card track horizontally. Includes
 * a gradient progress bar, a fading "scroll to explore" hint, and a subtle
 * depth effect on cards away from the center.
 *
 * Mobile / reduced-motion: falls back to a native horizontal swipe strip with
 * scroll-snap, so no tall pinned section is created on small screens.
 */
export default function HorizontalScrollGallery<T>({
  items,
  ariaLabel,
  progressGradient = "from-purple-500 via-blue-500 to-indigo-500",
  renderItem,
}: HorizontalScrollGalleryProps<T>) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const lastRangeRef = useRef(-1);
  const [isDesktop, setIsDesktop] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [range, setRange] = useState(0);
  const [centers, setCenters] = useState<number[]>([]);

  const usePinned = isDesktop && !prefersReducedMotion && items.length > 1;

  // Track media queries client-side (defaults render the swipe fallback on
  // the server and after hydration, avoiding hydration mismatches).
  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setIsDesktop(desktopQuery.matches);
      setPrefersReducedMotion(motionQuery.matches);
    };

    update();
    desktopQuery.addEventListener("change", update);
    motionQuery.addEventListener("change", update);
    return () => {
      desktopQuery.removeEventListener("change", update);
      motionQuery.removeEventListener("change", update);
    };
  }, []);

  // Scroll progress across the whole section: 0 when the section top hits the
  // viewport top (pin starts) and 1 when the section bottom reaches the
  // viewport bottom (pin ends).
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Measure how far the track must travel: track width minus viewport width.
  // Re-measured on resize and whenever the track's content size changes.
  useEffect(() => {
    if (!usePinned) return;

    const measure = () => {
      const track = trackRef.current;
      if (!track) return;

      const travel = Math.max(0, track.scrollWidth - window.innerWidth);

      // Per-card "active" scroll progress: the progress value at which each
      // card is actually centered in the viewport (used for the depth effect).
      setCenters(
        Array.from(track.children).map((child) => {
          if (travel === 0) return 0;
          const el = child as HTMLElement;
          const centerProgress =
            (el.offsetLeft + el.offsetWidth / 2 - window.innerWidth / 2) /
            travel;
          return Math.min(1, Math.max(0, centerProgress));
        })
      );

      if (lastRangeRef.current !== travel) {
        lastRangeRef.current = travel;
        setRange(travel);
        // The wrapper height just changed — nudge framer-motion's useScroll
        // to re-measure the section with its final height (guarded so the
        // ResizeObserver doesn't dispatch in a loop).
        requestAnimationFrame(() => window.dispatchEvent(new Event("resize")));
      }
    };

    measure();
    window.addEventListener("resize", measure);
    const observer = new ResizeObserver(measure);
    if (trackRef.current) observer.observe(trackRef.current);

    return () => {
      window.removeEventListener("resize", measure);
      observer.disconnect();
    };
  }, [usePinned, items.length]);

  const x = useTransform(scrollYProgress, [0, 1], [0, -range]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.04], [1, 0]);

  // The section is taller than the viewport by exactly the horizontal travel
  // distance, so the pin lasts one viewport of scrolling per card.
  const wrapperHeight = usePinned
    ? `calc(100vh + ${range || items.length * 650}px)`
    : "auto";

  return (
    <div ref={sectionRef} aria-label={ariaLabel} style={{ height: wrapperHeight }}>
      {usePinned ? (
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          {/* Card track driven by vertical scroll — w-max + left alignment
              ensures it only overflows to the RIGHT, so card 1 is fully
              visible at progress 0 (items-center would clip the start). */}
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex w-max items-center gap-6 px-[6vw]"
          >
            {items.map((item, index) => (
              <GalleryItem
                key={index}
                progress={scrollYProgress}
                center={
                  centers[index] ??
                  (items.length > 1 ? index / (items.length - 1) : 0)
                }
              >
                {renderItem(item, index)}
              </GalleryItem>
            ))}
          </motion.div>

          {/* Scroll hint — fades out as soon as scrolling starts */}
          <motion.div
            style={{ opacity: hintOpacity }}
            className="absolute bottom-14 left-1/2 -translate-x-1/2 flex items-center gap-2 text-sm text-muted-foreground pointer-events-none"
          >
            <MoveHorizontal className="w-4 h-4 animate-pulse" />
            <span>Scroll to explore</span>
          </motion.div>

          {/* Progress bar */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 h-1.5 rounded-full bg-border/60 overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className={`h-full w-full origin-left rounded-full bg-gradient-to-r ${progressGradient}`}
            />
          </div>
        </div>
      ) : (
        /* Native swipe fallback with scroll-snap (mobile / reduced motion) */
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 py-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-none w-[min(85vw,42rem)] snap-center"
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

