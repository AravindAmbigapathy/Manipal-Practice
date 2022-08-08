import React, { useState } from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import Image from 'next/image';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import axios from "axios";
import { useCookies } from "react-cookie";
import { CookiesProvider } from 'react-cookie';
import { addData } from "../redux/action/action";
import { useDispatch, useSelector } from "react-redux";

function LoginSignin(props) {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    // const dispatch = useDispatch();

    const [cookie, setCookie] = useCookies(['token']);
    const [mobile, setMobile] = useState('')
    const [mobile1, setMobile1] = useState('')
    const [otp, setotp] = useState('')
    const [otp1, setotp1] = useState('')
    const [user, setuser] = useState('signUp')
    const [signup, setsignup] = useState('mobile')
    const [signin, setsignin] = useState('mobile1')
    const [id, setId] = useState('')
    const [id1, setId1] = useState('')
    const [details, setdetails] = useState({
        user_id: '',
        first_name: "",
        last_name: "",
        gender: "",
        email: ""
    })
    const [userDetails, setuserDetails] = useState({
        first_name: '1',
        last_name: '2',
        mobile: '3',
        email: '4',
        gender: '5'
    })

    const closeHandler = () => {
        setVisible(false);
        // console.log("closed");
    };

    const handleChange = event => {
        setMobile(event.target.value);
    };
    const handleChange1 = event => {
        setotp(event.target.value);
    };
    const handleChanging = event => {
        setMobile1(event.target.value);
    };

    const handleChanging1 = event => {
        setotp1(event.target.value);
    };

    const getMobile = () => {
        console.log(mobile)
        axios.post('https://mhbed.appiness.cc/api/user/signup/', {
            "mobile": mobile
        })
            .then(function (response) {
                console.log(response.data.data.id)
                setId(response.data.data.id)
                setsignup('otp')
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    // console.log(a);

    const otpverify = () => {
        console.log(id)
        console.log(otp)
        axios.post('https://mhbed.appiness.cc/api/user/signup_verify_otp/', {
            "user_id": id,
            "password": otp
        })
            .then(function (response) {
                console.log(response);
                setsignup('detail')
                setdetails({ ...details, user_id: id })

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const collectDetails = (e) => {
        console.log(id)
        // console.log(details)
        let gender
        if (details.gender === 'Male') {
            gender = 'M'
        } else if (details.gender === 'Female') {
            gender = 'F'
        } else if (details.gender === 'Intermediate') {
            gender = 'I'
        } else if (details.gender === 'Unknown') {
            gender = 'U'
        }
        axios.post('https://mhbed.appiness.cc/api/user/basic-details-update/', {
            user_id: details.user_id,
            first_name: details.first_name,
            last_name: details.last_name,
            gender: gender,
            email: details.email
        })
            .then(function (response) {
                console.log(response);
                console.log(response.data.data.first_name);
                setuserDetails({
                    ...userDetails,
                    first_name: response.data.data.first_name,
                    last_name: response.data.data.last_name,
                    mobile: response.data.data.mobile,
                    email: response.data.data.email,
                    gender: response.data.data.gender
                })
                props.setuserData({
                    ...userDetails,
                    first_name: response.data.data.first_name,
                    last_name: response.data.data.last_name,
                    mobile: response.data.data.mobile,
                    email: response.data.data.email,
                    gender: response.data.data.gender,
                    token: response.data.token
                })
                closeHandler()
                console.log(userDetails)
                // dispatch(addData(userDetails))

                // document.cookie = `token=${response.data.token}`;
            })
            .catch(function (error) {
                
                console.log(error);
            });
    }
    const signinGetMobile = () => {
        console.log(mobile1)
        axios.post('https://mhbed.appiness.cc/api/user/login/', {
            "mobile": mobile1
        })
            .then(function (response) {
                console.log(response.data.data.id)
                setId1(response.data.data.id)
                setsignin('otp1')
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const signinOtpverify = () => {
        console.log(id1)
        console.log(otp1)
        axios.post('https://mhbed.appiness.cc/api/user/login_verify_otp/', {
            "user_id": id1,
            "mobile": mobile1,
            "password": otp1
        })
            .then(function (response) {
                console.log(response);
                axios.post('https://mhbed.appiness.cc/api/user/login_select_profile/', {
                    "user_id": id1,
                })
                    .then(function (response) {
                        console.log(response);
                        console.log(response.data);
                        setuserDetails({
                            ...userDetails,
                            first_name: response.data.data.first_name,
                            last_name: response.data.data.last_name,
                            mobile: response.data.data.mobile,
                            email: response.data.data.email,
                            gender: response.data.data.gender
                        })
                        console.log(userDetails)
                        props.setuserData({
                            ...userDetails,
                            first_name: response.data.data.first_name,
                            last_name: response.data.data.last_name,
                            mobile: response.data.data.mobile,
                            email: response.data.data.email,
                            gender: response.data.data.gender,
                            token: response.data.token
                        })
                        // document.cookie = `token=${response.data.token}`;
                        closeHandler()
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    const oldUser = () => {
        setuser('signIn')
    }

    const NewUser = () => {
        setuser('signUp')

    }






    return (
        <div className="LoginModal">
            <Button auto shadow onClick={handler}>
                Login / Signup
            </Button>
            <Modal
                width="1000px"
                closeButton
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <div className="modal">
                    <section className="image">
                        <Image
                            src="https://mhfed.appiness.cc/icons/manipalHospitalsLogo.svg"
                            height={150}
                            alt="Picture of the author"
                            width={150}
                        />
                    </section>
                    {
                        signup === 'mobile' && user === 'signUp' ?
                            <section className="content"  >
                                <h1>Sign Up</h1>
                                <h2>Welcome to Life’s On Manipal.</h2>
                                <hr />
                                <form>
                                    <label>Enter Mobile Number</label><br />
                                    <span>+91</span>
                                    <input type='tel'
                                        onChange={handleChange}
                                        value={mobile} />
                                    <hr />
                                </form>
                                <button className="signin-btn" onClick={getMobile}>Sign up <AiOutlineArrowRight /></button>
                                <hr />
                                <div>Already registered ?<span onClick={oldUser}>Sign in.</span></div>
                                <p>T&C | Privacy Policy</p>

                            </section>
                            : signup === 'otp' && user === 'signUp' ?
                                <section className="otp" >
                                    <h1>  Hi there</h1>
                                    <h2>Signing you in</h2>
                                    <hr />
                                    <p>Please enter the verification code sent to
                                        +91{mobile}</p>
                                    <hr />
                                    <form>
                                        <label>Enter OTP</label><br />

                                        <input type='text'
                                            onChange={handleChange1}
                                            value={otp}
                                            maxLength={6}
                                            minLength={6} />
                                        <hr />
                                        <h6>Resend OTP</h6>
                                    </form>
                                    <button className="verify" onClick={otpverify} >Verify OTP <AiOutlineArrowRight /></button>
                                </section>
                                : signup === 'detail' && user === 'signUp' ?
                                    <section className="detail" >
                                        <h1>Please Enter Your Basic Details</h1>
                                        <hr />
                                        <form>
                                            <div>
                                                <label>First Name*</label><br />
                                                <input type='text'
                                                    value={details.first_name}
                                                    onChange={(e) => setdetails({ ...details, first_name: e.target.value })}

                                                    name='firstname'
                                                />
                                                <hr />
                                            </div>
                                            <div>
                                                <label>Last Name*</label><br />
                                                <input type='text'
                                                    value={details.last_name}
                                                    onChange={(e) => setdetails({ ...details, last_name: e.target.value })}
                                                    name='lastname'
                                                />
                                                <hr />
                                            </div>
                                            <div>
                                                <label>Email ID*</label><br />
                                                <input type='email'
                                                    value={details.email}
                                                    onChange={(e) => setdetails({ ...details, email: e.target.value })}
                                                    name='email'
                                                />
                                                <hr />
                                            </div>
                                            <div>
                                                <label>Gender*</label><br />
                                                <select value={details.gender}
                                                    onChange={(e) => {
                                                        setdetails({
                                                            ...details,
                                                            gender: e.currentTarget.value
                                                        })
                                                    }
                                                    }
                                                    name='gender'>
                                                    <option>--Select--</option>
                                                    <option>Male</option>
                                                    <option>Female</option>
                                                    <option>Intermediate</option>
                                                    <option>Unknown</option>
                                                </select>
                                                <hr />
                                            </div>

                                        </form>
                                        <button className="detailsbutton" onClick={collectDetails}>Next <AiOutlineArrowRight /></button>
                                    </section>
                                    : signin === 'mobile1' && user === 'signIn' ?
                                        <section className="content1" >
                                            <h1>Hi there</h1>
                                            <h2>Welcome to Life’s On Manipal.</h2>
                                            <hr />
                                            <form>
                                                <label>Registered Mobile</label><br />
                                                <span>+91</span>
                                                <input type='tel'
                                                    onChange={handleChanging}
                                                    value={mobile1} />
                                                <hr />
                                            </form>
                                            <button className="signin-btn" onClick={signinGetMobile}>Sign in with OTP <AiOutlineArrowRight /></button>
                                            <hr />
                                            <div>Not registered with us? <span onClick={NewUser}>Sign up.</span></div>
                                            <p>T&C | Privacy Policy</p>
                                        </section>
                                        : signin === 'otp1' && user === 'signIn' ?
                                            <section className="otp1" >
                                                <h1>  Hi there</h1>
                                                <h2>Signing you in</h2>
                                                <hr />
                                                <p>Please enter the verification code sent to
                                                    +91{mobile1}</p>
                                                <hr />
                                                <form>
                                                    <label>Enter OTP</label><br />

                                                    <input type='text'
                                                        onChange={handleChanging1}
                                                        value={otp1}
                                                        maxLength={6}
                                                        minLength={6} />
                                                    <hr />
                                                    <h6>Resend OTP</h6>
                                                </form>
                                                <button className="verify" onClick={signinOtpverify}>Verify OTP <AiOutlineArrowRight /></button>
                                            </section>
                                            :
                                            <section className="others" >

                                            </section>

                    }


                </div>


            </Modal>
        </div>
    );
}
export default LoginSignin