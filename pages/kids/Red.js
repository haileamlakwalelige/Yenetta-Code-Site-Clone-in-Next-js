import {FaSchool} from 'react-icons/fa';
import {BsGlobe} from 'react-icons/bs';


const Red =()=>{
    return(
        <div className="bg-white font-serif text-black pb-10">
        <div className="py-32 px-32 pl-32 overflow-x-hidden opacity-50"  style={{backgroundImage:"url('/pattern.png')"}}>
        <div className="bg-[hsl(340,100%,50%)] border-8 opacity-100 border-gray-800 rounded-3xl pl-40 bg-my-background-image bg-cover bg-center h-screen"  style={{backgroundImage:"url('/pattern.png')"}}>
            <div className="px-20 py-20">
                <button className="bg-white mb-2 w-20 rounded-full font-serif font-light text-sm h-10">New!</button>
                <h1 className="text-5xl text-white font-bold font-serif pb-10">Year Round <br/> 
                Coding Program </h1>
                <p className="font-normal font-serif text-xl text-white">The most fun and effective way for kids to learn coding<br/>
                 during the school year! Join our year round coding <br/>
                 program for kids to code in Scratch, Python, Minecraft,<br />
                 Roblox, and more.</p>
                 <div className="flex">
                    <div className="mx-6 my-4 border-4 h-44 w-48 justify-center p-2 mt-6 rounded-3xl  border-white text-white">
                        <FaSchool size={60} className="justify-center ml-12 text-center mb-2"/>
                        <h1 className="font-bold text-3xl ml-3 mb-6">In-Person</h1>
                        <p className="justify-center text-center">Join Camp</p>                    </div>
                    <div className="mx-6 my-4 border-4 h-44 w-48 justify-center p-2 mt-6 rounded-3xl  border-white text-white">
                        <BsGlobe  size={60} className="justify-center ml-12 text-center mb-2"/>
                        <h1 className="font-bold text-3xl ml-4 mb-6">Virtual</h1>
                        <p  className="justify-center text-center">Join Camp</p>
                    </div>
                 </div>
            </div>
        </div>
        </div>
        </div>

    );
}

export default Red;