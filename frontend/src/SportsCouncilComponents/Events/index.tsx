import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBModal, MDBNav, MDBNavItem, MDBNavLink, MDBRow, MDBTabContent, MDBTabPane } from 'mdbreact';
import { Button, Dropdown, Modal, Tab, Tabs } from 'react-bootstrap';
import React, { useState } from 'react'
import Cards from '../EventsCard'
import info from '../../assets/sportsevents.json'
import './styles.css'

function Events() {
    const [events, setEvents] = useState(false);
    const [active, setActive] = useState("2021");

    let data_own = active=="2021"?info.instituteEvents[2021]:active=="2020"?info.instituteEvents[2020]:active=="2019"?info.instituteEvents[2019]:info.instituteEvents[2018];
    let data_inter = active=="2021"?info.interCollegeEvents[2021]:active=="2020"?info.interCollegeEvents[2020]:active=="2019"?info.interCollegeEvents[2019]:info.interCollegeEvents[2018];

    return (<>
        <MDBContainer>
            <button onClick={() => setEvents(true)} style={{backgroundColor: 'transparent', border: 'none', color: 'white'}}>EVENTS</button>
            <Modal 
                show={events} 
                onHide={() => setEvents(false)} 
                backdrop="static" 
                keyboard={false}
                size="xl"
                aria-labelledby="example-custom-modal-styling-title"
                centered
            >
                <Modal.Header>
                    <Modal.Title style={{marginTop: 'auto', marginBottom: 'auto', fontWeight: 'bolder'}}>Events</Modal.Title>
                    <Dropdown>
                        <Dropdown.Toggle style={{borderRadius: '8px'}}>{active}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#" onClick={() => setActive("2021")}>2021</Dropdown.Item>
                            <Dropdown.Item href="#" onClick={() => setActive("2020")}>2020</Dropdown.Item>
                            <Dropdown.Item href="#" onClick={() => setActive("2019")}>2019</Dropdown.Item>
                            <Dropdown.Item href="#" onClick={() => setActive("2018")}>2018</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Modal.Header>
                <Modal.Body>
                    <Tabs justify defaultActiveKey="own">
                        <Tab eventKey="own" title="Institute Events">
                            <MDBContainer>
                                <MDBRow style={{marginTop: '2%'}}>
                                    <MDBCol style={{marginTop: '2%'}}>
                                        <Cards data={data_own[0]} img={require("../../assets/interiitsmeet.jpg")}/>
                                    </MDBCol>
                                    <MDBCol style={{marginTop: '2%'}}>
                                        <Cards data={data_own[1]} img={require("../../assets/interiitsmeet.jpg")}/>
                                    </MDBCol>
                                </MDBRow>
                                <br/>
                                <MDBRow style={{marginTop: '2%'}}>
                                    <MDBCol style={{marginTop: '2%'}}>
                                        <Cards data={data_own[2]} img={require("../../assets/interiitsmeet.jpg")}/>
                                    </MDBCol>
                                    <MDBCol style={{marginTop: '2%'}}>
                                        <Cards data={data_own[3]} img={require("../../assets/interiitsmeet.jpg")}/>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </Tab>
                        <Tab eventKey="inter" title="Inter College events">
                            <MDBContainer>
                                <MDBRow style={{marginTop: '2%'}}>
                                    <MDBCol style={{marginTop: '2%'}}>
                                        <Cards data={data_inter[0]} img={require("../../assets/interiitsmeet.jpg")}/>
                                    </MDBCol>
                                    <MDBCol style={{marginTop: '2%'}}>
                                        <Cards data={data_inter[1]} img={require("../../assets/interiitsmeet.jpg")}/>
                                    </MDBCol>
                                </MDBRow>
                                <br/>
                                <MDBRow style={{marginTop: '2%'}}>
                                    <MDBCol style={{marginTop: '2%'}}>
                                        <Cards data={data_inter[2]} img={require("../../assets/interiitsmeet.jpg")}/>
                                    </MDBCol>
                                    <MDBCol style={{marginTop: '2%'}}>
                                        <Cards data={data_inter[3]} img={require("../../assets/interiitsmeet.jpg")}/>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </Tab>
                    </Tabs>
                </Modal.Body>
                <Modal.Footer>
                    <button style={{backgroundColor: 'transparent', border: 'none', color: '#1f4baa'}} onClick={() => setEvents(false)}>Close</button>
                </Modal.Footer>
            </Modal>
        </MDBContainer>
    </>);
}

export default Events;