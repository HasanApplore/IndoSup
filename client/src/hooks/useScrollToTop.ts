import { useCallback } from 'react';

export const useScrollToTop = () => {
  const scrollToTop = useCallback((behavior: ScrollBehavior = 'smooth') => {
    window.scrollTo({ top: 0, behavior });
  }, []);

  return scrollToTop;
};
