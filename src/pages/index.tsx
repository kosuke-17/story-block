import { Inter } from '@next/font/google'
import SoccerField from '@/components/SoccerField'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <SoccerField />
}
