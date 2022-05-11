import React from "react";
import PrimaryButton from '../Sheared/PrimaryButton'

const BookingTreatment = ({ treatment }) => {
	const {name,slot}=treatment;
  return (
    <div className="card lg:max-w-lg shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-2xl text-secondary">{name}</h2>
        <p>{slot.length? slot[0]:'Try another day'}</p>
        <p className='uppercase text-sm'>{slot.length}<span>{slot.length && slot.length>1 ? ' spaces' :' space'}</span> Available</p>
        <div className="mt-2">
          <PrimaryButton>Book Appointment</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default BookingTreatment;
