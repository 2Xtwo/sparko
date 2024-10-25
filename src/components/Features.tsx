import React from 'react';
import { AlertTriangle, Shield, Map } from 'lucide-react';

const features = [
  {
    icon: AlertTriangle,
    title: 'Emergency Reporting',
    description: 'Report incidents in real-time with our intuitive interface.',
  },
  {
    icon: Shield,
    title: 'Responder Integration',
    description: 'Connect directly with emergency response agencies.',
  },
  {
    icon: Map,
    title: 'Track Progress',
    description: 'Receive live updates from responders throughout the incident.',
  },
];

const Features = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">
            How Sparko Works
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            A comprehensive emergency response platform designed for quick action and efficient communication.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-navy-600 text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="ml-16">
                    <h3 className="text-lg font-medium text-navy-900">{feature.title}</h3>
                    <p className="mt-2 text-base text-gray-600">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;