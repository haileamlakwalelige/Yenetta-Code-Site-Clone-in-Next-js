/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image';
import black from '../img/home1.png';
import {FaCheckCircle} from 'react-icons/fa';
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Homes =()=>{
    const [countUpStarted, setCountUpStarted] = useState(false);
    const [count, setCount] = useState(0);

     useEffect(()=>{
        AOS.init({duration: 500})
     },[]);

    const countUpProps = useSpring({
      from: { count: 0 },
      to: { count: 15 },
      config: { duration: 3000 },
      onRest: () => setCountUpStarted(true),
      onChange: ({ value }) => setCount(Math.floor(value)),
    });
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.pageYOffset > 0 && !countUpStarted) {
          setCountUpStarted(true);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, [countUpStarted]);
    return(
        <div className="grid bg-white px-3 font-serif lg:grid-cols-2 gap-10 justify-center items-center text-center text-black mr-0 overflow-x-hidden">
            <div className="lg:pl-20 flex flex-col justify-center items-center pt-20 overflow-x-hidden" data-aos="fade-up">
                <h1 className="text-blue-700 font-bold text-lg">Welcome To Yenetta Code</h1>
                <h1 className="justify-center font-bold text-5xl text-center">Home For<br /> Ethiopian Tech <br /> Leaders</h1>
                <p className="font-serif mt-6 text-center justify-center items-center">We deliver learning for a more resilient future. 
                Our range of programmes are<br /> designed to develop market 
                 aligned skills and offer learners the confidence, <br />
                capability and opportunity to embrace new careers with greater confidence.</p>
                <div className="justify-center items-center md:grid grid-cols-3 pt-10 pb-6 overflow-x-hidden">
                    <div className="flex font-bold font-serif py-4">
                        <div className="pr-3">
                            <FaCheckCircle className='text-[#CBDB2C] mt-5'/>
                        </div>
                        <div>
                            <h1>24/Hrs</h1>
                            <h1>Access</h1>
                        </div>
                    </div>
                    <div className="flex font-bold font-serif py-4">
                    <div className="pr-3">
                    <FaCheckCircle className='text-red-500 mt-5' />
                    </div>
                        <div>
                            <h1>Get</h1>
                            <h1>Certificate</h1>
                        </div>
                    </div>
                    <div className="flex font-bold font-serif pr-16 py-4">
                    <div className="pr-3">
                    <FaCheckCircle className='text-orange-500 mt-5'/>
                    </div>
                        <div>
                            <h1>Flexible</h1>
                            <h1>Classes</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="font-serif font-bold h-12 w-48 rounded-3xl bg-[#cbdb2c]">Let's Get Started</button>
                </div>
            </div>
            <div className="overflow-x-hidden justify-center items-center flex-col flex">
                <div className='shadow-2xl w-48 ml-72 rounded-2xl pl-6 mt-24' data-aos="fade-left">
                    <h1 className=" flex font-bold text-4xl ml-16 text-[#f7b606] z-10">{countUpStarted ? (
        <animated.span>{countUpProps.count.interpolate(Math.floor)}</animated.span>
      ) : (
        <span>0</span>
      )}<span>+</span></h1>
                    <h1 className="font-bold ml-3 text-lg text-gray-500">Selected <br /> Courses </h1>
                </div>
                <Image
                src={black}
                alt="Yenetta Code"
                width={400}
                height={400}  className="-mt-24 overflow-x-hidden pt-20 lg:pt-0 z-30 h-[300px] w-[300px] "/>
                {/* <img src="https://yenettacode.com/wp-content/uploads/2022/05/Yenetta-Code-Home-4.png" alt="Yenettacode.com" /> */}
            </div>
        </div>
    );
}

export default Homes;