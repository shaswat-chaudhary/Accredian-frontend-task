import React from 'react'
import { FaFacebookSquare, FaLinkedin, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';



export const Footer = () => {
    return (
        <div className='bg-[#282828]'>
            <footer className="py-8 max-w-5xl mx-auto text-white">

                <div className='flex flex-wrap items-center text-center justify-between'>
                    <div className=''>
                        <p className='text-4xl font-bold'>accredian</p> <span className='text-sm tracking-wide'>credentials that matter</span>
                    </div>

                    <div className='flex flex-col'>
                        <button className="bg-[#1A73E8] text-white px-8 outline-1 outline-white py-2.5 rounded-lg text-sm font-medium tracking-wide outline transition">
                            Schedule 1-on-1 Call Now
                        </button>
                        <span className='text-sm'>Speak with our Learning Advisor</span>
                    </div>
                </div>


                <div className="grid grid-col-1 lg:grid-cols-3 space-x-3 border-t mt-8 pt-8">

                    <div className=''>
                        <h3 className="text-lg font-semibold mb-4">Programs</h3>
                        <ul>
                            <li className="mb-4"><Link className="hover:underline">Data Science & AI </Link></li>
                            <li className="mb-4"><Link className="hover:underline">Product Management</Link></li>
                            <li className="mb-4"><Link className="hover:underline">Business Analytics</Link></li>
                            <li className="mb-4"><Link className="hover:underline">Digital Transformation</Link></li>
                            <li className="mb-4"><Link className="hover:underline">Business Management</Link></li>
                            <li className="mb-4"><Link className="hover:underline">Project Management</Link></li>
                            <li className="mb-4"><Link className="hover:underline">Strategy & Leadership</Link></li>
                            <li className="mb-4"><Link className="hover:underline">Senior Management</Link></li>
                            <li className="mb-4"><Link className="hover:underline">Fintech</Link></li>
                        </ul>
                    </div>


                    <div className=''>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

                        <p className='text-sm'>Email us (For Data Science Queries): <a href="mailto:admissions@accredian.com" className="hover:underline">admissions@accredian.com</a></p>
                        <p className='text-sm'>Email us (For Product Management Queries): <a href="mailto:pm@accredian.com" className="hover:underline">pm@accredian.com</a></p>
                        <p className='text-sm'>Data Science Admission Helpline: <a href="tel:+919070563922" className="hover:underline">+91 9070563922</a> (9 AM - 7 PM)</p>
                        <p className='text-sm'>Product Management Admission Helpline: <a href="tel:+919625811095" className="hover:underline">+91 9625811095</a></p>
                        <p className='text-sm'>Enrolled Student Helpline: <a href="tel:+919796932507" className="hover:underline">+91 9796932507</a></p>
                        <p className='text-sm'>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</p>

                        <p className='text-lg py-1'>Why Accredian</p>

                        <div>
                            <p className='text-lg font-thin'>Follow us</p>
                            <div className='flex gap-3'>
                                <FaFacebookSquare size={20} />
                                <FaLinkedin size={20} />
                                <FaTwitter size={20} />
                                <FaInstagram size={20} />
                                <FaYoutube size={20} />
                                </div>
                        </div>
                    </div>


                    <div className='pl-12'>
                        <h3 className="text-lg font-semibold mb-4">Accredian</h3>
                        <ul>
                            <li className="text-sm mb-1"><Link to={'https://accredian.com/About'} className="hover:underline">About</Link></li>
                            <li className="text-sm mb-1"><Link to={'https://accredian.com/Career'} className="hover:underline">Career</Link></li>
                            <li className="text-sm mb-1"><Link to={'https://blog.accredian.com/'} className="hover:underline">Blog</Link></li>
                            <li className="text-sm mb-1"><Link to={'https://accredian.com/policies/accredian-policy'} className="hover:underline">Admission Policy</Link></li>
                            <li className="text-sm mb-1"><Link to={'https://accredian.com/terms/referral'} className="hover:underline">Referral Policy</Link></li>
                            <li className="text-sm mb-1"><Link to={'https://accredian.com/terms/privacy'} className="hover:underline">Privacy Policy</Link></li>
                            <li className="text-sm mb-1"><Link to={'https://accredian.com/terms'} className="hover:underline">Terms Of Service</Link></li>
                            <li className="text-sm mb-1"><Link to={'https://accredian.com/Faq'} className="hover:underline">Master FAQs</Link></li>
                        </ul>
                    </div>


                </div>

                <div className="text-center mt-10">
                    <p className="text-gray-400 mt-4">© 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
                </div>
            </footer>

        </div>
    )
}
