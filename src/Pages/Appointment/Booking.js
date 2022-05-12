import { format } from "date-fns";
import React from "react";

const Booking = ({ booking, date,setBooking }) => {
  const { name,slot } = booking;
  const handelBook = (e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    const date =e.target.date.value;
    const slot=e.target.slot.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    console.log([date,slot,name,email,phone]);  
  }
  return (
    <div>
      <input type="checkbox" id="booking" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            for="booking"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <div>
            <form onSubmit={handelBook} className="flex flex-col items-center mt-4">
              <input
                type="text"
                name="date"
                disabled
                value={format(date, "PP")}
                className="input input-bordered input-md w-full max-w-xs mb-4"
              />
              <select name="slot" className="select select-bordered mb-4 w-full max-w-xs">
             {
               slot?.map(time=><option value={time}>{time}</option>)
             }

              </select>
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                className="input input-bordered input-md w-full max-w-xs mb-4"
              />
              <input
                type="text"
                placeholder="Email Address"
                name="email"
                className="input input-bordered input-md w-full max-w-xs mb-4"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="input input-bordered input-md w-full max-w-xs mb-4"
              />
              <input
                type="submit"
                value="Submit"
                placeholder="Type here"
                className="px-8  py-2  rounded-lg bg-gradient-to-r from-secondary to-primary border-0 text-white  max-w-xs"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
