// app/my-svg-page/page.js

import { Header } from "@/components/header"
import { CTA } from "@/components/cta"

export default function SvgPage() {
  return (
    // Use min-h-screen to ensure the background covers the page
    <main className="bg-[#0A0A0A] text-white overflow-hidden min-h-screen">
      <Header />
      
      {/* Centering container */}
      <div className="flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">
          QUICShift Architecture
        </h1>
        
        {/* - I've added a className for responsive sizing.
          - All XML/HTML comments are converted to {/* ... */}
        { /*- All hyphenated attributes (e.g., font-family) are converted to camelCase (e.g., fontFamily).
        */}
        <svg 
          width="1400" 
          height="1100" 
          xmlns="http://www.w3.org/2000/svg"
          // Added classes for responsive sizing. Adjust w-full and max-w-7xl as needed.
          className="w-full max-w-7xl h-auto"
          // Set a fallback text color for any text elements that don't have a fill
          fill="currentColor" 
        >
          {/* Dark background */}
          <rect width="1400" height="1100" fill="#0d1117"/>
          
          {/* Title */}
          <text x="700" y="50" fontFamily="Arial, sans-serif" fontSize="36" fontWeight="bold" fill="#58a6ff" textAnchor="middle">
            QuickShift Architecture - Step by Step
          </text>
          <text x="700" y="85" fontFamily="Arial, sans-serif" fontSize="18" fill="#8b949e" textAnchor="middle">
            Adaptive QUIC-Based File Transfer with Blake3 Verification
          </text>
          
          {/* Define gradients and markers */}
          <defs>
            <linearGradient id="step1Grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor:"#3fb950", stopOpacity:0.3}} />
              <stop offset="100%" style={{stopColor:"#3fb950", stopOpacity:0.1}} />
            </linearGradient>
            <linearGradient id="step2Grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor:"#f778ba", stopOpacity:0.3}} />
              <stop offset="100%" style={{stopColor:"#f778ba", stopOpacity:0.1}} />
            </linearGradient>
            <linearGradient id="step3Grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor:"#d29922", stopOpacity:0.3}} />
              <stop offset="100%" style={{stopColor:"#d29922", stopOpacity:0.1}} />
            </linearGradient>
            <linearGradient id="step4Grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor:"#58a6ff", stopOpacity:0.3}} />
              <stop offset="100%" style={{stopColor:"#58a6ff", stopOpacity:0.1}} />
            </linearGradient>
            <linearGradient id="step5Grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor:"#a371f7", stopOpacity:0.3}} />
              <stop offset="100%" style={{stopColor:"#a371f7", stopOpacity:0.1}} />
            </linearGradient>
            
            <marker id="arrowBlue" markerWidth="12" markerHeight="12" refX="11" refY="4" orient="auto">
              <polygon points="0 0, 12 4, 0 8" fill="#58a6ff" />
            </marker>
            <marker id="arrowGreen" markerWidth="12" markerHeight="12" refX="11" refY="4" orient="auto">
              <polygon points="0 0, 12 4, 0 8" fill="#3fb950" />
            </marker>
          </defs>
          
          {/* STEP 1: Data Input Module */}
          <g id="step1">
            <rect x="100" y="150" width="1200" height="120" rx="15" fill="url(#step1Grad)" stroke="#3fb950" strokeWidth="3"/>
            <text x="150" y="185" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#3fb950">
              Step 1: Data Input Module
            </text>
            <text x="150" y="215" fontFamily="Arial, sans-serif" fontSize="14" fill="#c9d1d9">
              📄 File Input: test_data.bin (10MB)
            </text>
            <text x="150" y="240" fontFamily="Arial, sans-serif" fontSize="13" fill="#8b949e">
              • Read file from disk using std::fs::File
            </text>
            <text x="150" y="260" fontFamily="Arial, sans-serif" fontSize="13" fill="#8b949e">
              • Load into memory buffer (Vec&lt;u8&gt;)
            </text>
            
            {/* Blake3 indicator */}
            <rect x="1100" y="180" width="150" height="60" rx="8" fill="#161b22" stroke="#f778ba" strokeWidth="2"/>
            <text x="1175" y="205" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="bold" fill="#f778ba" textAnchor="middle">
              Blake3 Ready
            </text>
            <text x="1175" y="225" fontFamily="Arial, sans-serif" fontSize="11" fill="#8b949e" textAnchor="middle">
              Hasher initialized
            </text>
          </g>
          
          {/* Arrow to Step 2 */}
          <path d="M 700 270 L 700 310" stroke="#58a6ff" strokeWidth="4" fill="none" markerEnd="url(#arrowBlue)"/>
          <text x="720" y="295" fontFamily="Arial, sans-serif" fontSize="12" fill="#58a6ff">File data flows</text>
          
          {/* STEP 2: Adaptive Task Control Module */}
          <g id="step2">
            <rect x="100" y="310" width="1200" height="140" rx="15" fill="url(#step2Grad)" stroke="#f778ba" strokeWidth="3"/>
            <text x="150" y="345" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#f778ba">
              Step 2: Adaptive Task Control Module
            </text>
            <text x="150" y="375" fontFamily="Arial, sans-serif" fontSize="14" fill="#c9d1d9">
              🎯 Network Quality Analysis and Strategy Calculation
            </text>
            <text x="150" y="400" fontFamily="Arial, sans-serif" fontSize="13" fill="#8b949e">
              • Monitor: Latency (10-100ms), Bandwidth (20-200 Mbps), Packet Loss (0-5%)
            </text>
            <text x="150" y="420" fontFamily="Arial, sans-serif" fontSize="13" fill="#8b949e">
              • Calculate Quality Score: (1/latency) × bandwidth × (1 - loss)
            </text>
            <text x="150" y="440" fontFamily="Arial, sans-serif" fontSize="13" fill="#8b949e">
              • Determine: Chunk Size (16-75KB) | Concurrent Streams (4-18) | Result: 60 adaptations
            </text>
          </g>
          
          {/* Arrow to Step 3 */}
          <path d="M 700 450 L 700 490" stroke="#58a6ff" strokeWidth="4" fill="none" markerEnd="url(#arrowBlue)"/>
          <text x="720" y="475" fontFamily="Arial, sans-serif" fontSize="12" fill="#58a6ff">Strategy applied</text>
          
          {/* STEP 3: Tokio Task Creation */}
          <g id="step3">
            <rect x="100" y="490" width="1200" height="160" rx="15" fill="url(#step3Grad)" stroke="#d29922" strokeWidth="3"/>
            <text x="150" y="525" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#d29922">
              Step 3: Tokio Task Creation and Parallel Processing
            </text>
            <text x="150" y="555" fontFamily="Arial, sans-serif" fontSize="14" fill="#c9d1d9">
              ⚡ Rayon Parallel Chunking + Tokio Async Tasks
            </text>
            <text x="150" y="580" fontFamily="Arial, sans-serif" fontSize="13" fill="#8b949e">
              • Split file into chunks (336 chunks total)
            </text>
            <text x="150" y="600" fontFamily="Arial, sans-serif" fontSize="13" fill="#8b949e">
              • Rayon parallel_iter: Compress each chunk + Blake3 hash computation
            </text>
            <text x="150" y="620" fontFamily="Arial, sans-serif" fontSize="13" fill="#8b949e">
              • tokio::spawn: Create async tasks for each chunk (4-18 concurrent)
            </text>
            
            {/* Blake3 indicator */}
            <rect x="1050" y="545" width="200" height="80" rx="8" fill="#161b22" stroke="#3fb950" strokeWidth="2"/>
            <text x="1150" y="570" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="bold" fill="#3fb950" textAnchor="middle">
              ✓ Blake3 Hash
            </text>
            <text x="1150" y="590" fontFamily="Arial, sans-serif" fontSize="11" fill="#8b949e" textAnchor="middle">
              Per-chunk verification
            </text>
            <text x="1150" y="610" fontFamily="Arial, sans-serif" fontSize="11" fill="#3fb950" textAnchor="middle">
              336 hashes computed
            </text>
          </g>
          
          {/* Arrow to Step 4 */}
          <path d="M 700 650 L 700 690" stroke="#58a6ff" strokeWidth="4" fill="none" markerEnd="url(#arrowBlue)"/>
          <text x="720" y="675" fontFamily="Arial, sans-serif" fontSize="12" fill="#58a6ff">Tasks ready</text>
          
          {/* STEP 4: QUIC Transport Layer */}
          <g id="step4">
            <rect x="100" y="690" width="1200" height="160" rx="15" fill="url(#step4Grad)" stroke="#58a6ff" strokeWidth="3"/>
            <text x="150" y="725" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#58a6ff">
              Step 4: QUIC Transport Layer (0-RTT)
            </text>
            <text x="150" y="755" fontFamily="Arial, sans-serif" fontSize="14" fill="#c9d1d9">
              🌐 Send chunks via concurrent QUIC streams
            </text>
            <text x="150" y="780" fontFamily="Arial, sans-serif" fontSize="13" fill="#8b949e">
              • Protocol: QUIC over UDP (TLS 1.3 encrypted)
            </text>
            <text x="150" y="800" fontFamily="Arial, sans-serif" fontSize="13" fill="#8b949e">
              • Each stream: Send [Blake3 hash (32 bytes)] + [compressed chunk data]
            </text>
            <text x="150" y="820" fontFamily="Arial, sans-serif" fontSize="13" fill="#8b949e">
              • Features: No head-of-line blocking | Connection migration | 291.24 Mbps throughput
            </text>
            
            {/* Stream visualization */}
            <g id="streams">
              <rect x="950" y="735" width="90" height="45" rx="5" fill="#161b22" stroke="#58a6ff" strokeWidth="1.5"/>
              <text x="995" y="762" fontFamily="Arial, sans-serif" fontSize="11" fill="#58a6ff" textAnchor="middle">Stream 1</text>
              
              <rect x="1060" y="735" width="90" height="45" rx="5" fill="#161b22" stroke="#58a6ff" strokeWidth="1.5"/>
              <text x="1105" y="762" fontFamily="Arial, sans-serif" fontSize="11" fill="#58a6ff" textAnchor="middle">Stream 2</text>
              
              <rect x="1170" y="735" width="90" height="45" rx="5" fill="#161b22" stroke="#58a6ff" strokeWidth="1.5"/>
              <text x="1215" y="762" fontFamily="Arial, sans-serif" fontSize="11" fill="#58a6ff" textAnchor="middle">Stream N</text>
              
              <text x="995" y="805" fontFamily="Arial, sans-serif" fontSize="10" fill="#8b949e" textAnchor="middle">hash+data</text>
              <text x="1105" y="805" fontFamily="Arial, sans-serif" fontSize="10" fill="#8b949e" textAnchor="middle">hash+data</text>
              <text x="1215" y="805" fontFamily="Arial, sans-serif" fontSize="10" fill="#8b949e" textAnchor="middle">hash+data</text>
            </g>
          </g>
          
          {/* Arrow to Step 5 */}
          <path d="M 700 850 L 700 890" stroke="#58a6ff" strokeWidth="4" fill="none" markerEnd="url(#arrowBlue)"/>
          <text x="720" y="875" fontFamily="Arial, sans-serif" fontSize="12" fill="#58a6ff">Network transfer</text>
          
          {/* STEP 5: Receiver and Verification */}
          <g id="step5">
            <rect x="100" y="890" width="1200" height="140" rx="15" fill="url(#step5Grad)" stroke="#a371f7" strokeWidth="3"/>
            <text x="150" y="925" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#a371f7">
              Step 5: Receiver and Blake3 Verification
            </text>
            <text x="150" y="955" fontFamily="Arial, sans-serif" fontSize="14" fill="#c9d1d9">
              📥 Receive, verify, and write data
            </text>
            <text x="150" y="980" fontFamily="Arial, sans-serif" fontSize="13" fill="#8b949e">
              • Accept multiple concurrent streams (326 chunks received)
            </text>
            <text x="150" y="1000" fontFamily="Arial, sans-serif" fontSize="13" fill="#8b949e">
              • For each chunk: Blake3(received_data) == transmitted_hash → ✓ Verify integrity
            </text>
            <text x="150" y="1020" fontFamily="Arial, sans-serif" fontSize="13" fill="#8b949e">
              • Decompress and write to disk | Result: 0 failures, 100% integrity ✓
            </text>
            
            {/* Blake3 verification indicator */}
            <rect x="1050" y="930" width="200" height="80" rx="8" fill="#161b22" stroke="#3fb950" strokeWidth="2"/>
            <text x="1150" y="955" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="bold" fill="#3fb950" textAnchor="middle">
              ✓ Blake3 Verified
            </text>
            <text x="1150" y="975" fontFamily="Arial, sans-serif" fontSize="11" fill="#8b949e" textAnchor="middle">
              All chunks validated
            </text>
            <text x="1150" y="995" fontFamily="Arial, sans-serif" fontSize="11" fill="#3fb950" textAnchor="middle">
              0 hash mismatches
            </text>
          </g>
          
          {/* Blake3 Watermark */}
          <g id="blake3-watermark">
            <rect x="50" y="300" width="30" height="400" rx="5" fill="#f778ba" opacity="0.3"/>
            <text x="65" y="500" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#f778ba" textAnchor="middle" transform="rotate(-90 65 500)">
              Blake3 Verification Chain
            </text>
          </g>
          
          {/* Performance Summary */}
          <g id="summary">
            <rect x="200" y="1050" width="1000" height="30" rx="8" fill="#161b22" stroke="#3fb950" strokeWidth="2"/>
            <text x="700" y="1072" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#3fb950" textAnchor="middle">
              ⚡ Result: 0.29s transfer | 291.24 Mbps | 336 chunks | 0 failures | 12.2x faster than TCP
            </text>
          </g>
        </svg>

      </div>

      <CTA />
    </main>
  )
}