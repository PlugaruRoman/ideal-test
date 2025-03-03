import { createTheme, MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'

import { Footer, Header } from '@/components'
import { theme } from '@/styles/theme'

const customTheme = createTheme(theme)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <MantineProvider theme={customTheme}>
        <Notifications />

        <Header />
        {children}
        <Footer />
      </MantineProvider>
    </>
  )
}
