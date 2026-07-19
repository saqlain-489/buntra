import Link from 'next/link';

export function Container({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Section({
  id,
  children,
  className = '',
  alt = false,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  alt?: boolean;
}) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${alt ? 'bg-[var(--color-surface-alt)]' : 'bg-[var(--color-surface)]'} ${className}`}
    >
      {children}
    </section>
  );
}

type BtnProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
};

export function Button({ href, children, variant = 'primary', className = '' }: BtnProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[15px] font-semibold whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 active:translate-y-[1px]';
  const styles =
    variant === 'primary'
      ? 'bg-[var(--color-ink)] text-white shadow-sm shadow-black/10 hover:bg-[#1c232e] hover:shadow-lg hover:shadow-black/20'
      : 'bg-white text-[var(--color-ink)] ring-1 ring-[var(--color-line)] hover:ring-[var(--color-ink)]/40';
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}

export function Heading({
  children,
  className = '',
  as: Tag = 'h2',
}: {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}) {
  return (
    <Tag
      className={`font-[family-name:var(--font-display)] font-bold tracking-tight text-[var(--color-ink)] ${className}`}
    >
      {children}
    </Tag>
  );
}
