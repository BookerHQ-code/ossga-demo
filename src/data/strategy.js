export const strategy = {
  weekLabel: 'Week 7: February 17\u201323, 2026',
  generatedDate: 'February 17, 2026',

  executiveSummary:
    'This week presents a production opportunity with favorable early-week weather, offset by a developing limestone supply risk that requires immediate attention. Sales momentum continues strong (+12% WoW) but inventory turnover rates suggest production is not keeping pace with demand. Compliance position remains solid with no violations, though three deadlines fall within the next 45 days.',

  metrics: [
    {
      id: 'production',
      title: 'Production',
      value: '7,840t',
      target: '8,200t',
      percentage: 96,
      status: 'warning',
      trend: 'down',
      trendValue: '4% vs. last week',
      subtitle: '96% of target',
    },
    {
      id: 'sales',
      title: 'Sales',
      value: '$342,000',
      target: '$310,000',
      percentage: 110,
      status: 'ok',
      trend: 'up',
      trendValue: '12% vs. last week',
      subtitle: '110% of target',
    },
    {
      id: 'inventory',
      title: 'Inventory',
      value: '84,520t',
      target: null,
      percentage: null,
      status: 'warning',
      trend: 'down',
      trendValue: '3.1% WoW',
      subtitle: '2 critical items',
    },
    {
      id: 'compliance',
      title: 'Compliance',
      value: '0',
      target: '0',
      percentage: 100,
      status: 'ok',
      trend: 'stable',
      trendValue: '3 deadlines in 45 days',
      subtitle: 'No violations',
    },
  ],

  insights: [
    {
      id: 1,
      title: 'Sales-Production Gap Widening',
      summary:
        'Sales growth (+12%) is outpacing production (-4%). At current trajectory, inventory days-of-supply will drop from 18 to 12 within 3 weeks.',
      detail:
        'Strong sales of Granular A (turnover 3.9x) driven by mild February enabling early road construction. Production allocation still weighted toward Stone (turnover 4.5x).',
      recommendation: 'Rebalance crusher allocation 60/40 toward Granular A for next 2 weeks.',
    },
    {
      id: 2,
      title: 'Weather Window Optimization',
      summary:
        'Next 10 days show 6 favorable production days, 4 weather-impacted days. This February tracking 8% above average due to mild conditions.',
      detail:
        'Rain Thursday-Friday will impact wash plant. Compliance sampling also due this week. Historical data shows February production typically 15% below monthly average due to weather.',
      recommendation:
        'Front-load production Mon\u2013Wed. Schedule compliance sampling Wed AM. Use Thu\u2013Fri for maintenance and administrative tasks.',
    },
    {
      id: 3,
      title: 'Customer Concentration Emerging',
      summary:
        'Top 3 customers now represent 48% of February revenue (up from 35% in January). City of Burlington contract driving most of the increase.',
      detail:
        'Limestone shortage directly tied to Burlington contract demand. Single-customer dependency risk increasing.',
      recommendation:
        'Monitor Burlington payment terms. Consider volume discount negotiation to lock in relationship while maintaining margin.',
    },
  ],

  opportunities: [
    {
      id: 1,
      title: 'Pricing Opportunity',
      description:
        'Regional limestone prices up 12% YoY. Current pricing 8% below market. Opportunity to adjust Q2 pricing.',
      impact: '+$45,000 annual margin',
    },
    {
      id: 2,
      title: 'Capacity Utilization',
      description:
        'Burlington Quarry operating at 73% capacity. Adjacent sites at 85%+. Opportunity to shift production or accept additional orders.',
      impact: '+$12,000/month potential',
    },
    {
      id: 3,
      title: 'Cross-Site Logistics',
      description:
        '3 instances this month where Site A had excess inventory while Site B had shortage. Inter-site transfer protocol could reduce stockouts.',
      impact: 'Avoid 2\u20133 lost orders/month (~$8,000)',
    },
  ],

  risks: [
    {
      id: 1,
      title: 'Limestone Stockout',
      severity: 'high',
      description: 'Current: 3-day supply. Threshold: 5-day.',
      mitigation: 'Transfer from Burlington, prioritize production',
      owner: 'Operations Manager',
    },
    {
      id: 2,
      title: 'Uhthoff PTTW Deadline',
      severity: 'medium',
      description: 'Report due March 31, 2026. Completion: 72%.',
      mitigation: '4 monitoring events remaining, report compilation needed',
      owner: 'Environmental Manager',
    },
    {
      id: 3,
      title: 'Crusher A Maintenance',
      severity: 'medium',
      description: 'Hours: 487/500 service threshold.',
      mitigation: 'Schedule planned service to avoid ~$15,000/day lost production',
      owner: 'Maintenance Supervisor',
    },
  ],

  priorities: [
    {
      id: 1,
      label: 'Resolve limestone shortage',
      detail: 'Execute Burlington transfer (400t), reallocate crusher time 60% limestone',
    },
    {
      id: 2,
      label: 'Maximize Mon\u2013Wed production window',
      detail: 'Full production shifts all sites, complete Hamilton blast Thursday AM',
    },
    {
      id: 3,
      label: 'Hamilton ECA sample Wednesday',
      detail: 'Schedule grab sample for optimal conditions before Thursday rain',
    },
    {
      id: 4,
      label: 'Crusher A service Tuesday',
      detail: 'Planned downtime during afternoon shift, 9-day Crusher Run buffer',
    },
    {
      id: 5,
      label: 'Review Q2 pricing Friday',
      detail: 'Burlington capacity utilization analysis, market pricing review',
    },
  ],
};
