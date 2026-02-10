export const alerts = [
  {
    id: 1,
    type: 'INVENTORY-SALES CONFLICT',
    severity: 'critical',
    title: 'Limestone at CRITICAL Level',
    description:
      'Limestone at 950t on hand (3-day supply). Open orders: 400t committed for delivery by Friday. At current production, shortfall of ~150t possible.',
    action: 'Prioritize limestone production today',
    actionLabel: 'Prioritize Production',
  },
  {
    id: 2,
    type: 'COMPLIANCE DEADLINE',
    severity: 'warning',
    title: 'Hamilton ECA Sample Due Feb 28',
    description:
      'Monthly effluent grab sample not yet scheduled. Recommend scheduling before Thursday rain to avoid turbidity issues affecting sample quality.',
    action: 'Schedule grab sample this week',
    actionLabel: 'Schedule Now',
  },
  {
    id: 3,
    type: 'EQUIPMENT MAINTENANCE',
    severity: 'warning',
    title: 'Crusher A Approaching Service Threshold',
    description:
      'Crusher A: 487 hours since last service (threshold: 500). Current Crusher Run supply: 9 days provides buffer for planned downtime.',
    action: 'Schedule service today during afternoon shift',
    actionLabel: 'Schedule Service',
  },
];

export const recommendations = [
  {
    id: 1,
    priority: 'HIGH',
    title: 'Shift Crusher Priority to Limestone',
    action: 'Shift crusher priority to Limestone production for morning shift.',
    reasoning:
      '3-day supply with 400t committed. Rain Thursday will reduce wash efficiency. Building buffer today prevents Friday stockout and customer disappointment.',
    impact:
      'Potential delivery delays to Mueller Construction, relationship risk with key customer.',
    owner: 'Operations Manager',
  },
  {
    id: 2,
    priority: 'MEDIUM',
    title: 'Schedule ECA Grab Sample',
    action: 'Schedule Hamilton ECA grab sample for tomorrow (Wednesday) morning.',
    reasoning:
      'Sample due Feb 28. Thursday rain may cause turbidity issues affecting sample quality. Wednesday shows optimal conditions and avoids Thursday precipitation.',
    impact: 'May require repeat sampling or risk elevated TSS readings.',
    owner: 'Environmental Manager',
  },
  {
    id: 3,
    priority: 'MEDIUM',
    title: 'Execute Crusher A Service',
    action: 'Execute Crusher A service today during afternoon shift.',
    reasoning:
      '487/500 hours reached. Crusher Run at 9-day supply provides buffer. Completing today avoids conflict with Thursday weather and weekend orders.',
    impact: 'Unplanned breakdown risk increases, potential production disruption.',
    owner: 'Maintenance Supervisor',
  },
];
