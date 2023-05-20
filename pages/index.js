import About from './page/About';
import Choose from './page/Choose';
import Count from './page/Count';
import Homes from './page/Homes';
import Courses from './page/Courses';
import Head from 'next/head'
import Programs from './page/Programs';
import Test from './page/Test';
import Learn from './page/Learn';
import Student from './page/Student';
import Subscribe from './page/Subscribe';
import Footer from './page/Footer';
import Copy from './page/Copy';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {
  return (
    <div className="bg-white  text-black h-[100vh] w-full">
    <Head>
      <title>Yenetta Code</title>
    </Head>
    <div>

    </div>
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
