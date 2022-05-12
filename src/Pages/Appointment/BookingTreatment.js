import React from "react";
import Booking from "./Booking";

const BookingTreatment = ({ treatment,setBooking ,booking,date }) => {
	const {name,slot}=treatment;
  return (
    <div className="card lg:max-w-lg shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-2xl font-bold text-secondary">{name}</h2>
        <p>{slot.length? slot[0]:'Try another day'}</p>
        <p className='uppercase text-sm'>{slot.length}<span>{slot.length && slot.length>1 ? ' spaces' :' space'}</span> Available</p>
        <div className="mt-2">
        
         <label for="booking" onClick={()=>setBooking(treatment)} className='btn bg-gradient-to-r from-secondary to-primary border-0 text-white'>Get Started</label>
        </div>
        
      </div>
    </div>
  );
};

export default BookingTreatment;
