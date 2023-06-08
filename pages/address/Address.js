import {FaMapPin} from 'react-icons/fa';
import {HiPhone} from 'react-icons/hi';
import {IoMdMail} from 'react-icons/io';
import {BsFacebook, BsTwitter, BsInstagram} from 'react-icons/bs';

const Address =()=>{
    return(
        <div className="flex justify-between  bg-[#CBDB2C] font-serif h-10">
            <div className=" flex justify-between mt-2 text-black text-md">
            <FaMapPin className='ml-20   mr-8 font-bold'/>
                <h1>BMS 08A, Dembel City Center, A.A, ET</h1>
            </div>
            <div className="flex justify-between ml-[-170px]  mt-2 text-black text-sm">
                <HiPhone size={20} className='mr-8 font-bold '/>
                <h1 className="text-lg ">+251930224488</h1>
            </div>
            <div className="flex justify-between ml-[-170px] mt-2 text-black text-sm">
                <IoMdMail size={20} className='mr-8 font-bold ' />
                <h1 className="text-lg">hello@yenettacode.com</h1>
            </div>
            <div className="flex justify-between mt-2 text-black text-sm">
                <BsFacebook size={15} className="mr-8 mt-1"/>
                <BsTwitter size={15} className="mr-8 mt-1"/>
                <BsInstagram size={15} className="mr-16 mt-1"/>
            </div>
        </div>
    );
}

export default Address;