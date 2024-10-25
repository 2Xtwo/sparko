import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, AlertTriangle, Ambulance, Shield, Flame } from 'lucide-react';

type AccountType = 'user' | 'police' | 'fire' | 'hospital' | 'agency';

interface FormData {
  fullName: string;
  email: string;
  password: string;
  organizationName: string;
  organizationType: string;
  badgeNumber?: string;
}

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState<AccountType>('user');
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    password: '',
    organizationName: '',
    organizationType: 'hospital',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ ...formData, accountType });
  };

  const isFreeAccount = (type: AccountType) => {
    return type === 'police' || type === 'fire';
  };

  return (
    <div className="min-h-screen pt-16 bg-navy-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-navy-900">Create an Account</h2>
            <p className="mt-2 text-gray-600">Join Sparko and help make emergency response better.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Account Type Selection */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                type="button"
                onClick={() => setAccountType('user')}
                className={`p-6 rounded-lg border-2 text-left ${
                  accountType === 'user'
                    ? 'border-navy-600 bg-navy-50'
                    : 'border-gray-200 hover:border-navy-300'
                }`}
              >
                <div className="flex items-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
                  <h3 className="text-lg font-semibold">General User</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Report emergencies and request assistance
                </p>
              </button>

              <button
                type="button"
                onClick={() => setAccountType('police')}
                className={`p-6 rounded-lg border-2 text-left ${
                  accountType === 'police'
                    ? 'border-navy-600 bg-navy-50'
                    : 'border-gray-200 hover:border-navy-300'
                }`}
              >
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-navy-600 mr-2" />
                  <h3 className="text-lg font-semibold">Police Department</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Free lifetime account for law enforcement
                </p>
              </button>

              <button
                type="button"
                onClick={() => setAccountType('fire')}
                className={`p-6 rounded-lg border-2 text-left ${
                  accountType === 'fire'
                    ? 'border-navy-600 bg-navy-50'
                    : 'border-gray-200 hover:border-navy-300'
                }`}
              >
                <div className="flex items-center mb-4">
                  <Flame className="h-6 w-6 text-amber-600 mr-2" />
                  <h3 className="text-lg font-semibold">Fire Department</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Free lifetime account for firefighters
                </p>
              </button>

              <button
                type="button"
                onClick={() => setAccountType('hospital')}
                className={`p-6 rounded-lg border-2 text-left ${
                  accountType === 'hospital'
                    ? 'border-navy-600 bg-navy-50'
                    : 'border-gray-200 hover:border-navy-300'
                }`}
              >
                <div className="flex items-center mb-4">
                  <Ambulance className="h-6 w-6 text-green-600 mr-2" />
                  <h3 className="text-lg font-semibold">Hospital</h3>
                </div>
                <p className="text-sm text-gray-600">
                  For medical facilities and emergency care providers
                </p>
              </button>
            </div>

            {/* Personal Information */}
            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-navy-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-navy-700">
                  Password
                </label>
                <div className="relative mt-1">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* Organization Details */}
              {accountType !== 'user' && (
                <>
                  <div>
                    <label htmlFor="organizationName" className="block text-sm font-medium text-navy-700">
                      Organization Name
                    </label>
                    <input
                      type="text"
                      id="organizationName"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500"
                      required
                    />
                  </div>

                  {(accountType === 'police' || accountType === 'fire') && (
                    <div>
                      <label htmlFor="badgeNumber" className="block text-sm font-medium text-navy-700">
                        Badge/ID Number
                      </label>
                      <input
                        type="text"
                        id="badgeNumber"
                        name="badgeNumber"
                        value={formData.badgeNumber}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500"
                        required
                      />
                    </div>
                  )}
                </>
              )}
            </div>

            {isFreeAccount(accountType) && (
              <div className="rounded-md bg-green-50 p-4">
                <div className="flex">
                  <Shield className="h-5 w-5 text-green-400" />
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">
                      Free Lifetime Account
                    </h3>
                    <div className="mt-2 text-sm text-green-700">
                      <p>
                        As a {accountType === 'police' ? 'law enforcement officer' : 'firefighter'}, 
                        you are eligible for a free lifetime account. Your credentials will be verified 
                        after registration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-navy-600 hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600">Already have an account?</span>{' '}
            <Link to="/login" className="font-medium text-navy-600 hover:text-navy-500">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;