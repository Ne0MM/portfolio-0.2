import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div className='bg-[#001D31] text-[#00BE67] h-screen snap-y snap-mandatory 
    overflow-scroll z-0'>
      <Head>
        <title>Pablo Max | Full-Stack Dev</title>
      </Head>

        <Header />

        <section id='hero' className='snap-start'>
          <Hero />
        </section>
 
        <section id='About' className='snap-center'>
          <About />
        </section>

        <section id="skills" className='snap-start'>
          <Skills />
        </section>
      {/* Projects */}
        <section id="Projects" className='snap-start'>
          <Projects />
        </section>
      {/* Contact Me */}

    </div>
  )
}
