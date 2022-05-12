import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Booking from './Booking';
import BookingTreatment from './BookingTreatment';

const AvailableAppoint = ({date}) => {
	const [treatments,SetTreatments]=useState([]);
	const [booking,setBooking]=useState([]);
	useEffect(()=>{
		fetch('bookingTreatment.json')
		.then(res=>res.json())
		.then(data=>SetTreatments(data))
	},[])
	return (
		<div>
			<div>
			<h4 className='text-center font-semibold text-xl text-secondary'>Available Appointment On {format(date,'PP')}</h4>
		</div>
		<div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
			{
                treatments.map(treatment=><BookingTreatment
				key={treatments._id}
				treatment={treatment}
				booking={booking}
				setBooking={setBooking}
				date={date}></BookingTreatment>)
			}
		</div>
		  {
			  booking && <Booking booking={booking}
			  date={date} setBooking={setBooking}></Booking>
		  }
		</div>
	);
};

export default AvailableAppoint;