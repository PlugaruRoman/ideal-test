import { usePathname, useRouter } from 'next/navigation'

export const useScrollToSection = () => {
  const router = useRouter()
  const pathname = usePathname()

  const scrollInView = (element: HTMLElement | null) =>
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    })

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section)

    if (pathname?.slice(3) !== '/home') {
      router.push('/')

      setTimeout(() => {
        const element = document.getElementById(section)
        scrollInView(element)
      }, 2000)
      return
    }

    scrollInView(element)
  }

  return { scrollToSection }
}
