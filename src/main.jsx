import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './LoginPage.jsx';
import RegisterPage from './RegisterPage.jsx';
import Dashboard from './Dashboard.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="LoginPage" element={<LoginPage />} />
      <Route path="RegisterPage" element={<RegisterPage />} />
      <Route path="Dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
)
