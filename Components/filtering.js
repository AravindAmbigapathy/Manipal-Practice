import React, { useState } from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import Image from "next/image";
import { Dropdown, Avatar, Grid, User } from "@nextui-org/react";
import { IoMdArrowDropdown } from 'react-icons/io';
import Search from "react-select-search";
import "react-select-search/style.css";


export default function Filtering() {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
        console.log("closed");

    };

    let arr = ['Orthopaedics',
        'Cardiology',
        'Cardiothoracic', 'Vascular Surgery',
        'Neurology',
        'Neurosurgery',
        'Nephrology',
        'Paediatric And Child Care',
        'Psychiatry',
        'Urology',
        'Internal Medicine',
        'Sports Medicine',
        'Ear Nose Throat',
        'Dermatology',
        'Dental Medicine',
        'Ophthalmology']

    const options = arr.map((_, index) => ({
        name: _,
        value: _
    }));
    <div >

    </div>

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
                    <div className="dropdown">

                        <Search
                            style={{width: `500px`}}    
                            options={options}
                            onChange={(selected) => console.log(selected)}
                            placeholder="Select Speciality"
                        />

                    </div>



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
