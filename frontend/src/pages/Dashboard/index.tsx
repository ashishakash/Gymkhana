import React, { useState, useEffect } from 'react';
import EventsCalendar from '../../components/EventsCalendar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface IFoodPlate {
}

const Dashboard: React.FC = () => {
  return (
    <>
    <Header />
      <EventsCalendar/>
      <Footer />
    </>
  );
};

export default Dashboard;
