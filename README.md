# Amenitiz Chess Grandmasters Wiki ♟️

## Project Overview

This is a **React + TypeScript** application built with **Next.js** that serves as a wiki for Chess.com Grandmasters.

* Lists all Grandmasters using the **Chess.com public API**.
* Provides **dynamic profile pages** for each Grandmaster with detailed stats.
* Features a **live-updating clock** on profiles showing the last online time.
* Leverages **Next.js App Router** with **Incremental Static Regeneration (ISR)** for optimal performance and SEO, and is **SEO Optimized** with dynamic metadata for each profile page to improve search engine visibility.

---

## Technologies Used

* **Next.js (v15)**: React framework with App Router and ISR for server-side rendering and static site generation.
* **React 19 + TypeScript**: Ensures strong typing and utilizes modern React features.
* **Emotion**: A CSS-in-JS library providing styling with robust theming support.
* **date-fns**: A lightweight JavaScript date utility library used for the live "last online" clock.
* **ESLint + TypeScript**: Integrated for maintaining code quality and ensuring type safety.
* **Next.js Image Optimization**: Automatically optimizes external profile images for faster loading and improved performance.

---

## How to Run Locally

Follow these steps to set up and run the project on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone <repo-url>
    cd nextjs-chess-gm-wiki
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Configure environment variables:**
    Create a `.env` or `.env.local` file in the project root with the following:
    ```bash
    NEXT_PUBLIC_CHESS_API_GM_LIST=https://api.chess.com/pub/titled/GM
    NEXT_PUBLIC_CHESS_API_PLAYER=https://api.chess.com/pub/player
    ```

4.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

5.  **Access the application:**
    Open your browser and navigate to `http://localhost:3000`. You'll be automatically redirected to the Grandmasters list page.

---

## Project Structure

* `/app`: Contains **Next.js App Router** pages and layouts, defining the core navigation and overall page structure.
* `/components`: Houses **modular UI components** like `Layout`, `Profile`, and other reusable UI elements, promoting code reusability and maintainability.
* `/constants`: Stores **API endpoints**, primarily configured via environment variables for easy management and security.
* `/styles`: Includes global **CSS resets** and **CSS variables**, ensuring consistent theming and styling throughout the application.

---

## How the Challenge Was Fulfilled

### Step 1: List Grandmasters

* An `/gms` route was implemented to fetch Grandmaster data directly from the Chess.com API.
* **Incremental Static Regeneration (ISR)** is used with a rebuild interval of **one hour**, balancing fresh data with efficient resource usage.
* Grandmaster usernames are displayed in a **responsive grid**, adapting seamlessly to various screen sizes.

### Step 2: Grandmaster Profile Page

* A **dynamic route**, `/gms/[username]`, was created to display individual player profiles.
* Player profile data is fetched from the Chess.com API using **ISR** with a **5-minute revalidation period**, ensuring relatively up-to-date statistics.
* The profile UI showcases the player's avatar, name, username, relevant stats, and external links.

### Step 3: Live Last Online Clock

* The `ProfileHeader` component features a live clock that displays the Grandmaster's last online time in **HH:MM:SS** format.
* **`date-fns`** is utilized to calculate the time difference, and the clock updates every second, providing real-time information.

---

## Accessibility & Responsiveness

* The application is designed to be **keyboard-navigable**, enhancing accessibility for users who prefer or require keyboard interaction. ⌨️
* **CSS variables** and **responsive grid components** are employed to ensure the app is **mobile and tablet responsive**, providing a consistent experience across different devices.
* While formal accessibility testing was not conducted, fundamental accessibility considerations were integrated during development.

---

## Backend & Testing

* **No backend proxy** is used; all API calls are made directly to the public Chess.com API. This approach is acceptable given the public and free nature of the API.
* API endpoints are safely exposed in `.env` files and documented in the `README`.
* Due to time constraints, **no automated tests** (unit or integration) were implemented.

---

## Known Compromises & Sub-Optimal Aspects

* **Client-only Last Online Clock Update**: The live clock updates on the client side, which could potentially lead to hydration mismatches and minor CPU usage. A more robust solution for real-time updates would involve server-sent events or WebSockets.
* **Basic Error Handling**: While basic fetch error handling is present, more advanced features like retries, fallback caching, or comprehensive user notifications (beyond a simple `Empty` component) are currently missing.
* **Minimal UI/UX & Responsiveness**: The user interface is functional but minimal, lacking the complete polish and comprehensive responsiveness/accessibility that would be achieved with more development time.
* **Direct API Calls in Server Components**: While acceptable for the current scope, making direct API calls without a dedicated backend proxy or caching layer limits advanced API management capabilities for larger-scale applications.
* **Limited Testing**: The absence of unit and integration tests is a significant compromise, impacting the maintainability and reliability of the codebase.

---

## Future Improvements

* **Pagination/Infinite Scrolling**: Implement these features for the Grandmasters list to improve scalability and user experience when handling a large dataset.
* **Enhanced UI Responsiveness and Accessibility**: Further improve the UI's adaptability across various devices and strengthen adherence to accessibility standards.
* **Caching with SWR or React Query**: Integrate a client-side data fetching library to optimize API usage, reduce redundant requests, and boost application performance.
* **Robust Retry Logic and Better Error UI**: Implement more resilient error handling, including retry mechanisms and more informative user interfaces for failed API fetches.
* **Comprehensive Test Coverage**: Add unit, integration, and end-to-end (E2E) tests to ensure the application's stability and correctness.
