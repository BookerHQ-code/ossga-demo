import { CubeTransparentIcon } from '@heroicons/react/24/outline';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';
import { weeklyProduction, productMix, siteCapacity } from '../../data/analytics';
import ProgressBar from '../ui/ProgressBar';

const ProductionCharts = () => {
  const totalTonnage = productMix.reduce((sum, p) => sum + p.value, 0);

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
        <CubeTransparentIcon className="h-4 w-4 text-blue-600" />
        <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
          Production Analytics
        </h2>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Weekly production trend */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Weekly Production vs Target</h3>
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart data={weeklyProduction}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="label" tick={{ fontSize: 12 }} stroke="#9CA3AF" />
                <YAxis tick={{ fontSize: 12 }} stroke="#9CA3AF" tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} />
                <Tooltip
                  formatter={(value) => [`${value.toLocaleString()}t`, undefined]}
                  labelFormatter={(label) => `Week of ${label}`}
                  contentStyle={{ fontSize: 12 }}
                />
                <Area
                  type="monotone"
                  dataKey="target"
                  stroke="#D1D5DB"
                  fill="#F3F4F6"
                  strokeDasharray="4 4"
                  name="Target"
                />
                <Area
                  type="monotone"
                  dataKey="actual"
                  stroke="#3B82F6"
                  fill="#DBEAFE"
                  name="Actual"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Product mix donut */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Product Mix (Current Stock)</h3>
            <ResponsiveContainer width="100%" height={240}>
              <PieChart>
                <Pie
                  data={productMix}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {productMix.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => [`${value.toLocaleString()}t (${((value / totalTonnage) * 100).toFixed(0)}%)`, undefined]}
                  contentStyle={{ fontSize: 12 }}
                />
                <Legend
                  formatter={(value) => <span className="text-xs text-gray-600">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Site capacity utilization */}
        <div className="mt-6 pt-4 border-t border-gray-100">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Site Capacity Utilization</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {siteCapacity.map((site) => (
              <div key={site.site}>
                <ProgressBar
                  value={site.utilization}
                  max={100}
                  label={site.site}
                  status={site.status}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionCharts;
