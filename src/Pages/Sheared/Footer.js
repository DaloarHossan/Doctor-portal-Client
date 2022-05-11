import React from "react";
import bg from '../../assets/images/bg.png'

const Footer = () => {
  return (
<div>
<footer style={{backgroundImage:`url(${bg})`}} class="footer p-10">
      <div>
        <span class="footer-title">Services</span>
        <a class="link link-hover">Emergency Checkup</a>
        <a class="link link-hover">Monthly Checkup</a>
        <a class="link link-hover">Weekly Checkup</a>
        <a class="link link-hover">Deep Checkup</a>
      </div>
      <div>
        <span class="footer-title">Oral Health</span>
        <a class="link link-hover">Flouride Treatment</a>
        <a class="link link-hover">Cavity Filling</a>
        <a class="link link-hover">Teeth Whitening</a>
      </div>
      <div>
        <span class="footer-title">Our Address</span>
        <a class="link link-hover">Washington - 98121 Seattle</a>
      </div>
    </footer>
	<div className="text-center mb-6">
    <p className='capitalize'>{`Copyright © ${new Date().getFullYear()} - All right reserved`}</p>
  </div>
</div>
  );
};

export default Footer;
