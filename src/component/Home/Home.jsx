import React from 'react'
import About from '../About/About'
import Courses from '../SubComponents/Courses/Courses'
import Hero from '../SubComponents/Hero/Hero'

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Courses limit={3} />
        </div>
    )
}

export default Home
