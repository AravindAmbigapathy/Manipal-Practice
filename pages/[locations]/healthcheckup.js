import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { BsCart2 } from 'react-icons/bs';
import { BsArrowLeftShort } from 'react-icons/bs';
import Image from 'next/image';
import Profile from "../../JSON/locationlist.json";
import axios from 'axios';
// import Filtering from '../../Components/filtering';
import { getCookie } from 'cookies-next';

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const DynamicHeader = dynamic(() => import('../../Components/filtering'), {
  suspense: true,
})

function HealthCheckup(props) {
  const router = useRouter()
  const { locations } = router.query
  const [loc, setloc] = useState('Turn On Location')
  const [render, setrender] = useState('')
  const [prevDisable, setprevDisable] = useState(true)
  const [nextDisable, setnextDisable] = useState(false)
  const [pageNumber, setpageNumber] = useState(1)
  const [PackNum, setPackNum] = useState('')
  const [searchVal, setsearchVal] = useState('')
  const [added, setadded] = useState('Add')
  // const [addButton, setaddButton] = useState(Add)
  const [first, setfirst] = useState({
    backgroundColor: 'blue',
    color: 'white'
  })
  const [second, setsecond] = useState({
    backgroundColor: 'white',
    color: 'black'
  })

  // page1()
  useEffect(() => {

    for (let i = 0; i < Profile.length; i++) {
      if (locations === Profile[i].code) {
        setloc(Profile[i].name)
      }
    }
  }, [locations])
  const packs = props.healthPackages
  useEffect(() => {
    page1()
    console.log('packs =', packs)
    console.log(packs)
  }, [packs])


  const page1 = () => {
    axios.get(`https://mhbed.appiness.cc/api/user/health-checkup/health-pack-list/?hospital_code=${locations}&next_page_id=1&page_size=12&is_popular=false`, {
      hospital_code: locations,
      next_page_id: 1,
      page_size: 12,
      is_popular: false
    })
      .then((response) => {
        console.log(response.data.results);
        setrender(response.data.results)
        setprevDisable(true)
        setnextDisable(false)
        setfirst({ ...first, backgroundColor: 'blue', color: 'white' })
        setsecond({ ...second, backgroundColor: 'white', color: 'black' })
        setPackNum(response.data.total_results)
        setpageNumber(1)
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const page2 = () => {
    axios.get(`https://mhbed.appiness.cc/api/user/health-checkup/health-pack-list/?hospital_code=${locations}&next_page_id=2&page_size=12&is_popular=false`, {
      hospital_code: locations,
      next_page_id: 2,
      page_size: 12,
      is_popular: false
    })
      .then((response) => {
        console.log(response.data.results);
        setrender(response.data.results)
        setprevDisable(false)
        setnextDisable(true)
        setfirst({ ...first, backgroundColor: 'white', color: 'black' })
        setsecond({ ...second, backgroundColor: 'blue', color: 'white' })
        setpageNumber(2)
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const searchApi = (e) => {
    setsearchVal(e.target.value)
  }

  const checkFilter = (arr) => {
    // console.log(arr)
    return arr
  }
  const token = getCookie("JWT")

  // const addToCart = async (id, uprice, tprice) => {
  //   console.log('clicked')
  //   console.log(token)
  //   console.log(id, uprice, tprice)

  // await axios.post("https://mhbed.appiness.cc/api/user/cart/add-item/",{
  //     product_id: id,
  //     unit_price: uprice,
  //     total_price: tprice
  //   },{
  //   headers: {
  //     Authorization: token
  //   }}).then((response) => {
  //     console.log(response);
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // }

  const adding = async (index, id, uprice, tprice) => {
    let value = document.querySelector(`#c${index}`)
    if (value.innerText === 'Added') {
      value.textContent = 'Add'
      value.style.backgroundImage = 'linear-gradient(103.33deg,white,white 104.56%)'
      value.style.color = 'blue'
      console.log(id)
      // axios.get('https://mhbed.appiness.cc/api/user/cart/list/', {
      //   headers: {
      //     Authorization: getCookie("JWT")
      //   }
      // }).then((response) => {
      //   console.log(response.data.data[index].item_id);
      //   axios.delete(`https://mhbed.appiness.cc/api/user/cart/delete-item/${response.data.data[index].item_id}/`, {
      //     headers: {
      //       Authorization: getCookie("JWT")
      //     }
      //   }).then((response) => {
      //     console.log(response);
      //   }).catch((error) => {
      //     console.log(error);
      //   });
      // })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    }
    else {
      value.textContent = 'Added'
      value.style.backgroundImage = 'linear-gradient(103.33deg,#0e46a5,#00b7ac 104.56%)'
      value.style.color = 'white'
      await axios.post("https://mhbed.appiness.cc/api/user/cart/add-item/", {
        product_id: id,
        unit_price: uprice,
        total_price: tprice
      }, {
        headers: {
          Authorization: token
        }
      }).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      })
    }
  }


  return (
    <div className='health'>
      <div className='search'>
        <section className='fsection'>
          <div className='arrow'>
            <BsArrowLeftShort />
          </div>
          <div>
            <h1>Health Checkup</h1>
            <p>find a suitable package</p>
          </div>
        </section>
        <section className='ssection'>
          <div>
            <input
              placeholder='Search in Health Packages...'
              value={searchVal}
              onChange={searchApi}
            />
            <hr />
            <span className='filterIcon'>
              <Suspense fallback={`Loading...`}>
                <DynamicHeader />
              </Suspense>
              {/* <Filtering /> */}
            </span>

          </div>
        </section>
      </div>
      <section className='image'>
        <Image
          src="https://mhfed.appiness.cc/_next/image?url=%2Fimages%2Fhealth-hero2.png&w=1920&q=75"
          height={500}
          alt="Picture of the author"
          width={1400}
        />
      </section>
      {packs == '' ?
        <div>
          <h1 className='none'>No Health Checkup Packages found</h1>
          <h2 className='location'>{loc}</h2>
        </div>
        :
        <div className='hpackages'>
          {
            render === '' ?
              <Grid.Container gap={2} justify="space-around">
                {checkFilter(packs).map((item, index) => (
                  <Grid xs={10} sm={4} key={index}>
                    <Card isPressable>
                      <Card.Body css={{ p: 0 }}>
                        <Card.Image
                          src={'https://mhfed.appiness.cc/_next/image?url=%2Fimages%2FhealthPackage1.png&w=1920&q=75'}
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
                          <Text color='primary' >View</Text>
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
                <Grid.Container gap={2} justify="space-around">
                  {render.filter(checkFilter).map((item, index) => (
                    <Grid xs={10} sm={4} key={index}>
                      <Card isPressable>
                        <Card.Body css={{ p: 0 }}>
                          <Card.Image
                            src={'https://mhfed.appiness.cc/_next/image?url=%2Fimages%2FhealthPackage1.png&w=1920&q=75'}
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
                            <Text color='primary' >View</Text>
                          </Row>
                          <Row wrap="wrap" justify="space-between" align="center">

                            <button className='btn1' onClick={() => { addToCart(item.id, item.price, item.final_price) }}>Add <BsCart2 /></button>
                          </Row>
                        </Card.Footer>
                      </Card>
                    </Grid>
                  ))}
                </Grid.Container>
              </div>
          }

          <div className='pagination'>
            <section className='pagi1'>
              Page {pageNumber} of 2 Pages | Total  results {PackNum}
            </section>
            <section className='pagi2'>
              <span>
                <button className='prev' onClick={page1} disabled={prevDisable}>Previous</button>
                <button className='first' onClick={page1} style={{
                  backgroundColor: first.backgroundColor,
                  color: first.color
                }}>1</button>
                <button className='second' onClick={page2} style={{
                  backgroundColor: second.backgroundColor,
                  color: second.color
                }}>2</button>
                <button className='next' onClick={page2} disabled={nextDisable}>Next</button>
              </span>
            </section>
          </div>
        </div>
      }


    </div>
  )
}

export default HealthCheckup