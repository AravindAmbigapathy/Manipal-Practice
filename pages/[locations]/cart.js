import axios from 'axios';
import { getCookie } from 'cookies-next';
import  Router, {useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs';
import Profile from '../../JSON/locationlist.json';
import { Card, Grid, Row, Text } from "@nextui-org/react";
import Link from 'next/link';
import Image from 'next/image';
import { NextResponse } from 'next/server';


function Cart() {
    const [location, setlocation] = useState('location')
    const router = useRouter()
    const { locations } = router.query
    const [loc, setloc] = useState('Turn On Location')
    const [packs, setpacks] = useState([])
    const [header, setheader] = useState('cart')
    const [count, setcount] = useState(0)
    
    useEffect(() => {
        axios.get('https://mhbed.appiness.cc/api/user/cart/list/', {
            headers: {
                Authorization: getCookie("JWT")
            }
        })
            .then((response) => {
                console.log(response.data.data);
                setpacks(response.data.data)
            })
            .catch((error) => {
                Router.push('http://localhost:3000/MMH')
                console.log(error);
            });

    }, [count])



    useEffect(() => {

        for (let i = 0; i < Profile.length; i++) {
            if (locations === Profile[i].code) {
                setloc(Profile[i].name)
            }
        }
    }, [locations])
    
    

    return (
        <div className='cartPage'>
            <header className='heading'>
                <div className='arrow'>
                    <BsArrowLeftShort />
                </div>
                <div className='headingCart'>
                    <p>{!packs.length ? 'cart' : `Booking ${packs.length} Package`}</p>
                    <span>from {loc}</span>
                </div>
            </header>
            <main className='body'>
                <div>

                    {
                        packs.length != 0 ?
                            <section>
                                {packs.map((item, index) => (
                                    <div key={index}>
                                        <div className='cards'>
                                            <p className='pName'>{item.product_details.package_name}</p>
                                            <p >
                                                {item.product_details.gender}
                                            </p>
                                            <div className='tests'>Total tests in package: {item.product_details.included_health_tests.length}</div>
                                            <div className='price'>
                                                <p>Rs. {item.product_details.final_price}</p>
                                                <p className='image'>
                                                    <Image
                                                        src="https://mhfed.appiness.cc/icons/del-icon.svg"
                                                        height={20}
                                                        alt="Picture of the author"
                                                        onClick={() => {
                                                                axios.delete(`https://mhbed.appiness.cc/api/user/cart/delete-item/${item.item_id}/`, {
                                                                    headers: {
                                                                        Authorization: getCookie("JWT")
                                                                    }
                                                                })
                                                                    .then((response) => {
                                                                        console.log(response);
                                                                        setcount(count+1)
                                                                    })
                                                                    .catch((error) => {
                                                                        console.log(error);
                                                                    });
                                                        }}
                                                        width={20} />
                                                </p>
                                            </div>
                                            <div className='footer'>
                                                <p className='select'>
                                                    <select>
                                                        <option>Booking For</option>
                                                    </select>
                                                    <select>
                                                        <option>Select Time & Date</option>
                                                    </select>
                                                </p>
                                                <p className='btn'><button>Confirm & Pay</button></p>

                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                ))}
                            </section>
                            :
                            <div className='empty'>
                                <h2>Hey! Your cart is empty!</h2>
                                <Link href={`http://localhost:3000/${locations}/healthcheckup`}>
                                    <a>Explore Health Checkup Packages</a>
                                </Link>
                                <p></p>
                            </div>
                    }
                </div>
            </main>
        </div>
    )
}

export default Cart