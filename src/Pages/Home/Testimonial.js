import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {
	const reviews=[{
		_id: '1',
		img:people1,
		name:'Winson Herry',
		description:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content',
        address:'California'
	},
	{
		_id: '2',
		img:people2,
		name:'Devid Malan',
		description:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content',
        address:'Washington'
	},
	{
		_id: '3',
		img:people3,
		name:'James Anderson',
		description:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content',
        address:'New York'
	},
]
	return (
		<div>
			<div className="flex justify-between">
                <div>
					<h4 className='text-xl font-semibold text-secondary'>Testimonial</h4>
					<h2 className='text-3xl'>What Our Patient Says</h2>
				</div>
				<div>
					<img className="w-24 lg:w-48" src={quote} alt="" />
				</div>
			</div>
			<div className='grid md:grid-cols-3 gap-5 mt-8'>
                 {
					 reviews.map(review=><Review
					 key={review._id}
					 review={review}
					 ></Review>)
				 }
			</div>
		</div>
	);
};

export default Testimonial;