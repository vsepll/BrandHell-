import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

// Initialize Poppins font with weights needed for the design
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BrandHell - Raise Your Voice',
  description: 'We thrive on pushing boundaries and challenging the status quo',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
