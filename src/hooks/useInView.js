import { useEffect, useState } from 'react';

export const useInView = (ref, threshold = 0.15) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(node);

    return () => observer.unobserve(node);
  }, [ref, threshold]);

  return isInView;
};

export default useInView;
