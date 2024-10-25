import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-navy-900 pt-24">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-10"
          src="https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80"
          alt="Emergency background"
        />
        <div className="absolute inset-0 bg-navy-900 mix-blend-multiply" />
      </div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Report emergencies instantly,
          <span className="block text-amber-500">connect with responders quickly.</span>
        </h1>
        
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Sparko provides a seamless platform for emergency reporting and response coordination.
          Get immediate assistance when you need it most.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            to="/signup"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
          >
            <AlertTriangle className="mr-2" size={20} />
            Report an Incident
          </Link>
          <Link
            to="/features"
            className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-navy-900 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;