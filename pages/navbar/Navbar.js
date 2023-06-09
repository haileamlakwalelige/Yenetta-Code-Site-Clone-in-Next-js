/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import home from '../img/black1.png';
import { useRouter } from 'next/router';

const Navbar =()=>{
    const router = useRouter();
    return(
        <div className=" pt-4 bg-white font-serif overflow-x-hidden">
        <div className="lg:flex-row flex-col flex justify-between items-center overflow-x-hidden">
        <div className="pl-20 overflow-x-hidden">
            <Image 
            src={home}
            alt="Home Page"
            width={400}
            height={400} />
                {/* <img src="https://yenettacode.com/wp-content/uploads/2022/04/YenettaWebBlack-2.png" alt="yenetta code" /> */}
            </div>
            <div className="hidden lg:block pt-2 pl-[-100px] cursor-pointer overflow-x-hidden">
                <ul className="list-none flex justify-between">
                    <li className={`font-bold  text-black hover:text-[#cbcb2c] text-lg  px-4 ${router.asPath === '/' ?'text-green-700':''}`}><Link href="/">Home</Link></li>
                    <li className={`font-bold  text-black hover:text-[#CBDB2C] text-lg  px-4   ${router.asPath === '/kids' ?'text-green-700':''}`}><Link href="/kids/">Kids</Link></li>
                    <li className={`font-bold  text-black hover:text-[#CBDB2C] text-lg px-4   ${router.asPath === '/contact' ?'text-green-700':''}`}>Contact</li>
                    <li className={`font-bold  text-black hover:text-[#CBDB2C] text-lg  px-4  ${router.asPath === '/blog' ?'text-green-700':''}`}>Blog</li>
                </ul>
            </div>
            <div className="block lg:hidden pt-2 pl-[-100px] cursor-pointer  overflow-x-hidden">
                <ul className="list-none flex flex-col justify-center">
                    <li className={`font-bold  text-black py-4 hover:text-[#cbcb2c] text-lg  px-4 ${router.asPath === '/' ?'text-green-700':''}`}><Link href="/">Home</Link></li>
                    <li className={`font-bold  text-black py-4 hover:text-[#CBDB2C] text-lg  px-4   ${router.asPath === '/kids' ?'text-green-700':''}`}><Link href="/kids/">Kids</Link></li>
                    <li className={`font-bold  text-black py-4 hover:text-[#CBDB2C] text-lg px-4   ${router.asPath === '/contact' ?'text-green-700':''}`}>Contact</li>
                    <li className={`font-bold  text-black py-4 hover:text-[#CBDB2C] text-lg  px-4  ${router.asPath === '/blog' ?'text-green-700':''}`}>Blog</li>
                </ul>
            </div>
            <div className="lg:pt-2 pl-10  lg:pl-[-100px] pt-6 pr-20 overflow-x-hidden">
                <button className="rounded-3xl  bg-[#CBDB2C] text-lg font-bold font-serif text-black  h-14 w-[160px]">Start Learning</button>
            </div>
        </div>
            
        </div>
    );
}

export default Navbar;
