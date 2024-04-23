import './globals.css'
import type { Metadata } from 'next'
import { Prompt } from 'next/font/google'
import ThemeProvider from '@/components/theme-provider'
import { NavbarWithMenu } from '@/components/ui/navigation/navbar'
import { menuItems } from '@/lib/data/home-data'
import { Toaster } from '@/components/ui/toaster'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useRef, useState } from 'react'

const prompt = Prompt({weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ['latin']})

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
      <body className={`${prompt.className} antialiased relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem   
        >
          <NavbarWithMenu 
            logosrc="/euf-logo.svg" menuitems={menuItems}
            className='w-full' >
            {children}
            <Toaster />
            <div className="-z-20 w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-primary/60 to-secondary/80 blur-[150px] absolute top-10 mx-auto"></div>
            <div className="-z-20 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-primary/60 to-secondary/80 blur-[150px] absolute top-[300px] right-0"></div>
          </NavbarWithMenu>
        </ThemeProvider>
        </body>
    </html>
  )
}
