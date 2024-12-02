import React from "react";
import HomePage from "./Pages/AdminPages/HomePage";
import AdminSignINPage from "./Pages/AdminPages/AdminSignINPage";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import AppointmentsPage from "./Pages/AdminPages/AppointmentsPage";
import CustomerPage from "./Pages/AdminPages/CustomersPage";
import AdminTicketsPage from "./Pages/AdminPages/AdminTicketsPage";
import AdminDashboardPage from "./Pages/AdminPages/AdminDashboardPage";
import AdminChatPage from "./Pages/AdminPages/AdminChatPage";
import RigesterPage from "./Pages/UserPages/RegisterPage";


function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admindashboard" element={<AdminDashboardPage />} />
        <Route path="/signin" element={<AdminSignINPage />} />
        <Route path="/appointments" element={<AppointmentsPage />} />
        <Route path="/customers" element={<CustomerPage />} />
        <Route path="/tickets" element={<AdminTicketsPage />} />
        <Route path="/chat" element={<AdminChatPage />} />
        <Route path="/register" element={<RigesterPage />} />
        <Route path="/user" element={<AdminSignINPage/>} />
      </Routes>
    </div>
  );
}

export default App;
