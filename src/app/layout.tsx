import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] });
import NavBar from '@/components/NavBar/NavBar'
import LogInButton from '@/components/NavBar/LogInButton';
export const metadata: Metadata = {
  title: 'Text To Image',
  description: 'Use AI to create beautiful pictures ',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar Logined={false}>

        <LogInButton />
          
           </NavBar>
        {children}
        </body>
    </html>
  )
}
