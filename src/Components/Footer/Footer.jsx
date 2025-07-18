import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assests/headerlogo-removebg-preview.png'

function Footer() {
  return (
    <div className="w-full h-[100px] flex justify-between items-center gap-4 mt-20 shadow-md bg-gray-300 px-16">
      <div className="text-center md:text-left">
        <h2 className="text-xl font-semibold">K Fitness</h2>
        <p className="text-md text-purple-900">Train Hard. Stay Strong.</p>
      </div>
      <div className="text-md text-black text-center md:text-right">
        © 2025 FlexFit Gym. All rights reserved.
      </div>
    </div>
  )
}

export default Footer