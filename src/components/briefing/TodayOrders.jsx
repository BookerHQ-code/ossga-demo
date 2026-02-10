import { TruckIcon } from '@heroicons/react/24/outline';
import orders from '../../data/orders.json';
import SectionHeader from '../ui/SectionHeader';
import StatusBadge from '../ui/StatusBadge';

const TodayOrders = () => {
  const { summary, todaySchedule } = orders;

  return (
    <div>
      <SectionHeader
        icon={TruckIcon}
        title="Today's Orders"
        subtitle={`${summary.todayDeliveries} deliveries scheduled (${summary.todayTonnage.toLocaleString()}t)`}
      />

      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        {/* Summary stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 border-b border-gray-100">
          <div>
            <p className="text-sm text-gray-500">Scheduled</p>
            <p className="text-2xl font-bold text-gray-900">{summary.todayDeliveries}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Tonnage</p>
            <p className="text-2xl font-bold text-gray-900">{summary.todayTonnage.toLocaleString()}t</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Open Orders</p>
            <p className="text-2xl font-bold text-gray-900">{summary.openOrders}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">WoW Change</p>
            <p className="text-2xl font-bold text-gray-900">+{summary.weekOverWeekChange}%</p>
          </div>
        </div>

        {/* Key deliveries */}
        <div className="divide-y divide-gray-100">
          {todaySchedule.map((order, i) => (
            <div key={i} className="p-4 flex items-center justify-between flex-wrap gap-2">
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900">{order.customer}</p>
                <p className="text-sm text-gray-500">
                  {order.quantity}t {order.product} &middot; {order.time}{' '}
                  {order.type === 'pickup' ? 'pickup' : 'delivery'}
                </p>
              </div>
              <StatusBadge status={order.status} label={order.status === 'ready' ? 'Ready' : 'Monitor'} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodayOrders;
