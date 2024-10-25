import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Shield } from 'lucide-react';
import useStore from '../store/useStore';

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser } = useStore();
  const [showPassword, setShowPassword] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock admin credentials for demonstration
    if (isAdmin && formData.email === 'admin@sparko.com' && formData.password === 'admin123') {
      setUser({
        id: 'admin-1',
        email: formData.email,
        fullName: 'System Administrator',
        role: 'admin',
        subscription: {
          type: 'premium',
          expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
        }
      });
      navigate('/admin');
      return;
    }

    // Mock regular user login for demonstration
    if (!isAdmin && formData.email && formData.password) {
      setUser({
        id: 'user-1',
        email: formData.email,
        fullName: 'Test User',
        role: 'user',
        subscription: {
          type: 'free',
          expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
        }
      });
      navigate('/');
      return;
    }

    setError('Invalid credentials');
  };

  return (
    <div className="min-h-screen pt-16 bg-navy-50">
      <div className="max-w-md mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-navy-900">Welcome Back</h2>
            <p className="mt-2 text-gray-600">Log in to your Sparko account</p>
          </div>

          <div className="mb-6">
            <button
              onClick={() => setIsAdmin(!isAdmin)}
              className={`w-full flex items-center justify-center space-x-2 p-3 rounded-lg border-2 ${
                isAdmin 
                  ? 'border-navy-600 bg-navy-50 text-navy-900' 
                  : 'border-gray-200 text-gray-600 hover:border-navy-300'
              }`}
            >
              <Shield className="h-5 w-5" />
              <span>{isAdmin ? 'Admin Login' : 'User Login'}</span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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

            {error && (
              <div className="text-red-600 text-sm text-center">{error}</div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-navy-600 focus:ring-navy-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600">
                  Remember me
                </label>
              </div>

              <Link to="/forgot-password" className="text-sm font-medium text-navy-600 hover:text-navy-500">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-navy-600 hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500"
            >
              {isAdmin ? 'Admin Login' : 'Log In'}
            </button>
          </form>

          {!isAdmin && (
            <div className="mt-6 text-center text-sm">
              <span className="text-gray-600">Don't have an account?</span>{' '}
              <Link to="/signup" className="font-medium text-navy-600 hover:text-navy-500">
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;