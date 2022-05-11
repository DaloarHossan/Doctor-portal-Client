import React from 'react';
import Banner from './Banner';
import DentalCare from './DentalCare';
import Info from './Info';

const Home = () => {
	return (
		<div className="px-12">
			<Banner></Banner>
			<Info></Info>
			<DentalCare></DentalCare>
		</div>
	);
};

export default Home;