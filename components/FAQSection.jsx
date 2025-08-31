export default function FAQSection({ dict }) {
  return (
    <section id="faq" className="section">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">{dict.title}</h2>
      </div>
      <div className="grid gap-4 max-w-4xl mx-auto">
        {dict.items.map((it, idx)=>(
          <details key={idx} className="card">
            <summary className="font-semibold cursor-pointer">{it.q}</summary>
            <p className="mt-2 text-white/80">{it.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
