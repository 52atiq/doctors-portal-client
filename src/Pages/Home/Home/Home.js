import React from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import DentalCare from '../DentalCare/DentalCare';
import Info from '../Info/Info';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <div className='px-12'>
           <Banner></Banner>
           <Info ></Info>
           <Services> </Services>
           <DentalCare> </DentalCare>
           <Appointment>Get Started</Appointment>
           <Testimonials> </Testimonials>
        </div>
    );
};

export default Home;