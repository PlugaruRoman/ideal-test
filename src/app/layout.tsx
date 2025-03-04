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

const onestFont = Onest({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Ideal Asig',
  description: 'Ideal Asig',
}

const customTheme = createTheme(theme)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ro'>
      <body className={onestFont.className}>
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
