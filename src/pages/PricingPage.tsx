import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    description: 'Essential emergency reporting features for individuals',
    features: [
      'Basic incident reporting',
      'Emergency contact storage',
      'Location sharing',
      'Response tracking',
    ],
  },
  {
    name: 'Premium',
    price: '$9.99',
    period: 'per month',
    description: 'Advanced features for families and small organizations',
    features: [
      'All Basic features',
      'Multiple user accounts',
      'Priority response',
      'Live video streaming',
      'Custom emergency protocols',
      '24/7 priority support',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Custom solutions for large organizations',
    features: [
      'All Premium features',
      'Custom integration',
      'Dedicated support team',
      'Advanced analytics',
      'Custom training',
      'SLA guarantees',
    ],
  },
];

const PricingPage = () => {
  return (
    <div className="pt-16">
      <div className="bg-navy-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your needs. All plans include our core emergency reporting features.
            </p>
          </div>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-8 rounded-lg ${
                  plan.highlighted
                    ? 'bg-navy-900 text-white ring-2 ring-navy-600'
                    : 'bg-navy-50 text-navy-900'
                }`}
              >
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  {plan.period && (
                    <span className={plan.highlighted ? 'text-gray-300' : 'text-gray-600'}>
                      {' '}
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={`mb-8 ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-6 w-6 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                    plan.highlighted
                      ? 'bg-white text-navy-900 hover:bg-gray-100'
                      : 'bg-navy-600 text-white hover:bg-navy-700'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;