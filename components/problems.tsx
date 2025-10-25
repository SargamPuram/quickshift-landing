"use client"

export function Problems() {
  const problems = [
    {
      title: "Head-of-Line Blocking",
      description: "TCP stops everything when one packet drops. Race telemetry can't wait.",
      icon: "❌",
      color: "#FF2D95",
    },
    {
      title: "Slow Recovery",
      description: "Retransmission timeouts waste precious seconds. Every millisecond counts.",
      icon: "⏱️",
      color: "#E10600",
    },
    {
      title: "No Prioritization",
      description: "All packets treated equally. Critical data gets stuck behind junk.",
      icon: "🔀",
      color: "#FF6B00",
    },
  ]

  return (
    <section id="problems" className="py-40 px-6 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-7xl font-black mb-20 text-center text-white uppercase tracking-tighter">
          ⚠️ Traditional Transfer Fails
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="group relative p-12 rounded-3xl bg-[#141414] border-3 border-[rgba(255,45,149,0.3)] hover:border-[#FF2D95] hover:-translate-y-3 transition-all duration-300"
              style={{
                borderTopWidth: "6px",
                borderTopColor: problem.color,
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#E10600] via-[#FF6B00] to-[#FFD60A] rounded-t-2xl" />

              <div className="text-6xl mb-6">{problem.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-white">{problem.title}</h3>
              <p className="text-[#B8B8B8] leading-relaxed text-lg">{problem.description}</p>

              <div className="mt-6 inline-block px-4 py-2 rounded-full bg-[rgba(255,45,149,0.15)] border border-[#FF2D95]/50">
                <span className="text-sm font-bold text-[#FF2D95] uppercase">❌ Fail</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
