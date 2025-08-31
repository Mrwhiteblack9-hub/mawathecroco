export default function AIFeaturesSection({ dict }) {
  return (
    <section id="features" className="section">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">{dict.title}</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dict.features.map((item, i) => (
          <div key={i} className="card text-center">
            <div className="text-4xl mb-3">{item.emoji}</div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="mt-1 text-sm text-white/70">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
