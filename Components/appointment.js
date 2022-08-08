import React from 'react'
import Image from 'next/image';

function Appointment() {
    return (
        <div className='appointment'>
            <div className='content'>
                <h2>Dont Delay care For you and those you love</h2>
                <h3>Consult doctors online</h3>
                <button style={{cursor: 'pointer'}}>Book an Appointment</button>
            </div>
            <div className='image'>
                <Image
                    src='https://mhfed.appiness.cc/_next/image?url=%2Fimages%2FhomepageHealthcare.png&w=256&q=75'
                    alt="Picture"
                    width='250'
                    height='250'
                />

            </div>
        </div>
    )
}

export default Appointment