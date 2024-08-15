import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './components/Header/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import Department from './pages/Department/Department';
import Billing from './pages/Billing/Billing';  
import UserLogin from './pages/LoginPage/userLogin';  
import AdminLogin from './pages/LoginPage/adminLogin';  // Import the AdminLogin component

function App() {
  return (
    <Router>
      <div className="bg-apple-black min-h-screen text-apple-white">
        <Header />
        <Routes>
          <Route path="/department/:departmentName" element={<Department />} />
          <Route path="/billing" element={<Billing />} />  
          <Route path="/login" element={<UserLogin />} />  
          <Route path="/admin-login" element={<AdminLogin />} />  {/* AdminLogin Route */}
          <Route path="/" element={<Dashboard />} />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
