import React from 'react'
import target from '../assets/imgs/target.png'

const Footer = () => {
  return (
    <section className='pt-16 relative before:content before:h-0.5 before:w-full before:absolute before:top-0 before:bg-light'>
      <div className="container">
        <div className='flex gap-12'>
          <div className='flex-1'>
            <h1 className='text-2xl font-sansation-bold md:text-5xl mb-9'>
              Keep in touch.
            </h1>
            <p className='text-sm'>
              Currently working at digital agency Superrb. I develop brand identities and digital experiences with a distinctive and cohesive aesthetic. Clients include Tens Life, BT, Help for Heroes, Angel Inn, Mark Antony. I'm also a proud jury member on Awwwards
            </p>
          </div>
          <div className='flex-1 hidden md:block text-right'>
            <img src={target} alt="targetIcon" className='w-1/2'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer