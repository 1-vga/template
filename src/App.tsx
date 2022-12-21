import React from 'react';
import './css/main.scss';
import styles from './App.module.scss';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { HomePage } from './pages/home-page';
import { LabsPage } from './pages/labs-page';

function App() {

  return (
    <main>
      <div className={styles.page}>
        <Header />
        <div className={styles.pageContent}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/labs" element={<LabsPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default App;
