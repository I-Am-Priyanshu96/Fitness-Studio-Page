# Iron Pulse Fitness

A responsive web application and interactive membership cost calculator built for **Iron Pulse Gym**, created with semantic HTML5, modern CSS3, and vanilla JavaScript. It combines a single-page layout with real-time pricing calculations, two-way UI synchronization, and mobile-friendly breakpoints without relying on external frameworks or build tools.

## Table of Contents

- [Key Features](#key-features)
- [Pricing & Discount Logic](#pricing--discount-logic)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Getting Started](#getting-started)
- [Customization & Future Improvements](#customization--future-improvements)

## Key Features

- **Sticky Navigation & Hero Banner**: Includes a sticky top navigation bar with smooth section links (`Home`, `Plans`, `Calculator`, `Trainers`, `Schedule`) and a full-width hero section featuring a call-to-action button (`View Plans`).
- **Interactive Membership Plans**: Displays three plan cards—**Basic Plan** (₹1,000/month), **Standard Plan** (₹2,000/month), and **Premium Plan** (₹3,000/month)—each listing included perks such as 24/7 gym floor access, group classes, locker/shower facilities, sauna/steam access, personal training sessions, and custom diet plans.
  - Supports single-card selection with an `.active` state, orange highlight border/glow, and automatic button text switching between `Select Plan` and `Selected`.
- **Two-Way Synced Membership Cost Calculator**: Lets users pick a membership plan and duration (`1 Month`, `3 Months`, `6 Months`, or `12 Months`) to calculate total pricing dynamically.
  - Clicking any plan card updates the `#plan-select` dropdown value and recalculates the total.
  - Changing the `#plan-select` dropdown updates which plan card has the `.active` class and refreshes the button labels.
- **Expert Trainer Profiles**: Showcases three coaches (**Marcus Vance**, **Elena Rostova**, and **David Chen**) with role titles, specializations (weightlifting/bodybuilding, functional training/fat loss, and flexibility/recovery), and years of experience.
- **Weekly Class Schedule**: Presents a structured timetable from **Sunday** through **Saturday** covering morning and evening sessions (such as *Morning Strength*, *HIIT Circuit*, *Yoga & Mobility*, *Heavy Lifting*, *Cardio Blast*, *Power Yoga*, *Core & Calisthenics*, and *Weekend Bootcamp*) with timings and assigned trainers.
- **Responsive Design**: Uses flexbox wrapping, horizontal table scrolling (`.table-container`), and a `@media (max-width: 768px)` breakpoint to stack navigation items, adjust hero heading size, and fit cards cleanly on smaller screens.

## Pricing & Discount Logic

The `calculateTotal()` function in `index.js` calculates membership totals using the selected monthly rate and duration tier:

| Duration | Discount Applied | Formula |
| :--- | :--- | :--- |
| **1 Month** | 0% | `monthlyPrice * 1` |
| **3 Months** | 5% | `(monthlyPrice * 3) * 0.95` |
| **6 Months** | 10% | `(monthlyPrice * 6) * 0.90` |
| **12 Months** | 20% | `(monthlyPrice * 12) * 0.80` |

Totals are rounded to the nearest whole rupee (`Math.round(finalCost)`) and displayed alongside a summary line indicating the chosen plan, duration, and active discount percentage when applicable.

## Project Structure

```text
.
├── index.html   # Main markup for navigation, hero, plans, calculator, trainers, schedule, and footer
├── index.css    # Dark theme styling, hover/active states, backgrounds, and responsive media queries
└── index.js     # DOM event listeners, card/dropdown synchronization, and cost calculation logic
