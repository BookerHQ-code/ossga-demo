import { CubeIcon } from '@heroicons/react/24/outline';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { weeklyInventory } from '../../data/analytics';
import inventory from '../../data/inventory.json';
import ProgressBar from '../ui/ProgressBar';

const maxDays = 30;

const InventoryCharts = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
        <CubeIcon className="h-4 w-4 text-blue-600" />
        <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
          Inventory Analytics
        </h2>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Total inventory trend */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Total Inventory Trend</h3>
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={weeklyInventory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="label" tick={{ fontSize: 12 }} stroke="#9CA3AF" />
                <YAxis
                  tick={{ fontSize: 12 }}
                  stroke="#9CA3AF"
                  tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
                  domain={['auto', 'auto']}
                />
                <Tooltip
                  formatter={(value) => [`${value.toLocaleString()}t`, 'Total']}
                  labelFormatter={(label) => `Week of ${label}`}
                  contentStyle={{ fontSize: 12 }}
                />
                <Line
                  type="monotone"
                  dataKey="total"
                  stroke="#3B82F6"
                  strokeWidth={2}
                  dot={{ r: 4, fill: '#3B82F6' }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Per-product days of supply */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Days of Supply &amp; Turnover
            </h3>
            <div className="space-y-3">
              {inventory.products.map((product) => (
                <div key={product.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-700">{product.name}</span>
                    <span className="text-gray-500">
                      {product.daysOfSupply}d &middot; {product.turnoverRate}x turnover
                    </span>
                  </div>
                  <ProgressBar
                    value={product.daysOfSupply}
                    max={maxDays}
                    status={product.status}
                    showLabel={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryCharts;
