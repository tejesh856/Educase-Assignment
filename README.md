# Educase / PopX UI

A simple React application built with Vite that demonstrates a client-side onboarding flow for the PopX UI. The app uses React Router and Tailwind CSS to provide a welcome screen, authentication forms, and a basic account page.

## App overview

- `src/main.jsx` mounts the app using `ReactDOM.createRoot`.
- `src/App.jsx` defines the route structure with `react-router-dom`.
- `src/components/Welcome.jsx` shows the landing page with links to sign up or log in.
- `src/components/Signup.jsx` provides a registration form with fields for name, phone, email, password, company name, and agency selection.
- `src/components/Login.jsx` provides a login form that validates email and password before navigating to account.
- `src/components/Account.jsx` displays a simple account settings page.

## Features

- Client-side page routing with React Router
- Login form with email format and password length validation
- Signup form with validation for full name, phone, email, password, company, and agency selection
- Account settings page with profile display
- Tailwind CSS styling for layout and responsive UI

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the app for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run ESLint:

```bash
npm run lint
```

## Project structure

```text
src/
  App.jsx
  main.jsx
  App.css
  components/
    Welcome.jsx
    Login.jsx
    Signup.jsx
    Account.jsx
  assets/
    profile.png
    camera.svg
    hero.png
    react.svg
    vite.svg
```

## Notes

- Navigation is handled client-side; there is no backend authentication or persistence in this app.
- The form submit behavior is simulated and redirects to `/account` when validation passes.
- Tailwind CSS classes are used directly in component JSX.
