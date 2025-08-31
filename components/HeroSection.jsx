'use client'
import Link from 'next/link'
import Countdown from './Countdown'
export default function HeroSection({ buyUrl, lang, dict }) {
  const targetISO = '2025-09-13T00:00:00Z'
  const titleParts = dict.title.split('—')[1]?.split(',').map(s => s.trim()) || []
  const colors = ['--mawa-blue','--mawa-white','--mawa-red']
  return (
    <section id="hero" className="grid lg:grid-cols-5 gap-8 items-center py-8">
      <div className="lg:col-span-3">
        <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/5 text-xs">{dict.tag}</div>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
          MAWA — {titleParts.map((word, i) => (
            <span key={i} style={{ color: `var(${colors[i % colors.length]})` }}>
              {word}{i < titleParts.length - 1 ? ', ' : ''}
            </span>
          ))}
        </h1>
        <p className="mt-4 text-white/80 max-w-xl">{dict.description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={buyUrl} target="_blank" rel="noreferrer" className="btn-primary">{dict.buy_btn}</a>
          <a href="#tokenomics" className="px-5 py-2 rounded-2xl border border-white/10">{dict.tokenomics_btn}</a>
        </div>
        <div><Countdown targetISO={targetISO} /></div>
        <div className="mt-4 text-xs text-white/60">{dict.contract}: <span className="font-mono bg-white/5 px-2 py-1 rounded">SOON...</span></div>
      </div>
      <div className="lg:col-span-2 flex justify-center lg:justify-end">
        <div className="w-full max-w-sm"><div className="grid place-items-center">
            <svg className="croc-wiggle w-72 h-48" viewBox="0 0 240 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="MAWA Crocodile">
              <defs><linearGradient id="g1" x1="0" x2="1"><stop offset="0%" stopColor="#3b82f6"/><stop offset="50%" stopColor="#ffffff"/><stop offset="100%" stopColor="#ef4444"/></linearGradient></defs>
              <g transform="translate(20,20)">
                <ellipse cx="90" cy="45" rx="78" ry="36" fill="#0b7a3b"/><ellipse cx="120" cy="30" rx="26" ry="14" fill="#1f9a4a"/>
                <rect x="24" y="38" width="120" height="12" rx="6" fill="#0b6b34"/><circle cx="140" cy="20" r="6" fill="#fff"/>
                <circle cx="140" cy="20" r="2.8" fill="#0f1724"/><rect x="60" y="64" width="40" height="10" rx="3" fill="url(#g1)"/>
                <text x="80" y="72" fontSize="7" textAnchor="middle" fill="#041422" fontWeight="700">MAWA</text>
              </g>
            </svg>
        </div></div>
      </div>
    </section>
  )
}
