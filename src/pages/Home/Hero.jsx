import React from 'react';
import './Home.css'
import BucketGirl from '../../assets/Images/bucketgirl.png'

const Hero = () => {
  return (
    <div className='relative'>
      <div className='hero h-screen lg:h-[60vh] bg-accent relative z-10 mt-16'>
        <div className='hero-content flex-col lg:flex-row'>
          <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <p
              data-aos='fade-right'
              data-aos-duration='1000'
              data-aos-delay='200'
              className='text-xl'
            >
              Best Quality
            </p>
            <h1
              data-aos='fade-right'
              data-aos-delay='400'
              data-aos-duration='900'
              className='text-5xl font-bold'
            >
              Professional Cleaning Service
            </h1>
            <p
              data-aos='fade-right'
              data-aos-delay='600'
              data-aos-duration='800'
              className='py-6 max-w-xl'
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has
            </p>
            <button
              data-aos='zoom-in'
              data-aos-delay='1300'
              className='btn btn-primary'
            >
              Get Started
            </button>
          </div>
          <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className='h-[60vh] shrink-0'>
            <img src={BucketGirl} className='h-full' alt='hero pics' />
          </div>
        </div>
      </div>
      <div className='rounded-2xl mx-auto mt-[-50px] relative z-20 bg-base-200 shadow-lg p-10 w-5/6'>
        <h1 className='text-2xl mb-5 text-primary'>Get Free Estimate</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full'
          />
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full'
          />
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full'
          />
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full'
          />
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full'
          />
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full'
          />
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full'
          />
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full'
          />
        </div>
        <button className='btn btn-primary mt-5'>Get a Quote</button>
      </div>
    </div>
  )
}

export default Hero