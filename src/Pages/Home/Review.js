import React from "react";

const Review = ({ review }) => {
  const { img, name, description, address } = review;
  return (
    <div className="card lg:max-w-lg shadow-xl">
      <div className="card-body">
        <p>{description}</p>
        <div className="flex mt-6">
          <div>
			  <img src={img} alt=""/>
		  </div>
		  <div className='flex flex-col justify-center ml-6'>
			  <h4 className="text-xl">{name}</h4>
			  <h5 className='text-sm'>{address}</h5>
		  </div>
        </div>
      </div>
    </div>
  );
};

export default Review;