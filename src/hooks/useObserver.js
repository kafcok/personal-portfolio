import { useEffect, useRef, useState } from "react";

export function useObserver(options) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry], observer) => {
      if (entry.isIntersecting) {
        setIsVisible(true);

        observer.unobserve(entry.target);
      }
    }, options);

    const current = ref.current;

    if (current) {
      observer.observe(current);
    }

    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible];
}
