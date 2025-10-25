"use client"

export function Features() {
  const features = [
    {
      title: "QUIC Protocol Power",
      description:
        "Independent streams mean one dropped packet doesn't stop everything else. 0-RTT reconnection. Built-in TLS.",
      icon: "⚡",
    },
    {
      title: "Adaptive Control",
      description: "Real-time bandwidth detection. Automatically adjusts chunk size based on network conditions.",
      icon: "📊",
    },
    {
      title: "Chunking Architecture",
      description: "Dynamic chunk sizing optimizes for your network. Parallel streams maximize throughput.",
      icon: "🧩",
    },
    {
      title: "Integrity Verification",
      description: "Blake3 hashing ensures data integrity. Automatic retry on corruption. Zero data loss.",
      icon: "🛡️",
    },
  ]

  return (
    <section id="features" className="py-40 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 text-white uppercase tracking-tight">
            The QUICShift Advantage
          </h2>
          <p className="text-xl text-[#00D9FF] font-medium">Adaptive. Resilient. Blazing Fast.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative p-12 rounded-2xl bg-[#141414] border-2 border-[#00D9FF]/30 hover:border-[#00D9FF]/60 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-wide">{feature.title}</h3>
              <p className="text-[#B8B8B8] leading-relaxed text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
