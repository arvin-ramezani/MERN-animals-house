import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

interface ScrollPosition {
  x: number;
  y: number;
}

const useScrollToTop = (): void => {
  const history = useHistory();

  useEffect(() => {
    const scrollPositions: Record<string, ScrollPosition> = {};

    const handleScroll = (): void => {
      const { pathname } = history.location;

      scrollPositions[pathname] = {
        x: window.pageXOffset,
        y: window.pageYOffset,
      };
    };

    window.addEventListener('scroll', handleScroll);

    const unsubscribeFromHistory = history.listen((location, action) => {
      const { pathname, search } = location;

      //   prevent scrolling on search query changes
      if (action === 'PUSH' && search) return;

      if (action === 'POP' && scrollPositions[pathname]) {
        const { x, y } = scrollPositions[pathname];
        window.scrollTo(x, y);
      } else {
        window.scrollTo(0, 0);
        window.history.scrollRestoration = 'manual';
      }
    });

    return (): void => {
      window.removeEventListener('scroll', handleScroll);
      unsubscribeFromHistory();
    };
  }, [history]);
};

export default useScrollToTop;
