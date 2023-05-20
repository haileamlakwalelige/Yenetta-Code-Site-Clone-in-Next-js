import Image from 'next/image';
import white from '../img/white.png'
import {IoMdMail} from 'react-icons/io';
import {BsFacebook, BsTwitter, BsInstagram} from 'react-icons/bs';
import {FaPinterestP,FaGooglePlusG } from 'react-icons/fa';


const Footer =()=>{
    return(
        <div className="bg-[#025064] bottom-0 h-[50vh] -mt-32 font-serif">
        <div className="grid grid-cols-4 px-20 gap-10 pt-12">
            <div>
                <Image
                src={white}
                alt="Yenetta code Logo"
                width={300}
                height={300} />
                <h1 className="font-bold pt-4">HOME FOR ETHIOPIAN TECH LEADERS</h1>
            </div>
            <div className="pt-6">
                <h1 className="text-4xl pb-6">Navigation</h1>
                <div className="grid grid-cols-4 list-none">
                    <li className="font-bold">Home</li>
                    <li className="font-bold">About</li>
                    <li className="font-bold">Services</li>
                    <li className="font-bold">Work</li>
                    <li className="font-bold">Contact</li>
                </div>
            </div>
            <div  className="pt-6">
                <h1 className="text-3xl pb-6">Contact Us</h1>
                <h1 className="text-lg pb-6">BMS 08A Dembel City Center, Addis Ababa, Ethiopia</h1>
                <h1>(+251) 930-2244-88 </h1>
                <h1>hello@yenettacode.com</h1>
            </div>
            <div  className="pt-6">
                <h1 className="text-3xl pb-6">Get Connected</h1>
                <div className="grid grid-cols-6 gap-2">
                     <BsFacebook className="transition-transform  hover:-translate-y-2 duration-300 ease-in-out"/>
                     <BsTwitter className="transition-transform  hover:-translate-y-2 duration-300 ease-in-out"/> 
                    <FaGooglePlusG className="text-lg transition-transform  hover:-translate-y-2 duration-300 ease-in-out"/>
                    <FaPinterestP className="transition-transform  hover:-translate-y-2 duration-300 ease-in-out"/>  
                    <BsInstagram className="transition-transform  hover:-translate-y-2 duration-300 ease-in-out"/>
                    <IoMdMail className="transition-transform  hover:-translate-y-2 duration-300 ease-in-out"/>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Footer;