import { CubeIcon } from '@heroicons/react/24/outline';
import inventory from '../../data/inventory.json';
import SectionHeader from '../ui/SectionHeader';
import StatusBadge from '../ui/StatusBadge';
import ProgressBar from '../ui/ProgressBar';

const maxDays = 30;

const InventorySnapshot = ({ inline }) => {
  const { products, totalTonnage, weekOverWeekChange } = inventory;

  return (
    <div>
      {!inline && (
        <SectionHeader
          icon={CubeIcon}
          title="Inventory Snapshot"
          subtitle={`${totalTonnage.toLocaleString()}t total (${weekOverWeekChange > 0 ? '+' : ''}${weekOverWeekChange}% WoW)`}
        />
      )}
      {inline && (
        <div className="px-4 py-2 border-b border-gray-100 bg-gray-50">
          <span className="text-xs font-medium text-gray-500">
            {totalTonnage.toLocaleString()}t total ({weekOverWeekChange > 0 ? '+' : ''}{weekOverWeekChange}% WoW)
          </span>
        </div>
      )}
      <div className={inline ? 'divide-y divide-gray-100' : 'bg-white rounded-lg border border-gray-200 divide-y divide-gray-100'}>
        {products.map((product) => (
          <div key={product.name} className="px-4 py-2.5 flex items-center gap-4">
            <div className="w-28 flex-shrink-0">
              <p className="font-medium text-gray-900 text-sm">{product.name}</p>
              <p className="text-xs text-gray-500">{product.onHand.toLocaleString()}t</p>
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
            <div className="text-right w-16 flex-shrink-0">
              <span className="text-sm font-medium text-gray-700">{product.daysOfSupply}d</span>
            </div>
            <div className="w-20 flex-shrink-0 text-right">
              <StatusBadge status={product.status} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventorySnapshot;
