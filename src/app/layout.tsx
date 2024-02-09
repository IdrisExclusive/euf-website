import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeProvider from '@/components/theme-provider'
import { NavbarWithMenu } from '@/components/ui/navigation/navbar'
import { thisMenuItems } from '@/components/ui/navigation/menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eagle Ummah Foundation',
  description: 'This is the website for eagle ummah foundation. A Charity organisation aimed at providing needs to the less previleged',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <NavbarWithMenu logoSrc="/euf-logo.svg" menuItems={thisMenuItems} >
            {children}
          </NavbarWithMenu>
        </ThemeProvider>
        </body>
    </html>
  )
}
