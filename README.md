# Bookmark Manager

Bookmark Manager is a React-based application for organizing books you have read, want to read, and want to revisit later. Users can build a personal library, create shelves, search books, and sign in with Google using Firebase Authentication.

## Features

- Track books in a personal library
- Create and manage custom shelves
- Search for books and view details
- Browse recommendations and featured books
- Sign in with Google using Firebase
- Responsive design for desktop and mobile

## Tech Stack

- React 18
- React Router DOM
- Redux Toolkit
- Firebase Authentication and Firestore
- React Toastify
- Create React App

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env` file in the project root and add your Firebase values:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTHDOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECTID=your_project_id
REACT_APP_FIREBASE_STORAGEBUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGINGSENDERID=your_messaging_sender_id
REACT_APP_FIREBASE_APPID=your_app_id
```

### 3. Run locally

```bash
npm start
```

The app will open in your browser at `http://localhost:3000`.

## Available Scripts

```bash
npm start
npm run build
npm test
```

## Firebase Setup

To make Google sign-in work:

1. Create or open a Firebase project.
2. Enable Google sign-in under Authentication → Sign-in method.
3. Add your local and deployed domains to Authentication → Settings → Authorized domains.
4. Use the web app config values in your `.env` file and in Vercel environment variables for deployment.

## Deployment on Vercel

This project is suitable for deployment on Vercel.

### Vercel settings

- Framework: Create React App
- Build Command: `npm run build`
- Output Directory: `build`

### Environment variables in Vercel

Add the same Firebase values from your `.env` file to Vercel under Project Settings → Environment Variables.

If the app uses client-side routing, add a `vercel.json` file with:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## Project Structure

- `src/components` – UI components for books, shelves, library, navigation, and auth
- `src/store` – Redux store and slices
- `src/hooks` – custom hooks for filtering and fetching data
- `src/images` – image assets

## License

This project is for educational and personal use.

