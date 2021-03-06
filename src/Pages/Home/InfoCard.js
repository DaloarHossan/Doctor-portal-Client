import React from 'react';

const InfoCard = ({img,className,title,description}) => {
	return (
		<div className={`${className} rounded-md px-4`}>
			<div className="card lg:max-w-lg card-side">
  <figure><img src={img} alt=""/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
  </div>
</div>
		</div>
	);
};

export default InfoCard;