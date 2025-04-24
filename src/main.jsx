import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import LoginPage from './LoginPage.jsx';
import RegisterPage from './RegisterPage.jsx';
import Dashboard from './Dashboard.jsx';
import { UserProvider } from './context/UserContext.jsx';
import { PortfolioProvider } from './context/PortfolioContext.jsx';


createRoot(document.getElementById('root')).render(
  <UserProvider>
    <PortfolioProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/RegisterPage" element={<RegisterPage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </PortfolioProvider>
  </UserProvider>
)
