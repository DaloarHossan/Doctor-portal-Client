import React from "react";
import doctor from '../../assets/images/doctor.png'
import background from '../../assets/images/appointment.png'
import PrimaryButton from '../Sheared/PrimaryButton'

const Appointment = () => {
  return (
    <div className='my-24' style={{ backgroundImage:`url(${background})`}}>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img 
            src={doctor}
            className="mt-[-130px] max-w-lg"
          />
          <div className='ml-12'>
            <h4 className="text-xl text-secondary font-bold">Appointment</h4>
            <h2 className='text-3xl text-white'>Make an appointment Today</h2>
            <p className="py-6 text-white">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
