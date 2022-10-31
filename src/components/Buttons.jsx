import React from 'react'

export function FormBtn({children}) {
  return (
    <button type="submit" 
      className="bg-light px-10 py-2 text-dark font-bold ml-auto">
      {children}
    </button>
  )
}

export function WorkBtn({children, click, name}) {
  return (
    <button name={name} onClick={click}
      className="mt-5 rounded-full px-6 py-1 text-primary ml-auto border-primary border-2 mx-2 font-bold
      hover:bg-primary hover:text-white
    ">
      {children}
    </button>
  )
}
