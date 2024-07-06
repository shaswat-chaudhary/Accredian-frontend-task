import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (

        <div className='px-12 py-2.5 justify-center w-full flex shadow-xl sticky z-50 bg-white'>

        <div className='flex justify-between items-center max-w-7xl min-h-14 w-full'>

            <div className='flex flex-row gap-8 items-center'>

                <div className='flex flex-col max-w-[125px]'>
                    <Link to={''}>
                   <img src="https://accredian.com/Rcimages/logo.png" alt="" />
                    </Link>
                </div>

                <button className='bg-[#1A73E8] flex text-lg font-medium items-center gap-1 px-4 py-2 rounded-md text-white'>
                    Courses <MdKeyboardArrowDown />
                </button>
            </div>


            <div className='flex flex-row gap-4'>

                <ul className='flex gap-8 text-lg items-center'>
                    <li>
                        <Link>
                            Refer & Earn
                        </Link>
                    </li>
                    <li>
                        <Link>
                            Resources
                        </Link>
                    </li>
                    <li>
                        <Link>
                            About Us
                        </Link>
                    </li>

                </ul>


                <button className='bg-[#94a3b870] flex  items-center px-4 py-2 rounded-md text-black text-lg font-normal'>
                    Login
                </button>

                <button className='bg-[#1A73E8] flex  items-center px-4 py-2 rounded-md text-white font-medium'>
                    Try for Free
                </button>

            </div>
        </div>


        </div>
    )
}
