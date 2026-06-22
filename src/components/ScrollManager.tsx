import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * On route change: scroll to the hash target (e.g. navigating from /privacy to
 * /#services) or to the top of the page for a normal page change.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      // Wait a frame so the target route has rendered its sections.
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
