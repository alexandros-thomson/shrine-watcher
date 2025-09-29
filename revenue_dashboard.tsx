import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const RevenueDashboard = () => {
  const [revenueData, setRevenueData] = useState([
    { month: 'Jan', patreon: 0, templates: 0, consulting: 0, total: 0 },
    { month: 'Feb', patreon: 250, templates: 447, consulting: 750, total: 1447 },
    { month: 'Mar', patreon: 750, templates: 1392, consulting: 3500, total: 5642 },
    { month: 'Apr', patreon: 1125, templates: 2100, consulting: 5500, total: 8725 },
    { month: 'May', patreon: 1500, templates: 2800, consulting: 7000, total: 11300 },
    { month: 'Jun', patreon: 1875, templates: 3200, consulting: 8000, total: 13075 }
  ]);

  const [tierData, setTierData] = useState([
    { name: 'Bronze', value: 45, color: '#CD7F32' },
    { name: 'Silver', value: 30, color: '#C0C0C0' },
    { name: 'Gold', value: 25, color: '#FFD700' }
  ]);

  const [metrics, setMetrics] = useState({
    totalRevenue: 39189,
    monthlyGrowth: 18.5,
    activePatrons: 67,
    templatesSold: 23,
    consultingHours: 142
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-center mb-2">🜍 Kypria Revenue Dashboard</h1>
          <p className="text-gray-400 text-center">Sacred Gates Revenue Monitoring</p>
        </header>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="text-2xl font-bold text-green-400">${metrics.totalRevenue.toLocaleString()}</div>
            <div className="text-gray-400 text-sm">Total Revenue</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="text-2xl font-bold text-blue-400">+{metrics.monthlyGrowth}%</div>
            <div className="text-gray-400 text-sm">Monthly Growth</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="text-2xl font-bold text-purple-400">{metrics.activePatrons}</div>
            <div className="text-gray-400 text-sm">Active Patrons</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="text-2xl font-bold text-yellow-400">{metrics.templatesSold}</div>
            <div className="text-gray-400 text-sm">Templates Sold</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="text-2xl font-bold text-orange-400">{metrics.consultingHours}</div>
            <div className="text-gray-400 text-sm">Consulting Hours</div>
          </div>
        </div>

        {/* Revenue Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-bold mb-4">Revenue Streams</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                  labelStyle={{ color: '#F3F4F6' }}
                />
                <Legend />
                <Bar dataKey="patreon" stackId="a" fill="#8B5CF6" name="Patreon" />
                <Bar dataKey="templates" stackId="a" fill="#10B981" name="Templates" />
                <Bar dataKey="consulting" stackId="a" fill="#F59E0B" name="Consulting" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-bold mb-4">Growth Trajectory</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                  labelStyle={{ color: '#F3F4F6' }}
                />
                <Line type="monotone" dataKey="total" stroke="#3B82F6" strokeWidth={3} name="Total Revenue" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Patron Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-bold mb-4">Patron Tier Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={tierData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {tierData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-700 rounded">
                <div>
                  <div className="font-medium">New Gold Patron</div>
                  <div className="text-sm text-gray-400">PatronName#1234 - $50/month</div>
                </div>
                <div className="text-yellow-400">🏆</div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-700 rounded">
                <div>
                  <div className="font-medium">Template Sale</div>
                  <div className="text-sm text-gray-400">Mythic Badge Kit - $99</div>
                </div>
                <div className="text-green-400">💰</div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-700 rounded">
                <div>
                  <div className="font-medium">Consulting Booking</div>
                  <div className="text-sm text-gray-400">System Architecture Review - $2,500</div>
                </div>
                <div className="text-blue-400">🏗️</div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Items */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl font-bold mb-4">Next Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-red-900/20 border border-red-700 rounded p-4">
              <h3 className="font-bold text-red-400 mb-2">High Priority</h3>
              <ul className="text-sm space-y-1">
                <li>• Deploy unified webhook system</li>
                <li>• Test Patreon integration end-to-end</li>
                <li>• Launch first GitHub template</li>
              </ul>
            </div>
            <div className="bg-yellow-900/20 border border-yellow-700 rounded p-4">
              <h3 className="font-bold text-yellow-400 mb-2">Medium Priority</h3>
              <ul className="text-sm space-y-1">
                <li>• Create consulting portfolio page</li>
                <li>• Set up social media automation</li>
                <li>• Implement revenue tracking</li>
              </ul>
            </div>
            <div className="bg-green-900/20 border border-green-700 rounded p-4">
              <h3 className="font-bold text-green-400 mb-2">Future Goals</h3>
              <ul className="text-sm space-y-1">
                <li>• Scale to $15k/month</li>
                <li>• Launch enterprise consulting</li>
                <li>• Build affiliate program</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueDashboard;