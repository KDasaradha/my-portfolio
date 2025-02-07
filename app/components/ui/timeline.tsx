import type React from "react"
import { cn } from "@/app/lib/utils"

interface TimelineProps {
  children: React.ReactNode
  className?: string
}

export function Timeline({ children, className }: TimelineProps) {
  return <ol className={cn("relative border-l border-gray-200 dark:border-gray-700", className)}>{children}</ol>
}

interface TimelineItemProps {
  children: React.ReactNode
  title: string
  date: string
  className?: string
}

export function TimelineItem({ children, title, date, className }: TimelineItemProps) {
  return (
    <li className={cn("mb-10 ml-4", className)}>
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{date}</time>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{children}</div>
    </li>
  )
}

