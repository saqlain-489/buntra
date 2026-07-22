import type { CSSProperties } from 'react';

// Wraps a demo site: applies its font-variable classes + its --d-* token overrides.
// Everything below reads var(--d-*), so each demo reskins in full isolation from
// Buntra's global --color-* system. Body font is applied here; headings override.
export function ThemeScope({
  theme,
  fontClass,
  className = '',
  children,
}: {
  theme: Record<string, string>;
  fontClass: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${fontClass} overflow-x-clip font-[family-name:var(--d-font-body)] bg-[var(--d-bg)] text-[color:var(--d-body)] ${className}`}
      style={theme as CSSProperties}
    >
      {children}
    </div>
  );
}
