import React from 'react'
import Image from 'next/image';


function Services() {
  return (
    <div>
      <div className='service'>
        <div className='title'>
          <div className='sec'>
            <p className='img'>
              <Image
                src='https://mhfed.appiness.cc/icons/homepageHeadingsIcon1.svg' alt='asdf'
                width={100}
                height={100} />
            </p>
          </div>
            <h1>Our Services</h1>
        </div>
        <div className='services'>
          <div className='sec1' style={{cursor: 'pointer'}}>
            <section className='img'>
              <p className='image'>
                <Image src='https://mhfed.appiness.cc/icons/homepageHeadingsIcon1.svg' alt='asdf'
                  width={100}
                  height={100} />
              </p>
            </section>
            <section className='para'>
              <h1>Health Checkup</h1>
              <small>At home options</small>
              <p>Choose the best health check-up packages that match your needs</p>
              <p className='package'>View Packages</p>
            </section>
          </div>
          <div className='sec1' style={{cursor: 'pointer'}}>
            <section className='img'>
              <p className='image'>
                <Image src='https://mhfed.appiness.cc/icons/doctor.svg' alt='asdf'
                  width={100}
                  height={100} />
              </p>
            </section>
            <section className='para'>
              <h1>Doctor consultation</h1>
              <small>Home equipments available</small>
              <p>Choose the best health check-up packages that match your needs</p>
              <p className='package'>View Doctors</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services