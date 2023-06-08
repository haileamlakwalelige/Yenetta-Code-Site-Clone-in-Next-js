import {RxDividerHorizontal} from 'react-icons/rx';
import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Subscribe =()=>{
    useEffect(()=>{
        AOS.init({duration:1000});},[]);
    return(
        <div className="font-serif text-black bg-white justify-center text-center h-[100vh]">
            <h1 className="text-center text-blue-700 pt-6">NEWSLETTER</h1>
            <RxDividerHorizontal size={40} className="justify-center text-center items-center ml-[650px]"/>
            <h1 className="font-bold text-5xl py-4 tracking-tighter" data-aos="fade-up">S U B S C R I B E</h1>
            <p className="py-6">Sign up here to get the latest news, updates and special offers.</p>
            <div className="grid grid-cols-3 gap-0 rounded-full border-4 justify-center w-[400px] ml-[500px] px-2 placeholder:pl-2 overflow-hidden mb-10">
                <input 
                type="email" 
                placeholder='your email'
                className="h-16 placeholder:pl-10   border-r-4 col-span-2" />
                <button className="bg-[#2cabcb] w-full text-white font-bold">Sign Up</button>
            </div>
            <RxDividerHorizontal size={40} className="justify-center text-center items-center -pt-6 ml-[650px] mb-[-200px]"/>
        </div>
    );
}

export default Subscribe;