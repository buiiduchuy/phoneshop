import React from 'react'

export const Button = ({text,...props}) => {
  return (
    <button type="button" {...props} className="btn-comp border border-solid rounded-full border-black py-1.5 px-5 inline-block relative bg-black overflow-hidden">
      <span className='inline-block z-10 relative'>{text}</span>
    </button>
  )
}
