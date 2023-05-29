/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import home from "../img/black1.png";

const Navbar = () => {
  return (
    <div className='flex justify-between pt-4 bg-white font-serif items-center overflow-x-hidden'>
      <div className='pl-20'>
        <Image src={home} alt='Home Page' width={400} height={400} />
        {/* <img src="https://yenettacode.com/wp-content/uploads/2022/04/YenettaWebBlack-2.png" alt="yenetta code" /> */}
      </div>
      <div className='pt-2 pl-[-100px] cursor-pointer'>
        <ul className='list-none flex justify-between'>
          <li className='font-bold text-[#CBDB2C] hover:text-yellow-300 text-lg  px-4'>Home</li>
          <li className='font-bold text-black hover:text-[#CBDB2C] text-lg  px-4'>Kids</li>
          <li className='font-bold text-black hover:text-[#CBDB2C] text-lg px-4 '>Contact</li>
          <li className='font-bold text-black hover:text-[#CBDB2C] text-lg  px-4'>Blog</li>
        </ul>
      </div>
      <div className='pt-2 pl-[-100px] pr-20'>
        <button className='rounded-3xl  bg-[#CBDB2C] text-lg font-bold font-serif text-black  h-14 w-[160px]'>
          Start Learning
        </button>
      </div>
    </div>
  );
};

export default Navbar;
