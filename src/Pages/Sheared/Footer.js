import React from "react";
import bg from '../../assets/images/bg.png'

const Footer = () => {
  return (
<div>
<footer style={{backgroundImage:`url(${bg})`}} className="footer p-10">
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Emergency Checkup</a>
        <a className="link link-hover">Monthly Checkup</a>
        <a className="link link-hover">Weekly Checkup</a>
        <a className="link link-hover">Deep Checkup</a>
      </div>
      <div>
        <span className="footer-title">Oral Health</span>
        <a className="link link-hover">Flouride Treatment</a>
        <a className="link link-hover">Cavity Filling</a>
        <a className="link link-hover">Teeth Whitening</a>
      </div>
      <div>
        <span className="footer-title">Our Address</span>
        <a className="link link-hover">Washington - 98121 Seattle</a>
      </div>
    </footer>
	<div className="text-center mb-6">
    <p className='capitalize'>{`Copyright © ${new Date().getFullYear()} - All right reserved`}</p>
  </div>
</div>
  );
};

export default Footer;
