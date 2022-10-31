import React, { useState } from 'react'
import {WorkBtn} from '../../components/Buttons'
import Project from '../../components/Project'
import { Projects, category } from './Data'

function Work() {
  const [currentSection, setCurrentSection] = useState('All') 
  
  const handleClick = (e) => {
    setCurrentSection(e.target.name)
  }
  
  return (
    <div className='container grid gap-8'>
      <div className='my-16'>
        <h1 className='font-bold text-8xl'>
          OUR WORK
        </h1>
        <p className='text-[#8D8D8D]'>
          Creating next level digital products
        </p>
      </div>
      <nav className='flex justify-between'>
        <div>
          {category.map((ele) => 
          <WorkBtn name={ele} key={ele} click={handleClick}>{ele}</WorkBtn>
          )}
        </div>
      </nav>
      <div className='flex flex-wrap gap-20'>
        {currentSection === 'All'
          ? Projects.map(pro => 
            <Project key={pro.name} name={pro.name} category={pro.category} img={pro.img}/>
          ) 
          : Projects.filter(pro => pro.type === currentSection)
          .map(pro => (
            <Project key={pro.name} name={pro.name} category={pro.category} img={pro.img}/>
          ))
        }
      </div>
    </div>
  )
}

export default Work