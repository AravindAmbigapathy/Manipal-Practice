import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Banner1 from '../../Components1/Banner1';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { BsCart2 } from 'react-icons/bs';

import dynamic from 'next/dynamic'
import { Suspense } from 'react'


function Labdiagnostics() {
    const [testPacks, settestPack] = useState('')
    const [testPacks2, settestPack2] = useState('')
    const router = useRouter()
    const { locations } = router.query

    const DynamicHeader = dynamic(() => import('../../Components1/Banner1'), {
        suspense: true,
    })
    useEffect(() => {
        const api = () => {
            axios.get(`https://mhbed.appiness.cc/api/user/health-checkup/health-pack-list/?hospital_code=${locations}&next_page_id=1&page_size=3&is_popular=false`)
                .then((response) => {
                    settestPack(response.data.results);
                    settestPack2(response.data.results);
                    console.log(response.data);
                }).catch((error) => {
                    console.log(error);
                });
            axios.get(`https://mhbed.appiness.cc/api/user/health-checkup/health-pack-list/?hospital_code=${locations}&next_page_id=2&page_size=3&is_popular=false`)
                .then((response) => {
                    console.log(response.data);
                }).catch((error) => {
                    console.log(error);
                });
        }
        api()
    }, [locations])

    return (
        <div className='labDiag'>
            <section className='header'>
                <div className='fheader'>
                    <div className='arrow'>
                        <BsArrowLeftShort />
                    </div>
                    <div>
                        <div>
                            <h1>Lab & Diagnostics</h1>
                            <p>Find a suitable package</p>
                        </div>
                    </div>
                </div>
                <div className='sheader'>
                    <div>
                        <input
                            placeholder='Search in test, vaccines, home care...'

                        />
                        <hr />
                        <span className='filterIcon'>
                            <Image
                                src="https://mhfed.appiness.cc/icons/settings.svg"
                                height={40}
                                alt="Picture of the author"
                                width={15}
                            />
                        </span>

                    </div>
                </div>
            </section>
            <section className='banner1'>
                <Suspense fallback={`Loading...`}>
                    <DynamicHeader />
                </Suspense>
                {/* <Banner1 /> */}
            </section>
            <section className='categry'>
                <header className='header'>
                    <h1>Popular Categories</h1>
                </header>
                <main className='categeries'>
                    <div>
                        <Image src="/covid19.png"
                            height={170}
                            alt="Picture of the author"
                            width={170}
                        />
                    </div>
                    <div>
                        <Image src="/seniorCitizen.png"
                            height={170}
                            alt="Picture of the author"
                            width={170}
                        />
                    </div>
                    <div>
                        <Image src="/thyroid.png"
                            height={170}
                            alt="Picture of the author"
                            width={170}
                        />
                    </div>
                    <div>
                        <Image src="/Fever.png"
                            height={170}
                            alt="Picture of the author"
                            width={170}
                        />
                    </div>
                    <div>
                        <Image src="/Bone.png"
                            height={170}
                            alt="Picture of the author"
                            width={170}
                        />
                    </div>
                    <div>
                        <Image src="/heart.png"
                            height={170}
                            alt="Picture of the author"
                            width={170}
                        />
                    </div>

                </main>
            </section>
            <section className='popularTest'>
                <h1>Popular Routine Lab Tests</h1>
                {testPacks ?
                    <Grid.Container gap={2} justify="flex-start">
                        {testPacks.map((item, index) => (
                            <Grid xs={10} sm={4} key={index}>
                                <Card isPressable>
                                    <Card.Body css={{ p: 0 }}>
                                        <Card.Image
                                            src='/cardimage.png'
                                            objectFit="cover"
                                            width="100%"
                                            height={300}
                                            alt={item.title}
                                        />
                                        <div className='ccontent'>

                                            <Row wrap="block" justify="space-between" >
                                                <Text margin size={20} color='rgb(55,65,81)'>{item.package_name}</Text>
                                            </Row>
                                            <Row wrap="block" justify="space-between" >
                                                <Text margin>{item.gender ? item.gender : 'Male/Female'}</Text>
                                            </Row>
                                            <Row wrap="block" justify="space-between" >
                                                <Text margin color='primary'>{item.hospital_location}</Text>
                                            </Row>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer css={{ justifyItems: "flex-start" }}>
                                        <Row wrap="wrap" justify="space-between" align="center">
                                            <Text>
                                                Rs. {item.price}
                                            </Text>
                                        </Row>
                                        <Row>

                                            <button className='btn1' id={`c${index}`} onClick={() => {
                                                // addToCart()
                                                adding(index, item.id, item.price, item.final_price)
                                            }}  >Add <BsCart2 /></button>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Grid>
                        ))}
                    </Grid.Container>
                    :
                    <div>
                        Not available
                    </div>
                }
            </section>
            <section className='popularTest'>
                <h1>Lab Tests</h1>
                {testPacks ?
                    <Grid.Container gap={2} justify="flex-start">
                        {testPacks2.map((item, index) => (
                            <Grid xs={10} sm={4} key={index}>
                                <Card isPressable>
                                    <Card.Body css={{ p: 0 }}>
                                        <Card.Image
                                            src='/cardimage2.png'
                                            objectFit="cover"
                                            width="100%"
                                            height={300}
                                            alt={item.title}
                                        />
                                        <div className='ccontent'>

                                            <Row wrap="block" justify="space-between" >
                                                <Text margin size={20} color='rgb(55,65,81)'>{item.package_name}</Text>
                                            </Row>
                                            <Row wrap="block" justify="space-between" >
                                                <Text margin>{item.gender ? item.gender : 'Male/Female'}</Text>
                                            </Row>
                                            <Row wrap="block" justify="space-between" >
                                                <Text margin color='primary'>{item.hospital_location}</Text>
                                            </Row>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer css={{ justifyItems: "flex-start" }}>
                                        <Row wrap="wrap" justify="space-between" align="center">
                                            <Text>
                                                Rs. {item.price}
                                            </Text>
                                        </Row>
                                        <Row>

                                            <button className='btn1' id={`c${index}`} onClick={() => {
                                                // addToCart()
                                                adding(index, item.id, item.price, item.final_price)
                                            }}  >Add <BsCart2 /></button>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Grid>
                        ))}
                    </Grid.Container>
                    :
                    <div>
                        Not available
                    </div>
                }
            </section>
            <section className='fas'>
                <h1>FAQ’s</h1>
                <div>
                    <div className='border'>
                        <div className='flexing'>
                            <p>Lorem Ipsum is simply dummy text of the printing?</p>
                            <div><RiArrowDropDownLine /></div>
                        </div>
                    </div>
                    <div className='border'>
                        <div className='flexing'>
                            <p>Lorem Ipsum is simply dummy text of the printing?</p>
                            <div><RiArrowDropDownLine /></div>
                        </div>
                    </div>
                    <div className='border'>
                        <div className='flexing'>
                            <p>Lorem Ipsum is simply dummy text of the printing?</p>
                            <div><RiArrowDropDownLine /></div>
                        </div>
                    </div>
                    <div className='border'>
                        <div className='flexing'>
                            <p>Lorem Ipsum is simply dummy text of the printing?</p>
                            <div><RiArrowDropDownLine /></div>
                        </div>
                    </div>
                    <div className='border'>
                        <div className='flexing'>
                            <p>Lorem Ipsum is simply dummy text of the printing?</p>
                            <div><RiArrowDropDownLine /></div>
                        </div>
                    </div>
                </div>


            </section>

        </div>
    )
}

export default Labdiagnostics