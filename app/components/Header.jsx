import { assets } from '@/assets/assets'
import { ovo } from '@/lib/fonts'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <motion.div initial={{scale: 0}} whileInView={{scale: 1}} transition={{duration: 0.8, type: 'spring', stiffness: 100}}>
        <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
      </motion.div>

      <motion.h1 className={`${ovo.className} text-3xl sm:text-6xl lg:text-[66px]`} initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}}>
        Hi! I'm Yoel Augustan
      </motion.h1>

      <motion.h3 className={`${ovo.className} text-xl md:text-2xl`} initial={{y: -30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.8, delay: 0.5}}>
        Undergraduate at Bina Nusantara University
      </motion.h3>

      <motion.p className={`${ovo.className} max-w-2xl mx-auto`} initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.7}}>
        Interested in Deep Learning, Machine Learning and Full Stack Development with AI Integration
      </motion.p>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.a href='#contact' 
          className='px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2 dark:bg-transparent' 
          initial={{y: 30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 1}}
        >
          Contact me <Image src={assets.right_arrow_white} alt="" className='w-4'/>
        </motion.a>
        <motion.a href='/sample-resume.pdf' download 
          className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'
          initial={{y: 30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 1.2}}
        >
          My CV <Image src={assets.download_icon} alt="" className='w-4'/>
        </motion.a>
      </div>
    </div>
  )
}

export default Header
