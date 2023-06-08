import About from './home/About';
import Choose from './home/Choose';
import Count from './home/Count';
import Homes from './home/Homes';
import Courses from './home/Courses';
import Programs from './home/Programs';
import Test from './home/Test';
import Learn from './home/Learn';
import Student from './home/Student';
import Subscribe from './home/Subscribe';
import Footer from './home/Footer';
import Copy from './home/Copy';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-white  text-black h-[100vh] w-full">
    <Head>
      <title>Yenetta Code</title>
    </Head>
 
         <Homes />
         <About />
         <Choose />
         <Count />
         <Courses />
         <Programs />
         <Test />
         <Learn />
         <Student />
         <Subscribe />
         <Footer />
         <Copy />
    </div>
  )
}
