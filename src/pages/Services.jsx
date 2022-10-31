import React from 'react'
import ContactImg from '../assets/imgs/contact.png'

function Studio() {
  return (
    <section>
      <div className="container">
        <div className="flex gap-16 flex-col mt-16">
          <div>
            <p className='text-grayC mb-4 md:text-xl'>
              what we do
            </p>
            <h1 className='text-3xl md:text-6xl md:w-1/2'>
              We drive brands forwrad online.
            </h1>
          </div>
          <img src={ContactImg} alt="Meeting Img" className='md:h-[30rem] md:w-[60%] md:self-end'/>
          <div className='relative pb-16 before:content before:h-0.5 before:w-full before:absolute before:bottom-0 before:bg-light'>
            <h2 className='text-3xl mb-10'>
              Elevating your brand
            </h2>
            <div className='flex flex-col text-center gap-16 md:text-left md:flex-row md:gap-24'>
              {/* 01 */}
              <div>
                <h3 className='font-bold text-boldC uppercase tracking-widest mb-4 text-2xl'>
                  Development
                </h3>
                <ul className='text-xl'>
                  <li>Front-End development</li>
                  <li>Back-End development</li>
                  <li>Android development</li>
                  <li>IOS development</li>
                </ul>
              </div>
              {/* 02 */}
              <div>
                <h3 className='font-bold text-boldC uppercase tracking-widest mb-4 text-2xl'>
                  Brand Design
                </h3>
                <ul className='text-xl'>
                  <li>UI/UX Design</li>
                  <li>3D</li>
                  <li>Graphic Design</li>
                  <li>Logo Design</li>
                </ul>
              </div>
              {/* 03 */}
              <div>
                <h3 className='font-bold text-boldC uppercase tracking-widest mb-4 text-2xl'>
                  Marketing
                </h3>
                <ul className='text-xl'>
                  <li>Digital Marketing</li>
                  <li>Content Marketing</li>
                  <li>Social media Marketing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className='text-center text-3xl my-20 md:text-left md:text-5xl md:my-16'>
            Strategy-led.
          </h2>
          <div className='flex flex-col items-center text-center gap-y-8 md:items-start md:text-left'>
            {/* 01 */}
            <div className='max-w-md'>
              <h3 className='font-bold text-boldC text-2xl mb-4'>
                <span className='pr-2'>01</span>
                Discover
              </h3>
              <p>
                Our goal is to fully understand each client's business and the environment in which it operates. We look to completely understand the target audience and how they will interact with the digital products we deliver.
              </p>
            </div>
            {/* 02 */}
            <div className='max-w-md md:self-end'>
              <h3 className='font-bold text-boldC text-2xl mb-4'>
                <span className='pr-2'>02</span>
                Strategize
              </h3>
              <p>
              Our planning process turns research into a clear set of action items to meet business goals. We take this information to build the blueprint to drive more traffic and convert web visitors into web leads.
              </p>
            </div>
            {/* 03 */}
            <div className='max-w-md'>
              <h3 className='font-bold text-boldC text-2xl mb-4'>
                <span className='pr-2'>03</span>
                Execute
              </h3>
              <p>
              Our dedicated team of designers use their gained knowledge of your company to create visually-engaging designs with the overall user experience in mind. We're proud of every project we ship and are confident that you and your team will be as well.              </p>
            </div>
            {/* 04 */}
            <div className='max-w-md md:self-end'>
              <h3 className='font-bold text-boldC text-2xl mb-4'>
                <span className='pr-2'>04</span>
                Launch
              </h3>
              <p>
                During the Implementation, our job is to translate creative into a full program that goes live. Implementation often includes an array of services, which can include design, development and search marketing.              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Studio