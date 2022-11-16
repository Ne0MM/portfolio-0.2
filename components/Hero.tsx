import React from 'react'
import Image from "next/image"
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import HeroImage from '../images/GIT.jpeg'
import Link from 'next/link'


type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Oi, Eu me chamo Pablo Maximiliano",
            "A.K.A NE0M" , 
            "A.K.A Garoto Dos Programas",
            "A.K.A Seu Proximo DEV"
        ],
        loop: true,
        delaySpeed: 2000,
    });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden'>
        <BackgroundCircles />
        <Image 
              src={HeroImage}
              className='relative rounded-full h-32 w-32 mx-auto object-cover' alt={''}        />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-[#00A1D5] tracking-[15px]'>Full-Stack | Web Developer</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#F500BD'/>
            </h1>

            <div className="pt-5">
                <Link href="#About">
                    <button className="HeroButton">Sobre Mim</button>
                </Link>
                <Link href="#skills">
                    <button className="HeroButton">Habilidades</button>
                </Link>
                <Link href="#Projects">
                    <button className="HeroButton">Projetos</button>
                </Link>
            </div>
        </div>
        
        
    </div>
  )
}