import React from "react";
import banner from '../../assets/images/chair.png'
import PrimaryButton from "./PrimaryButton";

const Banner = () => {
  return (
    <div>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src={banner}
            class="lg:max-w-2xl rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-4xl lg:text-5xl font-bold">Your New Smile Starts Here</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
           <PrimaryButton>Get started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
