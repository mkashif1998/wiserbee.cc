import React from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnMount = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    const element = document.documentElement;
    const scrollOptions = {
      top: 0,
      left: 0,
      behavior: "instant" // Enable smooth scrolling behavior
    };
    element.scrollTo(scrollOptions);
  }, [pathname]);

  return null;
};

export default ScrollToTopOnMount;
