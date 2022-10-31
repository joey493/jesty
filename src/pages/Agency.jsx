import React from 'react'
import AboutImg from '../assets/imgs/about.png'
function Agency() {
  return (
    <section>
      <div className="container">
        <div className='mt-16 mb-14'>
            <p className='mb-4 text-2xl'>
              How we are?
            </p>
            <p className='text-4xl'>
              ELPING BRANDS GROW AND STANDOUT IN AN EVER-CHANGING, NOISY, AND HYPER-CONNECTED DIGITAL WORLD.
            </p>
        </div>
        <img src={AboutImg} alt="about" />
        <div>
          <div className='mt-16 mb-14'>
              <p className='mb-4 text-2xl'>
                How We Work?
              </p>
              <p className='text-4xl'>
                We believe that all good things are achieved by those who are willing to put in passion, courage and craftsmanship.              
              </p>
          </div>
          <div>
            <h2 className='text-4xl my-10'>
              Strategy-led.
            </h2>
            <div className='flex flex-col items-center text-center gap-y-8 md:items-start md:text-left'>
              {/* 01 */}
              <div className='max-w-md ml-16'>
                <h3 className='font-bold text-2xl mb-4 relative before:content-["01"] before:absolute before:top-0 before:left-[5rem] md:before:left-[-4rem]'>                  
                  Lorem Ipsum
                </h3>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't 
                </p>
              </div>
              {/* 02 */}
              <div className='max-w-md ml-16 self-end'>
                <h3 className='font-bold text-2xl mb-4 relative before:content-["02"] before:absolute before:top-0 before:left-[5rem] md:before:left-[-4rem]'>
                  Lorem Ipsum
                </h3>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't 
                </p>
              </div>
              {/* 03 */}
              <div className='max-w-md ml-16'>
                <h3 className='font-bold text-2xl mb-4 relative before:content-["03"] before:absolute before:top-0 before:left-[5rem] md:before:left-[-4rem]'>
                  Lorem Ipsum
                </h3>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Agency