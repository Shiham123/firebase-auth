import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from './Layout/mainlayout.jsx';
import HomePage from './pages/home.jsx';
import LoginPage from './pages/loginPage.jsx';
import Contact from './pages/contact.jsx';
import GithubPage from './pages/githubLogin.jsx';
import EmailLogin from './pages/emailLogin.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/contact', element: <Contact /> },
      { path: '/github', element: <GithubPage /> },
      { path: '/email', element: <EmailLogin /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <App />
  </React.StrictMode>
);
