import '../styles/globals.css'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
// import { Provider } from 'react-redux';
// import store from '../redux/store';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [healthPackages, setHealthPackages] = useState([])
  return (
    <>
    {/* <Provider store={store}> */}

      <Navbar setHealthPackages={setHealthPackages}/>
      <Component {...pageProps} healthPackages={healthPackages}/>
      <Footer />
    {/* </Provider> */}
    </>
  )
}

export default MyApp
