export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Zigzag from '@/components/zigzag'
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <>
      <Hero />
      <Zigzag />
      <Analytics/>
    </>
  )
}
