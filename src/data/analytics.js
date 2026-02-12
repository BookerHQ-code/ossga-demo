// 8-week historical data for Analytics Dashboard
// Week 7 values align with strategy.js and inventory.json current-week data
// Demo date: February 18, 2026 (Tuesday of Week 8)

export const weeklyProduction = [
  { week: 'W1', label: 'Jan 6', actual: 7200, target: 8200 },
  { week: 'W2', label: 'Jan 13', actual: 8050, target: 8200 },
  { week: 'W3', label: 'Jan 20', actual: 7600, target: 8200 },
  { week: 'W4', label: 'Jan 27', actual: 8400, target: 8200 },
  { week: 'W5', label: 'Feb 3', actual: 8100, target: 8200 },
  { week: 'W6', label: 'Feb 10', actual: 8160, target: 8200 },
  { week: 'W7', label: 'Feb 17', actual: 7840, target: 8200 },
  { week: 'W8', label: 'Feb 18', actual: 3200, target: 8200, partial: true },
];

export const weeklyRevenue = [
  { week: 'W1', label: 'Jan 6', actual: 265000, target: 310000 },
  { week: 'W2', label: 'Jan 13', actual: 298000, target: 310000 },
  { week: 'W3', label: 'Jan 20', actual: 275000, target: 310000 },
  { week: 'W4', label: 'Jan 27', actual: 325000, target: 310000 },
  { week: 'W5', label: 'Feb 3', actual: 305000, target: 310000 },
  { week: 'W6', label: 'Feb 10', actual: 318000, target: 310000 },
  { week: 'W7', label: 'Feb 17', actual: 342000, target: 310000 },
  { week: 'W8', label: 'Feb 18', actual: 148000, target: 310000, partial: true },
];

export const productMix = [
  { name: 'Stone', value: 15800, color: '#3B82F6' },
  { name: 'Granular A', value: 7200, color: '#10B981' },
  { name: 'Rip Rap', value: 4850, color: '#F59E0B' },
  { name: 'Crusher Run', value: 3100, color: '#8B5CF6' },
  { name: 'Limestone', value: 950, color: '#EF4444' },
];

export const weeklyInventory = [
  { week: 'W1', label: 'Jan 6', total: 92400 },
  { week: 'W2', label: 'Jan 13', total: 90100 },
  { week: 'W3', label: 'Jan 20', total: 91800 },
  { week: 'W4', label: 'Jan 27', total: 89500 },
  { week: 'W5', label: 'Feb 3', total: 88200 },
  { week: 'W6', label: 'Feb 10', total: 87200 },
  { week: 'W7', label: 'Feb 17', total: 84520 },
  { week: 'W8', label: 'Feb 18', total: 83900 },
];

export const topCustomers = [
  { name: 'City of Burlington', revenue: 68400, pct: 20 },
  { name: 'Dufferin Construction', revenue: 54720, pct: 16 },
  { name: 'Aecon Group', revenue: 41040, pct: 12 },
  { name: 'Steed & Evans', revenue: 27360, pct: 8 },
  { name: 'Rankin Construction', revenue: 23940, pct: 7 },
];

export const siteCapacity = [
  { site: 'Hamilton Quarry', utilization: 87, status: 'ok' },
  { site: 'Burlington Quarry', utilization: 73, status: 'warning' },
  { site: 'Uhthoff Quarry', utilization: 85, status: 'ok' },
];

export const complianceTimeline = [
  {
    label: 'Hamilton ECA Sample',
    date: 'Feb 28, 2026',
    daysOut: 10,
    severity: 'warning',
  },
  {
    label: 'Uhthoff PTTW Report',
    date: 'Mar 31, 2026',
    daysOut: 41,
    severity: 'warning',
  },
  {
    label: 'Hamilton ECA Annual',
    date: 'Jun 1, 2026',
    daysOut: 103,
    severity: 'ok',
  },
  {
    label: 'Burlington CAR',
    date: 'Sep 30, 2026',
    daysOut: 224,
    severity: 'ok',
  },
];

export const complianceProgress = [
  { name: 'Hamilton PTTW', pct: 87, type: 'PTTW' },
  { name: 'Hamilton ECA', pct: 75, type: 'ECA' },
  { name: 'Burlington CAR', pct: 45, type: 'CAR' },
  { name: 'Uhthoff PTTW', pct: 72, type: 'PTTW' },
];
