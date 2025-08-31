export default function TokenomicsSection({ dict }) {
  return (
    <section id="tokenomics" className="section">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">{dict.title}</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="card">
          <h3 className="font-semibold mb-3">{dict.distribution.title}</h3>
          <ul className="text-white/80 space-y-2">
            {dict.distribution.items.map((d, i) => (
              <li key={i} className="flex justify-between"><span>{d.label}</span><span className="font-semibold">{d.value}</span></li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3 className="font-semibold mb-3">{dict.parameters.title}</h3>
          <ul className="text-white/80 space-y-2">
            {dict.parameters.items.map((p, i) => (
               <li key={i} className="flex justify-between"><span>{p.label}</span><span className="font-semibold">{p.value}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
