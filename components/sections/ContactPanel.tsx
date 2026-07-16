'use client';
import { useState } from 'react';
import { PROFILE } from '@/lib/data';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiDownload } from 'react-icons/fi';

export default function ContactPanel() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    // TODO: wire to your own endpoint / Resend / Formspree
    await new Promise(r => setTimeout(r, 900));
    setBusy(false); setSent(true);
  };

  return (
    <div className="space-y-5">
      <p className="text-white/70 text-sm">Transmission channel is open. Send a signal.</p>
      <form onSubmit={submit} className="space-y-3">
        <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
          required placeholder="Your name"
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-cosmos-glow/60" />
        <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
          required type="email" placeholder="Your email"
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-cosmos-glow/60" />
        <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
          required rows={4} placeholder="Message"
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-cosmos-glow/60" />
        <button type="submit" disabled={busy || sent}
          className="glass hud-border rounded-full px-6 py-2.5 text-xs font-mono tracking-widest uppercase disabled:opacity-60">
          {sent ? 'Signal Received ✓' : busy ? 'Transmitting…' : 'Send Signal'}
        </button>
      </form>

      <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3 text-white/80">
        <a href={`mailto:${PROFILE.email}`} className="glass rounded-full p-2.5" aria-label="Email"><FiMail /></a>
        <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" className="glass rounded-full p-2.5" aria-label="GitHub"><FiGithub /></a>
        <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="glass rounded-full p-2.5" aria-label="LinkedIn"><FiLinkedin /></a>
        <a href={PROFILE.socials.instagram} target="_blank" rel="noreferrer" className="glass rounded-full p-2.5" aria-label="Instagram"><FiInstagram /></a>
        <a href={PROFILE.resume} download className="glass rounded-full px-4 py-2 text-xs font-mono tracking-widest uppercase flex items-center gap-2">
          <FiDownload /> Resume
        </a>
      </div>
    </div>
  );
}
