import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import ContactUs from './ContactUs';
import DentalCare from './DentalCare';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
	return (
		<div className="px-12">
			<Banner></Banner>
			<Info></Info>
			<Services></Services>
			<DentalCare></DentalCare>
			<Appointment></Appointment>
			<Testimonial></Testimonial>
			<ContactUs></ContactUs>
		</div>
	);
};

export default Home;