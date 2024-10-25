import React, { useState } from 'react';
import { Search, Filter, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import useStore from '../store/useStore';

interface MissingPerson {
  id: string;
  name: string;
  age: number;
  description: string;
  lastSeen: {
    date: string;
    location: string;
  };
  status: 'missing' | 'found_alive' | 'found_deceased';
  photoURL: string;
  reportedBy: string;
}

const MissingPersonsPage = () => {
  const { user } = useStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<
    MissingPerson['status'] | 'all'
  >('all');

  // Mock data - replace with actual API call
  const missingPersons: MissingPerson[] = [
    {
      id: '1',
      name: 'John Doe',
      age: 25,
      description:
        'Last seen wearing blue jeans and white t-shirt. Has a distinctive scar on left cheek.',
      lastSeen: {
        date: '2024-03-15',
        location: 'Central Park, Nairobi',
      },
      status: 'missing',
      photoURL: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      reportedBy: 'user-1',
    },
    {
      id: '2',
      name: 'James daa',
      age: 21,
      description:
        'Last seen wearing blue jeans and white t-shirt. Has a long dark hair',
      lastSeen: {
        date: '2024-02-15',
        location: 'Central Avenue, Nairobi',
      },
      status: 'found_alive',
      photoURL: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      reportedBy: 'user-2',
    },
    {
      id: '2',
      name: 'kim lea',
      age: 71,
      description:
        'Last seen wearing black jeans and white t-shirt. Has a long beard',
      lastSeen: {
        date: '2022-02-15',
        location: 'Kawangware, Nairobi',
      },
      status: 'found_deceased',
      photoURL: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      reportedBy: 'user-10',
    },
  ];

  const filteredPersons = missingPersons.filter((person) => {
    const matchesSearch =
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === 'all' || person.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadgeColor = (status: MissingPerson['status']) => {
    switch (status) {
      case 'missing':
        return 'bg-red-100 text-red-800';
      case 'found_alive':
        return 'bg-green-100 text-green-800';
      case 'found_deceased':
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="pt-16">
      <div className="bg-navy-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
              Missing Persons
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Help us locate missing individuals by sharing information or
              reporting sightings.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative flex-1 max-w-xl">
            <input
              type="text"
              placeholder="Search by name or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-navy-500 focus:border-navy-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          <div className="flex items-center gap-4">
            <select
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(
                  e.target.value as MissingPerson['status'] | 'all'
                )
              }
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-navy-500 focus:border-navy-500"
            >
              <option value="all">All Status</option>
              <option value="missing">Missing</option>
              <option value="found_alive">Found Alive</option>
              <option value="found_deceased">Found Deceased</option>
            </select>

            {user?.subscription?.type === 'premium' && (
              <Link
                to="/report-missing"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-navy-600 hover:bg-navy-700"
              >
                <AlertTriangle className="mr-2 h-5 w-5" />
                Report Missing Person
              </Link>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPersons.map((person) => (
            <div
              key={person.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="aspect-[3/4] w-40 mx-auto mt-6 rounded-lg overflow-hidden">
                <img
                  src={person.photoURL}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-navy-900">
                    {person.name}
                  </h3>
                  <span
                    className={`px-2 py-1 rounded-full text-sm font-medium ${getStatusBadgeColor(
                      person.status
                    )}`}
                  >
                    {person.status.replace('_', ' ').toUpperCase()}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">Age: {person.age}</p>
                <p className="text-gray-600 mb-4">{person.description}</p>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-500">
                    Last seen on{' '}
                    {new Date(person.lastSeen.date).toLocaleDateString()} at{' '}
                    {person.lastSeen.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MissingPersonsPage;
