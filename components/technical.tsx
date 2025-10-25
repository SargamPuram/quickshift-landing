"use client"

import { useEffect, useState } from "react"

export function Technical() {
  const [counts, setCounts] = useState({
    speedup: 0,
    throughput: 0,
    reliability: 0,
    adaptations: 0,
    streams: 0,
    retries: 0,
  })

  useEffect(() => {
    const intervals = [
      setInterval(() => setCounts((c) => ({ ...c, speedup: Math.min(c.speedup + 0.4, 12.2) })), 30),
      setInterval(() => setCounts((c) => ({ ...c, throughput: Math.min(c.throughput + 9.7, 291.24) })), 30),
      setInterval(() => setCounts((c) => ({ ...c, reliability: Math.min(c.reliability + 2.5, 99.9) })), 30),
      setInterval(() => setCounts((c) => ({ ...c, adaptations: Math.min(c.adaptations + 2, 60) })), 30),
      setInterval(() => setCounts((c) => ({ ...c, streams: Math.min(c.streams + 0.6, 18) })), 30),
      setInterval(() => setCounts((c) => ({ ...c, retries: Math.max(c.retries - 1.2, 0) })), 30),
    ]
    return () => intervals.forEach(clearInterval)
  }, [])

  const specs = [
    "Written in Rust for memory safety",
    "Tokio async runtime",
    "QUINN (QUIC) protocol",
    "Blake3 cryptographic hashing",
    "Dynamic adaptive chunk sizing",
    "Multipath UDP support",
  ]

  const comparisonData = [
    { metric: "Transfer Time (10MB)", tcp: "3.53s", quic: "0.29s", improvement: "12.2x faster" },
    { metric: "Throughput", tcp: "23.74 Mbps", quic: "291.24 Mbps", improvement: "12.3x higher" },
    { metric: "Connection Setup", tcp: "~150ms", quic: "0ms (0-RTT)", improvement: "Instant" },
    { metric: "Chunk Size", tcp: "Fixed 64KB", quic: "16KB-512KB", improvement: "Adaptive" },
    { metric: "Concurrent Streams", tcp: "1 (sequential)", quic: "4-18", improvement: "Multiplexed" },
    { metric: "Retries/Failures", tcp: "35 retries", quic: "0 failures", improvement: "Auto-recovery" },
    { metric: "Integrity Checks", tcp: "None", quic: "Blake3 per-chunk", improvement: "Cryptographic" },
    { metric: "Encryption", tcp: "Optional (TLS)", quic: "Built-in TLS 1.3", improvement: "Native" },
  ]

  return (
    <section className="py-40 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-24 text-white uppercase tracking-tight">Under The Hood</h2>

        <div className="grid md:grid-cols-2 gap-16 items-start mb-32">
          <div className="space-y-6">
            {specs.map((spec, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-[#00D9FF] flex items-center justify-center flex-shrink-0 group-hover:scale-125 transition-transform font-bold text-sm text-[#0A0A0A]">
                  ✓
                </div>
                <span className="text-[#B8B8B8] group-hover:text-[#00D9FF] transition text-sm font-normal">{spec}</span>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <div className="bg-[#141414] rounded-lg p-6 border border-[#00D9FF]/30 font-mono text-xs overflow-x-auto">
              <pre className="text-[#00D9FF] leading-relaxed">{`// Initialize QUICShift
const transfer = QUICShift::new()
  .with_adaptive_control()
  .with_blake3_verification()
  .build();

// Transfer with automatic
// retry and healing
transfer.send_file(
  "large_dataset.bin",
  "remote.server"
).await?;`}</pre>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#141414] rounded-lg p-5 border border-[#00D9FF]/30 text-center">
                <div className="text-2xl font-bold text-[#00D9FF] mb-1">{counts.speedup.toFixed(1)}×</div>
                <div className="text-xs text-[#B8B8B8] uppercase font-normal">Faster</div>
              </div>
              <div className="bg-[#141414] rounded-lg p-5 border border-[#00D9FF]/30 text-center">
                <div className="text-2xl font-bold text-[#00D9FF] mb-1">{counts.throughput.toFixed(0)} Mbps</div>
                <div className="text-xs text-[#B8B8B8] uppercase font-normal">Throughput</div>
              </div>
              <div className="bg-[#141414] rounded-lg p-5 border border-[#00D9FF]/30 text-center">
                <div className="text-2xl font-bold text-[#00D9FF] mb-1">{counts.reliability.toFixed(1)}%</div>
                <div className="text-xs text-[#B8B8B8] uppercase font-normal">Reliable</div>
              </div>
              <div className="bg-[#141414] rounded-lg p-5 border border-[#00D9FF]/30 text-center">
                <div className="text-2xl font-bold text-[#00D9FF] mb-1">{Math.round(counts.adaptations)}</div>
                <div className="text-xs text-[#B8B8B8] uppercase font-normal">Adaptations</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white mb-8 uppercase tracking-tight">Performance Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#00D9FF]/30">
                  <th className="text-left py-4 px-4 text-[#00D9FF] font-bold uppercase">Metric</th>
                  <th className="text-left py-4 px-4 text-[#B8B8B8] font-normal">Traditional TCP</th>
                  <th className="text-left py-4 px-4 text-[#B8B8B8] font-normal">QuickShift QUIC</th>
                  <th className="text-left py-4 px-4 text-[#00D9FF] font-bold">Improvement</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className="border-b border-[#1a1a1a] hover:bg-[#141414]/50 transition">
                    <td className="py-4 px-4 text-[#B8B8B8] font-normal">{row.metric}</td>
                    <td className="py-4 px-4 text-[#888888] font-normal">{row.tcp}</td>
                    <td className="py-4 px-4 text-[#00D9FF] font-normal">{row.quic}</td>
                    <td className="py-4 px-4 text-[#00D9FF] font-bold">{row.improvement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
