import { MdOutlinePersonOutline } from 'react-icons/md';
import { BsCart2 } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { BsCameraVideo } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Profile from "../JSON/locationlist.json";
import LoginSignin from './LoginSignin';
import { Dropdown, Avatar, Text, Grid, User } from "@nextui-org/react";
import { useCookies } from 'react-cookie';
import { locationSlash } from 'fontawesome';
import axios from 'axios';
import React from "react";
import { Modal, Button, Input, Row, Checkbox } from "@nextui-org/react";

function Navbar(props) {
    const router = useRouter()
    const { locations } = router.query
    const [cookie, setCookie, removeCookie] = useCookies(['token']);

    const [loc, setloc] = useState('Turn On Location')
    const [loggedin, setloggedin] = useState('')
    const [userData, setuserData] = useState({
        first_name: '',
        last_name: '',
        mobile: '',
        email: '',
        gender: '',
        token: ''
    })
    const [curLoc, setcurLoc] = useState('')


    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };

    setCookie('token', userData.token, { path: '/' });

    // console.log(Profile)

    useEffect(() => {

        for (let i = 0; i < Profile.length; i++) {
            if (locations === Profile[i].code) {
                setloc(Profile[i].name)
            }
        }
    }, [locations])
    // const loggedIn = () => {
    // }
    // console.log(userData)

    const loggingOut = () => {
        removeCookie('token');
        console.log('out')
    }

    const packages = () => {
        console.log('calling')
        axios.get(`https://mhbed.appiness.cc/api/user/health-checkup/health-pack-list/?hospital_code=${locations}&next_page_id=1&page_size=12&is_popular=false`, {
            hospital_code: 'MHB',
            next_page_id: 1,
            page_size: 12,
            is_popular: false
        })
            .then((response) => {
                console.log(response.data.results);
                props.setHealthPackages(response.data.results)

                console.log('called1')
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <nav className="nav1">
                <span className='logo'>
                    <Image
                        src="https://mhfed.appiness.cc/icons/manipalHospitalsLogo.svg"
                        height={50}
                        alt="Picture of the author"
                        width={120}
                    />
                </span>
                <div className='navHalf'>

                    <button className='select' onClick={handler}  > <GoLocation /> {loc}</button>
                    <Modal
                        closeButton
                        width="800px"
                        aria-labelledby="modal-title"
                        open={visible}
                        onClose={closeHandler}
                    >
                        <Modal.Header >
                            <Text id="modal-title" size={30} >
                                Your Preferred Location
                            </Text>
                            <hr />
                        </Modal.Header>
                        <Modal.Body>
                            <div className='modalLocation' >
                                <section className='location' >
                                    <li onClick={closeHandler}>
                                        <Link href='http://localhost:3000/MHW'>
                                            <a>Whitefield, Bengaluru</a>
                                        </Link>
                                    </li >
                                    <hr />
                                    <li onClick={closeHandler}>
                                        <Link href='http://localhost:3000/MHB'>
                                            <a>Old airport Road, Bengaluru</a>
                                        </Link>
                                    </li>
                                    <hr />
                                    <li onClick={closeHandler}>
                                        <Link href='http://localhost:3000/MCB'>
                                            <a >Brookefield, Bengaluru</a>
                                        </Link>
                                    </li>
                                    <hr />
                                    <li onClick={closeHandler}>
                                        <Link href='http://localhost:3000/MMH'>
                                            <a>Jayanagar, Bengaluru</a>
                                        </Link>
                                    </li>
                                    <hr />
                                    <li onClick={closeHandler}>
                                        <Link href='http://localhost:3000/MCJ'>
                                            <a >MH Clinic - Jayanagar - Bengaluru</a>
                                        </Link>
                                    </li>
                                    <hr />
                                    <li onClick={closeHandler}>
                                        <Link href='http://localhost:3000/MHN'>
                                            <a>Malleshwaram - Bengaluru</a>
                                        </Link>
                                    </li>
                                    <hr />
                                    <li onClick={closeHandler}>
                                        <Link href='http://localhost:3000/MYB'>
                                            <a >Yeshwanthpur - Bengaluru</a>
                                        </Link>
                                    </li>
                                    <hr />
                                    <li onClick={closeHandler}>
                                        <Link href='http://localhost:3000/MHH'>
                                            <a > Hebbal - Bengaluru</a>
                                        </Link>
                                    </li>
                                    <hr />
                                    <li onClick={closeHandler}>
                                        <Link href='http://localhost:3000/MSB'>
                                            <a >Sarjapur Road - Bengaluru</a>
                                        </Link>
                                    </li>
                                    <hr />
                                    <li onClick={closeHandler}>
                                        <Link href='http://localhost:3000/MVB'>
                                            <a >Varthur Road - Bengaluru</a>
                                        </Link>
                                    </li>
                                    <hr />
                                    <li onClick={closeHandler}>
                                        <Link href='http://localhost:3000/MBD'>
                                            <a >Doddaballapur - Bengaluru</a>
                                        </Link>
                                    </li>
                                    <hr />
                                    <li onClick={closeHandler}>
                                        <Link href='http://localhost:3000/MHM'>
                                            <a >Millers Road - Bengaluru</a>
                                        </Link>
                                    </li>
                                    <hr />
                                </section>
                                <section className='lct'>
                                    <li onClick={closeHandler}>
                                        <Link href='http://localhost:3000/MMY'>
                                            <a>Mysore</a>
                                        </Link>
                                    </li>
                                    <hr />
                                    <li onClick={closeHandler}>
                                        <Link href='http://localhost:3000/KMC'>
                                            <a>Mangalore</a>
                                        </Link>
                                    </li>
                                    <hr />
                                    <li onClick={closeHandler}>
                                        <Link href='http://localhost:3000/MHD'>
                                            <a>Dwarka - Delhi</a>
                                        </Link>
                                    </li>
                                    <hr />
                                    <li onClick={closeHandler}>
                                        <Link href='http://localhost:3000/MPD'>
                                            <a>Gurugram</a>
                                        </Link>
                                    </li>
                                    <hr />
                                    <li onClick={closeHandler}>
                                        <Link href='http://localhost:3000/MGD'>
                                            <a>Ghaziabad</a>
                                        </Link>
                                    </li>
                                    <hr />
                                    <li onClick={closeHandler}>
                                        <Link href='http://localhost:3000/MPP'>
                                            <a>Patiala</a>
                                        </Link>
                                    </li>
                                    <hr />
                                    <li onClick={closeHandler}>
                                        <Link href='http://localhost:3000/MHJ'>
                                            <a>Jaipur</a>
                                        </Link>
                                    </li>
                                    <hr />
                                    <li onClick={closeHandler}>
                                        <Link href='http://localhost:3000/MHG'>
                                            <a>Goa</a>
                                        </Link>
                                    </li>
                                    <hr />
                                    <li onClick={closeHandler}>
                                        <Link href='http://localhost:3000/MHV'>
                                            <a>Vijayawada</a>
                                        </Link>
                                    </li>
                                    <hr />
                                    <li onClick={closeHandler}>
                                        <Link href='http://localhost:3000/MHS'>
                                            <a>Salem</a>
                                        </Link>
                                    </li>
                                    <hr />
                                    <li onClick={closeHandler}>
                                        <Link href='http://localhost:3000/MKP'>
                                            <a>Kharadi - Pune</a>
                                        </Link>
                                    </li>
                                    <hr />
                                    <li onClick={closeHandler}>
                                        <Link href='http://localhost:3000/MSK'>
                                            <a>Salt Lake - Kolkata</a>
                                        </Link>
                                    </li>
                                    <hr />
                                </section>
                            </div>
                        </Modal.Body>
                    </Modal>

                    {userData.first_name !== '' ?
                        <div className='Asignup'>

                            <div className='name'>
                                <p>Hello,{userData.first_name}  <span className="small"> Hope you&apos;re well</span></p>
                            </div>
                            <div className='profile-icon'>
                                <Grid.Container justify="flex-start">
                                    <Grid>
                                        <Dropdown placement="bottom-left">
                                            <Dropdown.Trigger>
                                                <span ><MdOutlinePersonOutline /></span>
                                            </Dropdown.Trigger>
                                            <Dropdown.Menu color="secondary" aria-label="User Actions">
                                                <Dropdown.Item key="profile">
                                                    <MdOutlinePersonOutline /> {userData.first_name}(Default)
                                                    {/* <input type='radio' style={{ marginLeft: '3em' }} /> */}
                                                </Dropdown.Item>
                                                <Dropdown.Item key="logout" color="secondary" withDivider>
                                                    <a href='#' onClick={loggingOut}><FiLogOut />Logout of all accounts</a>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Grid>
                                </Grid.Container>
                            </div>


                            <span className='profile-icon'><BsCart2 /></span>
                        </div>
                        :
                        <div className='Bsignup'>
                            <LoginSignin setuserData={setuserData} />
                        </div>

                    }
                </div>

            </nav >
            <nav className='nav2'>
                <span className='links'>
                    <Link href={`/${locations}/healthcheckup`} >
                        <a ><span onClick={packages}>Health Checkup Packages</span></a>
                    </Link>
                    <Link href={`/${locations}/appointment`}>
                        <a>Doctor Appointment</a>
                    </Link>
                </span>
                <span className='btns'>
                    <button className='spt-btn'><span className='icons'> <BsFillTelephoneFill /></span>Support</button>
                    <button className='vdo-btn'> <span className='icons'><BsCameraVideo /></span>Video Consultation</button>
                </span>
            </nav>
        </div >
    )
}

export default Navbar