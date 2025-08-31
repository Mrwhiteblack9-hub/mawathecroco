export default function Footer({ social }){
  return (
    <footer className="w-full border-t border-white/10 mt-12">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
        <div>© {new Date().getFullYear()} MAWA — Not financial advice. DYOR.</div>
        <div className="flex gap-4">
          <a href={social.x} target="_blank" rel="noreferrer" className="hover:underline">X / Twitter</a>
          <a href={social.telegram} target="_blank" rel="noreferrer" className="hover:underline">Telegram</a>
        </div>
      </div>
    </footer>
  )
}
