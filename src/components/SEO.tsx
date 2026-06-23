import { useEffect } from "react";
import { SITE_URL } from "../config";
import { assistantQuestions } from "../data/assistantQuestions";

// Core business schema (AccountingService, Person, WebSite, WebPage) is rendered
// statically in index.html so it is present in the initial HTML. Here we inject
// only the FAQPage, which is generated from the assistant Q&A data and matches
// the visible Βοηθός Συνεργασίας section.
const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: assistantQuestions.map((qa) => ({
    "@type": "Question",
    name: qa.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: qa.answer,
    },
  })),
};

export default function SEO() {
  useEffect(() => {
    const id = "schema-faq";
    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLdFAQ);

    return () => {
      document.getElementById(id)?.remove();
    };
  }, []);

  return null;
}
