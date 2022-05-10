import React from 'react';

const PrimaryButton = ({children}) => {
	return (
		<div>
			 <button class="btn bg-gradient-to-r from-secondary to-primary border-0 text-white">{children}</button>
		</div>
	);
};

export default PrimaryButton;