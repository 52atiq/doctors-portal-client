import React from 'react';
import Appointment from '../MakeAppointment/MakeAppointment';
import Banner from '../Banner/Banner';
import DentalCare from '../DentalCare/DentalCare';
import Info from '../Info/Info';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../../Shared/Footer/Footer';


const Home = () => {
    return (
        <div  >
           <Banner></Banner>
           <Info ></Info>
           <Services> </Services>
           <DentalCare> </DentalCare>
           <Appointment>Get Started</Appointment>
           <Testimonials> </Testimonials>
           <Footer> </Footer>
        </div>
    );
};

export default Home;