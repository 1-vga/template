import React, { useEffect } from 'react';
import './css/main.scss';
import styles from './App.module.scss';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { HomePage } from './pages/home-page';
import { LabsPage } from './pages/labs-page';
import { LoginPage } from './pages/login-page';
import { SignUpPage } from './pages/signup-page';
import { LabPage } from './pages/lab-page';
import ProfilePage from './pages/profile-page/profile-page';
import { Page404 } from './pages/page404';
import ScrollToTop from './utils/scroll-to-top';
import { AdminDashboard } from './pages/admin-dashboard';
import { PatientDashboard } from './pages/patient-dashboard';
import { AppointmentsPage } from './pages/appointments-page';
import { FindingsPage } from './pages/findings-page';

function App() {
  const location = useLocation();

  return (
    <main>
      <div className={styles.page}>
        {!location.pathname.includes('dashboard') && <Header />}
        <div className={styles.pageContent}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/labs" element={<LabsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/appointments' element={<AppointmentsPage />} />
            <Route path='/findings' element={<FindingsPage />} />
            <Route path='/admin-dashboard' element={<AdminDashboard />} />
            <Route path='/patient-dashboard' element={<PatientDashboard />} />
            <Route path='/about' element={<div style={{ marginTop: '95px' }}>About page</div>} />
            <Route path='/agency-services' element={<div style={{ marginTop: '95px' }}>Agency Services</div>} />
            <Route path='/staff-services' element={<div style={{ marginTop: '95px' }}>Staff Services</div>} />
            <Route path="/:id" element={<LabPage />} />
            <Route path="/notfound" element={<Page404 />} />
            <Route path='*' element={<Navigate to="/notfound" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default App;
