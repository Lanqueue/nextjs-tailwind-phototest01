import React from 'react'
import Image from 'next/image'

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
        <h1 className='font-bold text-2xl p-4'>Travel Photos</h1>
        <div className='grid grid-rows-none md:grid-cols-span-5 p-4 md:gap-4' >
            <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
                <Image src='https://i.imgur.com/oRZGg1l.jpeg' 
                    alt='/'
                    layout='responsive'
                    width='677'
                    height='451'
                />
            </div>
            <div className='w-full h-full'>
                <Image src='https://i.imgur.com/3coPErZ.jpeg'
                    alt='/'
                    layout='responsive'
                    width='215'
                    height='215'
                    objectFit='cover'
                />
            </div>
            <div className='w-full h-full'>
                <Image src='https://i.imgur.com/suDphD0.jpeg'
                    alt='/'
                    layout='responsive'
                    width='215'
                    height='215'
                    objectFit='cover'
                />
            </div>
            <div className='w-full h-full'>
                <Image src='https://i.imgur.com/8MGdYG6.jpeg'
                    alt='/'
                    layout='responsive'
                    width='215'
                    height='215'
                    objectFit='cover'
                />
            </div>
            <div className='w-full h-full'>
                <Image src='https://i.imgur.com/DcVhkX1.jpeg'
                    alt='/'
                    layout='responsive'
                    width='215'
                    height='215'
                    objectFit='cover'
                />
            </div>
        </div>
    </div>
  )
}

export default Portfolio