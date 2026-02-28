import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    const savedPosition = sessionStorage.getItem(
      `scroll-${location.pathname}`
    );

    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition));
    }

    const handleScroll = () => {
      sessionStorage.setItem(
        `scroll-${location.pathname}`,
        window.scrollY.toString()
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  return null;
};

export default ScrollRestoration;