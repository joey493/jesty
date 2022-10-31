import React from 'react'
import contactImg from "../assets/imgs/contact.png"
import { FormBtn } from '../components/Buttons'
import Footer from '../components/Footer'
import FormInput from '../components/FormInput'

function Contact() {
  return (
    <section>
      <div className="container">
        <h1 className='sansation-bold font-bold text-center text-3xl py-16 md:text-6xl md:text-left md:py-20'>
          Say Hello!
        </h1>
        <div className='flex gap-x-20 flex-col-reverse relative md:flex-row pb-16
          
        '>
          <div className='hidden md:block md:w-1/3'>
            <img src={contactImg} alt="contact"/>
          </div>
          <form className='flex flex-col gap-10 flex-1 text-left'>
            <div className="flex gap-x-20 gap-y-10 flex-col md:flex-row">
              <FormInput type='text' name='First Name *' required={true}/>
              <FormInput type='text' name='Last Name *' required={true}/>
            </div>
            <div className='flex gap-x-20 gap-y-10 flex-col md:flex-row'>
              <FormInput type='e-mail' name='Email *' required={true}/>
              <FormInput type='text' name='Phone *' required={true}/>
            </div>
            <div>
              <FormInput type='text' name='Message *' required={true}/>
            </div>
            <FormBtn>
              Submit
            </FormBtn>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Contact
