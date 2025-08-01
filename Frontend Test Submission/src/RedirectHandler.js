import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { incrementClick, getURLs } from './data/store';

export default function RedirectHandler() {
  const { shortcode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const all = getURLs();
    const match = all.find((e) => e.shortcode === shortcode);

    if (!match) {
      alert('Invalid shortcode!');
      return navigate('/');
    }

    const now = new Date();
    const expiry = new Date(match.expiresAt);

    if (now > expiry) {
      alert('Link expired!');
      return navigate('/');
    }

    incrementClick(shortcode, 'direct');
    window.location.href = match.original;
  }, [shortcode, navigate]);

  return null;
}
