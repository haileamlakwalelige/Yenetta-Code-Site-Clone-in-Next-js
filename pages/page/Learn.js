/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import girl from '../img/girl.png'

const Learn =()=>{
    return(
        <div className=" bg-white h-[100vh] text-black font-serif pt-32 ">
        <div className="bg-[#cbcb2c] grid grid-cols-2 gap-10 mt-32 mb-20 pb-20 h-[40vh] px-40">
            <div className='pb-20'>
                <Image 
                src={girl}
                alt="Yenetta Code Girl"
                width={400}
                height={800} className='-mt-32'/>
            </div>
            <div className='text-center'>
                <h1 className='font-bold text-4xl font-serif pt-6'>Learn Tech Skills Online<br/>With Us!</h1>
                <h1 className='font-bold text-2xl my-6 '>Don't Wait Up, Start Now!</h1>
                    <button className='hover:bg-[rgb(245,5,125)] hover:w-60 hover:h-18 duration-300 hover:text-xl ease-in  text-center font-bold justify-center border-4 h-16 w-48 rounded-full'>Let's Get Started</button>
            </div>
        </div>
        </div>
    );
}

export default Learn;