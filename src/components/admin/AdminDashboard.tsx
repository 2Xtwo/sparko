import React from 'react';
import { Users, AlertTriangle, Clock, DollarSign } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import ReportGenerator from './ReportGenerator';

const AdminDashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '2,345',
      icon: Users,
      change: '+12%',
      changeType: 'increase',
    },
    {
      title: 'Active Incidents',
      value: '18',
      icon: AlertTriangle,
      change: '-5%',
      changeType: 'decrease',
    },
    {
      title: 'Avg Response Time',
      value: '8.5 min',
      icon: Clock,
      change: '-2.3 min',
      changeType: 'decrease',
    },
    {
      title: 'Monthly Revenue',
      value: 'KSh 245,000',
      icon: DollarSign,
      change: '+18%',
      changeType: 'increase',
    },
  ];

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Incidents',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.title} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <Icon className="h-8 w-8 text-navy-600" />
              </div>
              <div
                className={`mt-2 text-sm ${
                  stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {stat.change} from last month
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Incident Trends</h2>
          <Line data={chartData} />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="space-y-4">
            <button className="w-full py-2 px-4 bg-navy-600 text-white rounded-lg hover:bg-navy-700">
              View All Users
            </button>
            <button className="w-full py-2 px-4 bg-navy-600 text-white rounded-lg hover:bg-navy-700">
              Manage Responders
            </button>
            <button className="w-full py-2 px-4 bg-navy-600 text-white rounded-lg hover:bg-navy-700">
              View System Logs
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <ReportGenerator />
      </div>
    </div>
  );
};

export default AdminDashboard;