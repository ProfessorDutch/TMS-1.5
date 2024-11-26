import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Support from './pages/Support';
import Contact from './pages/Contact';
import DonationPage from './pages/DonationPage';
import CareerPaths from './pages/CareerPaths';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import GoogleMapsLoader from './components/GoogleMapsLoader';
import JoinMovement from './pages/JoinMovement';
import BusinessSupport from './pages/BusinessSupport';
import BusinessDirectory from './pages/BusinessDirectory';
import ClaimBusiness from './pages/ClaimBusiness';
import Assets from './pages/Assets';
import ChurchFinderPage from './pages/ChurchFinderPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-patriot-cream to-white">
        <Header />
        <GoogleMapsLoader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<DonationPage />} />
          <Route path="/careers" element={<CareerPaths />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/join-movement" element={<JoinMovement />} />
          <Route path="/business-support" element={<BusinessSupport />} />
          <Route path="/business-directory" element={<BusinessDirectory />} />
          <Route path="/claim-business" element={<ClaimBusiness />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/church-finder" element={<ChurchFinderPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}