import { useEffect } from "react";
import { SITE_URL, CANONICAL_URL, OG_IMAGE_URL, BUSINESS } from "../config";
import { services } from "../data/services";
import { assistantQuestions } from "../data/assistantQuestions";

const jsonLdAccountingService = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": `${SITE_URL}/#business`,
  name: BUSINESS.name,
  description:
    "Λογιστική και φοροτεχνική υποστήριξη για επιχειρήσεις, ελεύθερους επαγγελματίες και ιδιώτες.",
  telephone: BUSINESS.phoneIntl,
  email: BUSINESS.email,
  url: CANONICAL_URL,
  image: OG_IMAGE_URL,
  areaServed: BUSINESS.areaServed,
  openingHours: BUSINESS.hours.schema,
  priceRange: "€€",
  sameAs: [],
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.locality,
    postalCode: BUSINESS.address.postalCode,
    addressRegion: BUSINESS.address.region,
    addressCountry: BUSINESS.address.country,
  },
  founder: {
    "@type": "Person",
    name: BUSINESS.person,
    jobTitle: BUSINESS.jobTitle,
  },
  serviceType: services.map((s) => s.title),
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: BUSINESS.person,
  jobTitle: BUSINESS.jobTitle,
  worksFor: {
    "@type": "Organization",
    name: BUSINESS.name,
  },
  email: BUSINESS.email,
  telephone: BUSINESS.phoneIntl,
  url: CANONICAL_URL,
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: BUSINESS.name,
  url: CANONICAL_URL,
  inLanguage: "el-GR",
  description:
    "Λογιστικό γραφείο για επιχειρήσεις, ελεύθερους επαγγελματίες και ιδιώτες.",
  publisher: { "@id": `${SITE_URL}/#business` },
};

const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  name: "Λογιστικό Γραφείο Φίλιππος Καλέσης | Λογιστής - Φοροτεχνικός Α’ Τάξης",
  url: CANONICAL_URL,
  inLanguage: "el-GR",
  description:
    "Λογιστική υποστήριξη επιχειρήσεων, έναρξη δραστηριότητας, myDATA, μισθοδοσία και φορολογικές δηλώσεις.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#business` },
};

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
    const schemas = [
      { id: "schema-accounting", data: jsonLdAccountingService },
      { id: "schema-person", data: jsonLdPerson },
      { id: "schema-website", data: jsonLdWebSite },
      { id: "schema-webpage", data: jsonLdWebPage },
      { id: "schema-faq", data: jsonLdFAQ },
    ];

    schemas.forEach(({ id, data }) => {
      let script = document.getElementById(id) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.id = id;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    });

    return () => {
      schemas.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
    };
  }, []);

  return null;
}
