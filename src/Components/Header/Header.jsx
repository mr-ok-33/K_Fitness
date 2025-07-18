import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assests/headerlogo-removebg-preview.png'
function Header() {
  return (
    <div className='w-full bg-gray-300 h-[100px] border flex justify-between items-center  px-16 shadow-md'>
      <div className='w-[150px] h-[100%]'>
        <Link to="/">
          <img src={logo} alt="Logo" className='object-contain w-full  h-full'/>
        </Link>
      </div>

      <div className="">
        <ul className='flex items-center gap-6 text-[20px] font-extralight'>
          <li>
            <Link to='/allmembers'>
            <label className='hover:underline'>All Members</label>
            </Link>
          </li>
          <li>
            <Link to='/activemembers'>
            <label className='hover:underline'>Active Members</label>
            </Link>
          </li>
          <li>
           <Link to='/deactivemembers'>
            <label className='hover:underline'>Deactive Members</label>
            </Link>
          </li>
           <li>
           <Link to='/contact'>
            <label className='hover:underline'>Contact Us</label>
            </Link>
          </li>
          <li>
            <Link to='/login'>
            <label className='hover:underline'>Login</label>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Header;