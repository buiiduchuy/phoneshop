import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = (props) => {
  const {role} = props
  const userRole = 'user'
  return (
    <footer className='shadow-gray-600 shadow-2xl'>
      <div className='max-w-330 mx-auto px-4 py-8'>
        <div className='flex flex-wrap items-center'>
           <Link to="/" className="text-3xl font-bold">LOGO</Link>
           <div className='mx-4'><p>©copyright 2024</p></div>
           {
            role==userRole?
            <Link to="/admin" className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 ms-auto">Admin </Link> : 
            <Link to="/" className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 ms-auto">Shop </Link>
           }
           
        </div>
      </div>
    </footer>
  )
}
