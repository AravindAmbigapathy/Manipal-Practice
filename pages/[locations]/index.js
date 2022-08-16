import Head from 'next/head'
import { useEffect } from 'react'
import Appointment from '../../Components/appointment'
import Banner1 from '../../Components/Banner1'
import Banner2 from '../../Components/Banner2'
import Banner3 from '../../Components/Banner3'
import Banner4 from '../../Components/Banner4'
import Doctor from '../../Components/doctor'
import Packages from '../../Components/packages'
import Services from '../../Components/services'
import Top from '../../Components/Top'
import Works from '../../Components/works'
import styles from '../../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Manipal Hospital</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Top />
      <Appointment />
      <Services />
      <Packages />
      <Banner1 />
      <Doctor />
      <Banner2 />
      <Banner3 />
      <Works />
      <Banner4 />
    </div>
  )
}
