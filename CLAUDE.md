# Aggregate Operations Advisor - OSSGA Demo

## Project Overview

Demo application for the **OSSGA Annual Conference (February 18, 2026)** showcasing an AI-powered decision support system for aggregate quarry operations. Built by BookerHQ Inc.

**This is a presentation demo only** - all data is simulated and AI responses are pre-scripted/hardcoded. There is no real backend, no actual API integration, and no live data. The goal is to **look and feel like a real product** during a ~7 minute live presentation.

## Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS (single light theme, generic professional palette - blues/grays)
- **Routing**: React Router DOM v6
- **UI Components**: HeadlessUI, Heroicons
- **Utilities**: date-fns, clsx
- **Deployment**: Netlify (static site)
- **Linting**: ESLint + Prettier + Husky

## Architecture

```
src/
├── components/
│   ├── layout/          # App shell, navigation, header
│   ├── ui/              # Reusable UI components (cards, badges, progress bars)
│   ├── briefing/        # Daily Briefing mode components
│   ├── chat/            # Ask Anything mode components
│   └── strategy/        # Weekly Strategy mode components
├── data/                # Static JSON data files (inventory, orders, compliance, weather)
├── hooks/               # Custom React hooks
├── pages/               # Top-level page components
├── utils/               # Helper functions
├── App.jsx              # Root component with routing
├── main.jsx             # Entry point
└── index.css            # Global styles + Tailwind
```

## Three Operating Modes (Tabs)

The app has three main tabs accessible from the top navigation:

### 1. Daily Briefing (default view)
Auto-generated morning briefing with sections:
- Weather impact & operational guidance
- Priority alerts (color-coded: red/yellow/green)
- Inventory snapshot with days-of-supply bars
- Today's orders & delivery schedule
- Compliance status
- AI recommendations with priority ranking

### 2. Ask Anything (chat interface)
Simulated conversational AI with:
- Pre-scripted query-response pairs that appear to stream/type out
- Suggested question chips for demo flow
- Response structure: Direct Answer → Supporting Analysis → Cross-functional Considerations → Recommendation → Confidence
- Key demo queries: order feasibility, root cause analysis, blast scheduling

### 3. Weekly Strategy (strategic insights)
Weekly strategy brief showing:
- Executive summary
- Key metrics vs targets (production, sales, inventory, compliance)
- Cross-functional insights connecting operational areas
- Opportunities and risks
- Recommended priorities checklist

## Data Layer

All data is **static JSON** stored in `src/data/`. No real APIs.

Key data files:
- `inventory.json` - Product stock levels, days of supply, status
- `orders.json` - Open orders, today's deliveries, commitments
- `compliance.json` - PTTW, ECA permits, blast records, deadlines
- `weather.json` - 7-day forecast for Hamilton, ON

Data reflects a fictional multi-site aggregate operation based on Nelson Aggregates' operational patterns. See the PRD (`.claude/prd.md`) for exact JSON schemas and sample data.

## Demo Scenarios

The app must support these presentation scenarios smoothly:

1. **Morning Briefing Walkthrough** (2 min) - Open app, walk through briefing sections
2. **Live Query: Order Feasibility** (2 min) - "Can we take an 800t HL3 order by Friday?"
3. **Live Query: Root Cause** (2 min) - "What's causing the limestone shortage?"
4. **Strategic Insight** (1 min) - Show weekly brief, highlight sales-production gap

## Simulated AI Behavior

- **No real Claude API calls**. All AI responses are pre-written and displayed with a typing animation to simulate streaming.
- The chat should match user input against known demo queries and return the corresponding pre-scripted response.
- Include a fallback response for unrecognized queries that gracefully says something relevant.
- Typing animation speed should feel natural (~30-50ms per character or token-chunked).

## UI/UX Requirements

- **Mobile-responsive** but optimized for **large screen projection** (readable from 20 feet)
- Large fonts, high contrast, clear visual hierarchy
- Color-coded status indicators: red (critical), yellow (warning), green (ok)
- Smooth animations for tab transitions and content loading
- Professional, clean aesthetic - no playful/casual styling
- Header: "AGGREGATE OPERATIONS ADVISOR" with site selector dropdown and date

## Domain Glossary

- **PTTW**: Permit to Take Water (Ontario regulation)
- **ECA**: Environmental Compliance Approval (discharge permit)
- **CAR**: Compliance Assessment Report (annual self-assessment)
- **ARA**: Aggregate Resources Act (primary aggregate regulation)
- **Days of Supply**: Current inventory / average daily demand
- **Turnover Rate**: How many times inventory is sold/replaced per period

## Commands

```bash
npm run dev          # Start dev server on port 3000
npm run build        # Production build to dist/
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix lint errors
npm run format       # Format with Prettier
```

## Key Constraints

- Demo date: **February 18, 2026** - all simulated data should reflect this date
- No real API keys or secrets needed
- Must work reliably offline (no external API dependencies)
- Target: <5 second perceived response time for AI chat
- All sample data and response content is defined in the PRD (`.claude/prd.md`)
