import { assets, infoList, toolsData } from '@/assets/assets'
import { ovo } from '@/lib/fonts'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const About = ({isDarkMode}) => {
  return (
    <motion.div id="about" 
        className='w-full px-[12%] py-10 scroll-mt-20'
        initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}}
    >
      <motion.h4 
        className={`${ovo.className} text-center mb-2 text-lg`}
        initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.3}}
      >
        Introduction
      </motion.h4>

      <motion.h2 
        className={`${ovo.className} text-center text-5xl`}
        initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.5}}
      >
        About me
      </motion.h2>

      <motion.div 
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'
        initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8}}
      >
        <motion.div 
            className='w-64 sm:w-80 rounded-3xl max-w-none'
            initial={{opacity: 0, scale: 0.9}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.6}}
        >
            <Image src={assets.user_image} alt='' className='w-full rounded-3xl'/>
        </motion.div>

        <motion.div 
            className='flex-1'
            initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.8}}
        >
            <p className={`${ovo.className} mb-10 max-w-2xl`}>
                I'm an undergraduate student at Bina Nusantara University with a strong interest in Deep and Machine Learning and full-stack web development with AI integration. I enjoy learning by building, and most of my experience comes from personal projects where I explore how technology can solve real problems and enhance user experiences. I’m also always open to new challenges and collaboration opportunities in tech.
            </p>

            <motion.ul 
                className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
                initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8, delay: 1}}
            >
                {infoList.map(({icon, iconDark, title, description}, index)=>(
                    <motion.li 
                        className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 hover:black-shadow dark:border-white dark:hover:black-shadow dark:hover:bg-dark-hover/50' key={index}
                        whileHover={{scale: 1.05}}
                    >
                        <Image src={isDarkMode ? iconDark : icon} alt='' className='w-7 mt-3'/>
                        <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                        <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                    </motion.li>
                ))}
            </motion.ul>

            <motion.h4 
                className={`${ovo.className} mt-6 text-gray-700 dark:text-white/80`}
                initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 1.3}}
            >
                Tools I used
            </motion.h4>
            <motion.ul 
                className='flex items-center gap-3 sm:gap-5'
                initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 1.5}}
            >
                {toolsData.map((tool, index)=>(
                    <motion.li 
                        className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500" key={index}
                        whileHover={{scale: 1.1}}
                    >
                        <Image src={tool} alt='' width={32} height={32} className='w-5 sm:w-7'/>
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
