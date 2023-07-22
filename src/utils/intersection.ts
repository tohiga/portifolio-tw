import { useEffect, useState } from 'react';

export const useIntersection = (
  element: React.MutableRefObject<HTMLDivElement | null>,
  rootMargin?: string,
  threshold = 0.1
) => {
  const [isVisible, setState] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin, threshold }
    );

    element?.current && observer.observe(element.current);

    return () => observer?.unobserve(element?.current as Element);
  }, [element, rootMargin, threshold]);

  return isVisible;
};
