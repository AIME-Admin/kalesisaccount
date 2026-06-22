import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS, LOGO_SRC, LOGO_ALT } from "../config";

const quickLinks = [
  { label: "Αρχική", href: "#hero" },
  { label: "Φόρμα", href: "#intake" },
  { label: "Υπηρεσίες", href: "#services" },
  { label: "Βοηθός", href: "#assistant" },
  { label: "Διαδικασία", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Επικοινωνία", href: "#contact" },
];

const legalLinks = ["Πολιτική Απορρήτου", "Πολιτική Cookies", "Όροι Χρήσης"];

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
    <footer id="contact" className="bg-[#172033] text-white scroll-mt-20">
      <div className="container-main pt-16 pb-8">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Brand + contact */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0">
                <img
                  src={LOGO_SRC}
                  alt={LOGO_ALT}
                  width={30}
                  height={30}
                  className="w-[30px] h-[30px]"
                  loading="lazy"
                />
              </span>
              <div>
                <p className="font-semibold text-white">{BUSINESS.name}</p>
                <p className="text-sm text-[#94A3B8]">{BUSINESS.person}</p>
              </div>
            </div>

            <p className="mt-3 text-sm text-[#94A3B8]">{BUSINESS.jobTitle}</p>

            <div className="mt-6 flex flex-col gap-2.5">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-2.5 text-sm text-[#94A3B8] hover:text-white transition-colors"
              >
                <Phone size={14} />
                <span className="font-mono-tabular">
                  {BUSINESS.phoneDisplay}
                </span>
              </a>
              <a
                href={BUSINESS.emailHref}
                className="flex items-center gap-2.5 text-sm text-[#94A3B8] hover:text-white transition-colors"
              >
                <Mail size={14} />
                <span>{BUSINESS.email}</span>
              </a>
              <a
                href={BUSINESS.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-[#94A3B8] hover:text-white transition-colors"
              >
                <MapPin size={14} />
                <span>{BUSINESS.address.display}</span>
              </a>
              <div className="flex items-center gap-2.5 text-sm text-[#64748B]">
                <Clock size={14} />
                <span>[ΩΡΕΣ ΛΕΙΤΟΥΡΓΙΑΣ]</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-12 lg:gap-16">
            <nav aria-label="Σύνδεσμοι footer">
              <h3 className="text-sm font-semibold text-white mb-4">
                Σύνδεσμοι
              </h3>
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
            </nav>
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Νομικά</h3>
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

        <div className="h-px bg-white/[0.08] my-8" />

        <div>
          <p className="text-xs text-[#64748B] max-w-3xl leading-relaxed">
            Οι πληροφορίες του website και του ψηφιακού βοηθού είναι γενικής
            ενημέρωσης και δεν αντικαθιστούν εξατομικευμένη λογιστική ή
            φορολογική συμβουλή. Μη στέλνετε κωδικούς πρόσβασης μέσω φόρμας ή
            email.
          </p>
          <p className="text-xs text-[#64748B] mt-2">
            © {new Date().getFullYear()} {BUSINESS.name}. Με επιφύλαξη παντός
            δικαιώματος.
          </p>
        </div>
      </div>
    </footer>
  );
}
