import Red from './Red';
// import Round from './Round';
// import Suits from './Suits';
import Head from 'next/head'


const Kids=()=>{
    return(
        <div className="bg-white">
        <Head>
      <title>Yenetta Code Kids</title>
    </Head>
            <Red />
            {/* <Round />
            <Suits /> */}
        </div>
    );
}

export default Kids;