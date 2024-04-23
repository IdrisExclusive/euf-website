import { Hero } from '@/components/ui/home/hero'
import { DonateOptions } from '@/components/ui/home/donate-options'
import { Stats } from '@/components/ui/home/stats'
import { Footer } from '@/components/ui/footer'
import { Reviews } from '@/components/ui/home/reviews'
import { Patners } from '@/components/ui/home/patners'
import { Volunteer } from '@/components/ui/home/volunteer'
import { Values } from '@/components/ui/home/values'

export default function Home() {
  return (
    <div className='z-10 flex flex-col w-full space-y-32 h-fit my-16' >
      <Hero />
      <Stats />
      <Values />
      <DonateOptions />
      <Patners />
      <Reviews />      
      <Volunteer />
      <Footer />
    </div>
  )
}
