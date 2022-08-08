// import { MdOutlinePersonOutline } from 'react-icons/md';
// import { BsCart2 } from 'react-icons/bs';
// import { BsFillTelephoneFill } from 'react-icons/bs';
// import { BsCameraVideo } from 'react-icons/bs';
// import { GoLocation } from 'react-icons/go';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import Image from 'next/image';
// import { useEffect, useState } from 'react';
// import Profile from "../JSON/locationlist.json";


// function Navbar() {

//     const router = useRouter()
//     const { locations } = router.query

//     const [loc, setloc] = useState('Turn On Location')

//     console.log(Profile)

//     useEffect(() => {

//         for (let i = 0; i < Profile.length; i++) {
//             if (locations === Profile[i].code) {
//                 setloc(Profile[i].name)
//             }
//         }
//     }, [locations])

//     // console.log(location)
//     return (
//         <div>
//             <nav className="nav1">
//                 <span className='logo'>
//                     <Image
//                         src="https://mhfed.appiness.cc/icons/manipalHospitalsLogo.svg"
//                         height={40}
//                         alt="Picture of the author"
//                         width={100}
//                     />
//                 </span>
//                 <div className='navHalf'>
//                     <GoLocation />
//                     <input value={loc} className='select' />

//                     <div className='name'>
//                         <p>Hello, User <span className="small"> Hope you&apos;re well</span></p>
//                     </div>
//                     <span className='profile-icon'><MdOutlinePersonOutline /></span>
//                     <span className='profile-icon'><BsCart2 /></span>
//                 </div>

//             </nav>
//             <nav className='nav2'>
//                 <span className='links'>
//                     <Link href={`/${locations}/healthcheckup`}>
//                         <a>Health Checkup Packages</a>
//                     </Link>
//                     <Link href={`/${locations}/appointment`}>
//                         <a>Doctor Appointment</a>
//                     </Link>
//                 </span>
//                 <span className='btns'>
//                     <button className='spt-btn'><span className='icons'> <BsFillTelephoneFill /></span>Support</button>
//                     <button className='vdo-btn'> <span className='icons'><BsCameraVideo /></span>Video Consultation</button>
//                 </span>
//             </nav>
//         </div>
//     )
// }

// export default Navbar