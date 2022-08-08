import React from 'react'
import Image from 'next/image';


function Packages() {
    return (
        <div className='packages'>
            <section className='sect1'>
                <div className='img'>
                    <div className='image'>
                        <Image src='https://mhfed.appiness.cc/icons/homepageHeadingsIcon1.svg' alt='asdf'
                            width={100}
                            height={100} />
                    </div>
                </div>
                <h1>Popular Health Checkup Packages</h1>
                <p style={{cursor: 'pointer'}}>View all</p>
            </section>
            <section className='sect2'>
                <div style={{cursor: 'pointer'}}>
                    <div className='img'>
                        <Image src='https://mhfed.appiness.cc/_next/image?url=%2Fimages%2FhealthPackage1.png&w=1920&q=75' alt='asdf'
                            width={400}
                            height={250} />
                    </div>
                    <h2>Manipal Geriatric Health Check (For Men) MMH</h2>
                    <p>Rs 6,500</p>
                </div>
                <div style={{cursor: 'pointer'}}>
                    <div className='img'>
                        <Image src='https://mhfed.appiness.cc/_next/image?url=%2Fimages%2FhealthPackage1.png&w=1920&q=75' alt='asdf'
                            width={400}
                            height={250} />
                    </div>
                    <h2>Manipal Geriatric Health Check (For Men) MMH</h2>
                    <p>Rs 5,300</p>
                </div>
                <div style={{cursor: 'pointer'}}>
                    <div className='img'>
                        <Image src='https://mhfed.appiness.cc/_next/image?url=%2Fimages%2FhealthPackage1.png&w=1920&q=75' alt='asdf'
                            width={400}
                            height={250} />
                    </div>
                    <h2>Manipal Geriatric Health Check (For Men) MMH</h2>
                    <p>Rs 1,500</p>
                </div>
            </section>
            
        </div>
    )
}

export default Packages