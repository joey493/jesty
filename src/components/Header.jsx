import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='pt-12'>
      <div className="container flex justify-between items-center">
        <Link to='/' className='font-bold text-2xl'>
        Jesty.
        </Link>
        <div className='block pointer md:hidden'>
          <span className='block w-16 h-1 bg-white mb-2'></span>
          <span className='block w-16 h-1 bg-white'></span>
        </div>
        <nav>
          <Link to='/work' className="mr-4">Work</Link>
          <Link to='/agency' className="mr-4">Agency</Link>
          <Link to='/contact' className="mr-4">Contact</Link>
          <Link to='/services'>Services</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header