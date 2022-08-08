import React from 'react'
import Image from 'next/image';

function Banner3() {
    return (
        <div className='banner3'>
            <main className='main'>
                <section className='sec'>
                    <h1>Choose Manipal</h1>
                    <h1>Choose a world of good health</h1>
                </section>
                <section className='sec1'>
                    From starting out as a vision of one mans dream to the reality of revolutionizing the health care industry,
                    we are proud to be the flag bearers of this paradigm shift with our clinical excellence,
                    patient centricity and ethical practices integral to healthcare.
                </section>
                <summary className='flexing'>
                    <div className='sub-flex'>
                        <section className='img'>
                            <Image src='https://mhfed.appiness.cc/icons/homepageExpYrs.svg' alt='asdf'
                                width='40'
                                height='40' />
                        </section>
                        <section className='cnt'>
                            <h1>65+</h1>
                            <p>years of experience</p>
                        </section>
                    </div>
                    <div className='sub-flex'>
                        <section className='img'>
                            <Image src='https://mhfed.appiness.cc/icons/homepageChooseManipal2.svg' alt='asdf'
                                width='40'
                                height='40' />
                        </section>
                        <section className='cnt'>
                            <h1>30</h1>
                            <p>million lives touched</p>
                        </section>
                    </div>
                    <div className='sub-flex'>
                        <section className='img'>
                            <Image src='https://mhfed.appiness.cc/icons/homepageChooseManipal3.svg' alt='asdf'
                                width='40'
                                height='40' />
                        </section>
                        <section className='cnt'>
                            <h1>60</h1>
                            <p>countries helped</p>
                        </section>
                    </div>
                    <div className='sub-flex'>
                        <section className='img'>
                            <Image src='https://mhfed.appiness.cc/icons/homepageChooseManipal4.svg' alt='asdf'
                                width='40'
                                height='40' />
                        </section>
                        <section className='cnt'>
                            <h1>1600</h1>
                            <p>beds in 16 hospitals</p>
                        </section>
                    </div>
                    <div className='sub-flex'>
                        <section className='img'>
                            <Image src='https://mhfed.appiness.cc/icons/cities.svg' alt='asdf'
                                width='40'
                                height='40' />
                        </section>
                        <section className='cnt'>
                            <h1>15+</h1>
                            <p>serving cities</p>
                        </section>
                    </div>
                    <div className='sub-flex'>
                        <section className='img'>
                            <Image src='https://mhfed.appiness.cc/icons/lives.svg' alt='asdf'
                                width='40'
                                height='40' />
                        </section>
                        <section className='cnt'>
                            <h1>45+</h1>
                            <p>million lives touched</p>
                        </section>
                    </div>

                </summary>
            </main>
        </div>
    )
}

export default Banner3