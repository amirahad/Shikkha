import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <div className='flex justify-between py-4 align-middle sticky top-0 bg-white z-10'>
            <div className='ml-20 md:block hidden'>
                <Link to='/'>
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className='mr-20'>
                <ul className='flex'>
                    <li className='mx-4 '>
                        <NavLink to='/home' className="text-black font-semibold hover:text-blue-900" activeClassName="selected">
                            Home
                        </NavLink>
                    </li>
                    <li className='mx-4'>
                        <NavLink to='/about' className="text-black font-semibold hover:text-blue-900" activeClassName="selected">
                            About
                        </NavLink>
                    </li>
                    <li className='mx-4'>
                        <NavLink to='/services' className="text-black font-semibold hover:text-blue-900" activeClassName="selected">
                            Services
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
