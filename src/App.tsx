import React from 'react';
import './css/main.scss';
import styles from './App.module.scss';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Route, Routes, Navigate } from "react-router-dom";
import { HomePage } from './pages/home-page';
import { LabsPage } from './pages/labs-page';
import { LoginPage } from './pages/login-page';
import { SignUpPage } from './pages/signup-page';
import { LabPage } from './pages/lab-page';
import ProfilePage from './pages/profile-page/profile-page';
import { Page404 } from './pages/page404';

function App() {

  return (
    <main>
      <div className={styles.page}>
        <Header />
        <div className={styles.pageContent}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/labs" element={<LabsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/about' element={<div>About page</div>} />
            <Route path='/agency-services' element={<div>Agency Services</div>} />
            <Route path='/staff-services' element={<div>Staff Services</div>} />
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
