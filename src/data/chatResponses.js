const responses = [
  {
    id: 'order-feasibility',
    keywords: ['800', 'hl3', 'order', 'fulfill', 'friday', 'acme', 'take'],
    minScore: 3,
    response: `**YES, BUT WITH CONDITIONS**

**Current Position:**
- HL3 On Hand: 620t
- HL3 Available (uncommitted): 485t
- Gap to Order: 315t needed

**Production Analysis:**
- Current HL3 production rate: 180t/day (when crusher dedicated)
- Days to produce 315t: 1.75 days
- Projected availability by Friday: 845t

**Cross-Functional Check:**

*Weather Impact:* Rain forecast Thursday (40mm) may reduce wash efficiency by 30%. Adjusted production estimate: 155t/day. Revised Friday availability: 795t (still sufficient, but tight).

*Competing Orders:* 135t HL3 committed to Regional Paving (Wed delivery). After that fulfillment: 350t gap remains.

*Compliance:* No conflicts. Blast window available if needed.

*Fleet:* 800t = ~27 truck loads. Current availability supports 8 trucks/day. Recommend spread over Thu\u2013Fri for Friday completion.

**Recommendation:**
Accept the order with Thursday\u2013Friday delivery window. Prioritize HL3 production Monday\u2013Wednesday to build buffer before Thursday rain. Confirm with Acme that split delivery (400t Thu / 400t Fri) is acceptable.

**Confidence: HIGH (92%)**
Data as of: Feb 18, 2026 6:15 AM
Assumptions: Normal equipment operation, forecast accuracy \u00b120%`,
  },
  {
    id: 'limestone-shortage',
    keywords: ['limestone', 'shortage', 'causing', 'why', 'low', 'running', 'root cause'],
    minScore: 2,
    response: `**LIMESTONE SHORTAGE: ROOT CAUSE ANALYSIS**

**Current State:**
- On Hand: 950t (was 2,400t on Feb 1)
- Days of Supply: 3 days (critical threshold: 5 days)
- Depletion Rate: 85t/day (vs. normal 60t/day)

**Contributing Factors:**

**1. Demand Spike (+42% vs. forecast)**
- Feb orders: 1,890t (forecast was 1,330t)
- Key driver: City of Burlington road repair contract (unexpected)
- 3 large orders placed Feb 5\u201310 totaling 800t unforecasted

**2. Production Shortfall (-18% vs. plan)**
- Planned Feb production: 1,600t
- Actual to date: 980t
- Cause: Crusher B downtime Feb 8\u201312 (bearing replacement)
- Lost production: ~320t

**3. Weather Impact**
- 3 days lost to freezing rain (Feb 3, 6, 7)
- Estimated lost production: 180t

**4. No Rebalancing From Other Sites**
- Burlington Quarry has 1,200t limestone available
- Transfer not initiated (communication gap identified)

**Trend:**
Feb 1: 2,400t \u2192 Feb 7: 1,800t (Crusher B down) \u2192 Feb 14: 1,200t (Large orders shipped) \u2192 Today: 950t (Critical)

**Recommendations:**

1. **Immediate:** Transfer 400t from Burlington (2-hour haul). Cost: ~$2,800 in trucking. Benefit: Avoids stockout.

2. **This Week:** Prioritize limestone crusher allocation. Shift 60% of crusher time to limestone through Friday.

3. **Process:** Implement cross-site inventory visibility. Burlington stock wasn\u2019t visible in shortage analysis.

4. **Sales:** Temporary hold on new limestone commitments until stock returns to 7-day supply (est. Feb 25).`,
  },
  {
    id: 'blast-scheduling',
    keywords: ['blast', 'schedule', 'next', 'hamilton', 'when'],
    minScore: 2,
    response: `**OPTIMAL BLAST WINDOW: THURSDAY, FEBRUARY 20 at 11:00 AM**

**Analysis by Factor:**

**Weather (Next 7 Days):**
| Day | Conditions | Wind | Suitability |
|-----|-----------|------|-------------|
| Tue 18 | Clear, -2\u00b0C | 15 NW | Good |
| Wed 19 | Partly cloudy | 10 W | Good |
| Thu 20 | Rain PM | 8 SW | AM Only |
| Fri 21 | Rain | 20 S | Avoid |
| Sat 22 | Clearing | 25 W | Windy |
| Sun 23 | Clear | 12 NW | Good |
| Mon 24 | Clear | 10 W | Good |

**Compliance Windows:**
- ECA sample scheduled for Wed 19 \u2013 Blast Thu 20 allows 24hr settling
- No PTTW sampling conflicts
- Seismograph calibration current (last: Feb 10)
- Neighbour notification: Auto-send 24hrs prior

**Operational Factors:**
- Last blast: Feb 14 (4 days ago)
- Current face ready: Yes (surveyed Feb 16)
- Crusher Run inventory: 9 days \u2013 not urgent
- Stone inventory: 25 days \u2013 comfortable
- Pending orders requiring blast material: 800t next week

**Scheduling Conflicts:**
- Tuesday 18: Austin Powder crew at Burlington (unavailable)
- Wednesday 19: ECA sample \u2013 avoid same-day blast
- Thursday 20 AM: Clear window, crew available

**Recommendation:**
Schedule blast for Thursday, February 20 at 11:00 AM.

**Reasoning:**
- Completes before afternoon rain
- 24 hours after ECA sample (water quality protected)
- Austin Powder confirmed available
- Builds inventory buffer before weekend orders
- Wind conditions optimal for noise dispersion`,
  },
];

const fallbackResponse = `I can help you with that question. Based on the current operational data for Hamilton Quarry as of February 18, 2026, here's what I can tell you:

**Current Operational Snapshot:**
- Total inventory: 84,520t across all products
- Limestone is at critical levels (3-day supply)
- 42 deliveries scheduled today (1,640t total)
- No compliance violations; 3 deadlines within 45 days

For a more specific analysis, try asking me about:
- **Order feasibility** \u2013 "Can we fulfill an 800t HL3 order by Friday?"
- **Root cause analysis** \u2013 "What's causing the limestone shortage?"
- **Scheduling decisions** \u2013 "When should I schedule the next blast?"

I can cross-reference production, inventory, sales, compliance, and weather data to give you actionable recommendations.`;

export function matchQuery(input) {
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

  return bestMatch ? bestMatch.response : fallbackResponse;
}

export const suggestedQuestions = [
  'Can we fulfill an 800t HL3 order by Friday?',
  "What's causing the limestone shortage?",
  'When should I schedule the next blast at Hamilton?',
];
