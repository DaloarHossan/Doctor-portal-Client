import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
	const services=[
		{_id:1,
	name:'Flouride Treatment',
    img:fluoride,
	description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem excepturi, qui repudiandae pariatur commodi libero unde error incidunt harum rem."
},
		{_id:2,
	name:'Cavity Filling',
    img:cavity,
	description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem excepturi, qui repudiandae pariatur commodi libero unde error incidunt harum rem."
},
		{_id:3,
	name:'Teeth Whitening',
    img:whitening,
	description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem excepturi, qui repudiandae pariatur commodi libero unde error incidunt harum rem."
}

]
	return (
		<div className="my-20">
			<div className="text-center">
				<h4 className="text-xl text-secondary uppercase font-semibold ">Our Services</h4>
				<h2 className="text-2xl">Services We Provide</h2>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
				{
					services.map(service=><Service
					key={service._id}
					service={service}></Service>)
				}
			</div>
		</div>
	);
};

export default Services;