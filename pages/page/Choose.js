import Image from "next/image";
import img2 from '../img/img2.png'
import { FaCheckCircle } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';

const Choose =()=>{
    useEffect(()=>{
        AOS.init({duration:500});
    },[]);
    return(
        <div className="text-black h-[100vh] bg-white font-serif top-48">
            <div className="grid grid-cols-2 gap-6 pl-48 pt-32" data-aos="fade-right">
                <div>
                    <h1 className="font-bold text-blue-700 pb-4">Why Choose Us?</h1>
                    <h1 className="font-bold text-3xl pb-4">We Are Trusted By Many <br/>
                    Student & Non <br /> Student</h1>
                    <p className="font-light text-md pb-10">Our students love Yenetta Code because of our great instructors,<br/>
                    convenience adn affordable fees</p>
                    <div>
                        <div className="flex">
                            <FaCheckCircle className="text-[#cbcb2c] mr-4 mt-2 mb-10"/>
                            <p className="font-bold text-[13px]">Student Achievement Is The Most Important Thing. We <br/>
                            Must Do It Well</p>
                        </div>
                        <div className="flex">
                            <FaCheckCircle className="text-[#cbcb2c] mr-4 mt-2 mb-10"/>
                            <p className="font-bold text-[13px]">Our School Is Only As Great As The People In It. There Are<br/>
                            No Excuses!</p>
                        </div>
                        <div className="flex">
                            <FaCheckCircle className="text-[#cbcb2c] mr-4 mt-2"/>
                            <p className="font-bold text-[13px]">We Nurture And Inspire Each Student To Be Their Best By<br/>
                             Instilling Values That Are Important In All Aspects Of Life,<br/>
                             Beside Just Technology</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left">
                    <Image
                    className="ml-[-50px]"
                    src={img2}
                    alt="yenetta.come"
                    width={400}
                    height={400} />
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default Choose;