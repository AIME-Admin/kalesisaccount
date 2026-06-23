import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router";
import { BUSINESS, LOGO_SRC, LOGO_ALT } from "../config";

const navLinks = [
  { label: "Αρχική", href: "#hero" },
  { label: "Φόρμα", href: "#intake" },
  { label: "Βοηθός", href: "#assistant" },
  { label: "Υπηρεσίες", href: "#services" },
  { label: "Διαδικασία", href: "#process" },
  { label: "Επικοινωνία", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // href is a section hash like "#services". On the home page we smooth-scroll;
  // from another route we navigate home with the hash (ScrollManager scrolls).
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname === "/") {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/${href}`);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
          scrolled
            ? "bg-white/92 backdrop-blur-xl border-b border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            : "bg-white/70 backdrop-blur-md border-b border-transparent"
        }`}
        role="navigation"
        aria-label="Κύρια πλοήγηση"
      >
        <div className="container-main w-full flex items-center justify-between gap-4">
          {/* Logo + brand */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center gap-3 shrink-0 group"
            aria-label="Αρχική σελίδα — Λογιστικό Γραφείο Φίλιππος Καλέσης"
          >
            <img
              src={LOGO_SRC}
              alt={LOGO_ALT}
              width={40}
              height={40}
              className="w-10 h-10 shrink-0"
              loading="eager"
            />
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="text-[12px] font-medium tracking-wide uppercase text-[#64748B]">
                Λογιστικό Γραφείο
              </span>
              <span className="text-[15px] font-semibold text-[#111827]">
                Φίλιππος Καλέσης
              </span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm text-[#64748B] hover:text-[#111827] rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C1C]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right-side CTAs (desktop) */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#111827] hover:text-[#B91C1C] transition-colors px-2"
            >
              <Phone size={15} />
              <span className="font-mono-tabular">{BUSINESS.phoneDisplay}</span>
            </a>
            <a
              href="#intake"
              onClick={(e) => handleNavClick(e, "#intake")}
              className="btn-primary text-sm !px-5 !py-2.5"
            >
              Συμπληρώστε φόρμα
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-[#F8FAFC] transition-colors"
            aria-label={menuOpen ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-[72px] bg-white/97 backdrop-blur-xl lg:hidden"
          >
            <div className="container-main py-8 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 text-lg text-[#111827] hover:bg-[#F8FAFC] rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={BUSINESS.phoneHref}
                className="btn-secondary mt-4 justify-center"
              >
                <Phone size={16} />
                {BUSINESS.phoneDisplay}
              </a>
              <a
                href="#intake"
                onClick={(e) => handleNavClick(e, "#intake")}
                className="btn-primary text-center justify-center"
              >
                Συμπληρώστε φόρμα
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
