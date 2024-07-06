import React from 'react'
import { Navbar } from '../components/Navbar'
import { Header } from '../components/Header'
import heriPic from '../assets/heroPic.png'
import { FaUserPlus } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { MdNoteAlt } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Footer } from '../components/Footer';
import { BenefitsTable } from '../components/BenefitsTable';

export const ReferPage = () => {
    return (
        <div>
            <Navbar />
            <Header />

            <div>
                <div className="flex flex-col items-center py-8 mt-6 bg-red-400">
                    <h1 className="text-2xl font-semibold text-gray-800">How Do I <span className="text-blue-600">Refer?</span></h1>

                    <div className="flex flex-wrap justify-center my-10 space-x-16 py-16 bg-green-200">


                        <div className="circle-shadow w-64 h-64 bg-[#EEF5FF] rounded-full items-center flex flex-col justify-center">
                            <FaUserPlus className='text-[#1A73E8]' size={90} />
                            <p className="text-center mt-4 text-gray-600">Submit referrals easily via <br /> our website’s referral <br /> section.</p>
                        </div>

                        <div className="circle-shadow w-64 h-64 bg-[#EEF5FF] rounded-full items-center flex flex-col justify-center">
                            <MdNoteAlt className='text-[#1A73E8]' size={90} />
                            <p className="text-center mt-4 text-gray-600">Earn rewards once your <br /> referral joins an Accredian <br /> program.</p>
                        </div>

                        <div className="circle-shadow w-64 h-64 bg-[#EEF5FF] rounded-full items-center flex flex-col justify-center">
                            <GiWallet className='text-[#1A73E8]' size={90} />
                            <p className="text-center mt-4 text-gray-600">Both parties receive a <br /> bonus 30 days after <br /> program enrollment.</p>
                        </div>

                    </div>

                    <button className='font-normal text-lg items-center text-white bg-[#1A73E8] rounded-lg px-12 py-3 w-fit'>
                        Refer Now
                    </button>
                </div>

            </div>

            <BenefitsTable />

            <div className='px-12'>

                <div className='mx-auto max-w-7xl flex flex-col justify-evenly text-center h-[90vh]'>

                    <h1 className='text-2xl font-semibold text-gray-800'>Frequently Asked
                        <span className='text-[#1A73E8]'>Questions</span>
                    </h1>

                    <div className="flex flex-row ml-16">

                        <div className="flex flex-col space-y-4 ">
                            <button className="px-4 py-2 text-blue-500 border rounded-lg hover:">Eligibility</button>
                            <button className="px-4 py-2 border rounded-lg">How To Use?</button>
                            <button className="px-4 py-2 border rounded-lg">Terms & Conditions</button>
                        </div>
                        <div className="ml-8 text-start">
                            <div className="mt-2 flex flex-col gap-3">
                                <p className="font-semibold text-blue-500">
                                    Do I need to have prior Product Management and Project Management experience to enroll in the program?
                                </p>
                                <p>
                                    No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics,
                                    making it suitable for individuals from any field of work.
                                </p>
                                <p className="mt-4 font-semibold">
                                    What is the minimum system configuration required?
                                </p>
                              
                            </div>
                        </div>
                    </div>


                    <div className="bg-[#1A73E8] flex items-center justify-between px-12 py-12 mb-28 rounded-xl">
                        <div className="flex items-center">
                            <div className="bg-white p-4 rounded-full mr-4">
                                <TfiHeadphoneAlt className="text-[#1A73E8]" size={30} />
                            </div>
                            <div>
                                <h2 className="text-white text-2xl font-semibold">Want to delve deeper into the program?</h2>
                                <p className="text-white text-sm tracking-wide">Share your details to receive expert insights from our program team!</p>
                            </div>
                        </div>
                        <button className="bg-white text-[#1A73E8] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Get in touch &rarr;</button>
                    </div>
                </div>

            </div>


            <Footer />
        </div>
    )
}
