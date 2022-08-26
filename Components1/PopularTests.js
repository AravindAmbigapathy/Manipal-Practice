// import React, { useEffect, useState } from 'react'
// import { Card, Grid, Row, Text } from "@nextui-org/react";
// import { BsCart2 } from 'react-icons/bs';


// function PopularTests(props) {
//     const testPacks=props.testPack


//     return (
//         <div className=''>
//             <h1>Popular  Routine Lab Tests</h1>
//             <section>
//                 {console.log(testPacks)}
//                 {testPacks ?
//                     <Grid.Container gap={2} justify="flex-start">
//                         {testPacks.map((item, index) => (
//                             <Grid xs={6} sm={3} key={index}>
//                                 <Card isPressable>
//                                     <Card.Body css={{ p: 0 }}>
//                                         <Card.Image
//                                             src={'https://mhfed.appiness.cc/_next/image?url=%2Fimages%2FhealthPackage1.png&w=1920&q=75'}
//                                             objectFit="cover"
//                                             width="100%"
//                                             height={300}
//                                             alt={item.title}
//                                         />
//                                         <div className='ccontent'>

//                                             <Row wrap="block" justify="space-between" >
//                                                 <Text margin size={20} color='rgb(55,65,81)'>{item.package_name}</Text>
//                                             </Row>
//                                             <Row wrap="block" justify="space-between" >
//                                                 <Text margin>{item.gender ? item.gender : 'Male/Female'}</Text>
//                                             </Row>
//                                             <Row wrap="block" justify="space-between" >
//                                                 <Text margin color='primary'>{item.hospital_location}</Text>
//                                             </Row>
//                                         </div>
//                                     </Card.Body>
//                                     <Card.Footer css={{ justifyItems: "flex-start" }}>
//                                         <Row wrap="wrap" justify="space-between" align="center">
//                                             <Text>
//                                                 Rs. {item.price}
//                                             </Text>
//                                         </Row>
//                                         <Row>
//                                             <Text color='primary' >View</Text>
//                                         </Row>
//                                         <Row>

//                                             <button className='btn1' id={`c${index}`} onClick={() => {
//                                                 // addToCart()
//                                                 adding(index, item.id, item.price, item.final_price)
//                                             }}  >Add <BsCart2 /></button>
//                                         </Row>
//                                     </Card.Footer>
//                                 </Card>
//                             </Grid>
//                         ))}
//                     </Grid.Container>
//                     :
//                     <div>
//                             Not available
//                     </div>
//                 }
//             </section>

//         </div>
//     )
// }

// export default PopularTests