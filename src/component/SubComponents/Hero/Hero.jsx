import React from 'react'
import img from '../../../assets/slider_bg_1.jpg'

const Hero = () => {
    return (
        <div className='hero' >
            <div style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '80vh',
            }}
            >
                <div className=" mx-auto container">
                    <div className="flex flex-col content-center h-3/4">
                        <h1 className="text-6xl font-bold text-white mt-40">Addmission Going On..</h1>
                        <p className="text-yellow-600 mt-3">Admission is going on for the new session 2021-2022</p>
                    </div>
                    <button class="theme-btn mt-10 hover:mt-8" >
                        <span class="btn-text">admit now</span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Hero
