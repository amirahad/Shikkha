import React, { useEffect, useState } from 'react'
import Course from '../Course/Course';

const Courses = (props) => {
    const { limit } = props;
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        fetch('./db.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className="bg-blue-900">
            <div className='py-20'>
                <div className='container mx-auto'>
                    <div className='row flex flex-wrap justify-center'>
                        <div className='w-full px-4'>
                            <div className='relative flex flex-col min-w-0 break-words w-full mb-6 bg-blueGray-200'>
                                <div className='flex-auto p-5 lg:p-10'>
                                    <h4 className='text-6xl text-white text-center font-semibold'>Our Courses</h4>
                                    <p className='leading-relaxed mt-3 text-center text-white mb-4 text-blueGray-500'>
                                        Here are some of our courses that we offer to our students.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 ">
                        {
                            courses.map(course => <Course key={course.id} course={course}></Course>).slice(0, limit)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses
