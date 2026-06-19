import { useEffect } from "react";

const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "Λογιστικό Γραφείο Φιλιππός Καλέσης",
  telephone: "+306980144612",
  email: "kalesisacc@gmail.com",
  url: "https://kalesis-accounting.gr",
  areaServed: "Ελλάδα",
  sameAs: [],
  address: {
    "@type": "PostalAddress",
    addressLocality: "[ΠΕΡΙΟΧΗ]",
    addressCountry: "GR",
  },
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Φιλιππός Καλέσης",
  jobTitle: "Λογιστής / Φοροτεχνικός",
  worksFor: {
    "@type": "Organization",
    name: "Λογιστικό Γραφείο Φιλιππός Καλέσης",
  },
  email: "kalesisacc@gmail.com",
  telephone: "+306980144612",
};

const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ποιες υπηρεσίες προσφέρει το λογιστικό γραφείο;",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Το γραφείο προσφέρει φορολογικές δηλώσεις, λογιστική υποστήριξη επιχειρήσεων, μισθοδοσία, έναρξη επιχείρησης, υποστήριξη σε myDATA και φοροτεχνική καθοδήγηση για ιδιώτες και επαγγελματίες.",
      },
    },
    {
      "@type": "Question",
      name: "Γιατί να συμπληρώσω τη φόρμα ενδιαφέροντος;",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Η φόρμα βοηθά το γραφείο να καταγράψει από την αρχή τα βασικά στοιχεία, την υπηρεσία που σας ενδιαφέρει και τυχόν προθεσμία. Έτσι η πρώτη επικοινωνία μπορεί να γίνει πιο οργανωμένα.",
      },
    },
    {
      "@type": "Question",
      name: "Μπορώ να στείλω τα στοιχεία μου ηλεκτρονικά;",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ναι, μπορείτε να ξεκινήσετε με τη φόρμα ενδιαφέροντος ή με email. Για συγκεκριμένα έγγραφα, το γραφείο θα σας καθοδηγήσει σχετικά με τον κατάλληλο τρόπο αποστολής.",
      },
    },
    {
      "@type": "Question",
      name: "Αναλαμβάνετε νέες επιχειρήσεις;",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ναι, υπάρχει δυνατότητα υποστήριξης για έναρξη δραστηριότητας και αρχική λογιστική οργάνωση, ανάλογα με τις ανάγκες της περίπτωσης.",
      },
    },
    {
      "@type": "Question",
      name: "Παρέχετε υπηρεσίες μισθοδοσίας;",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ναι, το γραφείο μπορεί να υποστηρίξει επιχειρήσεις σε βασικές διαδικασίες μισθοδοσίας και εργασιακών θεμάτων.",
      },
    },
    {
      "@type": "Question",
      name: "Ο ψηφιακός βοηθός δίνει φορολογική συμβουλή;",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Όχι. Ο ψηφιακός βοηθός παρέχει μόνο γενικές πληροφορίες για τις υπηρεσίες και τη διαδικασία συνεργασίας. Δεν αντικαθιστά εξατομικευμένη λογιστική ή φορολογική καθοδήγηση.",
      },
    },
    {
      "@type": "Question",
      name: "Πώς μπορώ να κλείσω ραντεβού;",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Μπορείτε να καλέσετε στο +30 698 014 4612, να στείλετε email στο kalesisacc@gmail.com ή να συμπληρώσετε τη φόρμα ενδιαφέροντος.",
      },
    },
    {
      "@type": "Question",
      name: "Τα στοιχεία που στέλνω χρησιμοποιούνται για κάτι άλλο;",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Τα στοιχεία χρησιμοποιούνται αποκλειστικά για την επικοινωνία σχετικά με το αίτημά σας και την αξιολόγηση της ανάγκης σας από το γραφείο.",
      },
    },
  ],
};

export default function SEO() {
  useEffect(() => {
    const schemas = [jsonLdLocalBusiness, jsonLdPerson, jsonLdFAQ];
    const scriptIds = ["schema-localbusiness", "schema-person", "schema-faq"];

    schemas.forEach((schema, i) => {
      let script = document.getElementById(scriptIds[i]) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.id = scriptIds[i];
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    });

    return () => {
      scriptIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) document.head.removeChild(el);
      });
    };
  }, []);

  return null;
}
