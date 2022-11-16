import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5
        }}
        className='flex flex-row items-center'>
            {/*Social Icons*/}
            <div className="relative">
                <div className='absolute inset-0 blur'>
                    <SocialIcon
                        network='github'
                        fgColor='#F500BD'
                        bgColor='transparent'
                    />
                </div>
                <div className='relative'>
                    <SocialIcon 
                        url="https://github.com/Ne0MM" 
                        fgColor='#F500BD'
                        bgColor='transparent'
                    />
                </div>
            </div>

            <div className="relative">
                <div className='absolute inset-0 blur'>
                    <SocialIcon
                        network='github'
                        fgColor='#F500BD'
                        bgColor='transparent'
                    />
                </div>
                <div className='relative'>
                    <SocialIcon 
                        url="https://github.com/Ne0MM" 
                        fgColor='#F500BD'
                        bgColor='transparent'
                    />
                </div>
            </div>

            <div className="relative">
                <div className='absolute inset-0 blur'>
                    <SocialIcon
                        network='github'
                        fgColor='#F500BD'
                        bgColor='transparent'
                    />
                </div>
                <div className='relative'>
                    <SocialIcon 
                        url="https://github.com/Ne0MM" 
                        fgColor='#F500BD'
                        bgColor='transparent'
                    />
                </div>
            </div>

            
        </motion.div>

        <motion.div 
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5
        }}
        className='flex flex-row items-center text-[#F500BD] cursor-pointer'>
            <div className='relative'>
                <div className='absolute inset-0 blur'>
                    <SocialIcon
                    network='email'
                    fgColor='#F500BD'
                    bgColor='transparent'
                />
                </div>
                <div className='relative'>
                    <SocialIcon 
                    className='cursor-pointer'
                    network='email'
                    fgColor='#F500BD'
                    bgColor='transparent'
                    />
                </div>

            </div>
            <div className='relative'>
                <div className='absolute inset-0 blur'>
                    <p className='uppercase hidden md:inline-flex text-sm text-[#F500BD]'>
                        Contato
                    </p>  
                </div>
                <div className='relative'>
                    <p className='uppercase hidden md:inline-flex text-sm text-[#F500BD]'>
                        Contato
                    </p>
                </div>
            </div>
            
        </motion.div>
    </header>
  )
}