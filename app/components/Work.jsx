import { assets, workData } from '@/assets/assets'
import { ovo } from '@/lib/fonts'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Work = ({isDarkMode}) => {
  return (
    <motion.div id='work' 
      className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}}
    >
      <motion.h4 
        className={`${ovo.className} text-center mb-2 text-lg`}
        initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.3}}
      >
        My Portfolio
      </motion.h4>

      <motion.h2 
        className={`${ovo.className} text-center text-5xl`}
        initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.5}}
      >
        My Latest Work
      </motion.h2>
      
      <motion.div 
        className='grid grid-cols-auto gap-5 my-10 dark:text-black'
        initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.7}}
      >
        {workData.map((project, index)=>(
            <motion.div key={index} 
              style={{backgroundImage: `url(${project.bgImage})`}} 
              className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
              whileHover={{scale: 1.05}} transition={{duration: 0.3}}
            >
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                    <div>
                        <h2 className='font-semibold'>{project.title}</h2>
                        <p className='text-sm text-gray-700'>{project.description}</p>
                    </div>
                    <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                        <a target='_blank' href={project.link}><Image src={assets.send_icon} alt='' className='w-5'/></a>
                    </div>
                </div>  
            </motion.div>
        ))}
       </motion.div>

       <motion.a target='_blank' href='https://github.com/Yoelaugustan' 
        className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto hover:bg-light-hover duration-500 dark:text-white dark:border-white dark:hover:bg-dark-hover'
        initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5, delay: 1.1}}
      >
        Show More <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='' className='w-4'/>
       </motion.a>
    </motion.div>
  )
}

export default Work
