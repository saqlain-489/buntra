// CSS-only marquee (no JS). Duplicates children so the loop is seamless, and
// reuses the global `marquee` keyframe + `[data-marquee]` reduced-motion pause.
export function Marquee({
  children,
  speed = 32,
  reverse = false,
  className = '',
}: {
  children: React.ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex overflow-hidden ${className}`}>
      <div
        data-marquee
        className="flex shrink-0 items-center"
        style={{ animation: `marquee ${speed}s linear infinite${reverse ? ' reverse' : ''}` }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
