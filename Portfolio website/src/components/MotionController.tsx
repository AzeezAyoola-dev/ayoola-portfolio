import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function MotionController() {
  const location = useLocation()

  useLayoutEffect(() => {
    document.documentElement.classList.add('motion-ready')

    let observer: IntersectionObserver | undefined
    const frame = requestAnimationFrame(() => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section'))

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          })
        },
        { threshold: 0.01, rootMargin: '0px 0px -5% 0px' },
      )

      sections.forEach((section, sectionIndex) => {
        section.classList.add('motion-section')

        if (sectionIndex === 0) {
          section.classList.add('motion-hero')
          section
            .querySelectorAll<HTMLElement>('h1, h2, p, a, img')
            .forEach((item, itemIndex) => {
              item.classList.add('motion-hero-item')
              item.style.setProperty('--motion-delay', `${Math.min(itemIndex, 7) * 70}ms`)
            })
        }

        section.querySelectorAll<HTMLElement>('img').forEach((image, imageIndex) => {
          image.classList.add('motion-media')
          image.style.setProperty('--motion-delay', `${Math.min(imageIndex, 8) * 65}ms`)
        })

        observer?.observe(section)
      })
    })

    return () => {
      cancelAnimationFrame(frame)
      observer?.disconnect()
    }
  }, [location.pathname])

  return null
}
