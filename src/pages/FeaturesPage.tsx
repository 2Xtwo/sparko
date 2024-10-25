import React from 'react';
import { Shield, AlertTriangle, Map, Clock, Users, Bell } from 'lucide-react';

const features = [
  {
    icon: AlertTriangle,
    title: 'Instant Reporting',
    description: 'Report emergencies with just a few taps. Our streamlined interface ensures quick submission when every second counts.',
  },
  {
    icon: Shield,
    title: 'Direct Response Integration',
    description: 'Connect instantly with emergency response teams. Real-time communication ensures faster response times.',
  },
  {
    icon: Map,
    title: 'Location Tracking',
    description: 'Precise GPS location sharing helps responders find you quickly. Track response team location in real-time.',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Round-the-clock emergency support. Our platform never sleeps, ensuring help is always available.',
  },
  {
    icon: Users,
    title: 'Multi-Agency Coordination',
    description: 'Seamless coordination between multiple emergency response agencies for complex situations.',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Stay updated with real-time notifications about response progress and important updates.',
  },
];

const FeaturesPage = () => {
  return (
    <div className="pt-16">
      <div className="bg-navy-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
              Features
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how Sparko helps you manage emergencies efficiently with our comprehensive feature set.
            </p>
          </div>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="relative p-8 bg-navy-50 rounded-lg">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-navy-600 text-white mb-6">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">{feature.title}</h3>
                  <p className="text-navy-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;