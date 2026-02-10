# Product Requirements Document
# Aggregate Operations Advisor

**Version:** 1.0  
**Date:** February 10, 2026  
**Author:** BookerHQ Inc.  
**Status:** Draft for OSSGA Demo Development

---

## 1. Executive Summary

### 1.1 Product Vision

The **Aggregate Operations Advisor** is an AI-powered decision support system that unifies data from production, inventory, sales, compliance monitoring, and external sources (weather, market) to provide aggregate operations managers with actionable intelligence. 

Unlike siloed reporting tools, the Advisor connects the dots across functional areas—answering questions like "Can we take this order?" by simultaneously checking inventory levels, production capacity, compliance windows, weather forecasts, and existing commitments.

### 1.2 Core Value Proposition

> **"The right information, to the right person, at the right time—before they know they need it."**

The Advisor transforms aggregate operations from **reactive** (discovering problems during reporting) to **proactive** (preventing problems before they occur).

### 1.3 Target Users

| User Role | Primary Use Case |
|-----------|------------------|
| **Site Manager** | Daily operational decisions, resource allocation |
| **Environmental/Compliance Manager** | Compliance-aware scheduling, deadline management |
| **Sales Manager** | Order feasibility, inventory availability |
| **Operations Director** | Cross-site oversight, strategic planning |
| **Executive Leadership** | Weekly strategic briefs, performance monitoring |

### 1.4 Demo Context

This PRD defines a **demonstration application** for the OSSGA Annual Conference (February 18, 2026). The demo will showcase AI capabilities using realistic but simulated data from a fictional multi-site aggregate operation based on Nelson Aggregates' operational patterns.

---

## 2. Product Overview

### 2.1 Three Operating Modes

The Aggregate Operations Advisor operates in three interconnected modes:

```
┌─────────────────────────────────────────────────────────────────────┐
│                    AGGREGATE OPERATIONS ADVISOR                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   ┌─────────────┐    ┌─────────────┐    ┌─────────────┐            │
│   │   DAILY     │    │    ASK      │    │  STRATEGIC  │            │
│   │  BRIEFING   │    │  ANYTHING   │    │  INSIGHTS   │            │
│   │             │    │             │    │             │            │
│   │ Auto-gen    │    │ Natural     │    │ Weekly/     │            │
│   │ each AM     │    │ language    │    │ Monthly     │            │
│   │             │    │ queries     │    │ analysis    │            │
│   └─────────────┘    └─────────────┘    └─────────────┘            │
│          │                  │                  │                    │
│          └──────────────────┼──────────────────┘                    │
│                             │                                        │
│                    ┌────────▼────────┐                              │
│                    │   UNIFIED DATA   │                              │
│                    │    PLATFORM      │                              │
│                    └─────────────────┘                              │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

#### Mode 1: Daily Briefing (Push)
Automatically generated each morning, providing:
- Prioritized action items for the day
- Cross-functional alerts requiring attention
- Weather-adjusted operational recommendations
- Compliance deadline reminders
- Inventory and order status summary

#### Mode 2: Ask Anything (Pull)
Conversational interface allowing natural language queries:
- "Can we fulfill the 2,000t Granular A order by March 1?"
- "What's causing the limestone shortage?"
- "When should I schedule the next blast at Hamilton?"
- "Show me this week's compliance status across all sites"

#### Mode 3: Strategic Insights (Periodic)
Weekly and monthly analysis connecting operational data to business outcomes:
- Cross-functional trend analysis
- Opportunity identification
- Performance vs. benchmarks
- Market-aware recommendations

### 2.2 Data Integration Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                         DATA SOURCES                                 │
├─────────────┬─────────────┬─────────────┬─────────────┬─────────────┤
│ PRODUCTION  │  INVENTORY  │    SALES    │ COMPLIANCE  │  EXTERNAL   │
├─────────────┼─────────────┼─────────────┼─────────────┼─────────────┤
│ Blast logs  │ Stock levels│ Open orders │ PTTW status │ Weather API │
│ Crusher runs│ By product  │ Commitments │ ECA samples │ Forecasts   │
│ Wash plant  │ By location │ Pricing     │ CAR progress│ Market data │
│ Equipment   │ Turnover    │ Customers   │ Deadlines   │ Regulations │
│ Shift data  │ Capacity %  │ Delivery    │ Alerts      │ News        │
└─────────────┴─────────────┴─────────────┴─────────────┴─────────────┘
                                  │
                                  ▼
                    ┌─────────────────────────┐
                    │    AI REASONING ENGINE   │
                    │                          │
                    │  • Cross-reference       │
                    │  • Conflict detection    │
                    │  • Trend analysis        │
                    │  • Recommendation gen    │
                    └─────────────────────────┘
                                  │
                                  ▼
                    ┌─────────────────────────┐
                    │   ACTIONABLE OUTPUTS     │
                    │                          │
                    │  • Briefings             │
                    │  • Answers               │
                    │  • Alerts                │
                    │  • Reports               │
                    └─────────────────────────┘
```

---

## 3. Functional Requirements

### 3.1 Mode 1: Daily Briefing

#### 3.1.1 Briefing Structure

The daily briefing follows a consistent structure designed for a 2-minute read:

```
┌─────────────────────────────────────────────────────────────────────┐
│  AGGREGATE OPERATIONS ADVISOR                                        │
│  Daily Briefing | Tuesday, February 18, 2026 | 6:00 AM              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  🌤️ WEATHER IMPACT                                                  │
│  [Weather-adjusted operational guidance]                             │
│                                                                      │
│  ⚠️ PRIORITY ALERTS (X items requiring attention)                   │
│  [Cross-functional alerts ranked by urgency]                         │
│                                                                      │
│  📦 INVENTORY SNAPSHOT                                               │
│  [Critical stock levels and days-of-supply]                          │
│                                                                      │
│  🚚 TODAY'S ORDERS                                                   │
│  [Deliveries scheduled, fulfillment status]                          │
│                                                                      │
│  📋 COMPLIANCE STATUS                                                │
│  [Upcoming deadlines, required actions]                              │
│                                                                      │
│  💡 AI RECOMMENDATIONS                                               │
│  [Prioritized action items with reasoning]                           │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

#### 3.1.2 Alert Categories

The system generates cross-functional alerts in these categories:

| Alert Type | Trigger Condition | Example |
|------------|-------------------|---------|
| **INVENTORY-SALES CONFLICT** | Committed orders exceed available + forecast production | "Limestone at 3-day supply. 2 open orders totaling 400t. Stockout possible by Friday." |
| **COMPLIANCE-PRODUCTION OPPORTUNITY** | Compliance window opens operational flexibility | "Burlington sump sample completed. Clear window for aggressive pumping through Feb 28." |
| **WEATHER-OPERATIONS IMPACT** | Forecast affects production or delivery | "Rain forecast Wed-Thu (40mm). Wash plant efficiency typically drops 30%." |
| **EQUIPMENT-SCHEDULE CONFLICT** | Maintenance needs conflict with production demands | "Crusher A due for service. HPB at 9-day supply—schedule service today." |
| **REGULATORY DEADLINE** | Compliance deadline within 14 days | "Hamilton PTTW report due March 1. Current completion: 87%." |
| **STRATEGIC OPPORTUNITY** | Positive trend or market condition | "Q1 sales 8% above forecast. Consider accelerating Burlington expansion." |
| **OVERSELL RISK** | Sales commitments approaching inventory limits | "HL3 committed: 1,200t. Available: 980t. 220t gap identified." |

#### 3.1.3 Recommendation Engine Logic

Recommendations are generated using a priority matrix:

```
PRIORITY SCORING:

Safety/Compliance Impact:     x3 multiplier
Revenue Impact:               x2 multiplier
Operational Efficiency:       x1 multiplier
Time Sensitivity:             +10 if due today, +5 if due this week

RECOMMENDATION FORMAT:

[PRIORITY: HIGH/MEDIUM/LOW]
[ACTION]: Specific action to take
[REASONING]: Why this matters (connecting the data points)
[IMPACT]: What happens if ignored
[SUGGESTED OWNER]: Role best suited to act
```

#### 3.1.4 Sample Daily Briefing Output

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AGGREGATE OPERATIONS ADVISOR
Daily Briefing | Tuesday, February 18, 2026 | 6:00 AM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌤️ WEATHER IMPACT
━━━━━━━━━━━━━━━━━
Today: Clear, -2°C, winds 15 km/h NW
Tomorrow: Partly cloudy, 4°C
Thursday: Rain likely (60%, 15-25mm)

OPERATIONAL GUIDANCE: Favorable conditions today and tomorrow for 
blast operations and outdoor work. Recommend completing any 
weather-sensitive activities before Thursday precipitation.


⚠️ PRIORITY ALERTS (3 items)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔴 HIGH | INVENTORY-SALES CONFLICT
   Limestone at CRITICAL level (950t on hand, 3-day supply)
   Open orders: 400t committed for delivery by Friday
   At current production: Shortfall of ~150t possible
   → ACTION: Prioritize limestone production today
   
🟡 MEDIUM | COMPLIANCE DEADLINE  
   Hamilton Quarry ECA monthly sample due by Feb 28
   Status: Not yet scheduled
   → ACTION: Schedule grab sample this week (avoid Thursday rain)

🟡 MEDIUM | EQUIPMENT MAINTENANCE
   Crusher A: 487 hours since last service (threshold: 500)
   Current Crusher Run supply: 9 days
   → ACTION: Schedule service today during wash plant operation


📦 INVENTORY SNAPSHOT
━━━━━━━━━━━━━━━━━━━━━
                     ON HAND    AVAILABLE   DAYS SUPPLY   STATUS
Crusher Run          3,100t     2,300t      9 days        ⚠️ LOW
Stone                15,800t    12,600t     25 days       ✅ OK
Rip Rap              4,850t     2,850t      21 days       ✅ OK
Limestone            950t       550t        3 days        🔴 CRITICAL
Granular A           7,200t     6,100t      19 days       ✅ OK

Total Tonnage: 84,520t (-3.1% from last week)
Low Stock Alerts: 6 (3 critical)


🚚 TODAY'S ORDERS
━━━━━━━━━━━━━━━━━
Scheduled Deliveries: 42 (+8.5% vs. yesterday)
Total Tonnage: 1,640t

KEY DELIVERIES:
• Regional Paving: 400t Granular A, 8:00 AM pickup ✅ Ready
• Mueller Construction: 200t Limestone, 10:00 AM ⚠️ Monitor stock
• City of Burlington: 300t Crusher Run, 1:00 PM ✅ Ready

Open Orders: 28 (+12.3% vs. last week)


📋 COMPLIANCE STATUS  
━━━━━━━━━━━━━━━━━━━━
                          NEXT DEADLINE    STATUS    COMPLETION
Hamilton PTTW Report       Jun 1, 2027      ✅ OK     87%
Hamilton ECA Sample        Feb 28, 2026     ⚠️ DUE    Not scheduled
Burlington CAR            Sep 30, 2026     ✅ OK     On track
Uhthoff PTTW Report       Mar 31, 2026     ⚠️ SOON   72%

No compliance violations detected.
Last blast (Hamilton): Feb 14 - All parameters within limits.


💡 AI RECOMMENDATIONS
━━━━━━━━━━━━━━━━━━━━━

1. [HIGH PRIORITY] PRODUCTION FOCUS
   Shift crusher priority to Limestone production for morning shift.
   
   REASONING: 3-day supply with 400t committed. Rain Thursday will 
   reduce wash efficiency. Building buffer today prevents Friday 
   stockout and customer disappointment.
   
   IMPACT IF IGNORED: Potential delivery delays to Mueller Construction,
   relationship risk with key customer.

2. [MEDIUM PRIORITY] COMPLIANCE SCHEDULING
   Schedule Hamilton ECA grab sample for tomorrow (Wednesday) morning.
   
   REASONING: Sample due Feb 28. Thursday rain may cause turbidity 
   issues affecting sample quality. Wednesday shows optimal conditions
   and avoids Thursday precipitation.
   
   IMPACT IF IGNORED: May require repeat sampling or risk elevated 
   TSS readings.

3. [MEDIUM PRIORITY] MAINTENANCE WINDOW
   Execute Crusher A service today during afternoon shift.
   
   REASONING: 487/500 hours reached. Crusher Run at 9-day supply 
   provides buffer. Completing today avoids conflict with Thursday 
   weather and weekend orders.
   
   IMPACT IF IGNORED: Unplanned breakdown risk increases, potential
   production disruption.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Generated by Aggregate Operations Advisor | BookerHQ Inc.
Data freshness: Production (6:00 AM), Inventory (5:45 AM), Weather (5:30 AM)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 3.2 Mode 2: Ask Anything

#### 3.2.1 Query Categories

The conversational interface handles these query types:

| Category | Example Queries | Data Sources Accessed |
|----------|-----------------|----------------------|
| **Order Feasibility** | "Can we take a 2,000t Granular A order for March 1?" | Inventory, Production, Orders, Weather, Compliance |
| **Inventory Questions** | "Why is limestone running low?" | Production, Sales, Weather history, Equipment |
| **Scheduling** | "When should I schedule the next blast?" | Compliance windows, Weather, Orders, Equipment |
| **Compliance** | "What's the status of Hamilton's permits?" | All compliance instruments, Deadlines, Completion % |
| **Performance** | "How are we doing vs. last month?" | Production, Sales, Inventory, Financials |
| **What-If Scenarios** | "What if crusher goes down for 3 days?" | All systems (simulation mode) |
| **Root Cause** | "What caused the delivery delay yesterday?" | Orders, Inventory, Production, Equipment logs |

#### 3.2.2 Response Framework

All responses follow a consistent structure:

```
┌─────────────────────────────────────────────────────────────────────┐
│ DIRECT ANSWER                                                        │
│ [Clear yes/no or summary - answering the question asked]            │
├─────────────────────────────────────────────────────────────────────┤
│ SUPPORTING ANALYSIS                                                  │
│ [Data points that support the answer]                                │
├─────────────────────────────────────────────────────────────────────┤
│ CROSS-FUNCTIONAL CONSIDERATIONS                                      │
│ [Impacts on other areas the user might not have considered]         │
├─────────────────────────────────────────────────────────────────────┤
│ RECOMMENDATION                                                       │
│ [Suggested action with reasoning]                                    │
├─────────────────────────────────────────────────────────────────────┤
│ CONFIDENCE & CAVEATS                                                 │
│ [Data freshness, assumptions, uncertainties]                         │
└─────────────────────────────────────────────────────────────────────┘
```

#### 3.2.3 Sample Query-Response Pairs

**Query 1: Order Feasibility**

```
USER: Can we fulfill an 800t HL3 order from Acme Construction by Friday?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ YES, BUT WITH CONDITIONS

CURRENT POSITION:
• HL3 On Hand: 620t
• HL3 Available (uncommitted): 485t
• Gap to Order: 315t needed

PRODUCTION ANALYSIS:
• Current HL3 production rate: 180t/day (when crusher dedicated)
• Days to produce 315t: 1.75 days
• Projected availability by Friday: 845t ✅

CROSS-FUNCTIONAL CHECK:
⚠️ Weather Impact: Rain forecast Thursday (40mm) may reduce wash 
   efficiency by 30%. Adjusted production estimate: 155t/day
   Revised Friday availability: 795t (still sufficient, but tight)

⚠️ Competing Orders: 135t HL3 committed to Regional Paving (Wed delivery)
   After that fulfillment: 350t gap remains

📋 Compliance: No conflicts. Blast window available if needed.

🚚 Fleet: 800t = ~27 truck loads. Current availability supports 
   8 trucks/day. Recommend spread over Thu-Fri for Friday completion.

RECOMMENDATION:
Accept the order with Thursday-Friday delivery window. 
Prioritize HL3 production Monday-Wednesday to build buffer 
before Thursday rain. Confirm with Acme that split delivery 
(400t Thu / 400t Fri) is acceptable.

CONFIDENCE: HIGH (92%)
Data as of: Feb 18, 2026 6:15 AM
Assumptions: Normal equipment operation, forecast accuracy ±20%

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Query 2: Root Cause Analysis**

```
USER: What's causing the limestone shortage?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📉 LIMESTONE SHORTAGE: ROOT CAUSE ANALYSIS

CURRENT STATE:
• On Hand: 950t (was 2,400t on Feb 1)
• Days of Supply: 3 days (critical threshold: 5 days)
• Depletion Rate: 85t/day (vs. normal 60t/day)

CONTRIBUTING FACTORS:

1. DEMAND SPIKE (+42% vs. forecast)
   • Feb orders: 1,890t (forecast was 1,330t)
   • Key driver: City of Burlington road repair contract (unexpected)
   • 3 large orders placed Feb 5-10 totaling 800t unforecasted

2. PRODUCTION SHORTFALL (-18% vs. plan)
   • Planned Feb production: 1,600t
   • Actual to date: 980t
   • Cause: Crusher B downtime Feb 8-12 (bearing replacement)
   • Lost production: ~320t

3. WEATHER IMPACT
   • 3 days lost to freezing rain (Feb 3, 6, 7)
   • Estimated lost production: 180t

4. NO REBALANCING FROM OTHER SITES
   • Burlington Quarry has 1,200t limestone available
   • Transfer not initiated (communication gap identified)

TREND VISUALIZATION:
Feb 1  ████████████████████████ 2,400t
Feb 7  ██████████████████ 1,800t     ← Crusher B down
Feb 14 ██████████ 1,200t             ← Large orders shipped
Today  ████ 950t                     ← Critical

RECOMMENDATIONS:

1. IMMEDIATE: Transfer 400t from Burlington (2-hour haul)
   Cost: ~$2,800 in trucking | Benefit: Avoids stockout
   
2. THIS WEEK: Prioritize limestone crusher allocation
   Shift 60% of crusher time to limestone through Friday
   
3. PROCESS: Implement cross-site inventory visibility
   Burlington stock wasn't visible in shortage analysis
   
4. SALES: Temporary hold on new limestone commitments
   Until stock returns to 7-day supply (est. Feb 25)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Query 3: Scheduling Decision**

```
USER: When should I schedule the next blast at Hamilton?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🗓️ OPTIMAL BLAST WINDOW: THURSDAY, FEBRUARY 20 at 11:00 AM

ANALYSIS BY FACTOR:

WEATHER (Next 7 Days):
│ Day       │ Conditions      │ Wind    │ Suitability │
├───────────┼─────────────────┼─────────┼─────────────┤
│ Tue 18    │ Clear, -2°C     │ 15 NW   │ ✅ Good     │
│ Wed 19    │ Partly cloudy   │ 10 W    │ ✅ Good     │
│ Thu 20    │ Rain PM         │ 8 SW    │ ✅ AM Only  │
│ Fri 21    │ Rain            │ 20 S    │ ❌ Avoid    │
│ Sat 22    │ Clearing        │ 25 W    │ ⚠️ Windy    │
│ Sun 23    │ Clear           │ 12 NW   │ ✅ Good     │
│ Mon 24    │ Clear           │ 10 W    │ ✅ Good     │

COMPLIANCE WINDOWS:
✅ ECA sample scheduled for Wed 19 - Blast Thu 20 allows 24hr settling
✅ No PTTW sampling conflicts
✅ Seismograph calibration current (last: Feb 10)
✅ Neighbour notification: Auto-send 24hrs prior

OPERATIONAL FACTORS:
• Last blast: Feb 14 (4 days ago)
• Current face ready: Yes (surveyed Feb 16)
• Crusher Run inventory: 9 days - not urgent
• Stone inventory: 25 days - comfortable
• Pending orders requiring blast material: 800t next week

SCHEDULING CONFLICTS:
⚠️ Tuesday 18: Austin Powder crew at Burlington (unavailable)
⚠️ Wednesday 19: ECA sample - avoid same-day blast
✅ Thursday 20 AM: Clear window, crew available

RECOMMENDATION:
Schedule blast for Thursday, February 20 at 11:00 AM

REASONING:
• Completes before afternoon rain
• 24 hours after ECA sample (water quality protected)  
• Austin Powder confirmed available
• Builds inventory buffer before weekend orders
• Wind conditions optimal for noise dispersion

AUTOMATED ACTIONS AVAILABLE:
[📧 Send Neighbour Notification] [📅 Book Austin Powder] [📋 Generate Blast Plan]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 3.3 Mode 3: Strategic Insights

#### 3.3.1 Weekly Strategy Brief Structure

```
┌─────────────────────────────────────────────────────────────────────┐
│  WEEKLY STRATEGY BRIEF                                               │
│  Week of February 17-23, 2026                                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  📊 EXECUTIVE SUMMARY                                                │
│  [2-3 sentence overview of week's key themes]                        │
│                                                                      │
│  📈 KEY METRICS vs. TARGETS                                          │
│  [Production, Sales, Inventory, Compliance scorecards]               │
│                                                                      │
│  🔗 CROSS-FUNCTIONAL INSIGHTS                                        │
│  [Connections between operational areas]                             │
│                                                                      │
│  ⚡ OPPORTUNITIES IDENTIFIED                                         │
│  [Proactive recommendations for growth/efficiency]                   │
│                                                                      │
│  ⚠️ RISKS TO MONITOR                                                 │
│  [Emerging concerns requiring attention]                             │
│                                                                      │
│  🎯 RECOMMENDED PRIORITIES                                           │
│  [Top 3-5 focus areas for coming week]                               │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

#### 3.3.2 Sample Weekly Strategy Brief

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AGGREGATE OPERATIONS ADVISOR
Weekly Strategy Brief | Week 7: February 17-23, 2026
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 EXECUTIVE SUMMARY
━━━━━━━━━━━━━━━━━━━━
This week presents a PRODUCTION OPPORTUNITY with favorable early-week 
weather, offset by a developing LIMESTONE SUPPLY RISK that requires 
immediate attention. Sales momentum continues strong (+12% WoW) but 
inventory turnover rates suggest production is not keeping pace with 
demand. Compliance position remains solid with no violations, though 
three deadlines fall within the next 45 days.


📈 KEY METRICS vs. TARGETS
━━━━━━━━━━━━━━━━━━━━━━━━━━

PRODUCTION                          SALES
Actual: 7,840t                      Actual: $342,000
Target: 8,200t                      Target: $310,000
Status: ⚠️ 96% of target            Status: ✅ 110% of target
Trend:  ↓ 4% vs. last week          Trend:  ↑ 12% vs. last week

INVENTORY                           COMPLIANCE
Total: 84,520t                      Violations: 0
Change: -3.1% WoW                   Deadlines (45 days): 3
Critical Items: 2                   Reports on track: 4/4
Status: ⚠️ Below comfort            Status: ✅ Strong


🔗 CROSS-FUNCTIONAL INSIGHTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

INSIGHT 1: SALES-PRODUCTION GAP WIDENING
┌─────────────────────────────────────────────────────────────────┐
│ Sales growth (+12%) is outpacing production (-4%). At current   │
│ trajectory, inventory days-of-supply will drop from 18 to 12    │
│ within 3 weeks. This is sustainable short-term but requires     │
│ production acceleration or sales moderation.                     │
│                                                                  │
│ CONNECTION: Strong sales of Granular A (turnover 3.9x) driven   │
│ by mild February enabling early road construction. Production   │
│ allocation still weighted toward Stone (turnover 4.5x).         │
│                                                                  │
│ RECOMMENDATION: Rebalance crusher allocation 60/40 toward       │
│ Granular A for next 2 weeks.                                    │
└─────────────────────────────────────────────────────────────────┘

INSIGHT 2: WEATHER WINDOW OPTIMIZATION
┌─────────────────────────────────────────────────────────────────┐
│ Next 10 days show 6 favorable production days, 4 weather-       │
│ impacted days. Historical data shows February production        │
│ typically 15% below monthly average due to weather.             │
│                                                                  │
│ This February tracking 8% above average due to mild conditions. │
│                                                                  │
│ CONNECTION: Rain Thursday-Friday will impact wash plant.        │
│ Compliance sampling also due this week.                         │
│                                                                  │
│ RECOMMENDATION: Front-load production Mon-Wed. Schedule         │
│ compliance sampling Wed AM. Use Thu-Fri for maintenance and     │
│ administrative tasks.                                           │
└─────────────────────────────────────────────────────────────────┘

INSIGHT 3: CUSTOMER CONCENTRATION EMERGING
┌─────────────────────────────────────────────────────────────────┐
│ Top 3 customers now represent 48% of February revenue           │
│ (up from 35% in January). City of Burlington contract driving   │
│ most of the increase.                                           │
│                                                                  │
│ CONNECTION: Limestone shortage directly tied to Burlington      │
│ contract demand. Single-customer dependency risk increasing.    │
│                                                                  │
│ RECOMMENDATION: Monitor Burlington payment terms. Consider      │
│ volume discount negotiation to lock in relationship while       │
│ maintaining margin.                                             │
└─────────────────────────────────────────────────────────────────┘


⚡ OPPORTUNITIES IDENTIFIED
━━━━━━━━━━━━━━━━━━━━━━━━━━

1. PRICING OPPORTUNITY
   Regional limestone prices up 12% YoY. Current pricing 8% below 
   market. Opportunity to adjust Q2 pricing.
   ESTIMATED IMPACT: +$45,000 annual margin

2. CAPACITY UTILIZATION
   Burlington Quarry operating at 73% capacity. Adjacent sites at 
   85%+. Opportunity to shift production or accept additional orders.
   ESTIMATED IMPACT: +$12,000/month potential

3. CROSS-SITE LOGISTICS
   3 instances this month where Site A had excess inventory while 
   Site B had shortage. Inter-site transfer protocol could reduce 
   stockouts and improve customer fulfillment.
   ESTIMATED IMPACT: Avoid 2-3 lost orders/month (~$8,000)


⚠️ RISKS TO MONITOR
━━━━━━━━━━━━━━━━━━━

RISK 1: LIMESTONE STOCKOUT [HIGH]
Current: 3-day supply | Threshold: 5-day
Mitigation: Transfer from Burlington, prioritize production
Owner: Operations Manager

RISK 2: UHTHOFF PTTW DEADLINE [MEDIUM]
Report due: March 31, 2026 | Completion: 72%
Remaining: 4 monitoring events, report compilation
Owner: Environmental Manager

RISK 3: CRUSHER A MAINTENANCE [MEDIUM]
Hours: 487/500 service threshold
Impact if unplanned failure: ~$15,000/day lost production
Owner: Maintenance Supervisor


🎯 RECOMMENDED PRIORITIES: WEEK 7
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. RESOLVE LIMESTONE SHORTAGE
   • Execute Burlington transfer (400t)
   • Reallocate crusher time 60% limestone through Friday
   • Temporary sales hold on new limestone commitments
   
2. MAXIMIZE GOOD WEATHER WINDOW (Mon-Wed)
   • Full production shifts all sites
   • Complete Hamilton blast Thursday AM
   • Stage materials for weekend orders
   
3. COMPLIANCE EXECUTION
   • Hamilton ECA sample Wednesday AM
   • Uhthoff data compilation (target 85% by Friday)
   
4. EQUIPMENT RELIABILITY
   • Crusher A service Tuesday (planned downtime)
   • Wash plant inspection during Thursday rain
   
5. STRATEGIC PLANNING
   • Review Q2 pricing vs. market (Friday leadership)
   • Burlington capacity utilization analysis


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Generated by Aggregate Operations Advisor | BookerHQ Inc.
Report Period: Feb 10-16, 2026 | Generated: Feb 17, 2026 5:00 AM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 4. Demo Application Specifications

### 4.1 Technical Architecture (Demo)

```
┌─────────────────────────────────────────────────────────────────────┐
│                        DEMO APPLICATION                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │                    REACT FRONTEND                            │   │
│   │  • Mobile-responsive design                                  │   │
│   │  • Three mode tabs (Briefing / Ask / Strategy)              │   │
│   │  • Real-time typing animation for AI responses              │   │
│   │  • Interactive alerts with action buttons                    │   │
│   └─────────────────────────────────────────────────────────────┘   │
│                              │                                       │
│                              ▼                                       │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │                 CLAUDE API INTEGRATION                       │   │
│   │  • Anthropic Claude Sonnet 4.5 API                          │   │
│   │  • Context includes simulated data                          │   │
│   │  • Streaming responses                                       │   │
│   └─────────────────────────────────────────────────────────────┘   │
│                              │                                       │
│                              ▼                                       │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │                  SIMULATED DATA LAYER                        │   │
│   │  • Static JSON datasets (inventory, orders, compliance)     │   │
│   │  • Weather API integration (real forecasts)                 │   │
│   │  • Randomization for demo variety                           │   │
│   └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### 4.2 User Interface Design

#### 4.2.1 Main Navigation

```
┌─────────────────────────────────────────────────────────────────────┐
│  ☰  AGGREGATE OPERATIONS ADVISOR          Hamilton Quarry  ▼   👤    │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   ┌──────────────┬──────────────┬──────────────┐                    │
│   │   📋 DAILY   │   💬 ASK     │   📊 WEEKLY  │                    │
│   │   BRIEFING   │   ANYTHING   │   STRATEGY   │                    │
│   └──────────────┴──────────────┴──────────────┘                    │
│                                                                      │
│   [Content area changes based on selected tab]                      │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

#### 4.2.2 Daily Briefing View

```
┌─────────────────────────────────────────────────────────────────────┐
│  📋 DAILY BRIEFING                              Feb 18, 2026        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ 🌤️ Clear, -2°C | Favorable for operations                   │   │
│  │    Rain expected Thursday - plan accordingly                 │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  ⚠️ PRIORITY ALERTS                                      3 items    │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ 🔴 Limestone at CRITICAL (3-day supply)                     │   │
│  │    400t committed, shortfall possible by Friday              │   │
│  │    [Prioritize Production] [View Details]                    │   │
│  └─────────────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ 🟡 Hamilton ECA sample due Feb 28                            │   │
│  │    Not yet scheduled                                         │   │
│  │    [Schedule Now] [View Calendar]                            │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  📦 INVENTORY SNAPSHOT                                              │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  Crusher Run    ████████░░  9d   ⚠️                         │   │
│  │  Stone          █████████░  25d  ✅                         │   │
│  │  Limestone      ███░░░░░░░  3d   🔴                         │   │
│  │  Granular A     ████████░░  19d  ✅                         │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  💡 TOP RECOMMENDATION                                              │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ Shift crusher priority to Limestone for morning shift.      │   │
│  │ Rain Thursday will reduce wash efficiency. Building buffer  │   │
│  │ today prevents Friday stockout.                              │   │
│  │                                           [Take Action →]    │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

#### 4.2.3 Ask Anything View

```
┌─────────────────────────────────────────────────────────────────────┐
│  💬 ASK ANYTHING                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │                                                              │   │
│  │  👤 Can we fulfill an 800t HL3 order by Friday?             │   │
│  │                                                              │   │
│  │  🤖 ✅ YES, BUT WITH CONDITIONS                              │   │
│  │                                                              │   │
│  │  Current HL3: 620t on hand, 485t available                  │   │
│  │  Gap: 315t needed                                            │   │
│  │                                                              │   │
│  │  At 180t/day production, you'll have 845t by Friday. ✅     │   │
│  │                                                              │   │
│  │  ⚠️ Weather Impact: Thursday rain may reduce output.        │   │
│  │  Adjusted estimate: 795t (still sufficient)                  │   │
│  │                                                              │   │
│  │  📋 No compliance conflicts with this timeline.             │   │
│  │                                                              │   │
│  │  RECOMMENDATION: Accept with Thu-Fri delivery window.       │   │
│  │  Prioritize HL3 production Mon-Wed.                          │   │
│  │                                                              │   │
│  │  [Accept Order] [Modify Terms] [Decline]                     │   │
│  │                                                              │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  SUGGESTED QUESTIONS:                                                │
│  ┌───────────────────┐ ┌───────────────────┐ ┌──────────────────┐  │
│  │ What's causing    │ │ When should I     │ │ Show compliance  │  │
│  │ the limestone     │ │ schedule the      │ │ status across    │  │
│  │ shortage?         │ │ next blast?       │ │ all sites        │  │
│  └───────────────────┘ └───────────────────┘ └──────────────────┘  │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  Ask a question...                                     🎤 📤 │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

#### 4.2.4 Weekly Strategy View

```
┌─────────────────────────────────────────────────────────────────────┐
│  📊 WEEKLY STRATEGY                             Week of Feb 17-23   │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  EXECUTIVE SUMMARY                                                   │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ Production opportunity with favorable early-week weather,   │   │
│  │ offset by developing limestone supply risk. Sales momentum  │   │
│  │ strong (+12% WoW) but inventory not keeping pace.          │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  KEY METRICS                                                         │
│  ┌──────────────┬──────────────┬──────────────┬──────────────┐     │
│  │ PRODUCTION   │ SALES        │ INVENTORY    │ COMPLIANCE   │     │
│  │   ⚠️ 96%    │   ✅ 110%    │   ⚠️ -3.1%  │   ✅ 0       │     │
│  │   of target  │   of target  │   vs. last   │   violations │     │
│  └──────────────┴──────────────┴──────────────┴──────────────┘     │
│                                                                      │
│  🔗 KEY INSIGHT                                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ SALES-PRODUCTION GAP WIDENING                                │   │
│  │                                                              │   │
│  │ Sales growth (+12%) outpacing production (-4%). At current  │   │
│  │ trajectory, inventory days-of-supply drops from 18 to 12    │   │
│  │ within 3 weeks.                                              │   │
│  │                                                              │   │
│  │ RECOMMENDATION: Rebalance crusher allocation 60/40 toward   │   │
│  │ Granular A for next 2 weeks.                                 │   │
│  │                                            [View Analysis]   │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  🎯 THIS WEEK'S PRIORITIES                                          │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ 1. ☐ Resolve limestone shortage                             │   │
│  │ 2. ☐ Maximize Mon-Wed production window                     │   │
│  │ 3. ☐ Hamilton ECA sample Wednesday                           │   │
│  │ 4. ☐ Crusher A service Tuesday                              │   │
│  │ 5. ☐ Review Q2 pricing Friday                               │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### 4.3 Demo Scenarios

For the OSSGA presentation, prepare these demo scenarios:

#### Scenario 1: Morning Briefing Walkthrough (2 minutes)
- Open app, show daily briefing
- Highlight weather impact section
- Walk through priority alerts
- Show how one alert connects inventory → sales → production

#### Scenario 2: Live Query - Order Feasibility (2 minutes)
- Type or speak: "Can we take an 800t HL3 order by Friday?"
- Show AI reasoning through multiple systems
- Highlight the cross-functional checks
- Show recommended action

#### Scenario 3: Live Query - Root Cause (2 minutes)
- Ask: "What's causing the limestone shortage?"
- Show trend visualization
- Highlight the multi-factor analysis
- Show AI-generated recommendations

#### Scenario 4: Strategic Insight (1 minute)
- Show weekly brief
- Highlight the "Sales-Production Gap" insight
- Show how AI connects trends to business outcomes

### 4.4 Sample Data Requirements

#### 4.4.1 Inventory Data (JSON)
```json
{
  "site": "Hamilton Quarry",
  "asOfDate": "2026-02-18T06:00:00Z",
  "products": [
    {
      "name": "Crusher Run",
      "onHand": 3100,
      "available": 2300,
      "unit": "tonnes",
      "daysOfSupply": 9,
      "turnoverRate": 3.5,
      "status": "LOW",
      "reorderPoint": 2500,
      "productionRate": 350
    },
    {
      "name": "Stone",
      "onHand": 15800,
      "available": 12600,
      "unit": "tonnes",
      "daysOfSupply": 25,
      "turnoverRate": 4.5,
      "status": "OK",
      "reorderPoint": 8000,
      "productionRate": 500
    },
    {
      "name": "Limestone",
      "onHand": 950,
      "available": 550,
      "unit": "tonnes",
      "daysOfSupply": 3,
      "turnoverRate": 3.2,
      "status": "CRITICAL",
      "reorderPoint": 1500,
      "productionRate": 280
    },
    {
      "name": "Granular A",
      "onHand": 7200,
      "available": 6100,
      "unit": "tonnes",
      "daysOfSupply": 19,
      "turnoverRate": 3.9,
      "status": "OK",
      "reorderPoint": 4000,
      "productionRate": 320
    }
  ],
  "totalTonnage": 84520,
  "weekOverWeekChange": -3.1,
  "lowStockAlerts": 6,
  "criticalAlerts": 3
}
```

#### 4.4.2 Orders Data (JSON)
```json
{
  "site": "Hamilton Quarry",
  "asOfDate": "2026-02-18T06:00:00Z",
  "summary": {
    "openOrders": 28,
    "weekOverWeekChange": 12.3,
    "todayDeliveries": 42,
    "todayTonnage": 1640
  },
  "todaySchedule": [
    {
      "customer": "Regional Paving",
      "product": "Granular A",
      "quantity": 400,
      "time": "08:00",
      "type": "pickup",
      "status": "ready"
    },
    {
      "customer": "Mueller Construction",
      "product": "Limestone",
      "quantity": 200,
      "time": "10:00",
      "type": "delivery",
      "status": "monitor"
    },
    {
      "customer": "City of Burlington",
      "product": "Crusher Run",
      "quantity": 300,
      "time": "13:00",
      "type": "delivery",
      "status": "ready"
    }
  ],
  "commitments": [
    {
      "product": "Limestone",
      "committed": 400,
      "available": 550,
      "dueBy": "2026-02-21",
      "risk": "high"
    },
    {
      "product": "HL3",
      "committed": 1200,
      "available": 980,
      "dueBy": "2026-02-28",
      "risk": "oversold"
    }
  ]
}
```

#### 4.4.3 Compliance Data (JSON)
```json
{
  "site": "Hamilton Quarry",
  "asOfDate": "2026-02-18T06:00:00Z",
  "instruments": [
    {
      "type": "PTTW",
      "number": "6211-DB6J8W",
      "dateIssued": "2025-03-19",
      "expiryDate": "2030-03-31",
      "reportingDeadline": "June 1, every two years",
      "nextReportDue": "2027-06-01",
      "completionPercent": 87,
      "status": "OK"
    },
    {
      "type": "ECA",
      "number": "8197-DM2QJ8",
      "dateIssued": "2025-10-02",
      "expiryDate": null,
      "reportingDeadline": "June 1, each year",
      "nextReportDue": "2026-06-01",
      "completionPercent": 75,
      "status": "OK",
      "pendingTasks": [
        {
          "task": "Monthly effluent sample",
          "dueBy": "2026-02-28",
          "status": "not_scheduled"
        }
      ]
    }
  ],
  "recentBlast": {
    "date": "2026-02-14",
    "location": "Hamilton Quarry",
    "overpressure": 115,
    "overpressureLimit": 128,
    "vibration": 1.6,
    "vibrationLimit": 12.5,
    "status": "compliant"
  },
  "violations": 0
}
```

#### 4.4.4 Weather Data (API Integration)
```json
{
  "location": "Hamilton, Ontario",
  "forecast": [
    {
      "date": "2026-02-18",
      "condition": "Clear",
      "tempHigh": -1,
      "tempLow": -8,
      "windSpeed": 15,
      "windDirection": "NW",
      "precipitation": 0,
      "operationalSuitability": "good"
    },
    {
      "date": "2026-02-19",
      "condition": "Partly Cloudy",
      "tempHigh": 4,
      "tempLow": -2,
      "windSpeed": 10,
      "windDirection": "W",
      "precipitation": 0,
      "operationalSuitability": "good"
    },
    {
      "date": "2026-02-20",
      "condition": "Rain",
      "tempHigh": 6,
      "tempLow": 2,
      "windSpeed": 8,
      "windDirection": "SW",
      "precipitation": 15,
      "operationalSuitability": "limited_pm"
    },
    {
      "date": "2026-02-21",
      "condition": "Rain",
      "tempHigh": 5,
      "tempLow": 1,
      "windSpeed": 20,
      "windDirection": "S",
      "precipitation": 25,
      "operationalSuitability": "poor"
    }
  ]
}
```

---

## 5. AI Prompt Engineering

### 5.1 System Prompt Structure

```
You are the Aggregate Operations Advisor, an AI assistant for 
aggregate quarry and pit operations. You help operations managers 
make better decisions by connecting data across:

- PRODUCTION: Blast schedules, crusher output, equipment status
- INVENTORY: Stock levels, days of supply, turnover rates
- SALES: Open orders, delivery schedules, customer commitments
- COMPLIANCE: PTTW, ECA, CAR deadlines, monitoring status
- WEATHER: Forecasts and operational impact

YOUR CORE PRINCIPLES:
1. Always connect the dots across functional areas
2. Provide specific, actionable recommendations
3. Explain your reasoning so humans can validate
4. Flag risks and opportunities proactively
5. Respect that humans make final decisions

RESPONSE GUIDELINES:
- Lead with a clear, direct answer
- Support with relevant data points
- Highlight cross-functional implications
- End with a specific recommendation
- Note confidence level and data freshness

CURRENT CONTEXT:
[Inject current date, site, and data snapshots here]
```

### 5.2 Query Classification

The system classifies incoming queries to determine response strategy:

| Query Type | Classification Signal | Response Strategy |
|------------|----------------------|-------------------|
| Feasibility | "can we", "is it possible", "will we have" | Check all systems, provide yes/no with conditions |
| Root Cause | "why", "what's causing", "explain" | Multi-factor analysis with trend data |
| Scheduling | "when should", "best time to", "schedule" | Check constraints, recommend optimal timing |
| Status | "what's the status", "where are we", "show me" | Summarize current state with key metrics |
| What-If | "what if", "what would happen", "simulate" | Run scenario, show cascading impacts |
| Comparison | "vs", "compared to", "better than" | Side-by-side analysis with recommendation |

---

## 6. Success Metrics (Demo)

### 6.1 Presentation Success Criteria

| Metric | Target |
|--------|--------|
| Audience engagement during demo | Visible interest, questions |
| "I could use this" sentiment | 70%+ in post-session feedback |
| Understanding of AI value prop | Clear articulation in Q&A |
| Follow-up conversation requests | 5+ business cards/contacts |

### 6.2 Demo Reliability Targets

| Metric | Target |
|--------|--------|
| Demo completes without errors | 100% |
| AI response time | <5 seconds |
| Response relevance | Accurate to simulated data |
| Mobile display quality | Readable from 20 feet |

---

## 7. Implementation Timeline

### 7.1 Development Schedule

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| **Design** | 2 days | UI mockups, data schemas, prompt templates |
| **Build** | 3 days | React app, API integration, sample data |
| **Test** | 1 day | Scenario walkthroughs, edge cases |
| **Polish** | 1 day | Animations, error handling, presentation mode |

### 7.2 Key Milestones

| Date | Milestone |
|------|-----------|
| Feb 12 | Design complete, data schemas finalized |
| Feb 15 | Core functionality working |
| Feb 16 | All demo scenarios tested |
| Feb 17 | Final polish, presentation rehearsal |
| Feb 18 | OSSGA presentation |

---

## 8. Future Considerations

### 8.1 Production System Extensions

If moving from demo to production, consider:

1. **Real Data Integration**
   - ERP/accounting system connectors
   - Scale house/ticketing integration
   - Equipment telematics
   - Lab system (Testmark) integration

2. **Multi-Site Dashboard**
   - Portfolio-level view
   - Cross-site inventory rebalancing
   - Consolidated compliance calendar

3. **Predictive Features**
   - Demand forecasting
   - Equipment failure prediction
   - Weather-adjusted production planning

4. **Mobile App**
   - Native iOS/Android
   - Offline capability
   - Push notifications for alerts

5. **Integrations**
   - Email/calendar for scheduling
   - Accounting for margin analysis
   - CRM for customer insights

### 8.2 Training & Adoption

For production deployment:
- Role-specific training modules
- Gradual rollout (pilot site first)
- Feedback loops for AI improvement
- Change management support

---

## Appendix A: Glossary

| Term | Definition |
|------|------------|
| **PTTW** | Permit to Take Water - Ontario regulation for water extraction |
| **ECA** | Environmental Compliance Approval - permit for discharge |
| **CAR** | Compliance Assessment Report - annual ARA self-assessment |
| **WTRS** | Water Taking Reporting System - provincial reporting portal |
| **ARA** | Aggregate Resources Act - primary aggregate regulation |
| **Days of Supply** | Current inventory ÷ average daily demand |
| **Turnover Rate** | How many times inventory is sold/replaced per period |

---

## Appendix B: Demo Script

### Opening (30 seconds)
"Let me show you what it looks like when your data actually talks to each other. This is the Aggregate Operations Advisor—imagine opening this at 6 AM before you head to the pit."

### Daily Briefing Demo (2 minutes)
[Walk through briefing sections, emphasizing cross-functional connections]

### Ask Anything Demo (3 minutes)
[Run 2 live queries, show reasoning process]

### Strategic Insight Demo (1 minute)
[Show weekly brief, highlight business-level insights]

### Closing (30 seconds)
"This isn't about replacing your judgment—it's about giving you better information to judge with. The data you're already collecting, finally working together."

---

*Document prepared by BookerHQ Inc. | February 2026*
