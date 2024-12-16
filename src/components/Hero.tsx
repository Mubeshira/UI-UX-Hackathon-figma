import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

function Hero() {
  return (
    <>
    <div className='w-full h-[716px] relative'>
        
    <div className='w-[599px] h-[331px] absolute top-[40%] left-[10%]'>
   <div className='w-[122px] h-[24px] font-Montserrat text-white'>
    <h1>Summer 2020</h1>
    </div>
    <h1 className=' font-Montserrat text-white text-[58px] mt-[35px]'>New Collection</h1>
    <p className='font-Montserrat text-white mt-[35px] text-[20px] leading-[30px]'>We know how large objects will act,
        <br />
but things on a small scale.</p>

<Button className='bg-[#2DC071] mt-[35px] w-[170px] h-[62px]'>Shop Now</Button>
</div>
    <Image src="/shophero.jpg" alt="hero" width={1438} height={716}>
    
    
    </Image>
    
    </div>
      
    </>
  )
}

export default Hero
