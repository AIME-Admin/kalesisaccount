import { Phone, Mail, MapPin, Clock } from "lucide-react";

const quickLinks = [
  { label: "Αρχική", href: "#hero" },
  { label: "Υπηρεσίες", href: "#services" },
  { label: "Φόρμα", href: "#intake" },
  { label: "Βοηθός", href: "#assistant" },
  { label: "Διαδικασία", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Επικοινωνία", href: "#contact" },
];

const legalLinks = [
  "Πολιτική Απορρήτου",
  "Πολιτική Cookies",
  "Όροι Χρήσης",
];

export default function Footer() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-[#172033] text-white">
      <div className="container-main pt-16 pb-8">
        {/* Top Area */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left: Brand + Contact */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <img
                src="/src/assets/logo.png"
                alt="Λογιστικό Γραφείο Φιλιππός Καλέσης - Λογότυπο"
                className="w-10 h-10 rounded-full"
                loading="lazy"
              />
              <div>
                <p className="font-semibold text-white">
                  Λογιστικό Γραφείο Φιλιππός Καλέσης
                </p>
                <p className="text-sm text-[#94A3B8]">Φιλιππός Καλέσης</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2.5">
              <a
                href="tel:+306980144612"
                className="flex items-center gap-2.5 text-sm text-[#94A3B8] hover:text-white transition-colors"
              >
                <Phone size={14} />
                <span className="font-mono-tabular">+30 698 014 4612</span>
              </a>
              <a
                href="mailto:kalesisacc@gmail.com"
                className="flex items-center gap-2.5 text-sm text-[#94A3B8] hover:text-white transition-colors"
              >
                <Mail size={14} />
                <span>kalesisacc@gmail.com</span>
              </a>
              <div className="flex items-center gap-2.5 text-sm text-[#64748B]">
                <MapPin size={14} />
                <span>[ΠΕΡΙΟΧΗ / ΔΙΕΥΘΥΝΣΗ]</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#64748B]">
                <Clock size={14} />
                <span>[ΩΡΕΣ ΛΕΙΤΟΥΡΓΙΑΣ]</span>
              </div>
            </div>
          </div>

          {/* Right: Links */}
          <div className="flex flex-wrap gap-12 lg:gap-16">
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">
                Σύνδεσμοι
              </h4>
              <div className="flex flex-col gap-2.5">
                {quickLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-[#94A3B8] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Νομικά</h4>
              <div className="flex flex-col gap-2.5">
                {legalLinks.map((label) => (
                  <span
                    key={label}
                    className="text-sm text-[#64748B] cursor-default"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.08] my-8" />

        {/* Bottom */}
        <div>
          <p className="text-xs text-[#64748B] max-w-2xl leading-relaxed">
            Οι πληροφορίες του website και του ψηφιακού βοηθού είναι γενικής
            ενημέρωσης και δεν αντικαθιστούν εξατομικευμένη λογιστική ή
            φορολογική συμβουλή.
          </p>
          <p className="text-xs text-[#64748B] mt-2">
            © 2026 Λογιστικό Γραφείο Φιλιππός Καλέσης. Με επιφύλαξη παντός
            δικαιώματος.
          </p>
        </div>
      </div>
    </footer>
  );
}
