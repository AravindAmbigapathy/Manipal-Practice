import React, { useState } from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import Image from "next/image";
import { Dropdown, Avatar, Grid, User } from "@nextui-org/react";
import { IoMdArrowDropdown } from 'react-icons/io';


export default function Filtering() {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };

    return (
        <div className="filter">
            <Image
                src="https://mhfed.appiness.cc/icons/settings.svg"
                height={40}
                alt="Picture of the author"
                width={15}
                onClick={handler}
            />

            <Modal
                closeButton
                aria-labelledby="modal-title"
                width="700px"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text id="modal-title" size={24}>
                        Filter
                    </Text>
                </Modal.Header>
                <Modal.Body className="filter1">
                    <Row justify="space-between" className="row">
                        <Text size={24}>Select Speciality</Text>
                    </Row>
                    <hr />
                    {/* <div >
                        <Grid.Container justify="flex-start" gap={2}>
                            <Grid className="fgrid">
                                <Dropdown placement="bottom-left" >
                                    <Dropdown.Trigger >
                                        <div className="fselect">select Speciality
                                            <span><IoMdArrowDropdown /></span>
                                        </div>
                                    </Dropdown.Trigger>
                                    <Dropdown.Menu color="secondary" aria-label="Avatar Actions" >

                                        <Dropdown.Item key="settings" className="drpdn">
                                        <li>Orthopaedics</li>
                                        <li>Cardiology</li>
                                        <li>Cardiothoracic Vascular Surgery</li>
                                        <li>Neurology</li>
                                        <li>Neurosurgery</li>
                                        <li>Nephrology</li>
                                        <li>Paediatric And Child Care</li>
                                        <li>Psychiatry</li>
                                        <li>Urology</li>
                                        <li>Internal Medicine</li>
                                        <li>Sports Medicine</li>
                                        <li>Ear Nose Throat</li>
                                        <li>Dermatology</li>
                                        <li>Dental Medicine</li>
                                        <li>Ophthalmology</li>
                                        </Dropdown.Item>
                                       
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Grid>

                        </Grid.Container>
                    </div> */}
                    <Row className="row">
                        <Text size={24}>By age</Text>
                    </Row>
                    <div className='agnBtn'>
                        <section>
                            <Row>
                                <span className="btn1 btnn">See all ranges</span>
                            </Row>
                            <Row>
                                <span className="btn3 btnn">35 - 60 yrs</span>
                            </Row>
                        </section>
                        <section>
                            <Row>
                                <span className="btn2 btnn">Below 35 yrs</span>
                            </Row>
                            <Row>
                                <span className="btn4 btnn">Above 60 yrs</span>
                            </Row>
                        </section>
                    </div>
                    <Row className="row">
                        <Text size={24}>Gender</Text>
                    </Row>
                    <div className="gender">
                        <span>All</span>
                        <span>Female</span>
                        <span>Male</span>
                    </div>
                    <Row className="row">
                        <Text size={24}>Sort results by</Text>
                    </Row>
                    <div className="resultBy">
                        <span>Alphabetically</span>
                        <span>Lowest price first</span>
                        <span>Highest price first</span>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="filterFooter">
                        <button className="clear">Clear Filters</button>
                        <button className="apply">Apply Filter</button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
