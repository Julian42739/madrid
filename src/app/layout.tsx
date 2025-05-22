import '../index.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Madrid Web Arena Vista',
  description: 'Madrid Web Arena Vista Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
} 