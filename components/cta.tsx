"use client"

export function CTA() {
  // Use the same GitHub repository link for both actions, as requested.
  const GITHUB_LINK = "https://github.com/QUICShift/QUICShift"

  return (
    <section className="py-40 px-6 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-6xl md:text-7xl font-black mb-8 text-white uppercase tracking-tighter">Ready to Race?</h2>
        <p className="text-2xl text-[#B8B8B8] mb-16 leading-relaxed">
          Join the future of adaptive file transfer. Built for speed. Built for reliability.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          {/* UPDATED: Changed to <a> and linked to GitHub for "Start Free Trial" */}
          <a
            href={GITHUB_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-5 bg-gradient-to-r from-[#FF6B00] to-[#FF4500] text-white rounded-xl font-bold uppercase tracking-wider hover:shadow-[0_8px_24px_rgba(255,107,0,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
          >
            Start Free Trial
          </a>
          
          {/* UPDATED: Changed to <a> and linked to GitHub for "View Documentation" */}
          <a
            href={GITHUB_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-5 border-2 border-[#FF6B00] text-[#FF6B00] rounded-xl font-bold uppercase tracking-wider hover:bg-[rgba(255,107,0,0.15)] transition-all duration-300 flex items-center justify-center"
          >
            View Documentation
          </a>
        </div>

        <p className="text-[#808080] text-base">No credit card required • 14-day free trial • Cancel anytime</p>
      </div>
    </section>
  )
}