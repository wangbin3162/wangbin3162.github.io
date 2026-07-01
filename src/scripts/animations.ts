import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(ScrollTrigger)

let lenis: Lenis | null = null

declare global {
  interface Window {
    initPageAnimations?: () => void
    cleanupAnimations?: () => void
  }
}

export function initLenis() {
  if (typeof window === 'undefined') return

  const isTouch = window.matchMedia('(pointer: coarse)').matches
  if (isTouch) {
    destroyLenis()
    return
  }

  if (lenis) {
    lenis.destroy()
    lenis = null
  }

  lenis = new Lenis({
    duration: 1,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1.2,
    touchMultiplier: 1.8
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis?.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)
}

export function destroyLenis() {
  if (lenis) {
    lenis.destroy()
    lenis = null
  }
}

export function splitText(element: HTMLElement, options: { charClass?: string } = {}) {
  const text = element.textContent || ''
  element.innerHTML = ''

  const chars: HTMLSpanElement[] = []
  const segmenter = new Intl.Segmenter('zh-CN', { granularity: 'grapheme' })

  for (const segment of segmenter.segment(text)) {
    const span = document.createElement('span')
    span.textContent = segment.segment
    span.className = options.charClass || 'split-char'
    span.style.display = 'inline-block'
    span.style.whiteSpace = segment.segment === ' ' ? 'pre' : 'normal'
    element.appendChild(span)
    chars.push(span)
  }

  return chars
}

export function initRevealAnimations() {
  if (typeof window === 'undefined') return

  const revealElements = document.querySelectorAll('.reveal')
  revealElements.forEach((el) => {
    const htmlEl = el as HTMLElement
    const start = htmlEl.getAttribute('data-reveal-start') || 'top 85%'
    const y = parseFloat(htmlEl.getAttribute('data-reveal-y') || '60')
    const duration = parseFloat(htmlEl.getAttribute('data-reveal-duration') || '0.8')
    const delay = parseFloat(htmlEl.getAttribute('data-reveal-delay') || '0')
    const ease = htmlEl.getAttribute('data-reveal-ease') || 'power3.out'

    gsap.set(htmlEl, { opacity: 0, y })

    ScrollTrigger.create({
      trigger: htmlEl,
      start,
      once: true,
      onEnter: () => {
        gsap.to(htmlEl, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease,
          overwrite: true
        })
      }
    })
  })

  const staggerContainers = document.querySelectorAll('.reveal-stagger')
  staggerContainers.forEach((container) => {
    const htmlContainer = container as HTMLElement
    const children = htmlContainer.children
    const start = htmlContainer.getAttribute('data-reveal-start') || 'top 85%'
    const y = parseFloat(htmlContainer.getAttribute('data-reveal-y') || '40')
    const duration = parseFloat(htmlContainer.getAttribute('data-reveal-duration') || '0.6')
    const stagger = parseFloat(htmlContainer.getAttribute('data-reveal-stagger') || '0.1')
    const ease = htmlContainer.getAttribute('data-reveal-ease') || 'power3.out'

    gsap.set(children, { opacity: 0, y })

    ScrollTrigger.create({
      trigger: htmlContainer,
      start,
      once: true,
      onEnter: () => {
        gsap.to(children, {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease,
          overwrite: true
        })
      }
    })
  })
}

export function initSectionTitleAnimations() {
  if (typeof window === 'undefined') return

  const sectionTitles = document.querySelectorAll('.section-title[data-split-text], .project-name[data-split-text]')
  sectionTitles.forEach((title) => {
    const htmlTitle = title as HTMLElement
    const chars = splitText(htmlTitle, { charClass: 'section-char' })
    gsap.set(chars, { opacity: 0.2 })

    ScrollTrigger.create({
      trigger: htmlTitle,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(chars, {
          opacity: 1,
          duration: 0.4,
          stagger: 0.03,
          ease: 'power2.out'
        })
      }
    })
  })
}

export function initHeroAnimations() {
  if (typeof window === 'undefined') return

  const heroName = document.querySelector('.hero-name[data-split-text]') as HTMLElement | null
  if (heroName) {
    const chars = splitText(heroName, { charClass: 'hero-char' })
    gsap.set(chars, { opacity: 0, y: 50 })
    gsap.to(chars, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.05,
      ease: 'power3.out',
      delay: 0.3
    })
  }

  const heroGreeting = document.querySelector('.hero-greeting') as HTMLElement | null
  const heroRole = document.querySelector('.hero-role') as HTMLElement | null
  const heroStats = document.querySelectorAll('.hero-stat')
  const heroTags = document.querySelectorAll('.hero-tags .tech-chip')

  if (heroGreeting || heroRole) {
    gsap.set([heroGreeting, heroRole].filter(Boolean), { opacity: 0, y: 30 })
    gsap.to([heroGreeting, heroRole].filter(Boolean), {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out',
      delay: 0.2
    })
  }

  if (heroStats.length) {
    gsap.set(heroStats, { opacity: 0, y: 30 })
    gsap.to(heroStats, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out',
      delay: 0.6
    })
  }

  if (heroTags.length) {
    gsap.set(heroTags, { opacity: 0, y: 20 })
    gsap.to(heroTags, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: 'power3.out',
      delay: 0.9
    })
  }
}

export function initProjectListAnimations() {
  if (typeof window === 'undefined') return

  const projectItems = document.querySelectorAll('.project-item')
  projectItems.forEach((item) => {
    const htmlItem = item as HTMLElement
    const title = htmlItem.querySelector('.project-title') as HTMLElement | null
    const meta = htmlItem.querySelector('.project-meta') as HTMLElement | null
    const techs = htmlItem.querySelector('.project-techs') as HTMLElement | null

    if (title) {
      const chars = title.querySelectorAll('span')
      gsap.set(chars, { opacity: 0, y: 20 })
      ScrollTrigger.create({
        trigger: htmlItem,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(chars, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.03,
            ease: 'power3.out'
          })
          if (meta) {
            gsap.fromTo(meta, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, delay: 0.2 })
          }
          if (techs) {
            gsap.fromTo(techs, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, delay: 0.3 })
          }
        }
      })
    }
  })
}

export function destroyPageAnimations() {
  if (typeof window === 'undefined') return
  ScrollTrigger.getAll().forEach((st) => st.kill())
}

export function initPageAnimations() {
  if (typeof window === 'undefined') return

  const namespace = document.querySelector('[data-page-key]')?.getAttribute('data-page-key')

  initRevealAnimations()
  initSectionTitleAnimations()

  if (namespace === 'home') {
    initHeroAnimations()
  }

  if (namespace === 'project') {
    initProjectListAnimations()
  }
}

export function initAnimations() {
  if (typeof window === 'undefined') return
  initLenis()
  initPageAnimations()
}

export function cleanupAnimations() {
  if (typeof window === 'undefined') return
  destroyPageAnimations()
  destroyLenis()
}

if (typeof window !== 'undefined') {
  window.initPageAnimations = initPageAnimations
  window.cleanupAnimations = cleanupAnimations
}
