import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'


export default function Home() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      
      <main>
        <Main />
      </main>
    </>
  )
}
