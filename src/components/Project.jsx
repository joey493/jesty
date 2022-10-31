import React from 'react'
import Img from '../assets/imgs/pro1.png'

function Project({img, name, category}) {
  // console.log(require(`../assets/imgs/pro1.png`).default)
  // require(`../../assets/images/${author.avatarURL}`).default
  return (
    <div className='max-w-md'>
      <img src={Img} alt="projects"/>
      <div className='font-Goldman'>
        <p >
          {name}
        </p>
        <p className='text-[#8D8D8D]'>
          {category}
        </p>
      </div>
    </div>
  )
}

export default Project