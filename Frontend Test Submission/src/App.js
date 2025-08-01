import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Shortener from './pages/Shortener';
import Stats from './pages/Stats';
import RedirectHandler from './RedirectHandler';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Shortener />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/:shortcode" element={<RedirectHandler />} />
    </Routes>
  );
}
