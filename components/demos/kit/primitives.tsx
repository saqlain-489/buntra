import Link from 'next/link';

const display = 'font-[family-name:var(--d-font-display)]';

export function DContainer({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function DSection({
  id,
  children,
  alt = false,
  className = '',
}: {
  id?: string;
  children: React.ReactNode;
  alt?: boolean;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${alt ? 'bg-[var(--d-bg-alt)]' : 'bg-[var(--d-bg)]'} ${className}`}
    >
      {children}
    </section>
  );
}

export function DHeading({
  as: Tag = 'h2',
  children,
  className = '',
}: {
  as?: 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Tag className={`${display} font-bold tracking-tight text-[color:var(--d-ink)] ${className}`}>{children}</Tag>
  );
}

export function DEyebrow({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`text-[12px] font-semibold uppercase tracking-[0.18em] text-[color:var(--d-accent)] ${className}`}>
      {children}
    </span>
  );
}

type BtnProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
};

// Never assumes white text — reads --d-on-primary so cream/light-primary themes work.
export function DButton({ href, children, variant = 'primary', className = '' }: BtnProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-[var(--d-radius)] px-6 py-3.5 text-[15px] font-semibold whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 active:translate-y-[1px]';
  const styles =
    variant === 'primary'
      ? 'bg-[var(--d-primary)] text-[color:var(--d-on-primary)] shadow-sm hover:brightness-110 hover:shadow-lg'
      : variant === 'outline'
        ? 'border border-[var(--d-line)] text-[color:var(--d-ink)] hover:border-[var(--d-primary)]'
        : 'text-[color:var(--d-ink)] hover:text-[color:var(--d-accent)]';
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
