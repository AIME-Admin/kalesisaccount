import { useEffect } from "react";
import { GA_ID, GTM_ID } from "../config";

/**
 * Loads Google Analytics 4 and/or Google Tag Manager — but only when an id is
 * configured via .env (VITE_GA_ID / VITE_GTM_ID). With no ids set, nothing is
 * injected, so there is zero analytics/tracking overhead by default.
 */
export default function Analytics() {
  useEffect(() => {
    if (GA_ID && !document.getElementById("ga4-src")) {
      const s = document.createElement("script");
      s.id = "ga4-src";
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
        GA_ID
      )}`;
      document.head.appendChild(s);

      const inline = document.createElement("script");
      inline.id = "ga4-init";
      inline.textContent = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`;
      document.head.appendChild(inline);
    }

    if (GTM_ID && !document.getElementById("gtm-src")) {
      const inline = document.createElement("script");
      inline.id = "gtm-src";
      inline.textContent = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`;
      document.head.appendChild(inline);

      // GTM <noscript> fallback, built with DOM methods (no innerHTML).
      const noscript = document.createElement("noscript");
      noscript.id = "gtm-noscript";
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.googletagmanager.com/ns.html?id=${encodeURIComponent(
        GTM_ID
      )}`;
      iframe.height = "0";
      iframe.width = "0";
      iframe.style.display = "none";
      iframe.style.visibility = "hidden";
      noscript.appendChild(iframe);
      document.body.prepend(noscript);
    }
  }, []);

  return null;
}
