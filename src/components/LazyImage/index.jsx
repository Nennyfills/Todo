import React from "react";
import "./lazyImage.css";
import { useIntersectionObserver } from "./hooks";

/*
 * Image needs a ratio of 1:1 to fit the SVG placeholder.
 * This could be made configurable.
 */
const LazyImage = ({ src, alt, color = "#F3F5F7" }) => {
  const { intersectionRef, isIntersected } = useIntersectionObserver();
  const url = isIntersected ? src : "";

  return (
    <div className="lazy-image" data-testid="image">
      <div
        data-testid="image-holder"
        ref={intersectionRef}
        className="lazy-image_image"
        style={{ backgroundImage: `url("${url}")` }}
        aria-label={alt}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 1 1"
        data-testid="svg"
      >
        <rect fill={color} height="1" width="1" />
      </svg>
    </div>
  );
};

export default LazyImage;
