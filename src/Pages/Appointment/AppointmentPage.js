import React, { useState } from 'react';
import AvailableAppoint from './AvailableAppoint';
import BookingDate from './BookingDate';
import Footer from '../Sheared/Footer'

const AppointmentPage = () => {
	const [date,setDate]=useState(new Date())
	return (
		<div className="px-12">
			<BookingDate date={date} setDate={setDate}></BookingDate>
			<AvailableAppoint date={date}></AvailableAppoint>
			<Footer></Footer>
		</div>
	);
};

export default AppointmentPage;