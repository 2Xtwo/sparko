import React, { useState } from 'react';
import { CreditCard, Smartphone } from 'lucide-react';
import MPESAPayment from '../payments/MPESAPayment';
import CardPayment from '../payments/CardPayment';
import useStore from '../../store/useStore';

const plans = {
  premium_user: {
    name: 'Premium User',
    price: 100,
    features: [
      'Real-time geolocation tracking',
      'Priority response access',
      'Personal ambulance service',
      'Media attachments',
      'Extended incident history',
      'Live stream activation',
    ],
  },
  standard_responder: {
    name: 'Standard Responder',
    price: 5000,
    features: [
      'Receive incident alerts',
      'View incident details',
      'Update incident status',
      'Coordinate with agencies',
      'Request media from users',
    ],
  },
  premium_responder: {
    name: 'Premium Responder',
    price: 8400,
    features: [
      'All standard features',
      'Advanced incident dashboard',
      'Real-time data analytics',
      'Geolocation resource allocation',
      'Priority incident routing',
      'Enhanced communication tools',
    ],
  },
};

const SubscriptionManager: React.FC = () => {
  const { user, subscription } = useStore();
  const [selectedPlan, setSelectedPlan] = useState<keyof typeof plans | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'mpesa' | 'card' | null>(null);

  const handlePaymentSuccess = (transactionId: string) => {
    // Handle successful payment
    console.log('Payment successful:', transactionId);
  };

  const handlePaymentError = (error: string) => {
    // Handle payment error
    console.error('Payment failed:', error);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Subscription Management</h2>

        {subscription && (
          <div className="mb-8 p-4 bg-navy-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Current Subscription</h3>
            <p>Plan: {plans[subscription.type].name}</p>
            <p>Status: {subscription.status}</p>
            <p>Expires: {new Date(subscription.endDate).toLocaleDateString()}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {Object.entries(plans).map(([key, plan]) => (
            <div
              key={key}
              className={`border rounded-lg p-6 ${
                selectedPlan === key ? 'border-navy-600 ring-2 ring-navy-600' : 'border-gray-200'
              }`}
            >
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-2xl font-bold mb-4">KSh {plan.price}</p>
              <ul className="space-y-2 mb-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm">
                    <span className="mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setSelectedPlan(key as keyof typeof plans)}
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-navy-600 hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500"
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>

        {selectedPlan && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Choose Payment Method</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <button
                onClick={() => setPaymentMethod('mpesa')}
                className={`flex items-center justify-center p-4 border rounded-lg ${
                  paymentMethod === 'mpesa'
                    ? 'border-green-600 bg-green-50'
                    : 'border-gray-200 hover:border-green-600'
                }`}
              >
                <Smartphone className="mr-2" />
                M-PESA
              </button>
              <button
                onClick={() => setPaymentMethod('card')}
                className={`flex items-center justify-center p-4 border rounded-lg ${
                  paymentMethod === 'card'
                    ? 'border-navy-600 bg-navy-50'
                    : 'border-gray-200 hover:border-navy-600'
                }`}
              >
                <CreditCard className="mr-2" />
                Card Payment
              </button>
            </div>

            {paymentMethod === 'mpesa' && (
              <MPESAPayment
                amount={plans[selectedPlan].price}
                onSuccess={handlePaymentSuccess}
                onError={handlePaymentError}
              />
            )}

            {paymentMethod === 'card' && (
              <CardPayment
                amount={plans[selectedPlan].price}
                onSuccess={handlePaymentSuccess}
                onError={handlePaymentError}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscriptionManager;