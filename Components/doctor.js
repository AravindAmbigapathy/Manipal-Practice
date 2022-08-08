import React from 'react'
import Image from 'next/image';

function Doctor() {
    return (
        <div className='doctor'>
            <div className='title'>
                <section className='sect1'>
                    <div className='img'>
                        <div className='image'>
                            <Image src='https://mhfed.appiness.cc/icons/homepageHeadingsIcon1.svg' alt='asdf'
                                width={100}
                                height={100} />
                        </div>
                    </div>
                    <h1>Consult Doctors Online</h1>
                    <p style={{ cursor: 'pointer' }}>View all</p>
                </section>
            </div>
            <div className='categry'>
                <div className='cat'>
                    <section className='t-img'>
                        <Image src='https://mhfed.appiness.cc/icons/spacilityIcons/cancerIcon.svg' alt='asdf'
                            width={80}
                            height={80} />
                    </section>
                    <h5>Cancer Care</h5>
                </div>
                <div className='cat'>
                    <section className='t-img'>
                        <Image src='https://mhfed.appiness.cc/icons/spacilityIcons/heartIcon.svg' alt='asdf'
                            width={80}
                            height={80} />
                    </section>
                    <h5>Cancer Care</h5>
                </div>
                <div className='cat'>
                    <section className='t-img'>
                        <Image src='https://mhfed.appiness.cc/icons/spacilityIcons/orthIcon.svg' alt='asdf'
                            width={80}
                            height={80} />
                    </section>
                    <h5>Cancer Care</h5>
                </div>
                <div className='cat'>
                    <section className='t-img'>
                        <Image src='https://mhfed.appiness.cc/icons/spacilityIcons/brainIcon.svg' alt='asdf'
                            width={80}
                            height={80} />
                    </section>
                    <h5>Cancer Care</h5>
                </div>
                <div className='cat'>
                    <section className='t-img'>
                        <Image src='https://mhfed.appiness.cc/icons/spacilityIcons/stomachIcon.svg' alt='asdf'
                            width={80}
                            height={80} />
                    </section>
                    <h5>Cancer Care</h5>
                </div>

            </div>
        </div>
    )
}

export default Doctor













// .packages .sect2{
//     display: block;
//   }
//   .doctor .categry {
//     display: block;
//     width: 100%;
//     text-align: -webkit-center;
//   }
// .doctor .categry .cat h5 {
//   width: 100%;
// }
// .doctor .categry .cat {
//   justify-content: center;
// }
// banner3 .main .flexin{
//   flex-direction: inherit;
// }