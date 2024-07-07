import { Container } from 'postcss';
import React from 'react'
import { Link } from 'react-router-dom';
import currencyImg from '../assets/currencyimg.png'
import heroPic from '../assets/heroPic.png'

export const Header = () => {
    return (
        <div className='px-12'>

            <div className='bg-[#1a73e83c] flex flex-col w-fit px-20 items-center justify-center py-2 rounded-full mx-auto mt-12'>
                <ul className='flex flex-row gap-20 text-2xl font-normal text-gray-800'>
                    <li><Link>Refer</Link></li>
                    <li><Link>Benefits</Link></li>
                    <li><Link>FAQs</Link></li>
                    <li><Link>Support</Link></li>
                </ul>
            </div>

            <div className="flex flex-col items-center py-10">
                <div className="container bg-blue-100 rounded-3xl overflow-hidden max-w-7xl w-full flex flex-col lg:flex-row relative">
                   
                    <div className="flex-1 flex items-center px-10">

                        <div className="lg:text-left space-y-16 pt-10">
                            <h1 className="text-7xl font-bold text-gray-900">Let's Learn &amp; Earn</h1>
                            <p className="mt-4 text-4xl font-medium text-gray-700">Get a chance to win up to <span className="text-blue-500">Rs. 15,000</span></p>
                            <button className='bg-[#1A73E8] flex  items-center px-4 py-2 rounded-md text-white font-medium'>
                                Try for Free
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 flex items-center justify-center relative">
                        <img src={heroPic} alt="Mobile Display" className="max-w-3xl z-30 " />

                    </div>



                    <div className="flip-horizontal absolute w-36 h-36 top-[-50px] left-[-10px]">
                        <img src={currencyImg} alt="Currency Image" 
                        className="w-full z-40 rotate-90 transform flip-y-z-" />
                    </div>
                    <div className="flip-horizontal absolute w-36 h-36 bottom-1 left-[43%] z-40">
                        <img src={currencyImg} alt="Currency Image" 
                        className="flip-horizontal w-full z-50 rotate-[90deg]" />
                    </div>
                    <div className="absolute w-28 h-28 top-2 left-[55.5%]">
                        <img src={currencyImg} alt="Currency Image" 
                        className="w-full z-40 -rotate-180" />
                    </div>
                    <div className="absolute w-28 h-28 top-[-40px] right-5">
                        <img src={currencyImg} alt="Currency Image" 
                        className="w-full z-40 rotate-180" />
                    </div>
                    <div className="absolute w-36 h-36 top-[40%] right-4">
                        <img src={currencyImg} alt="Currency Image" 
                        className="w-full z-40 -rotate-90" />
                    </div>
                    
                </div>
            </div>

        </div>
    )
}
