import { HeroSection } from '../HeroSection'

export default function HeroSectionExample() {
  return <HeroSection onShareClick={() => console.log('Share clicked')} />
}
