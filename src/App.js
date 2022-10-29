import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import { UserProvider } from './context/user';

const Login = React.lazy(() => import('./pages/Login'));

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
