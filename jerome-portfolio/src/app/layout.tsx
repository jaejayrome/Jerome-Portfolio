import './globals.css'
import type { Metadata } from 'next'
import { Inter, Teko } from 'next/font/google'
import { ThemeProvider } from "./theme-provider";
import { ThemeSwitcher } from "./themeSwitcher";
import Navbar from './navbar';
import Footer from './footer';
// import { switchThemeDuration } from "./constants";

const inter = Inter({ subsets: ['latin'],
variable: '--font-inter' })

const teko = Teko({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-teko',
  weight: '600'
})

export const metadata: Metadata = {
  title: 'Jerome Portfolio',
  description: 'Portfolio Website Built Using React, Next.js and Tailwind CSS',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.variable} ${teko.variable}`}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
      <Footer />
      </body>
    </html>
  )
}
