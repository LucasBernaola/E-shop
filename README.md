🛒 E-Shop — Project Documentation (Stage 1)
📌 Overview

E-Shop is a modern e-commerce web application built with Next.js 16 and TypeScript, focused on learning real-world frontend architecture, clean code principles, and modern React patterns.

This project is intentionally designed to:

practice Next.js App Router (SSR, SSG, Server Components)

improve TypeScript skills

apply SOLID and clean architecture concepts where they make sense

build a scalable, maintainable folder structure

commit daily and track progress through Vercel previews

At this early stage, the project uses local mock data to simulate a backend, keeping the focus on frontend development and architecture.

🧰 Tech Stack (so far)

Next.js 16 (App Router)

React 18

TypeScript

CSS Modules

Local data layer (no external backend yet)

Vercel deployment

src/
 ├── app/
 │    ├── page.tsx                  → Home page
 │    ├── products/
 │    │      ├── page.tsx           → Product listing
 │    │      └── [slug]/page.tsx    → Product detail
 │    └── cart/
 │          └── page.tsx            → Cart page
 │
 ├── data/
 │    └── products.ts               → Local mock product data
 │
 ├── types/ (or models/)
 │    └── product.ts                → Domain model for Product
 │
 ├── components/                    → Reusable components (to be added)
 ├── lib/                           → Utilities & helpers (to be added)
 └── styles/                        → Global & module styles

 This structure follows the Single Responsibility Principle, keeping domain models, data, UI, and logic separated and modular.

 🧩 Domain Model: Product

The Product interface represents the core domain entity of the application.
It defines the shape of every product used across the app.

Fields included in the Product model:

id — unique identifier

slug — URL-friendly identifier

name — product display name

description — short/medium description

price — numeric price

imageUrl — path to the product image

category — product category

inStock — available stock

featured — highlight on homepage

brand — manufacturer

rating — average rating (1–5)

tags — keywords for search/filtering

This model lives in the /types (or /models) folder to keep the domain layer independent from UI and data sources.

📦 Local Data Layer

The project includes a products.ts file inside the data/ directory that exports a typed array of Product objects.

This file currently acts as a local mock database and follows these principles:

Isolates data from components and pages

Allows the UI to focus on rendering the domain

Can later be replaced by real API routes, external services, or a database — without changing the UI

This aligns with the Dependency Inversion Principle:
UI depends on the abstraction (Product), not the data source implementation.