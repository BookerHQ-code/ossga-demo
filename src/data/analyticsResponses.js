const responses = [
  {
    id: 'production-trends',
    keywords: ['production', 'trend', 'output', 'tonnage', 'crushing', 'throughput'],
    minScore: 2,
    title: 'Production Trend Analysis',
    confidence: 94,
    response: `**8-WEEK PRODUCTION TREND ANALYSIS**

**Overall Production: Tracking 12% Below Target**

**Weekly Output (tonnes):**
| Week | Target | Actual | Variance |
|------|--------|--------|----------|
| Jan 20 | 4,200 | 4,050 | -3.6% |
| Jan 27 | 4,200 | 3,890 | -7.4% |
| Feb 3 | 4,500 | 3,620 | -19.6% |
| Feb 10 | 4,500 | 3,940 | -12.4% |

**Key Findings:**

**1. Crusher Utilization Down 18%**
- Crusher A: 82% utilization (target 90%)
- Crusher B: 68% utilization \u2013 bearing replacement Feb 8\u201312 was primary driver
- Combined throughput: 340t/day vs. 410t/day target

**2. Weather Disruptions Concentrated in Week of Feb 3**
- 3 full days lost to freezing rain (Feb 3, 6, 7)
- Estimated lost production: 540t
- Above-average for February; 5-year avg is 1.5 weather days/month

**3. Product Mix Shift Reducing Efficiency**
- HL3 demand spike requiring 60% crusher allocation (vs. planned 40%)
- Frequent changeovers between limestone and HL3 costing ~45 min each
- 6 unplanned changeovers in past 2 weeks

**Forecast:**
- Remaining Feb production capacity: 3,800t (assuming normal weather)
- Required to meet Feb commitments: 4,200t
- Gap: 400t \u2013 recommend weekend overtime or Burlington transfer

**Recommendations:**
1. **Lock crusher allocation schedule** for remainder of Feb \u2013 minimize changeovers
2. **Schedule Crusher B preventive maintenance** for Feb 28 weekend to avoid repeat downtime
3. **Activate Burlington overflow** for 400t shortfall (cost: ~$3,200 in trucking)`,
  },
  {
    id: 'revenue-performance',
    keywords: ['revenue', 'sales', 'target', 'tracking', 'financial', 'dollar', 'money', 'income'],
    minScore: 2,
    title: 'Revenue Performance Report',
    confidence: 91,
    response: `**REVENUE PERFORMANCE \u2013 FEBRUARY 2026 MTD**

**Total Revenue: $487,200 (68% of monthly target)**

**Revenue by Product Line:**
| Product | MTD Revenue | Target | % of Target | Trend |
|---------|------------|--------|-------------|-------|
| HL3 | $198,400 | $260,000 | 76% | Above pace |
| Limestone | $124,800 | $195,000 | 64% | Below pace |
| Crusher Run | $89,600 | $120,000 | 75% | On pace |
| Screenings | $42,200 | $55,000 | 77% | Above pace |
| Armour Stone | $32,200 | $50,000 | 64% | Below pace |

**Key Insights:**

**1. Limestone Revenue at Risk**
- Inventory shortage limiting fulfillable orders
- 3 orders ($47,000) on hold pending stock replenishment
- Revenue gap will widen without Burlington transfer by Feb 20

**2. HL3 Outperforming Forecast**
- Acme Construction contract driving 42% above-forecast demand
- Spot pricing up 4% due to regional shortage
- Potential upside: $28,000 if production keeps pace

**3. Margin Pressure from Overtime & Transfers**
- Weekend overtime costs: $8,400 MTD (unbudgeted)
- Burlington transfer trucking: $2,800 estimated
- Net margin impact: -1.2 percentage points vs. plan

**Sales Pipeline (Next 2 Weeks):**
- Confirmed orders: $142,000
- Probable (>75%): $89,000
- Pipeline total: $231,000

**Recommendation:**
Prioritize limestone production recovery to unlock $47,000 in held orders. The HL3 opportunity is strong but don't over-commit \u2013 maintain 5-day buffer to protect delivery reliability. Current trajectory: **$716,000 month-end** (vs. $680,000 target) if limestone shortage is resolved by Feb 21.`,
  },
  {
    id: 'inventory-risk',
    keywords: ['inventory', 'risk', 'stockout', 'supply', 'shortage', 'stock', 'level'],
    minScore: 2,
    title: 'Inventory Risk Assessment',
    confidence: 96,
    response: `**INVENTORY RISK ASSESSMENT \u2013 ALL PRODUCTS**

**Overall Risk Level: MODERATE-HIGH**

**Product Risk Matrix:**
| Product | On Hand | Days of Supply | Risk Level | Action |
|---------|---------|---------------|------------|--------|
| Limestone | 950t | 3 days | CRITICAL | Immediate transfer |
| HL3 | 620t | 4 days | WARNING | Prioritize production |
| Crusher Run | 2,100t | 9 days | OK | Monitor |
| Screenings | 780t | 7 days | OK | Monitor |
| Armour Stone | 340t | 25 days | OK | None needed |

**Critical: Limestone (3-Day Supply)**
- Depletion rate: 85t/day (42% above normal)
- Stockout forecast: February 21 without intervention
- Impact: $47,000 in held orders; 3 customers affected
- Mitigation: 400t transfer from Burlington (2-hour haul, ~$2,800)

**Warning: HL3 (4-Day Supply)**
- Demand surge from Acme contract consuming buffer
- Current production: 180t/day; demand: 155t/day
- Stable if production maintained, but no margin for disruption
- Risk escalates to CRITICAL if crusher downtime occurs

**Trend Analysis (8-Week):**
- Total inventory down 22% from Jan 1 peak
- Limestone decline accelerating: -150t/week average
- HL3 stable but volatile (large order swings)
- Crusher Run and Screenings in healthy range

**Cross-Site Opportunities:**
- Burlington Quarry: 1,200t limestone, 800t HL3 available
- Transfer cost: $7/tonne trucking
- Recommendation: Establish automatic rebalancing trigger at 5-day supply

**Action Items:**
1. **TODAY:** Initiate 400t limestone transfer from Burlington
2. **This week:** Lock HL3 crusher priority through Friday
3. **Process improvement:** Implement cross-site visibility dashboard
4. **Policy:** Set 5-day minimum supply as reorder trigger for all products`,
  },
  {
    id: 'site-utilization',
    keywords: ['site', 'utilization', 'quarry', 'compare', 'comparison', 'capacity', 'efficiency'],
    minScore: 2,
    title: 'Site Utilization Comparison',
    confidence: 89,
    response: `**MULTI-SITE UTILIZATION ANALYSIS**

**Overall Fleet Utilization: 74% (Target: 85%)**

**Site Performance Summary:**
| Site | Capacity | Utilization | Tonnes/Day | Status |
|------|----------|-------------|------------|--------|
| Hamilton Main | 500t/day | 78% | 390t | Active |
| Burlington Quarry | 350t/day | 62% | 217t | Underutilized |
| Flamborough Pit | 200t/day | 84% | 168t | Near Target |

**Hamilton Main Quarry (78% Utilization)**
- Primary production site; handles 55% of total volume
- Crusher A: 82% (good); Crusher B: 68% (recovering from maintenance)
- Bottleneck: Truck loading queue during peak hours (10\u201314:00)
- Opportunity: Stagger loading schedule to gain ~30t/day

**Burlington Quarry (62% Utilization)**
- Significant underutilization \u2013 excess capacity of 133t/day
- Reason: Fewer active contracts routed to Burlington
- Has 1,200t limestone sitting idle while Hamilton is at critical levels
- Opportunity: Route 2 Hamilton overflow contracts to Burlington

**Flamborough Pit (84% Utilization)**
- Performing closest to target
- Specialty products (screenings, armour stone) well-matched to capacity
- Limited expansion potential \u2013 near permit maximums

**Equipment Analysis:**
- Total fleet: 12 trucks, 3 crushers, 2 screeners
- Trucks deployed: 10/12 (2 in maintenance rotation)
- Average truck utilization: 6.2 loads/day (target: 7)
- Fuel efficiency trending 3% worse than Q4 \u2013 investigate tire pressure program

**Recommendations:**
1. **Rebalance load:** Shift 2 Hamilton contracts to Burlington to reduce Hamilton queue and utilize Burlington capacity
2. **Cross-site trucking:** Use Burlington excess for Hamilton limestone shortage (immediate win)
3. **Fleet optimization:** Return both maintenance trucks by Feb 21; target 7 loads/day
4. **Permit review:** Flamborough at 84% of permitted capacity \u2013 begin renewal discussions for Q3 expansion`,
  },
];

const fallbackResponse = {
  title: 'Operational Analytics Summary',
  confidence: 78,
  response: `**OPERATIONAL ANALYTICS OVERVIEW**

Based on the current data for Hamilton Quarry operations as of February 18, 2026, here is a high-level summary:

**Key Metrics:**
- Production: 12% below target (weather + Crusher B downtime)
- Revenue: $487,200 MTD (68% of monthly target, on pace if limestone resolved)
- Inventory: 84,520t total; limestone critical at 3-day supply
- Fleet utilization: 74% (target 85%)

**Top Risks:**
- Limestone stockout by Feb 21 without Burlington transfer
- HL3 buffer thin due to Acme demand surge
- Production gap of 400t for February commitments

**Top Opportunities:**
- Burlington has 133t/day excess capacity available
- HL3 spot pricing up 4% \u2013 revenue upside of $28,000
- Staggered loading at Hamilton could recover 30t/day

For a deeper analysis, try one of these reports:
- **Production trends** \u2013 "Show me the production trend analysis"
- **Revenue tracking** \u2013 "How is revenue tracking against targets?"
- **Inventory risks** \u2013 "What are the inventory risk levels?"
- **Site comparison** \u2013 "Compare site utilization across quarries"`,
};

export function matchAnalyticsQuery(input) {
  const lower = input.toLowerCase();
  let bestMatch = null;
  let bestScore = 0;

  for (const entry of responses) {
    let score = 0;
    for (const keyword of entry.keywords) {
      if (lower.includes(keyword.toLowerCase())) {
        score++;
      }
    }
    if (score >= entry.minScore && score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  if (bestMatch) {
    return {
      title: bestMatch.title,
      confidence: bestMatch.confidence,
      response: bestMatch.response,
    };
  }

  return fallbackResponse;
}

export const suggestedAnalyticsPrompts = [
  'Show me the production trend analysis',
  'How is revenue tracking against targets?',
  'What are the inventory risk levels?',
  'Compare site utilization across quarries',
];
