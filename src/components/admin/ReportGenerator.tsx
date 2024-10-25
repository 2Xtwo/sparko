import React, { useState } from 'react';
import { Download, Filter } from 'lucide-react';
import { format } from 'date-fns';
import PDFReport from '../reports/PDFReport';

interface ReportFilter {
  startDate: string;
  endDate: string;
  type: string;
  status?: string;
  region?: string;
}

interface ReportDataResult {
  date: string;
  type: string;
  status: string;
  location: string;
}

interface ReportData {
  title: string;
  data: ReportDataResult[];
  columns: { key: string; label: string }[];
  filters: ReportFilter;
  generatedBy: string;
}

const ReportGenerator: React.FC = () => {
  const [filters, setFilters] = useState<ReportFilter>({
    startDate: format(new Date(), 'yyyy-MM-dd'),
    endDate: format(new Date(), 'yyyy-MM-dd'),
    type: 'incident',
  });

  const [loading, setLoading] = useState(false);

  const handleGenerateReport = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/reports/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(filters),
      });

      const data = await response.json();

      if (data.success) {
        // Generate PDF using the data
        const reportData: ReportData = {
          title: 'Emergency Response Report',
          data: data.results as ReportDataResult[], // Cast to the defined type
          columns: [
            { key: 'date', label: 'Date' },
            { key: 'type', label: 'Type' },
            { key: 'status', label: 'Status' },
            { key: 'location', label: 'Location' },
          ],
          filters,
          generatedBy: 'Admin User',
        };

        // Handle PDF generation and download here
        PDFReport.generate(reportData);
      }
    } catch (error) {
      console.error('Failed to generate report:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Report Generator</h2>
          <Filter className="text-gray-400" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Start Date
            </label>
            <input
              type="date"
              value={filters.startDate}
              onChange={(e) =>
                setFilters({ ...filters, startDate: e.target.value })
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              End Date
            </label>
            <input
              type="date"
              value={filters.endDate}
              onChange={(e) =>
                setFilters({ ...filters, endDate: e.target.value })
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Report Type
            </label>
            <select
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500"
            >
              <option value="incident">Incident Report</option>
              <option value="response_time">Response Time Analysis</option>
              <option value="user_activity">User Activity</option>
              <option value="financial">Financial Report</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              value={filters.status}
              onChange={(e) =>
                setFilters({ ...filters, status: e.target.value || undefined })
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500"
            >
              <option value="">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="resolved">Resolved</option>
              <option value="in_progress">In Progress</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleGenerateReport}
          disabled={loading}
          className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-navy-600 hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500 disabled:opacity-50"
        >
          {loading ? (
            'Generating...'
          ) : (
            <>
              <Download className="mr-2" size={20} />
              Generate Report
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ReportGenerator;
