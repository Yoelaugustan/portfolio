import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2'/>

        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={assets.mail_icon} alt='' className='w-6'/>
            yoelaugustan@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-center border-t border-gray-400 mx-[10%] mt-8 py-6 gap-5'>
            <div className='flex items-center gap-2'>
                <Image src={assets.mail_icon} alt='' className='w-6'/>
                <a target='_blank' href='https://github.com/Yoelaugustan'>Github</a>
            </div>
            <div className='flex items-center gap-2'>
                <Image src={assets.mail_icon} alt='' className='w-6'/>
                <a target='_blank' href='https://github.com/Yoelaugustan'>LinkedIn</a>
            </div>
            <div className='flex items-center gap-2'>
                <Image src={assets.mail_icon} alt='' className='w-6'/>
                <a target='_blank' href='https://github.com/Yoelaugustan'>Instagram</a>
            </div>
        </div>
    </div>
  )
}

export default Footer
