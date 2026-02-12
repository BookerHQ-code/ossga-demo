import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { weeklyRevenue, topCustomers } from '../../data/analytics';

const SalesCharts = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
        <CurrencyDollarIcon className="h-4 w-4 text-blue-600" />
        <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
          Sales Analytics
        </h2>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Weekly revenue bar chart */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Weekly Revenue vs Target</h3>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={weeklyRevenue}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="label" tick={{ fontSize: 12 }} stroke="#9CA3AF" />
                <YAxis
                  tick={{ fontSize: 12 }}
                  stroke="#9CA3AF"
                  tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
                />
                <Tooltip
                  formatter={(value) => [`$${value.toLocaleString()}`, undefined]}
                  labelFormatter={(label) => `Week of ${label}`}
                  contentStyle={{ fontSize: 12 }}
                />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Bar dataKey="target" fill="#E5E7EB" name="Target" radius={[2, 2, 0, 0]} />
                <Bar dataKey="actual" fill="#3B82F6" name="Actual" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Top customers */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Top Customers (Week 7 Revenue)
            </h3>
            <div className="space-y-3">
              {topCustomers.map((customer) => (
                <div key={customer.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-700 truncate">{customer.name}</span>
                    <span className="text-gray-500 ml-2 flex-shrink-0">
                      ${customer.revenue.toLocaleString()} ({customer.pct}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="h-3 rounded-full bg-blue-500 transition-all duration-500"
                      style={{ width: `${(customer.pct / 20) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesCharts;
