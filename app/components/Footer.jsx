import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div id='footer' className='mt-20'>
      <div className='text-center'>
        <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2'/>

        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={assets.mail_icon} alt='' className='w-6'/>
            yoelaugustan@gmail.com
        </div>
        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={assets.phone_icon} alt='' className='w-6'/>
            +62818-0737-3576
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-center border-t border-gray-400 mx-[10%] mt-8 py-6 gap-5'>
            <div className='flex items-center gap-1'>
                <Image src='/github-logo.png' width={32} height={32} alt=''/>
                <a target='_blank' href='https://github.com/Yoelaugustan'>Github</a>
            </div>
            <div className='flex items-center gap-2'>
                <Image src='/linkedin-logo.png' width={32} height={32} alt=''/>
                <a target='_blank' href='https://www.linkedin.com/in/yoel-augustan-524a25291'>LinkedIn</a>
            </div>
            <div className='flex items-center gap-2'>
                <Image src='/instagram-logo.png' width={32} height={32} alt=''/>
                <a target='_blank' href='https://www.instagram.com/yoel.augustan?igsh=bDNtMmMxaHY1Y2Vl'>Instagram</a>
            </div>
        </div>
    </div>
  )
}

export default Footer
