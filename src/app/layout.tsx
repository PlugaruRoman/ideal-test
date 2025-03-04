import type { Metadata } from 'next'
import { Onest } from 'next/font/google'

import '@/styles/global.scss'
import '@/styles/helper.scss'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/notifications/styles.css'
import { createTheme, MantineProvider } from '@mantine/core'
import { theme } from '@/styles/theme'
import { Footer, Header } from '@/components'
import { Notifications } from '@mantine/notifications'

const geistSans = Onest({
  variable: '--font-onest-sans',
  subsets: ['latin'],
})

const geistMono = Onest({
  variable: '--font-onest-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Ideal Test',
  description: 'Ideal Test',
}

const customTheme = createTheme(theme)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ro'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MantineProvider theme={customTheme}>
          <Notifications />

          <Header />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  )
}
