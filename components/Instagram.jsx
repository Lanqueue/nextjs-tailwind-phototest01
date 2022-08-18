import React from 'react';
import ImgTest1 from '../public/imgtest1.jpg'
import ImgTest2 from '../public/imgtest2.jpg'
import ImgTest3 from '../public/imgtest3.jpg'
import ImgTest4 from '../public/imgtest4.jpg'
import ImgTest5 from '../public/imgtest5.jpg'
import ImgTest6 from '../public/imgtest6.jpg'
import InstagramImg from './InstagramImg'


const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
      <p className='text-2xl font-bold'>Follow me on Instagram</p>
      <p className='pb-4'>@Test</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
        <InstagramImg socialImg={ImgTest1}/>
        <InstagramImg socialImg={ImgTest2}/>
        <InstagramImg socialImg={ImgTest3}/>
        <InstagramImg socialImg={ImgTest4}/>
        <InstagramImg socialImg={ImgTest5}/>
        <InstagramImg socialImg={ImgTest6}/>
      </div>
    </div>
  )
}

export default Instagram
