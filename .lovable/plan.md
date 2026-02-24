

# Industrial Software Portfolio — Case Study Website

## Overview
A single-page, static portfolio website with a dark industrial tech aesthetic (inspired by Tractian/Palantir), showcasing a real industrial software case study at Whirlpool. Fully static, no backend needed — optimized for speed, Git, and Cloudflare deployment.

---

## Section 1 — Hero
- Full-width dark hero with your photo next to the Whirlpool WCM medal
- Bold title: **"From Shop Floor to Scalable Systems"**
- Subtitle: *"Real industrial software built and validated in production environments"*
- Subtle scroll-down indicator and a sticky navigation bar

## Section 2 — The Problem
- Storytelling block explaining the WPS → WCM migration challenge
- Key pain points: lack of real-time quality tracking, no production traceability, manual defect reporting
- Visual timeline showing the transformation journey
- Dark cards with icons for each challenge area

## Section 3 — Engineering & Architecture
- System architecture diagram (built with styled components, not an image)
- Feature cards for each subsystem: Serialization, Cognex Camera Reading, Tablet Integration, Defect Tracking, Production Data Flow, Dashboards
- Embedded photos of the actual system: tablets on the shop floor, Zebra printer labels, FPY dashboards on TVs, operator workstations
- Clean grid layout with hover effects

## Section 4 — Deployment & Validation
- Timeline storytelling of the deployment at Whirlpool Rio Claro plant
- Photo from the WCM audit day with Professor Hajime Yamashina
- Highlight card: Gold medal recognition — highest WCM category
- Quote/callout block emphasizing the audit validation

## Section 5 — Impact & Results
- Animated counter cards showing key operational metrics (FPY improvement, defect reduction, traceability coverage)
- Before/after comparison visual
- Dark gradient background with accent color highlights

## Section 6 — Product Evolution
- How this experience led to the creation of **Rakkun.io**
- Industry events participation (Siemens HackDay presentation photo)
- Leads generation and business development story
- Link/CTA to Rakkun.io

## Section 7 — Media Gallery
- **Photo gallery** grid with lightbox for all uploaded industrial photos (9 images)
- **Video gallery** with YouTube embeds, each with English-translated title and context note explaining these were internal team communication videos (2018-2019):
  1. "Defect Reporting Test Synchronized with Line Stop Andon"
  2. "Advantech Device Wise App Feeding Rack with EWM Logistics Integration"
  3. "ABB Robot Assembling Cabinet on the Whirlpool Drum"
  4. "Zebra Printer Printing Data Matrix Labels for Drum Application"
  5. "Andon Line Stop and Defect Reporting"
  6. "Andon and Mechanism Conveyor Belt"
  7. "WCM Audit Day at Whirlpool with Professor Hajime Yamashina — Our FPY System Won the Gold Medal"
  8. "Quality Defect Reporting on Line 8 FPY Tablet"
  9. "Multi-Laser vs iPad Latency Test on Line 8"
  10. "Klabin SAP MII App — HackSiemens 2nd Edition — MindSphere CloudFoundry"
- Disclaimer note: *"These videos were recorded for internal team communication during 2018-2019, not for public content creation."*

## Section 8 — Footer
- Contact information / LinkedIn link
- Clean minimal footer with copyright

---

## Design System
- **Dark theme** as default (near-black backgrounds with subtle gradients)
- **Accent color**: Electric blue or industrial orange for highlights
- **Typography**: Bold, strong headings with monospace accents for technical elements
- **Animations**: Smooth scroll-triggered fade-ins, counter animations
- **Responsive**: Mobile-first, works on all devices
- **Static & fast**: No backend, all data hardcoded, optimized images

## Technical Approach
- Single-page React app with smooth scroll navigation
- All content hardcoded (no database needed)
- YouTube embeds via iframe for videos
- Images embedded directly from project assets
- Fully exportable to Git and deployable on Cloudflare Pages

