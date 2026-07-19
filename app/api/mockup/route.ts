import { NextResponse } from 'next/server';

// Receives free-mockup requests. For now it validates and logs the lead.
// TODO before launch: forward to email (Resend/Postmark) or your CRM/lead DB.
export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  const name = String(data.name || '').trim();
  const business = String(data.business || '').trim();
  const contact = String(data.contact || '').trim();

  if (!name || !business || !contact) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 422 });
  }

  // Lead captured. Replace with real delivery (email/CRM) before launch.
  console.log('[mockup-request]', { name, business, contact, at: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}
