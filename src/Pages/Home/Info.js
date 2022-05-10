import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const Info = () => {
	
	const firstDescription ='Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
	const secondDescription ='Brooklyn,NY 10036,United State';
	const thirdDescription ='+000123456789';
	return (
		<div className="grid md:grid-cols-3 gap-4 text-white">
			<InfoCard description={firstDescription} title={'Opening Hour'} className={'bg-gradient-to-r from-secondary to-primary '} img={clock}></InfoCard>
			<InfoCard description={secondDescription} title={'Visit our location'}className={'bg-accent'}img={marker}></InfoCard>
			<InfoCard description={thirdDescription} title={'Contact us now'}className={'bg-gradient-to-r from-secondary to-primary '}img={phone}></InfoCard>
		</div>
	);
};

export default Info;