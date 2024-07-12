// src/components/ScrollNavigator.js
import React from 'react';
import { useNavigate , useLocation } from 'react-router-dom';

const ScrollNavigator = () => {
  const navigate  = useNavigate ();
  const location = useLocation();

  const handleScroll = (event) => {
    const delta = Math.sign(event.deltaY);

    if (delta > 0) {
      if (location.pathname === '/') {
        navigate('/about');
      }
      else if (location.pathname === '/about') {
        navigate('/projects');
      }
      else if (location.pathname === '/projects') {
        navigate('/contact');
      }
    } else if (delta < 0) {
      if (location.pathname === '/about') {
        navigate('/');
      } 
      else if (location.pathname === '/projects') {
        navigate('/about');
      } 
      else if (location.pathname === '/contact') {
        navigate('/projects');
      } 
    }
  };

  

  React.useEffect(() => {
    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [location]);

  return null;
};

export default ScrollNavigator;
