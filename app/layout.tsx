import type React from "react"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geistSans = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "QUICShift - Race-Grade File Transfer",
  description: "Adaptive QUIC protocol delivers lightning-fast, reliable transfers across unstable networks",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
