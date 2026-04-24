import { useNavigate } from 'react-router-dom';

export const useSafeNavigation = () => {
  const navigate = useNavigate();

  const safeNavigate = (path) => {
    try {
      console.log(`Navigating to: ${path}`);
      navigate(path);
    } catch (error) {
      console.error('Navigation failed:', error);
    }
  };

  return { safeNavigate };
};
