/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image';
import img1 from '../img/img1.png';
import {FaUserTie,FaBookOpen ,FaClock, FaIndustry} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';




const About =()=>{
    useEffect(()=>{
        AOS.init({duration:500});
    },[])
    return(
        <div className="text-black grid grid-cols-2 gap-10 h-[100vh] bg-white pt-20 font-serif overflow-x-hidden">
            <div className="pl-48 pt-28" data-aos="zoom-in">
                <Image
                src={img1}
                alt="yenettacode.com"
                width={400}
                height={400} />
            </div>
            <div className="pr-20 pl-[-200px]" data-aos="fade-left">
                <h1 className=" text-blue-700 my-3 font-bold">About Us</h1>
                <h1 className='font-bold text-3xl mb-2'>Equipping The Future</h1>
                <p className=" font-light mb-6">We're an educational company inspiring a new generation of thinkers.Our<br />
                goal is to provide learners with skills and ability to thrive in the digital world.</p>
                <div className="grid gap-6 grid-cols-2 py-2">
                    <div>
                        <div className="flex">
                            <h1><FaUserTie className='mr-5 bg-[#cbdb2c] rounded-[50%] w-14 h-14 p-4 text-white '/></h1>
                            <h1 className="font-bold pl-1 text-xl">Learning With <br/> Expert</h1>
                        </div>
                        <p className="pl-20 font-light text-md">We have the best<br /> instructors who are<br /> industry Leaders. experts,<br/> in 
                        their fields and able to <br /> teach best practices.</p>
                    </div>
                    <div>
                        <div className="flex">
                            <h1><FaBookOpen className='mr-5 bg-[#cbdb2c] rounded-[50%] w-14 h-14 p-4 text-white '/></h1>
                            <h1 className="font-bold pl-1 text-xl">Learning <br /> Anywhere</h1>
                        </div>
                        <p className="pl-20 font-light text-md">Our blended approach<br /> allows you to learn at<br/> your own 
                        pace and in<br /> real-time with an<br /> instructor</p>
                    </div>
                </div>
                <div className="grid gap-6 grid-cols-2 py-2">
                <div>
                        <div className="flex">
                            <h1><FaClock className='mr-5 bg-[#cbdb2c] rounded-[50%] w-14 h-14 p-4 text-white '/></h1>
                            <h1 className="font-bold pl-1 mb-4 text-xl">Flexible Classes</h1>
                        </div>
                        <p className="pl-20 font-light text-md mt-[-25px] ">Join a class that fits your <br /> schedule. You can<br />
                        choose whether to attend online or in-<br/>person sessions</p>
                    </div>
                    <div>
                        <div className="flex">
                            <h1><FaIndustry className='mr-5 bg-[#cbdb2c] rounded-[50%] w-14 h-14 p-4 text-white '/></h1>
                            <h1 className="font-bold pl-1 text-xl">Industrial <br/> Standard </h1>
                        </div>
                        <p className="pl-20 font-light text-md">Our program are a <br/> perfect blend of theory <br/>
                        and practice, providing <br /> you with a well-rounded <br />
                        industry standard <br /> education</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;