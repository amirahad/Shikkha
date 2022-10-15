import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../../assets/about-right.png'

const AboutSmall = () => {
    return (
        <div id='about' className='py-20'>
            <div className='container mx-auto'>
                <div className="flex gap-10 flex-wrap sm:flex-nowrap">
                    <div className="md:w-1/2 sm:w-full">
                        <h3 className='text-4xl font-bold text-blue-900'>Welcome To Our Sikkha</h3>
                        <p className="text-slate-400 mt-5 leading-loose">Sorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod temin cididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci tation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure repreh nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occcu idatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <br />

                        <p className="text-slate-400 mt-5 leading-loose"> Horem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod temin cididunt ut labore et dolore magna aliqua Ut enim ad minim veniam,quis nostrude</p>
                        <Link to="/about">
                            <button className="theme-btn blue-bg-border mt-10 hover:mt-8">
                                <span className="btn-text">Read More</span>
                            </button>
                        </Link>

                    </div>
                    <div className="md:w-1/2 sm:w-full justify-center flex">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSmall
