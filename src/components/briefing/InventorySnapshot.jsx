import { CubeIcon } from '@heroicons/react/24/outline';
import inventory from '../../data/inventory.json';
import SectionHeader from '../ui/SectionHeader';
import StatusBadge from '../ui/StatusBadge';
import ProgressBar from '../ui/ProgressBar';

const maxDays = 30;

const InventorySnapshot = () => {
  const { products, totalTonnage, weekOverWeekChange } = inventory;

  return (
    <div>
      <SectionHeader
        icon={CubeIcon}
        title="Inventory Snapshot"
        subtitle={`${totalTonnage.toLocaleString()}t total (${weekOverWeekChange > 0 ? '+' : ''}${weekOverWeekChange}% WoW)`}
      />
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 divide-y divide-gray-100">
        {products.map((product) => (
          <div key={product.name} className="p-4 flex items-center gap-4">
            <div className="w-28 flex-shrink-0">
              <p className="font-medium text-gray-900">{product.name}</p>
              <p className="text-sm text-gray-500">{product.onHand.toLocaleString()}t</p>
            </div>
            <div className="flex-1">
              <ProgressBar
                value={product.daysOfSupply}
                max={maxDays}
                label={`${product.daysOfSupply}d supply`}
                status={product.status}
                showLabel={false}
              />
            </div>
            <div className="text-right w-20 flex-shrink-0">
              <span className="text-sm font-medium text-gray-700">{product.daysOfSupply}d</span>
            </div>
            <div className="w-24 flex-shrink-0 text-right">
              <StatusBadge status={product.status} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventorySnapshot;
