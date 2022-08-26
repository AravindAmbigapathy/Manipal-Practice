import Image from 'next/image'
import React from 'react'
// import {labdiagb1} from '../images/labdiagb1.png'

function Banner1() {
  return (
    <div>
        <Image  src="/labdiagb1.png"
                        height={320}
                        alt="Picture of the author"
                        width={1103} />
    </div>
  )
}

export default Banner1