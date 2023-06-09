import {RxDividerHorizontal} from 'react-icons/rx';
import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Subscribe =()=>{
    useEffect(()=>{
        AOS.init({duration:1000});},[]);
    return(
        <div className="font-serif text-black bg-white justify-center text-center py-10 h-full lg:h-[100vh] overflow-x-hidden">
            <h1 className="text-center text-blue-700 pt-6">NEWSLETTER</h1>
            <RxDividerHorizontal size={40} className="justify-center text-center items-center ml-[650px]"/>
            <h1 className="font-bold text-5xl py-4 tracking-tighter" data-aos="fade-up">S U B S C R I B E</h1>
            <p className="py-6">Sign up here to get the latest news, updates and special offers.</p>
            <div className=" grid md:grid-cols-3 gap-0 md:rounded-full md:border-4 justify-center items-center w-[400px] lg:ml-[500px] px-2 placeholder:pl-2 overflow-hidden mb-10">
                <input 
                type="email" 
                placeholder='your email'
                className="h-16 outline-none placeholder:pl-2 lg:placeholder:pl-10 my-3 lg:my-0 justify-center lg:justify-start border-2 lg:border-none border-green-500  lg:items-start items-center  lg:border-r-4 lg:col-span-2 lg:text-start text-center rounded-3xl" />
                <button className=" border-2 lg:border-l-2 h-full border-green-500 focus:outline-none font-bold md:bg-[#2cabcb] w-full text-gray-500 md:text-white px-3 py-3 lg:px-0 lg:py-0 rounded-3xl lg:rounded-none my-3 lg:my-0 justify-center items-center lg:justify-start lg:items-start ">Sign Up</button>
            </div>
            <RxDividerHorizontal size={40} className="justify-center text-center items-center -pt-6 ml-[650px] mb-[-200px]"/>
        </div>
    );
}

export default Subscribe;