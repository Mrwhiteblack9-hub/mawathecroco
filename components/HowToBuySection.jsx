export default function HowToBuySection({ dict, buyUrl }) {
  return (
    <section id="howtobuy" className="section">
      <div className="card text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">{dict.title}</h2>
        <ol className="text-white/80 space-y-2 text-left list-decimal list-inside">
          {dict.steps.map((step, i)=><li key={i}>{step}</li>)}
        </ol>
        <a href={buyUrl} target="_blank" rel="noreferrer" className="btn-primary mt-6 inline-block">{dict.link_text}</a>
      </div>
    </section>
  )
}
