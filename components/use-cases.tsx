"use client"

export function UseCases() {
  const useCases = [
    { title: "Formula 1 Ops", emoji: "🏎️", desc: "Trackside ↔ HQ Real-time data", icon: "📡" },
    { title: "Media Production", emoji: "🎬", desc: "4K Footage Transfer Instant", icon: "🎥" },
    { title: "Healthcare", emoji: "🏥", desc: "MRI Scans Secure & Fast", icon: "🔬" },
    { title: "Mining Ops", emoji: "⛏️", desc: "Remote Site Sync Reliable", icon: "🗺️" },
    { title: "Disaster Relief", emoji: "🚨", desc: "Emergency Data Unstoppable", icon: "📞" },
  ]

  return (
    <section id="use-cases" className="py-40 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-7xl font-black mb-24 text-center text-white uppercase tracking-tighter">
          🌍 Where It Shines
        </h2>

        <div className="grid md:grid-cols-5 gap-8 overflow-x-auto pb-4">
          {useCases.map((useCase, i) => (
            <div
              key={i}
              className="group relative p-10 rounded-2xl bg-[#141414] border-3 border-[#0A0A0A] hover:border-[#00D9FF] hover:-translate-y-4 transition-all duration-300 min-w-[280px]"
              style={{
                borderTopWidth: "6px",
                borderTopColor: "#00D9FF",
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">{useCase.emoji}</div>
                <div className="text-3xl">{useCase.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{useCase.title}</h3>
              <p className="text-[#B8B8B8] text-sm leading-relaxed mb-6">{useCase.desc}</p>

              <div className="inline-block px-3 py-1.5 rounded-full bg-[rgba(0,217,255,0.15)] border border-[#00D9FF]/50">
                <span className="text-xs font-bold text-[#00D9FF] uppercase">⚡ Priority</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
