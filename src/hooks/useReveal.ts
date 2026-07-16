import { useEffect, useRef } from "react";

interface UseRevealOptions {
  rootMargin?: string;
  threshold?: number;
}

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseRevealOptions = {},
) {
  const ref = useRef<T | null>(null);
  const { rootMargin = "0px 0px -8% 0px", threshold = 0.12 } = options;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      node.classList.add("is-visible");
      return;
    }

    const reveal = () => {
      node.classList.add("is-visible");
    };

    const rect = node.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;

    if (inView) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.unobserve(node);
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return ref;
}
