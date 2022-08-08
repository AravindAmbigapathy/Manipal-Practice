import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <div className='footers'>
      <div className='footer'>
        <section className='logo'>
          <Image src='https://mhfed.appiness.cc/images/mh_white_logo.svg'
            alt='asd'
            width={250}
            height={100} />
          <p>Appointment Helpline: 1800 102 5555</p>
          <p>Email:info@manipalhospitals.com</p>
          <main className='social'>
            <Image src='https://mhfed.appiness.cc/icons/facebookIcon.svg'
              alt='asd'
              width={60}
              height={40} />
            <Image src='https://mhfed.appiness.cc/icons/instagramIcon.svg'
              alt='asd'
              width={60}
              height={40} />
            <Image src='https://mhfed.appiness.cc/icons/twitterIcon.svg'
              alt='asd'
              width={60}
              height={40} />
            <Image src='https://mhfed.appiness.cc/icons/youtubeIcon.svg'
              alt='asd'
              width={60}
              height={40} />
          </main>
          <section className='btn1'>
            <p>
              <Image src='https://mhfed.appiness.cc/icons/playstoreIcon.svg'
                alt='asd'
                width={30}
                height={30} /></p>
            <div>Get It From <br /> Play Store</div>
          </section>
          <section className='btn1'>
            <p>
              <Image src='https://mhfed.appiness.cc/icons/appleIcon.svg'
                alt='asd'
                width={30}
                height={30} /></p>
            <div>Get It From <br /> Play Store</div>
          </section>

        </section>
        <section className='location'>
          <h6> Locations</h6>
          <li>
            <Link href='http://localhost:3000/MHW'>
              <a> Manipal Hospitals-Whitefield, Bengaluru</a>
            </Link>
          </li>
          <li>
            <Link href='http://localhost:3000/MHB'>
              <a>  Manipal Hospitals-Old airport Road, Bengaluru</a>
            </Link>
          </li>
          <li>
            <Link href='http://localhost:3000/MCB'>
              <a > Manipal Hospitals-Brookefield, Bengaluru</a>
            </Link>
          </li>
          <li>
            <Link href='http://localhost:3000/MMH'>
              <a>Manipal Hospitals-Jayanagar, Bengaluru</a>
            </Link>
          </li>
          <li>
            <Link href='http://localhost:3000/MCJ'>
              <a > Manipal Hospitals-MH Clinic - Jayanagar - Bengaluru</a>
            </Link>
          </li>
          <li>
            <Link href='http://localhost:3000/MHN'>
              <a> Manipal Hospitals-Malleshwaram</a>
            </Link>
          </li>
          <li>
            <Link href='http://localhost:3000/MYB'>
              <a >   Manipal Hospitals - Yeshwanthpur - Bengaluru</a>
            </Link>
          </li>
          <li>
            <Link href='http://localhost:3000/MHH'>
              <a > Hebbal - Bengaluru</a>
            </Link>
          </li>
          <li>
            <Link href='http://localhost:3000/MSB'>
              <a >  Manipal Hospitals - Sarjapur Road - Bengaluru</a>
            </Link>
          </li>
          <li>
            <Link href='http://localhost:3000/MVB'>
              <a > Manipal Hospitals - Varthur Road - Bengaluru</a>
            </Link>
          </li>
          <li>
            <Link href='http://localhost:3000/MBD'>
              <a >  Manipal Hospitals - Doddaballapur - Bengaluru</a>
            </Link>
          </li>
          <li>
            <Link href='http://localhost:3000/MHM'>
              <a > Manipal Hospitals - Millers Road</a>
            </Link>
          </li>
        </section>
        <section className='lct'>
          <li>
            <Link href='http://localhost:3000/MMY'>
              <a> Manipal Hospitals - Mysore</a>
            </Link>
          </li>
          <li>
            <Link href='http://localhost:3000/KMC'>
              <a> KMC Hospitals–Mangalore</a>
            </Link>
          </li>
          <li>
            <Link href='http://localhost:3000/MHD'>
              <a> Manipal Hospitals-Dwarka</a>
            </Link>
          </li>
          <li>
            <Link href='http://localhost:3000/MPD'>
              <a>  Manipal Hospitals - Gurugram</a>
            </Link>
          </li>
          <li>
            <Link href='http://localhost:3000/MGD'>
              <a> Manipal Hospitals - Ghaziabad</a>
            </Link>
          </li>
          <li>
            <Link href='http://localhost:3000/MPP'>
              <a> Manipal Hospitals - Patiala</a>
            </Link>
          </li>
          <li>
          <Link href='http://localhost:3000/MHJ'>
              <a> Manipal Hospitals-Jaipur</a>
            </Link>
            </li>
          <li>
          <Link href='http://localhost:3000/MHG'>
              <a> Manipal Hospitals-Goa</a>
            </Link>
            </li>
          <li>
          <Link href='http://localhost:3000/MHV'>
              <a> Manipal Super Speciality Hospitals-Vijayawada</a>
            </Link>
            </li>
          <li>
          <Link href='http://localhost:3000/MHS'>
              <a> Manipal Hospitals-Salem</a>
            </Link>
           </li>
          <li>
          <Link href='http://localhost:3000/MKP'>
              <a> Manipal Hospitals - Kharadi - Pune</a>
            </Link>
            </li>
          <li>
          <Link href='http://localhost:3000/MSK'>
              <a>  Manipal Hospitals - Salt Lake - Kolkata</a>
            </Link>
           </li>
        </section>
        <section className='serv'>
          <div>
            <h6>Our Services</h6>
            <p>Health Checkup</p>
            <p>Doctor Appointment</p>
          </div>
          <div>
            <h6>About Manipal</h6>
            <p>Main Website</p>
            <p>About Us</p>
          </div>
          <div>
            <h6>Talk to us</h6>
            <p>Contact Us</p>
          </div>

        </section>
      </div>
      <div className='footer1'>
        <li>BANGALORE</li>
        <hr />
        <li>DELHI</li>
        <hr />
        <li>GOA</li>
        <hr />
        <li>JAIPUR</li>
        <hr />
        <li>MANGALORE</li>
        <hr />
        <li>SALEM</li>
        <hr />
        <li>VIJAYAWADA</li>
        <hr />
        <li>PUNE</li>
        <hr />
        <li>KOLKATA</li>
        <hr />
        <li>PATIALA</li>
        <hr />
        <li>MYSORE</li>
        <hr />
        <li>GURUGRAM</li>
        <hr />
        <li>GHAZIABAD</li>
      </div>
      <div className='copy'>
        <p>Copyright © 2022 Manipal Hospitals - All Rights Reserved</p>
        <section className='list'>
          <li> CSR Policy .</li>
          <li>Disclaimer .</li>
          <li>Privacy Policy .</li>
          <li>T & C</li>
        </section>
      </div>
    </div>
  )
}

export default Footer