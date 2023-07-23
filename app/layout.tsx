import { Nunito } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'
import { Navbar } from './components/navbar/Navbar'
import { ClientOnly } from './components/ClientOnly'
import { Modal } from './components/modal/Modal'

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal actionLabel='Submit' title="Hello" isOpen/>
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
