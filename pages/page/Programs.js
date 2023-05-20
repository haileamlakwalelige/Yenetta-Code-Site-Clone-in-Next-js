import Image from "next/image";
import {BsArrowRight} from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';


    


const Programs =()=>{

        useEffect(()=>{
    AOS.init({duration:500});
},[]);
    return(
        <div className="font-serif text-black bg-white pb-10" data-aos="slide-up">
            <div >
                <h1 className="font-bold text-center text-blue-700 py-6">Our Programmes</h1>
                <h1 className="font-bold text-center text-3xl">Find The Right Program For You</h1>
                <p className="text-center py-4 pb-12">Join our programmes to open up opportunities and to learn new skills to <br/>
                     broaden your horizon in an alternate learning environment!</p>
            </div>
            <div className="grid grid-cols-2 px-32 gap-10">
                <div className="col-span-1 bg-[#03e9fa] overflow-x-hidden w-[500px] rounded-xl">
                    <Image
                     src="https://yenettacode.com/wp-content/uploads/2022/05/flat-design-geometric-mosaic-pattern_23-2149259884.webp" 
                     alt="Programmes" width={500} height={600} className="w-full"/>
                     <div>
                        <h1 className="font-bold text-4xl  py-6 pl-4">Coding Bootcamps</h1>
                        <p className="mb-6 pl-4">These bootcamps help you learn new on demand skills, get <br/> a job, or change to an exciting new career.</p>
                     </div>
                     <div className="flex ml-8 mb-4 mt-16 border-2  rounded-full border-black w-44  h-16">
                        <button className="pl-4">Find Out More </button> 
                        <BsArrowRight className="ml-4 mt-6"/>
                     </div>
                </div>
                <div  className="col-span-1 bg-[#b0fa03] overflow-x-hidden w-[500px] rounded-xl">
                <Image
                     src="https://yenettacode.com/wp-content/uploads/2022/05/flat-mosaic-background_23-2149046154-e1652586138331.webp" 
                     alt="Programmes" width={500} height={600} className="w-full"/>
                     <div>
                        <h1 className="font-bold text-4xl  py-6 pl-4">Kids Coding Camp</h1>
                        <p className="mb-6 pl-4">Our Camp for Kids is a fun programme designed to<br/> children age between 5-19 get started with coding</p>
                     </div>
                     <div className="flex ml-8 mb-4 mt-16 border-2  rounded-full border-black w-44  h-16">
                        <button className="pl-4">Find Out More </button> 
                        <BsArrowRight className="ml-4 mt-6"/>
                     </div>
                </div>
            </div>
        </div>
    );
}

export default Programs;