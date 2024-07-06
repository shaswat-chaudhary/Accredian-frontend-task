import React from 'react'
import { FaGraduationCap } from "react-icons/fa";

export const BenefitsTable = () => {

    const menuItems = [
        "PRODUCT MANAGEMENT",
        "STRATEGY & LEADERSHIP",
        "BUSINESS MANAGEMENT",
        "FINTECH",
        "SENIOR MANAGEMENT",
        "DATA SCIENCE",
        "DIGITAL TRANSFORMATION",
        "BUSINESS ANALYTICS"
    ];

    const programs = [
        { name: "Professional Certificate Program in Product Management", referrerBonus: "₹7,000", refereeBonus: "₹9,000" },
        { name: "PG Certificate Program in Strategic Product Management", referrerBonus: "₹9,000", refereeBonus: "₹11,000" },
        { name: "Executive Program in Data Driven Product Management", referrerBonus: "₹10,000", refereeBonus: "₹10,000" },
        { name: "Executive Program in Product Management and Digital Transformation", referrerBonus: "₹10,000", refereeBonus: "₹10,000" },
        { name: "Executive Program in Product Management", referrerBonus: "₹10,000", refereeBonus: "₹10,000" },
        { name: "Advanced Certification in Product Management", referrerBonus: "₹10,000", refereeBonus: "₹10,000" },
        { name: "Executive Program in Product Management and Project Management", referrerBonus: "₹10,000", refereeBonus: "₹10,000" },
    ];


    return (
        <div className='mx-auto max-w-6xl w-full flex flex-col items-center justify-center'>

            <p className='text-black text-2xl font-semibold mt-20 mb-4'>What Are The <span className='text-blue-600'>Referral Benefits?</span></p>

            <div className='flex flex-1'>
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">

                    <div className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-t-lg flex justify-between items-center">
                        <span>ALL PROGRAMS</span>
                        <span className="text-xl">›</span>
                    </div>
                    <ul>
                        {menuItems.map((item, index) => (
                            <li key={index} className="py-2 px-4 border-t border-black flex  justify-between items-center text-gray-700 hover:bg-gray-100 cursor-pointer">
                                <span>{item}</span>
                                <span className="text-xl">›</span>

                            </li>
                        ))}
                    </ul>
                </div>

                <div className="p-4">

                    <label class="flex items-center justify-end mb-3 cursor-pointer gap-2">
                        <span class="ms-3 text-base font-medium text-gray-700">Enrolled</span>
                        <input type="checkbox" value="" class="sr-only peer"/>
                            <div class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" ></div>
                    </label>


                    <div className="overflow-x-auto rounded-lg shadow-xl">
                        <table className="min-w-full bg-white">
                            <thead >
                                <tr>
                                    <th className="py-2 px-4 bg-blue-200 text-left text-base font-semibold text-gray-700 border-b">Programs</th>
                                    <th className="py-2 px-2 bg-blue-200 text-left text-base font-semibold text-gray-700 border-b">Referrer Bonus</th>
                                    <th className="py-2 px-4 bg-blue-200 text-left text-base font-semibold text-gray-700 border-b">Referee Bonus</th>
                                </tr>
                            </thead>
                            <tbody>
                                {programs.map((program, index) => (
                                    <tr key={index}>
                                        <td className="py-2 px-4 border-b text-lg items-baseline text-gray-700 flex gap-2">
                                            <FaGraduationCap size={18} color='blue' />
                                            {program.name}
                                        </td>
                                        <td className="py-3 px-4 border-b text-base text-gray-700">{program.referrerBonus}</td>
                                        <td className="py-3 px-4 border-b text-base text-gray-700">{program.refereeBonus}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-end pt-8">
                        <button className="px-6 py-2  text-sm text-gray-700 rounded-md border hover:bg-[#1A73E8] hover:text-white transition-all duration-300">Show More </button>
                    </div>
                </div>
            </div>


            <button className='font-normal text-lg items-center text-white bg-[#1A73E8] rounded-lg px-12 py-3 w-fit'>
                Refer Now
            </button>


        </div>
    )
}
