import React from 'react';
import { Routes, Route } from "react-router-dom"

import About from './components/about';
import Dashboard from './components/dashboard';
import Home from './components/home';
import Login from './components/login';
import Logout from './components/logout';
import Setting from './components/setting';
import ProtectedRoute from './components/protectedRoute';


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="login" element={ <Login/> } />
        // PROTECTED ROUTES
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="setting"
          element={
            <ProtectedRoute>
              <Setting />
            </ProtectedRoute>
          }
        />
        <Route
          path="logout"
          element={
            <ProtectedRoute>
              <Logout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
