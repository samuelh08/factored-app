import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { UserProvider } from './context/user';

const Login = React.lazy(() => import('./pages/Login'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Logout = React.lazy(() => import('./pages/Logout'));

function App() {
  return (
    <div className="App">
      <UserProvider>
        <React.Suspense>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </React.Suspense>
      </UserProvider>
    </div>
  );
}

export default App;
