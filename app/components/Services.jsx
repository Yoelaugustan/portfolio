import { assets, serviceData } from '@/assets/assets'
import { ovo } from '@/lib/fonts'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Services = () => {
  return (
    <motion.div id='services' 
      className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}}
    >
      <motion.h4 
        className={`${ovo.className} text-center mb-2 text-lg`}
        initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.3}}
      >
        What I offer
      </motion.h4>
      <motion.h2 
        className={`${ovo.className} text-center text-5xl`}
        initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.5}}
      >
        My Services
      </motion.h2>

      <motion.div 
        className='grid grid-cols-auto gap-6 my-10'
        initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.7}}
      >
        {serviceData.map(({icon, title, description, link}, index)=>(
            <motion.div key={index} 
              className='border border-gray-400 rounded-lg px-8 py-12 hover:black-shadow cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 dark:hover:bg-dark-hover dark:hover:black-shadow'
              whileHover={{scale: 1.05}}
            >
                <Image src={icon} alt='' className='w-10'/>
                <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
                    {description}
                </p>
            </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Services
