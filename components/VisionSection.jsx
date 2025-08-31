export default function VisionSection({ dict }) {
  return (
    <section id="vision" className="section">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">{dict.title}</h2>
        <p className="text-white/80">{dict.text}</p>
      </div>
    </section>
  )
}
