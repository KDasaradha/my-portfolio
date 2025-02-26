import { PhoneCall } from "lucide-react";
import { SiGithub, SiLinkedin, SiX, SiWhatsapp, SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-background border-t py-4">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        {/* Social & Contact Icons */}
        <div className="flex space-x-6 mb-3">
          {/* GitHub */}
          <a
            href="https://github.com/KDasaradha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#181717] hover:text-black transition-transform transform hover:scale-110"
            aria-label="GitHub"
          >
            <SiGithub size={24} fill="currentColor" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/dasaradha-rami-reddy-kesari-b8471417b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0077B5] hover:text-[#004471] transition-transform transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <SiLinkedin size={24} fill="currentColor" />
          </a>

          {/* Twitter (X) */}
          <a
            href="https://twitter.com/your-twitter-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1DA1F2] hover:text-[#0d74af] transition-transform transform hover:scale-110"
            aria-label="Gitter"
          >
            <SiX size={24} fill="currentColor" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919032414439"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#25D366] hover:text-[#128C7E] transition-transform transform hover:scale-110"
            aria-label="WhatsApp"
          >
            <SiWhatsapp size={24} fill="currentColor" />
          </a>

          {/* Phone */}
          <a
            href="tel:+919032414439"
            className="text-[#34B7F1] hover:text-[#0a84c1] transition-transform transform hover:scale-110"
            aria-label="Phone"
          >
            <PhoneCall size={24} fill="currentColor" />
          </a>

          {/* Email */}
          <a
            href="mailto:kdasaradha525@gmail.com"
            className="text-[#D44638] hover:text-[#a12f26] transition-transform transform hover:scale-110"
            aria-label="Email"
          >
            <SiGmail size={24} fill="currentColor" />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Kesari Dasaradh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
