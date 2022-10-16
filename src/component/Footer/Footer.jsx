import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer py-20">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6">
                    <div>
                        <h4 className="text-2xl text-blue-900 font-semibold">About Us</h4>
                        <p className="text-blue mt-4">We are very proud to announce that since 1986 we are spreading awesomness to our community and we have helped a lot people to shape their better future and life! I hope we are doing best we can. If you have any kind of questions please call or contact us.</p>
                    </div>

                    <div>
                        <h4 className="text-2xl text-blue-900 font-semibold">Quick Links</h4>
                        <div className="flex flex-col mt-4">
                            <Link to="/" className="text-blue-900 mb-2">Home</Link>
                            <Link to="/services" className="text-blue-900 mb-2">Services</Link>
                            <Link to="/about" className="text-blue-900 mb-2">About</Link>
                            <Link to="/*" className="text-blue-900 mb-2">404</Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-2xl text-blue-900 font-semibold">Social Links</h4>
                        <div className="flex mt-4">
                            <SocialIcon url="https://facebook.com/" className='mr-3' />
                            <SocialIcon url="https://www.instagram.com/amazing_ahad_/" className='mr-3' />
                            <SocialIcon url="https://twitter.com/jaketrent" className='mr-3' />
                            <SocialIcon url="https://www.linkedin.com/in/amir-raza-ahad-6a368b236/" className='mr-3' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
