import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';
import compliance from '../../data/compliance.json';
import SectionHeader from '../ui/SectionHeader';
import StatusBadge from '../ui/StatusBadge';
import ProgressBar from '../ui/ProgressBar';

const statusMap = {
  OK: 'ok',
  SOON: 'warning',
};

const ComplianceStatus = () => {
  const { instruments, recentBlast, violations } = compliance;

  return (
    <div>
      <SectionHeader
        icon={ClipboardDocumentCheckIcon}
        title="Compliance Status"
        subtitle={`${violations} violations detected`}
      />

      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="divide-y divide-gray-100">
          {instruments.map((inst) => (
            <div key={inst.number} className="p-4">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                <div>
                  <p className="font-medium text-gray-900">{inst.name}</p>
                  <p className="text-sm text-gray-500">
                    {inst.type} &middot; Next due: {inst.nextReportDue}
                  </p>
                </div>
                <StatusBadge status={statusMap[inst.status] || inst.status} label={inst.status} />
              </div>
              <ProgressBar
                value={inst.completionPercent}
                max={100}
                label="Completion"
                status={statusMap[inst.status] || 'ok'}
              />
              {inst.pendingTasks &&
                inst.pendingTasks.map((task, i) => (
                  <p key={i} className="mt-2 text-sm text-amber-700 bg-amber-50 rounded px-3 py-1.5">
                    {task.task} &mdash; due {task.dueBy} ({task.status.replace('_', ' ')})
                  </p>
                ))}
            </div>
          ))}
        </div>

        {/* Recent blast */}
        <div className="border-t border-gray-100 p-4 bg-gray-50 rounded-b-lg">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Last blast ({recentBlast.location}):</span>{' '}
            {recentBlast.date} &mdash; All parameters within limits. Overpressure:{' '}
            {recentBlast.overpressure}/{recentBlast.overpressureLimit} dBL &middot; Vibration:{' '}
            {recentBlast.vibration}/{recentBlast.vibrationLimit} mm/s
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComplianceStatus;
