import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurTeam from '../OurTeam/OurTeam';
import ServiceList from '../ServiceList/ServiceList';
import TestimonialList from '../TestimonialList/TestimonialList';
import WeHave from '../WeHave/WeHave';

const Home = () => {
    return (
        <>
        <Header/>
        <ServiceList/>
        <WeHave/>
        <TestimonialList/>
        <OurTeam/>
        <ContactForm/>
        <Footer/>
        </>
    );
};

export default Home;