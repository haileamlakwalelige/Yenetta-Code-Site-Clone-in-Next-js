/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import {BsArrowRight} from 'react-icons/bs';
import js from '../img/js.png';
import node from '../img/node-js.png';
import flutter from '../img/flutter.png';
import java from '../img/java.png';
import physics from '../img/physics.png';
import python from '../img/python.png';
import unity from '../img/unity.png';
import html from '../img/html.png';
import c from '../img/c.png';
import css from '../img/css.png';
import figma from '../img/figma.png';
import {useEffect} from 'react';


import AOS from 'aos';
import 'aos/dist/aos.css';

const Courses =()=>{
    
    useEffect(()=>{
    AOS.init({duration:500});
},[]);
    return(
        <div className="bg-white text-black font-serif h-[100vh]">
            <div>
                <h1 className="text-center text-blue-700 font-bold text-lg py-4">Our Courses</h1>
                <h1 className="text-center font-bold text-4xl font-serif pb-4">Plenty Of Courses You Can Choose From</h1>
                <p className="text-center">Whether you want to learn the foundation or become a professional, you can find the best<br />
                courses with us. Learn a new skills advance your career and join the lifelong learners revolution<br/>
                Don't hesitate, just start!</p>
            </div>
            <div className="grid grid-cols-3">
                <div className="col-span-2 pl-24">
                    <div className="grid grid-cols-4 px-3 py-10 mt-6">
                     <Image src={c} alt="C++" width={70} height={200}/>
                     <Image src={java} alt="Java" width={70} height={200}/>
                     <Image src={html} alt="HTML" width={70} height={200}/>
                     <Image src={css} alt="CSS" width={70} height={200}/>
                    </div>
                    <div className="grid grid-cols-4 px-3 py-6">
                        <Image src={flutter} alt="Flutter" width={70} height={200}/>
                        <Image src={physics} alt="React js" width={70} height={200}/>
                        <Image src={js} alt="JavaScript" width={70} height={200}/>
                        <Image src={node} alt="Node js" width={70} height={200}/>
                    </div> 
                    <div className="grid grid-cols-4 px-3 py-6">
                        <Image src={node} alt="Node js" width={70} height={200}/>
                        <Image src={python} alt="Python" width={70} height={200}/>
                        <Image src={figma} alt="Figma" width={70} height={200}/>
                        <Image src={unity} alt="Unity" width={120} height={200}/>
                    </div>
                </div>
                <div className="col-span-1 bg-white shadow-2xl rounded-2xl mr-10 mt-10" data-aos="slide-up">
                    <h1 className="font-bold text-5xl py-2 text-center">Let's Find The<br/>
                    Course You<br/> Want</h1>
                    <p className="text-center py-2 mt-6">Check out all our available courses and find<br/>
                    the perfect course for you</p>
                    <div className="my-4 mt-8 flex ml-20 bg-[#cbcb2c] h-12 w-60 rounded-full">
                        <button className="text-center  font-bold  bg-[#cbcb2c] rounded-full text-black pl-10">See All Courses</button>
                        <BsArrowRight className="ml-3 mt-4 font-bold"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;