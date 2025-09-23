import { assets } from '@/assets/assets'
import { ovo } from '@/lib/fonts'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div>
        <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
      </div>
      <h1 className={`${ovo.className} text-3xl sm:text-6xl lg:text-[66px]`}>Hi! I'm Yoel Augustan</h1>
      <h3 className={`${ovo.className} text-xl md:text-2xl`}>Undergraduate at Bina Nusantara University</h3>
      <p className={`${ovo.className} max-w-2xl mx-auto`}>Interested in Deep Learning, Machine Learning and Full Stack Development with AI Integration</p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href='#contact' className='px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2'>
            Contact me <Image src={assets.right_arrow_white} alt="" className='w-4'/>
        </a>
        <a href='/sample-resume.pdf' download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
            My CV <Image src={assets.download_icon} alt="" className='w-4'/>
        </a>
      </div>
    </div>
  )
}

export default Header
