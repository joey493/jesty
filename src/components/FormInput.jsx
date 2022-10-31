import React from 'react'

const FormInput = ({type, name, required}) => {
  return (
    <div className="relative z-0 flex-1">
      <input type={type} name={name} required={required} className="peer block w-full appearance-none border-0 border-b border-grayC bg-transparent py-2.5 px-0 text-sm text-light focus:border-boldC focus:outline-none focus:ring-0" placeholder=" " />
      <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-grayC duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-boldC peer-focus:dark:text-boldC">
        {name}
      </label>
    </div>
  )
}

export default FormInput