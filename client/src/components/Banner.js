import React, { useState } from 'react'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'

const Banner = () => {
const [currentSlide,setCurrentSlide]=useState(0);

  const data = [
    'https://img.freepik.com/free-psd/shopping-sale-banner-template_23-2148581526.jpg?w=1380&t=st=1688661171~exp=1688661771~hmac=7b7f94a97aa0e73fdd25e4e440480b845b431cdf5323f03790246ceab8864f4d',
    'https://img.freepik.com/free-psd/colourful-digitalism-horizontal-banner-template_23-2148686964.jpg?w=1380&t=st=1688658397~exp=1688658997~hmac=ea3ab0a76b0581a695fb10cc304a5a74085915b8ca79e157d357eb4bc2eecc94',
    'https://img.freepik.com/free-psd/natural-cosmetics-banner-template_23-2148671398.jpg?w=1380&t=st=1688658485~exp=1688659085~hmac=57d933f44d1456962386a082a44c0cbbff76f2cb6adc7f7c8dd70809095f066c',
    'https://img.freepik.com/premium-vector/abstract-fashion-monsoon-sale-banner-offer-discount-business-background-free-vector_1340-22459.jpg?w=1380'
  ]

const prevSlide=()=>{
  setCurrentSlide(currentSlide===0 ? 3: (prev)=>prev-1)
};

const nextSlide=()=>{
    setCurrentSlide(currentSlide===3 ? 0: (prev)=>prev+1)
};
// console.log(currentSlide);
  return (
    <div className='w-full h-auto overflow-x-hidden'>
      <div className='w-screen h-[650px] relative'>
        <div style={{transform:`translateX(-${currentSlide *100}vw)`}} className='w-[400vw] h-full flex transition-transform duration-1000'>
          <img
            className='w-screen h-full object-cover'
            src={data[0]}
            alt='image1'
            loading='priority'
          />
          <img
            className='w-screen h-full object-cover'
            src={data[1]}
            alt='image1'
          />
          <img
            className='w-screen h-full object-cover'
            src={data[2]}
            alt='image1'
          />
          <img
            className='w-screen h-full object-cover'
            src={data[3]}
            alt='image1'
          />
        </div>
        <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
          <div onClick={prevSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
            <HiArrowLeft />
          </div>
          <div onClick={nextSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;
