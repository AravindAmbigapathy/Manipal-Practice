import Image from 'next/image'
import React from 'react'

function DoctorOppointment() {
  return (
    <div className='DoctorApntmt'>
       <section className='image'>
      <Image
        src="https://mhfed.appiness.cc/_next/image?url=%2Fimages%2Fapp-hero.png&w=1920&q=75"
        height={500}
        alt="Picture of the author"
        width={1400}
      />
      </section>
    </div>
  )
}

export default DoctorOppointment