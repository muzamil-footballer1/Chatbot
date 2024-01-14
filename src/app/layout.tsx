import Chat from '.././components/Chat'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from '../../src/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MuzamilChatBot',
  description: 'Your personal Chat Assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <Providers>
        <body className={inter.className}>
          <Chat />
          {children}
        </body>
      </Providers>
    </html>
  )
}
