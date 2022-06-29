import { useState, useRef, useEffect } from "react";

export const useIntersectionObserver = (options = { rootMargin: "120px" }) => {
  const ref = useRef(null);
  const [isIntersected, setIsIntersected] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([element]) => {
      if (element.isIntersecting) {
        setIsIntersected(true);
        observer.disconnect();
      }
    }, options);
    if (ref?.current && ref.current instanceof HTMLDivElement)
      observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { intersectionRef: ref, isIntersected };
};
