import { useEffect, useState } from "react";
import { Link } from "react-router";
import { GA_ID } from "../config";

const STORAGE_KEY = "kalesis-cookie-consent"; // "granted" | "denied"

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

function loadGtagScript(id: string) {
  if (document.getElementById("ga-gtag-src")) return;
  const s = document.createElement("script");
  s.id = "ga-gtag-src";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(s);
}

/**
 * GA4 with Google Consent Mode v2. Consent (analytics + ads) defaults to
 * "denied", so Google Analytics runs cookieless until the visitor accepts —
 * no analytics cookies are set without consent, in line with the Cookie Policy.
 * A lightweight banner lets the visitor accept or decline; the choice is stored.
 */
export default function ConsentBanner() {
  // Show the banner only when GA is configured and the user hasn't decided yet.
  const [visible, setVisible] = useState(
    () =>
      Boolean(GA_ID) &&
      typeof window !== "undefined" &&
      !window.localStorage.getItem(STORAGE_KEY)
  );

  useEffect(() => {
    if (!GA_ID) return;

    const stored = localStorage.getItem(STORAGE_KEY);

    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args: unknown[]) => {
      window.dataLayer.push(args);
    };

    // Consent Mode v2 — everything denied by default until the user opts in.
    window.gtag("consent", "default", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: stored === "granted" ? "granted" : "denied",
    });

    window.gtag("js", new Date());
    window.gtag("config", GA_ID);
    loadGtagScript(GA_ID);
  }, []);

  const decide = (granted: boolean) => {
    localStorage.setItem(STORAGE_KEY, granted ? "granted" : "denied");
    window.gtag?.("consent", "update", {
      analytics_storage: granted ? "granted" : "denied",
    });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Συγκατάθεση cookies"
      className="fixed z-50 bottom-4 left-4 right-4 sm:right-auto sm:left-6 sm:max-w-sm rounded-2xl bg-white border border-[#E5E7EB] shadow-[0_24px_60px_-15px_rgba(17,24,39,0.4)] p-5"
    >
      <p className="text-sm text-[#334155] leading-relaxed">
        Χρησιμοποιούμε cookies στατιστικών (Google Analytics) μόνο με τη
        συγκατάθεσή σας, για να βελτιώνουμε τον ιστότοπο. Δείτε την{" "}
        <Link to="/cookies" className="text-[#B91C1C] hover:underline">
          Πολιτική Cookies
        </Link>
        .
      </p>
      <div className="mt-4 flex gap-2.5">
        <button
          type="button"
          onClick={() => decide(true)}
          className="btn-primary text-sm flex-1 justify-center"
        >
          Αποδοχή
        </button>
        <button
          type="button"
          onClick={() => decide(false)}
          className="btn-secondary text-sm flex-1 justify-center"
        >
          Απόρριψη
        </button>
      </div>
    </div>
  );
}
