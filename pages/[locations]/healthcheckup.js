import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { BsCart2 } from 'react-icons/bs';
import Image from 'next/image';


function HealthCheckup(props) {
  const router = useRouter()
  const { locations } = router.query


  const packs = props.healthPackages
  console.log('packs =', packs)

  return (
    <div className='health'>
      <section className='image'>
      <Image
        src="https://mhfed.appiness.cc/_next/image?url=%2Fimages%2Fhealth-hero2.png&w=1920&q=75"
        height={500}
        alt="Picture of the author"
        width={1400}
      />
      </section>
      {packs == '' ?
        <h1 className='none'>No Health Checkup Packages found</h1>
        :
        <div className='hpackages'>
          <Grid.Container gap={2} justify="space-around">
            {packs.map((item, index) => (
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

                      <button className='btn1'>Add <BsCart2 /></button>
                    </Row>
                  </Card.Footer>
                </Card>
              </Grid>
            ))}
          </Grid.Container>
        </div>
      }


    </div>
  )
}

export default HealthCheckup