import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    directionLeft?: boolean;
};

export default function Skill({}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
        initial={{
            opacity : 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0}}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
        className='rounded-full border border-[#f500bc] w-24 h-24 xl:w-32
        xl:h-32 md:w-28 md:h-28 filter group-hover:bg-[#f500bc50] transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-[#f500bc50] h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32
        rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-[#00A1D5] opacity-100'>100%</p>
            </div>
        </div>
    </div>
  );
}