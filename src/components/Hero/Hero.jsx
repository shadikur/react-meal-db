import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1562755629-1ce6a77ad48e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">
              Conveniently Order Your Favorite Foods Online with Us!
            </h1>
            <p className="mb-5">
              Looking for a hassle-free way to order food online? Look no
              further than our online food ordering website! Our user-friendly
              platform allows you to browse menus, customize your order, and pay
              securely, all from the comfort of your own home. Whether you're
              craving your favorite pizza, sushi, or a hearty sandwich, we've
              got you covered with a wide variety of cuisines and restaurants to
              choose from. Plus, with our fast and reliable delivery, you can
              enjoy your meal in no time. So why wait? Order now and satisfy
              your hunger with just a few clicks!
            </p>
            <Link to={`/order-now`} className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
