import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div id="notfound">
            <div class="notfound">
                <div class="notfound-404">
                    <h1>4<span></span>4</h1>
                </div>
                <h2>Oops! Page Not Be Found</h2>
                <p class="py-3">Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
                <Link to="/">
                    <button className="theme-btn mt-10 hover:mt-8">
                        <span className="btn-text">Back to Home Page</span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound
