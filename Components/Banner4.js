import React from 'react'
import Image from 'next/image';

function Banner4() {
  return (
    <div className='banner4'>
        <section className='b4-img'>
            <Image src='https://mhfed.appiness.cc/_next/image?url=%2Fimages%2FhomepageEmergencyContact2.png&w=640&q=75'
            alt='asd'
            width={700}
            height={550} />
        </section>
        <section className='content'>
            <h1>Need Help Contact Emergency?</h1>
            <h3>Our Experts are here to help you</h3>
            <h3>080-40091200</h3>
        </section>

    </div>
  )
}

export default Banner4