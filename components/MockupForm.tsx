'use client';

import { useState } from 'react';
import { CheckCircle, CircleNotch } from '@phosphor-icons/react';

type State = 'idle' | 'submitting' | 'success' | 'error';

const field =
  'w-full rounded-xl border border-[var(--color-line)] bg-white px-4 py-3 text-[15px] text-[var(--color-ink)] placeholder:text-stone-500 outline-none transition focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/25';

export function MockupForm() {
  const [state, setState] = useState<State>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('submitting');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch('/api/mockup', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('bad response');
      setState('success');
      form.reset();
    } catch {
      setState('error');
    }
  }

  if (state === 'success') {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl bg-white p-10 text-center ring-1 ring-[var(--color-line)] shadow-xl shadow-slate-900/5">
        <CheckCircle size={48} weight="fill" className="text-[var(--color-accent)]" />
        <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-ink)]">
          Got it. Your mockup is on the way.
        </h3>
        <p className="max-w-sm text-[15px] text-[var(--color-body)]">
          We will build your new homepage and send you the live link within two business days. No
          payment, no commitment.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl bg-white p-7 ring-1 ring-[var(--color-line)] shadow-xl shadow-slate-900/5 sm:p-8"
    >
      <div className="grid gap-4">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium text-[var(--color-ink)]">
            Your name
          </label>
          <input id="name" name="name" required placeholder="Jordan Alvarez" className={field} />
        </div>
        <div className="grid gap-2">
          <label htmlFor="business" className="text-sm font-medium text-[var(--color-ink)]">
            Business name
          </label>
          <input id="business" name="business" required placeholder="Alvarez Roofing" className={field} />
        </div>
        <div className="grid gap-2">
          <label htmlFor="contact" className="text-sm font-medium text-[var(--color-ink)]">
            Current website or phone
          </label>
          <input id="contact" name="contact" required placeholder="alvarezroofing.com or (713) 555-0142" className={field} />
          <p className="text-[13px] text-[var(--color-muted)]">So we can build your mockup and reach you.</p>
        </div>
      </div>

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-ink)] px-6 py-3.5 text-[15px] font-semibold text-white shadow-sm shadow-black/10 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 active:translate-y-[1px] disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {state === 'submitting' ? (
          <>
            <CircleNotch size={18} weight="bold" className="animate-spin" /> Sending...
          </>
        ) : (
          'Get my free mockup'
        )}
      </button>

      {state === 'error' && (
        <p className="mt-3 text-center text-sm text-red-600">
          Something went wrong. Please try again, or email hello@buntra.com.
        </p>
      )}
    </form>
  );
}
