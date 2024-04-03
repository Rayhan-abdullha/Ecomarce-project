import { useEffect } from 'react';

export const useScrollToTop = () => {
  useEffect(() => {
    const handleScroll = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    window.addEventListener('click', handleScroll);
    return () => {
      window.removeEventListener('click', handleScroll);
    };
  }, []);
};
