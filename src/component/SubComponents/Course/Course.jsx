import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import Rating from 'react-rating';

const Course = (props) => {
    const { name, price, image, description, userNumb, rating } = props.course;
    return (
        <div className="p-2 bg-white rounded">
            <div>
                <img src={image} alt="img" className="h-60 w-full" />
            </div>
            <div className="p-3">
                <h3 className="text-2xl font-semibold my-2 text-yellow-500">{name}</h3>
                <p className="text-sm text-slate-600">Title: {description}</p>
                <p className="text-lg font-bold my-5">Rating: <Rating
                    emptySymbol="far fa-star text-yellow-500"
                    fullSymbol="fas fa-star text-yellow-500"
                    initialRating={rating}
                    readonly
                >
                </Rating>
                </p>
                <div className='inline'>
                    <span className="text-yellow-500 text-xl font-semibold"><FontAwesomeIcon icon={faUsers} /> {userNumb} </span>
                </div>
                <p className="text-xl font-semibold float-right mr-6"> <span className="text-2xl text-yellow-500">${price}</span></p>
            </div>
        </div>
    )
}

export default Course;