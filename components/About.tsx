import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className="absolute top-24 uppercase tracking-[20px] text-[#00A1D5]">
            Sobre Mim
        </h3>

        <motion.img
            initial={{x: -200,}}
            whileInView={{x: 0,}}
            viewport={{ once: true }}
            src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives-768x492.png"
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
            md:rouded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Quem sou eu?
            </h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id nunc dignissim, 
                dignissim quam sit amet, vulputate ex. Ut vulputate, est vitae sollicitudin molestie, 
                sapien quam fermentum ipsum, quis venenatis ligula est in orci. Curabitur at congue magna.
                Donec ut velit justo. Mauris lobortis risus nec elit malesuada, eget posuere justo pretium. 
                Pellentesque tristique cursus metus, congue imperdiet odio porttitor a. 
                Integer pellentesque accumsan aliquet. Nunc fermentum ex ut tristique facilisis. Nunc dignissim ex sed congue sodales. 
                Suspendisse ac bibendum tortor, at rutrum elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim et 
                velit pulvinar ultricies. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis gravida 
                nisi enim, eget lacinia libero placerat non.
            </p>
        </div>
    </motion.div>

  )
}
