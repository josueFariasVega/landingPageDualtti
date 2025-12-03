"use client";

import { cn } from "@/lib/utils";

interface BrandPatternProps {
  className?: string;
  color?: string;
  opacity?: number;
  scale?: number;
}

export function BrandPattern({
  className,
  color = "#31006F",
  opacity = 0.1,
  scale = 1,
}: BrandPatternProps) {
  return (
    <div
      className={cn("absolute pointer-events-none overflow-hidden", className)}
      style={{
        width: `${500 * scale}px`,
        height: `${500 * scale}px`,
      }}
    >
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ opacity }}
      >
        <path
          d="M250 500C388.071 500 500 388.071 500 250C500 111.929 388.071 0 250 0C111.929 0 0 111.929 0 250C0 388.071 111.929 500 250 500Z"
          stroke={color}
          strokeWidth="1"
          strokeOpacity="0.1"
        />
        <path
          d="M250 450C360.457 450 450 360.457 450 250C450 139.543 360.457 50 250 50C139.543 50 50 139.543 50 250C50 360.457 139.543 450 250 450Z"
          stroke={color}
          strokeWidth="1"
          strokeOpacity="0.2"
        />
        <path
          d="M250 400C332.843 400 400 332.843 400 250C400 167.157 332.843 100 250 100C167.157 100 100 167.157 100 250C100 332.843 167.157 400 250 400Z"
          stroke={color}
          strokeWidth="1.5"
          strokeOpacity="0.3"
        />
        <path
          d="M250 350C305.228 350 350 305.228 350 250C350 194.772 305.228 150 250 150C194.772 150 150 194.772 150 250C150 305.228 194.772 350 250 350Z"
          stroke={color}
          strokeWidth="1.5"
          strokeOpacity="0.4"
        />
        <path
          d="M250 300C277.614 300 300 277.614 300 250C300 222.386 277.614 200 250 200C222.386 200 200 222.386 200 250C200 277.614 222.386 300 250 300Z"
          stroke={color}
          strokeWidth="2"
          strokeOpacity="0.5"
        />
      </svg>
    </div>
  );
}
