import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import MainLayout from '../components/layout/MainLayout';

function AppRouter() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;