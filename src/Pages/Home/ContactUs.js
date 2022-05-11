import React from "react";
import background from "../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div
      className="py-10 my-24"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="text-center mt-2">
        <h5 className="text-xl font-semibold text-secondary">Contact Us</h5>
        <h3 className="text-3xl text-white">Stay Contact With Us</h3>
      </div>
      <form className="flex flex-col items-center mt-4">
        <input
          type="text"
          placeholder="Email Address"
		  name="email"
          className="input input-bordered input-md w-full max-w-xs mb-4"
        />
        <input
          type="text"
		  name="subject"
          placeholder="Subject"
          className="input input-bordered input-md w-full max-w-xs mb-4"
        />

        <textarea className="textarea w-80 h-24 mb-2" placeholder="Your message"
		name="message"></textarea>
        <input
          type="submit"
          value="Submit"
          placeholder="Type here"
          className="px-8 my-6 py-2  rounded-lg bg-gradient-to-r from-secondary to-primary border-0 text-white  max-w-xs"
        />
      </form>
    </div>
  );
};

export default ContactUs;
