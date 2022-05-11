import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import  appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section style={{
            background: ` url(${appointment})`
        }} className='flex justify-center items-center mt-10' >
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>

            <div className='flex-1 px-5 mb-2'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-white text-3xl py-5'>Make an Appointment Today </h2>
                <p className=' text-white pb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolore, nisi, iste ad dolorem aperiam labore sunt enim harum distinctio illo voluptas non nulla consequuntur dolorum doloribus dignissimos, ullam optio libero reiciendis molestias placeat adipisci aspernatur minima! Enim, qui tempore?</p>
                <PrimaryButton> Get Started </PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;