import React from 'react';
import { Heart, Shield, Clock } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-16">
      <div className="bg-navy-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
              About Sparko
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              We're on a mission to revolutionize emergency response systems and save lives through technology.
            </p>
          </div>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Sparko was founded with a simple yet powerful vision: to make emergency response faster, more efficient, and more accessible to everyone. Our team of dedicated professionals combines expertise in emergency services with cutting-edge technology to create a platform that saves lives.
              </p>
              <p className="text-lg text-gray-600">
                What started as a small project has grown into a comprehensive emergency response platform used by individuals, organizations, and emergency services worldwide.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-navy-900">Our Mission</h3>
                  <p className="mt-2 text-gray-600">
                    To provide immediate, reliable emergency assistance to anyone, anywhere, at any time.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Shield className="h-8 w-8 text-navy-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-navy-900">Our Values</h3>
                  <p className="mt-2 text-gray-600">
                    We believe in reliability, transparency, and the power of technology to make a difference in emergency situations.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Clock className="h-8 w-8 text-amber-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-navy-900">Our Commitment</h3>
                  <p className="mt-2 text-gray-600">
                    24/7 dedication to providing the best emergency response platform, constantly improving and innovating.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;