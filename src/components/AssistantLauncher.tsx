import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare } from "lucide-react";

const MOBILE_QUERY = "(max-width: 640px)";
// Elements the launcher must not cover on mobile. We watch the actual form
// CARD (not the whole #intake section), the final CTA and the footer.
const RESERVED_IDS = ["intake-form-card", "final-cta", "contact"];

/**
 * Floating launcher that scrolls to the visible Βοηθός Συνεργασίας section.
 * Always visible on desktop/tablet. On mobile only, it hides while one of the
 * reserved elements is in view so it never covers the form card or footer CTAs.
 */
export default function AssistantLauncher() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY);
    const visible = new Set<Element>();
    let observer: IntersectionObserver | null = null;

    const setup = () => {
      observer?.disconnect();
      observer = null;
      visible.clear();

      // Desktop / tablet: never hide via the observer.
      if (!mql.matches) {
        setHidden(false);
        return;
      }

      const els = RESERVED_IDS.map((id) => document.getElementById(id)).filter(
        (el): el is HTMLElement => Boolean(el)
      );
      if (!els.length) {
        setHidden(false);
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) visible.add(entry.target);
            else visible.delete(entry.target);
          });
          setHidden(visible.size > 0);
        },
        // Only hide once the element occupies the lower part of the viewport
        // (where the launcher sits), not when it merely peeks in. This keeps the
        // launcher visible while the form-section intro is what's on screen.
        { threshold: 0, rootMargin: "0px 0px -35% 0px" }
      );
      els.forEach((el) => observer!.observe(el));
    };

    setup();
    mql.addEventListener("change", setup);
    return () => {
      mql.removeEventListener("change", setup);
      observer?.disconnect();
    };
  }, []);

  const goToAssistant = () => {
    document
      .getElementById("assistant")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.button
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 10 }}
          transition={{ duration: 0.2 }}
          onClick={goToAssistant}
          aria-label="Μετάβαση στον βοηθό συνεργασίας"
          className="fixed z-40 bottom-4 right-4 sm:bottom-6 sm:right-6 inline-flex items-center gap-2 rounded-full bg-[#B91C1C] text-white pl-4 pr-5 py-3 text-sm font-semibold shadow-[0_10px_30px_-8px_rgba(185,28,28,0.6)] hover:bg-[#991B1B] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B91C1C]"
        >
          <MessageSquare size={18} />
          Ρωτήστε μας
        </motion.button>
      )}
    </AnimatePresence>
  );
}
