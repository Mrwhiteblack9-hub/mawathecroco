export default function RoadmapSection({ dict }) {
  return (
    <section id="roadmap" className="section">
      <div className="text-center max-w-3xl mx-auto">
         <h2 className="text-3xl font-bold mb-8">{dict.title}</h2>
      </div>
      <div className="space-y-6 max-w-4xl mx-auto">
        {dict.phases.map((p, i)=>(
          <div key={i} className="card">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold">{p.phase}</h3>
                <p className="mt-1 text-sm text-white/80">{p.desc}</p>
              </div>
              <div className={`text-xs font-bold py-1 px-2 rounded-full whitespace-nowrap ${p.status === 'COMPLETED' ? 'bg-green-500/20 text-green-400' : p.status === 'IN PROGRESS' ? 'bg-blue-500/20 text-blue-400' : 'bg-white/10 text-white/70'}`}>{p.status}{p.date ? ` • ${p.date}` : ''}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
