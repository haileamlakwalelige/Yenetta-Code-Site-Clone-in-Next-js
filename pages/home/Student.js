import kid from '../img/kid.jpeg';
import Image from 'next/image';
import {BsArrowRight} from 'react-icons/bs';
import {useEffect} from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

    
    

const Student =()=>{
    useEffect(()=>{
        AOS.init({duration:1000});},[]);
    return(
        <div className="bg-white text-black font-serif">
        <div className='grid lg:grid-cols-2 gap-40 items-center justify-center text-center  lg:px-20 pb-10'>
            <div className='border-2 rounded-3xl flex flex-col items-center border-gray-300 lg:w-fit overflow-x-hidden'>
                <Image 
                src={kid}
                alt="Kid Who Can Code"
                width={400}
                height={500} className="rounded-2xl"/>
                <div className='flex '>
                    <div className="pt-3 flex flex-col">
                        <h1 className="bg-[#cbcb2c] rounded-full w-20 h-16 font-bold text-white text-4xl text-center pb-[-100px]">13</h1>
                        <h1 className="font-light text-md text-white mt-[-23px] ml-6">july</h1>
                    </div>
                    <div className="font-bold pt-4 pl-4 pb-6">
                        <h1 className='text-blue-700 text-xl'>8 Reasons Why Every child <br/>
                        Should Learn To Code</h1>
                    </div>
                </div>
                <p className='pl-16 pt-2'>If we want to set our children up for<br/>
                 academic success, every child should<br/>
                 learn to code. Coding for kids…</p>
                <div className='flex font-bold text-white justify-center rounded-full ml-20 bg-[#cbcb2c] mt-6 h-16 w-40 px-4 mb-10'>
                    <button>Read More</button>
                    <BsArrowRight className="ml-2 mt-6"/>
                </div>
            </div>
            <div className="lg:pt-20 pt-4" data-aos="slide-up">
                <h1 className="font-bold text-xl text-blue-700 mb-6">Techie Talker</h1>
                <h1 className="font-bold text-3xl py-3">Read Our Latest <br/> Blog</h1>
                <p className="my-4">Techie Talker is a blog dedicated to help you<br/>
                 stay up-to-date with the latest news in the<br/>
                  industry. We feature technology startups,<br/>
                   share tech news and discuss the “latest”<br/>
                    Javascript framework so that you can stay<br/>
                     ahead of the curve.</p>
                     <div className='flex font-bold justify-center text-black rounded-full ml-20 bg-[#cbcb2c] mt-16 h-16 w-40 px-4 mb-10'>
                        <button className='pl-3'>View All</button>
                        <BsArrowRight className="ml-2 mt-6"/>
                     </div>
            </div>
        </div>
        </div>
    );
}

export default Student;