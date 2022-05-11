import React from 'react';
import { DayPicker } from 'react-day-picker';
import banner from '../../assets/images/chair.png'
import 'react-day-picker/dist/style.css';


const BookingDate = ({date,setDate}) => {
	return (
		<div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={banner}
            className="lg:max-w-2xl rounded-lg shadow-2xl"
          alt=""/>
          <div className='lg:mr-12 shadow-lg p-4 rounded-lg'>
		  <DayPicker
		    mode="single"
			selected={date}
			onSelect={setDate} 
			/>
          </div>
        </div>
      </div>
	);
};

export default BookingDate;