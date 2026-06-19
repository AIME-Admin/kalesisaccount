import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Αρχική", href: "#hero" },
  { label: "Υπηρεσίες", href: "#services" },
  { label: "Φόρμα", href: "#intake" },
  { label: "Βοηθός", href: "#assistant" },
  { label: "Διαδικασία", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
          scrolled
            ? "bg-white/92 backdrop-blur-xl border-b border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            : "bg-transparent border-b border-transparent"
        }`}
        role="navigation"
        aria-label="Κύρια πλοήγηση"
      >
        <div className="container-main w-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center gap-3 shrink-0"
            aria-label="Αρχική σελίδα"
          >
            <img
              src="/src/assets/logo.png"
              alt="Λογιστικό Γραφείο Φιλιππός Καλέσης - Λογότυπο"
              className="w-10 h-10 rounded-full"
              loading="eager"
            />
            <span className="hidden sm:inline font-semibold text-[15px] text-[#111827]">
              Λογιστικό Γραφείο Φιλιππός Καλέσης
            </span>
            <span className="sm:hidden font-semibold text-sm text-[#111827]">
              Φ. Καλέσης
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm text-[#64748B] hover:text-[#111827] rounded-lg transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#intake"
              onClick={(e) => handleNavClick(e, "#intake")}
              className="btn-primary text-sm ml-2 !px-5 !py-2.5"
            >
              Φόρμα
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
            className="fixed inset-0 z-40 pt-[72px] bg-white/97 backdrop-blur-xl"
          >
            <div className="container-main py-8 flex flex-col gap-2">
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
                href="#intake"
                onClick={(e) => handleNavClick(e, "#intake")}
                className="btn-primary text-center mt-4"
              >
                Συμπληρώστε φόρμα ενδιαφέροντος
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
