import React, { useState, useEffect } from 'react';
import Carouselcomp from '../../components/Carousel';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Clubsinfo from '../../components/Clubsinfo';
import BootstrapTable from 'react-bootstrap-table-next';
import clubdata from '../../assets/clubdetails.json'
import Container from 'react-bootstrap/Container';
import './style.css';

const logo = require('../../assets/interiitsmeet.jpg');
const Sportscouncil: React.FC = () => {
  const columns = [
    {
      dataField: 'id',
      text: '#'
    }, {
      dataField: 'clubname',
      text: 'Sports Clubs'
    }, {
      dataField: 'secyname',
      text: 'Club Secretary'
    }, {
      dataField: 'memblink',
      text: 'Club Members'
    }, {
      dataField: 'Contactdetails',
      text: 'Contact'
    },
  ];

  return (
    <>
      <Header />

     
      <Carouselcomp images={{
        image1: logo, title1: "", caption1: "hello",
        image2: logo, title2: "", caption2: "",
        image3: logo, title3: "", caption3: "",
      }} />
      <br />
      <Container style={{padding:'10px'}}>
        <div>
          <h3 style={{ textDecoration: 'underline' }}>About</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </Container>
      <hr></hr>
      <Clubsinfo club={clubdata.sports} />
      <hr></hr>
      <h3 style={{ textDecoration: 'underline', textAlign: 'center' }}>Club Details</h3>
      <div className='clubdetailstable'>
        <BootstrapTable keyField='id' data={clubdata.sports} columns={columns} />
      </div>
      <Footer />
    </>
  );
};

export default Sportscouncil;
