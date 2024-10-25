import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import AboutPage from './pages/AboutPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import MissingPersonsPage from './pages/MissingPersonsPage';
import ProfileEditor from './components/profile/ProfileEditor';
import SubscriptionManager from './components/subscription/SubscriptionManager';
import AdminDashboard from './components/admin/AdminDashboard';
import useStore from './store/useStore';

function App() {
  const { user } = useStore();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="missing-persons" element={<MissingPersonsPage />} />
          {user && (
            <>
              <Route path="profile" element={<ProfileEditor />} />
              <Route path="subscription" element={<SubscriptionManager />} />
              {user.role === 'admin' && (
                <Route path="admin" element={<AdminDashboard />} />
              )}
            </>
          )}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;