"use client"

export function Architecture() {
  const components = [
    { label: "File", icon: "📁" },
    { label: "Chunker", icon: "🔪" },
    { label: "BRAIN", icon: "🧠", isBrain: true },
    { label: "Tasks", icon: "⚡" },
    { label: "QUIC", icon: "🌐" },
    { label: "Network", icon: "📡" },
    { label: "Receiver", icon: "✅" },
  ]

  const metrics = [
    { value: "3.2×", label: "Faster" },
    { value: "99.9%", label: "Delivery" },
    { value: "0-RTT", label: "Recovery" },
  ]

  return (
    <section id="architecture" className="py-40 px-6 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-7xl font-black mb-24 text-center text-white uppercase tracking-tighter">
          🔧 Under The Hood
        </h2>

        {/* Architecture flow */}
        <div className="mb-24 overflow-x-auto pb-8">
          <div className="flex items-center justify-center gap-4 min-w-max px-4">
            {components.map((comp, i) => (
              <div key={i} className="flex items-center gap-4">
                <div
                  className={`flex flex-col items-center justify-center rounded-2xl transition-all ${
                    comp.isBrain
                      ? "w-40 h-40 bg-gradient-to-br from-[#FFD60A]/20 to-[#FF6B00]/20 border-4 border-[#FFD60A] shadow-[0_0_40px_rgba(255,214,10,0.4)] animate-pulse-glow"
                      : "w-28 h-28 bg-[#141414] border-2 border-[#FF6B00]/30 hover:border-[#FF6B00] hover:shadow-[0_0_20px_rgba(255,107,0,0.3)]"
                  }`}
                >
                  <span className="text-4xl">{comp.icon}</span>
                  <span className="text-xs text-[#B8B8B8] mt-2 text-center font-bold">{comp.label}</span>
                </div>

                {i < components.length - 1 && (
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-[#00C4FF] to-transparent" />
                    <div className="w-2 h-2 rounded-full bg-[#FFD60A] animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, i) => (
            <div key={i} className="p-12 bg-[#1A1A1A] rounded-2xl border-l-4 border-l-[#FF6B00]">
              <div className="text-5xl font-black text-[#FF6B00] mb-3">{metric.value}</div>
              <div className="text-[#B8B8B8] font-bold text-lg">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
