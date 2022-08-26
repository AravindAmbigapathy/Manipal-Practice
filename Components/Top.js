import React from 'react'
import Image from 'next/image';


function Top() {
    return (
        <div className='top'>
            <div className='image'>
                <Image
                    src='https://mhfed.appiness.cc/_next/image?url=https%3A%2F%2Fd2q7nf30jxm7vv.cloudfront.net%2Fhome_page%2Fbanners%2F2a9950b0a56b4c4a953dd0b42098790a.png&w=1920&q=75'
                    alt="Picture of the author"
                    width={1520}
                    height={600}
                    // layout="fill"
                />
            </div>
            <h1>Health Care, from the comfort of your home</h1>
        </div>
    )
}

export default Top