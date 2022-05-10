import React from 'react';

const InfoCard = ({img,className,title,description}) => {
	return (
		<div className={`${className} rounded-md px-4`}>
			<div class="card card-side">
  <figure><img src={img} alt=""/></figure>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{description}</p>
  </div>
</div>
		</div>
	);
};

export default InfoCard;