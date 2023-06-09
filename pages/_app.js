import '@/styles/globals.css'
import Address from './address/Address'
import SimpleMessage from './messages/SimpleMessage';
import Navbar from './navbar/Navbar';

export default function App({ Component, pageProps }) {
  return(
  <div>
  <div className="overflow-x-hidden">
  <SimpleMessage />
  <Address />
  <Navbar />
  </div>
    <Component {...pageProps} />
  </div>
  );
}
