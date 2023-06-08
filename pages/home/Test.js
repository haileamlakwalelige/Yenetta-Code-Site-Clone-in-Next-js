import {AiFillStar} from 'react-icons/ai';
import {ImQuotesRight} from 'react-icons/im';

const Test =()=>{
    return(
        <div className="bg-white font-serif text-black pt-20 py-10">
            <h1 className="font-bold font-serif py-3 text-blue-700 text-center">Testimonial</h1>
            <h1 className="font-bold text-5xl text-center pb-6">Whats Our Members Said</h1>
            <p className="text-center font-serif font-light pb-6">At Yenetta Code, we believe that our members matter and we listen to them!</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-20 ">
                <div  className="shadow-2xl text-center rounded-lg mt-4 overflow-hidden">
                <div className="pb-4 -mt-4 h-20">
                <ImQuotesRight className="text-white bg-[#cbcb2c] h-20 px-6 pr-8 justify-self-end ml-[300px] rounded-3xl  w-24"/>
                </div>
                <h1 className='text-[#cbcb2c] font-bold py-2'>Deborah E</h1>
                    <h1 className='font-bold py-2'>Parent</h1>
                    <div className="flex justify-center"><AiFillStar className="font-bold text-[rgb(253,253,19)]"/><AiFillStar className="font-bold text-[rgb(253,253,19)]"/><AiFillStar className="font-bold text-[rgb(253,253,19)]"/><AiFillStar className="font-bold text-[rgb(253,253,19)]"/><AiFillStar className="font-bold text-[rgb(253,253,19)]"/></div>
                    <p className="my-6 px-2">Just wanted to write to you to say a big<br/> thank you for taking care of my child<br/> during your summer camp program, all<br/> the instructors have been wonderful in<br/> supporting and helping him in all ways<br/> they could.</p>
                </div>
                <div className="overflow-hidden shadow-2xl text-center rounded-2xl mt-4">
                <div className="pb-4 -mt-4 h-20">
                <ImQuotesRight className="text-white bg-[#cbcb2c] h-20 px-6 pr-8 justify-self-end ml-[300px] rounded-3xl w-24"/>
                </div>
                    <h1 className='text-[#cbcb2c] font-bold py-2'>Samson</h1>
                    <h1 className='font-bold py-2'>Parent</h1>
                    <div className="flex justify-center"><AiFillStar className="font-bold text-[rgb(253,253,19)]"/><AiFillStar className="font-bold text-[rgb(253,253,19)]"/><AiFillStar className="font-bold text-[rgb(253,253,19)]"/><AiFillStar className="font-bold text-[rgb(253,253,19)]"/><AiFillStar className="font-bold text-[rgb(253,253,19)]"/></div>
                    <p className="my-6 px-2">We saw all the dynamic way the<br/> instructors deliver lessons and encourage<br/> participation and are pleased that our<br/> daughter is learned so<br/> much. Thank you so much Yenetta, we don’t regret the<br/> admission of my daughter there</p>
                </div>
                <div className="overflow-hidden shadow-2xl text-center rounded-3xl mt-4 ">
                <div className="pb-4 -mt-4 h-20">
                <ImQuotesRight className="text-white bg-[#cbcb2c] h-20 px-6 pr-8 justify-self-end ml-[300px] rounded-3xl  w-24"/>
                </div>
                    <h1 className='text-[#cbcb2c] font-bold py-2'>Tsion</h1>
                    <h1 className='font-bold py-2'>Parent</h1>
                    <div className="flex justify-center"><AiFillStar className="font-bold text-[rgb(253,253,19)]"/><AiFillStar className="font-bold text-[rgb(253,253,19)]"/><AiFillStar className="font-bold text-[rgb(253,253,19)]"/><AiFillStar className="font-bold text-[rgb(253,253,19)]"/><AiFillStar className="font-bold text-[rgb(253,253,19)]"/></div>
                    <p className="my-6 px-2">Both of my children have loved their<br/> experience at Yenetta and received an<br/> excellent education while also making<br/> great friends and building values that will<br/> last a lifetime</p>
                </div>
            </div>
        </div>
    );
}

export default Test;