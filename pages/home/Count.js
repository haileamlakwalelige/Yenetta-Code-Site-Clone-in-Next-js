import {BiPlusMedical} from 'react-icons/bi';
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import NumberFormat from "react-number-format";

const Count =()=>{ 
    const [countUpStarted, setCountUpStarted] = useState(false);
    const [count, setCount] = useState(0);
  
    const countUpProps = useSpring({
      from: { count: 0 },
      to: { count: 1250 },
      config: { duration: 5000 },
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

    const [countUpStarteds, setCountUpStarteds] = useState(false);
    const [counts, setCounts] = useState(0);
  
    const countUpsProps = useSpring({
      from: { counts: 0 },
      to: { counts: 15 },
      config: { duration: 5000 },
      onRest: () => setCountUpStarteds(true),
      onChange: ({ value }) => setCounts(Math.floor(value)),
    });
  
    useEffect(() => {
      const handleScrolls = () => {
        if (window.pageYOffset > 0 && !countUpStarteds) {
          setCountUpStarteds(true);
        }
      };
  
      window.addEventListener("scroll", handleScrolls);
  
      return () => window.removeEventListener("scroll", handleScrolls);
    }, [countUpStarteds]);

    const [countUpStarteded, setCountUpStarteded] = useState(false);
    const [counted, setCounted] = useState(0);
  
    const countedUpProps = useSpring({
      from: { counted: 0 },
      to: { counted: 4 },
      config: { duration: 5000 },
      onRest: () => setCountUpStarteded(true),
      onChange: ({ value }) => setCounted(Math.floor(value)),
    });
  
    useEffect(() => {
      const handleScrolled = () => {
        if (window.pageYOffset > 0 && !countUpStarteded) {
          setCountUpStarteded(true);
        }
      };
  
      window.addEventListener("scroll", handleScrolled);
  
      return () => window.removeEventListener("scroll", handleScrolled);
    }, [countUpStarteded]);

    return(
        <div className="h-full bg-white  font-serif font-bold text-black">
        <div className="h-full bg-white pt-96 mb-40 pb-40 lg:pb-4 lg:pt-6 lg:pl-32 font-serif grid justify-center items-center sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:h-[40vh] font-bold text-black">
            <div className="">
            <h1 className="font-bold text-[50px] text-[#cbcb2c] flex"><div>
      {countUpStarted ? (
        <animated.span>{countUpProps.count.interpolate(Math.floor)}</animated.span>
      ) : (
        <span>0</span>
      )}
    </div><span><BiPlusMedical /></span></h1>
            <h1 className="font-bold">Enrolled Learners </h1>
            </div>
            <div>
                <h1 className="font-bold text-[50px] text-[#cbcb2c] flex ml-10">
                {countUpStarteds ? (
        <animated.span>{countUpsProps.counts.interpolate(Math.floor)}</animated.span>
      ) : (
        <span>0</span>
      )}
                <span><BiPlusMedical /></span></h1>
                <h1 className="font-bold">Classes Completed</h1>
            </div>
            <div>
                <h1 className="font-bold text-[60px] text-[#cbcb2c] ml-12">

                {countUpStarteded ? (
        <animated.span>{countedUpProps.counted.interpolate(Math.floor)}</animated.span>
      ) : (
        <span>0</span>
      )}

                </h1>
                <h1 className="font-bold">Years of Experience</h1>
            </div>
        </div>
        </div>
    );
}


export default Count;