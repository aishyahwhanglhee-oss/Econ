# Implementation Plan: Economist Portfolio Website

An analytical, modern dark-mode portfolio for **Siwat Teimtad** designed for high-density academic & economic communication, optimized for instant hosting on **GitHub Pages**.

---

## 1. Goal Description

Build a high-performance, responsive portfolio website for economist Siwat Teimtad to be hosted for free on GitHub Pages. The website showcases economic philosophy, research, and deep-dive analytical writings with an academic, analytical aesthetic (modern dark theme, JetBrains Mono font).

### Core Specifications
1. **Theme & Typography**: Modern dark theme with `JetBrains Mono` monospace typography.
2. **Hero Section**: Prominently features the signature quote:  
   > *"Master Economics, the Simple Way."*
3. **Featured Projects (In-Depth Essays)**:
   - **Project 1**: *Key economic concepts of "Economics in One Lesson" written by Henry Hazlitt in 1946* (minimum 1,000 words).
   - **Project 2**: *Game Theory in Modern Economics: Strategic Interdependence, Information, and Mechanism Design* (minimum 1,000 words).
4. **About Me & Contact**:
   - Name: **Siwat Teimtad**
   - Email: `dx@outlook.com` (with one-click copy and mailto action)
5. **Brand Logo**: Uses `black.png` in the navigation header and site favicon.
6. **Hosting**: Zero-dependency, pure HTML/CSS/JS ready for GitHub Pages.

---

## 2. User Review Required

> [!NOTE]
> **Logo Asset (`black.png`)**: Please make sure to place your logo file named `black.png` directly in the project root (`my_web/black.png`). We will configure the code to gracefully display `black.png` with a clean fallback until the file is placed.

> [!IMPORTANT]
> **Word Count Commitment**: Both essays will exceed the 1,000-word requirement with rigorous academic breakdowns, economic diagrams/tables, payoff matrices, and real-world policy case studies.

---

## 3. Architecture & File Structure

```text
my_web/
├── plan/
│   └── our_plan.md                  # This implementation plan
├── index.html                       # Homepage: Hero, About Me, Project Highlights & Abstracts, Contact
├── hazlitt-economics.html           # Project 1: Hazlitt's "Economics in One Lesson" (1,000+ words)
├── game-theory.html                 # Project 2: Foundations & Applications of Game Theory (1,000+ words)
├── black.png                        # Site logo asset
├── css/
│   ├── style.css                    # Design tokens, dark theme variables, base layout, navigation, cards
│   └── article.css                  # Long-form article reading layout, typography, callouts, tables
└── js/
    └── main.js                      # Reading progress bar, clipboard copy for email, scroll utilities
```

---

## 4. Design System

- **Color Palette**:
  - Background (Deep Space/Zinc): `#0a0c10`
  - Card & Surface: `#12161f`
  - Border & Dividers: `#1e2636`
  - Accent / Highlights: `#38bdf8` (Cyan / Electric Blue) and `#34d399` (Emerald Green)
  - Text Primary: `#f1f5f9`
  - Text Muted: `#94a3b8`
- **Typography**:
  - Primary Font: `'JetBrains Mono', monospace` (via Google Fonts)
  - Tabular Numbers: `font-variant-numeric: tabular-nums` for matrices and statistical tables
- **Components**:
  - Interactive navigation bar with logo and quick jump links
  - Terminal-inspired hero section with quote badge
  - Project preview cards with meta tags, read times, and abstracts
  - Academic reading view with reading progress bar and table of contents
  - Interactive email copy button with visual toast confirmation

---

## 5. Detailed Content Outline (1,000+ Words Each)

### Project 1: Key Economic Concepts of *Economics in One Lesson* (Henry Hazlitt, 1946)
- **Estimated Length**: ~1,200 words
- **Sections**:
  1. **The Axiom of Hazlitt's Lesson**: The core thesis—analyzing secondary, long-run consequences on all groups versus immediate, short-run effects on special groups.
  2. **The Broken Window Fallacy (Seen vs. Unseen)**: Bastiat's foundation revisited; why destruction redirects capital from productive industries to mere repairs without net wealth creation.
  3. **The Mirage of Public Works & Taxation**: How government-directed capital crowds out private innovation and market-driven resource allocation.
  4. **Capital and Machinery (The Luddite Fallacy)**: Why technological advancement and automation expand real wages and aggregate production rather than permanently eliminating labor.
  5. **Price Controls & Market Distortions**: Secondary unintended consequences of rent controls (slums, housing shortages) and minimum wage laws on marginal labor.
  6. **Protectionism vs. Comparative Advantage**: How tariffs enrich domestic monopolies while impoverishing consumers and export industries.
  7. **Contemporary Takeaways for Modern Macroeconomics**: Analyzing modern fiscal stimulus and debt monetization through Hazlitt's classical lens.

### Project 2: Strategic Foundations & Modern Applications of Game Theory
- **Estimated Length**: ~1,200 words
- **Sections**:
  1. **Introduction to Strategic Interdependence**: Moving from classical price-taking markets (perfect competition) to strategic multi-agent environments.
  2. **Normal-Form Games & Nash Equilibrium**:
     - Strict and weak dominance.
     - The Prisoner's Dilemma payoff matrix and Pareto inefficiency.
     - Oligopoly competition: Cournot quantity competition vs. Bertrand price competition.
  3. **Extensive-Form Games & Dynamic Credibility**:
     - Game trees and information sets.
     - Backward induction and Subgame Perfect Nash Equilibrium (SPNE).
     - Credible threats vs. empty promises in market entry deterrence.
  4. **Repeated Games & The Shadow of the Future**:
     - Axelrod's tournaments, Tit-for-Tat, and Grim Trigger strategies.
     - The Folk Theorem and self-enforcing cooperative contracts.
  5. **Asymmetric Information, Signaling & Screening**:
     - George Akerlof's *The Market for Lemons* (adverse selection).
     - Michael Spence's Job Market Signaling model in labor economics.
  6. **Mechanism Design & Auction Theory**:
     - First-price vs. second-price (Vickrey) auctions.
     - The Revelation Principle and real-world FCC spectrum auctions.
     - Designing incentive-compatible public policies.

---

## 6. Step-by-Step Implementation Roadmap

1. **Phase 1: Project Setup & CSS Styling**
   - Create directories: `css/`, `js/`, `plan/`.
   - Write `css/style.css` containing the complete dark theme design system and responsive grid.
   - Write `css/article.css` specialized for academic essay readability.

2. **Phase 2: Core JavaScript (`js/main.js`)**
   - Implement top reading progress bar.
   - Implement one-click copy email button with feedback tooltip.
   - Add responsive mobile menu toggle and smooth anchor scrolling.

3. **Phase 3: Main Landing Page (`index.html`)**
   - Header with `black.png` logo and navigation.
   - Hero banner featuring the quote: *"Master Economics, the Simple Way."*
   - About Me section highlighting **Siwat Teimtad** and contact email `dx@outlook.com`.
   - Featured Projects section showcasing summaries of both economic essays with direct links.
   - Footer with copyright and contact links.

4. **Phase 4: Essay 1 (`hazlitt-economics.html`)**
   - Draft the complete 1,000+ word essay on Hazlitt's 1946 masterpiece.
   - Integrate comparison tables ("Seen vs. Unseen Effects") and pull quotes.

5. **Phase 5: Essay 2 (`game-theory.html`)**
   - Draft the complete 1,000+ word essay on Game Theory.
   - Integrate styled payoff matrix tables, mathematical definitions, and auction mechanisms.

6. **Phase 6: Verification & Word Count Audit**
   - Run verification script to guarantee both project articles exceed 1,000 words.
   - Check all relative links, responsive viewport behavior, and asset references.

---

## 7. Step-by-Step GitHub Pages Deployment Guide

When local development is complete, deploy with these steps:

```powershell
# 1. Initialize local Git repository (in my_web folder)
git init

# 2. Add all files
git add .

# 3. Commit files
git commit -m "Deploy Siwat Teimtad Economist Portfolio"

# 4. Set main branch
git branch -M main

# 5. Link to your GitHub repository (replace with your GitHub username)
git remote add origin https://github.com/<your-github-username>/<your-repo-name>.git

# 6. Push to GitHub
git push -u origin main
```

**In GitHub Repository Settings:**
1. Navigate to **Settings** > **Pages** (under "Code and automation").
2. Under **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` / `/(root)`
3. Click **Save**.
4. The portfolio will be live at `https://<your-github-username>.github.io/<your-repo-name>/` within 1–2 minutes.
