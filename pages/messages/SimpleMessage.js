import {FaTimesCircle} from 'react-icons/fa';
import React, {useState} from 'react';


export default function SimpleMessage() {
    const [text, setText] = useState(true);

    return (
        <div className="top-0 sticky w-full">
            {text ? (
                <div className=" bg-blue-300 flex justify-center items-center px-32 py-2 ">
        <div className="justify-center pl-20 flex">
        <div className="bg-blue-300"> 
        <h1 className="font-light text-md pl-[-30px] font-serif pt-2 text-blue-800">JOIN OUR YEAR ROUND CODING PROGRAM FOR KIDS!</h1>
         </div>
        <div>
            <button className="rounded-lg font-normal font-serif text-white ml-20 bg-blue-800 w-32 h-8 hover:h-10">Learn More</button>
        </div>
        </div>
        <div className="md:pl-72  md:pr-[-300px]">
            <FaTimesCircle size={30} onClick={()=>setText(!text)} className="duration-100 ease-in hover:text-2xl hover:text-red-500" />
        </div>
        
      </div>
            ): null}
        </div>
    );}