import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  MessageCircle,
  Building2,
  ShieldCheck,
  Mail,
  ArrowRight,
  Phone,
  Sparkles,
  CornerDownRight,
} from "lucide-react";
import { BUSINESS, LOGO_SRC, LOGO_ALT } from "../config";
import { assistantQuestions } from "../data/assistantQuestions";

const trustBadges = [
  { icon: ClipboardList, text: "Δομημένη καταγραφή αιτήματος" },
  { icon: MessageCircle, text: "Άμεση επικοινωνία" },
  { icon: Building2, text: "Υποστήριξη επιχειρήσεων & ιδιωτών" },
  { icon: ShieldCheck, text: "Γενική ενημέρωση χωρίς υπερβολές" },
];

// A small, curated set of starter questions for the hero teaser.
const starterIds = [
  "services-overview",
  "start-how",
  "docs-tax-return",
  "next-first-step",
];
const starters = starterIds
  .map((id) => assistantQuestions.find((q) => q.id === id))
  .filter((q): q is NonNullable<typeof q> => Boolean(q));

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

function scrollToId(e: React.MouseEvent, id: string) {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = starters.find((q) => q.id === activeId) ?? null;

  return (
    <section
      id="hero"
      className="relative pt-[72px] overflow-hidden bg-gradient-to-b from-[#FBFAF8] to-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-10%] w-[480px] h-[480px] rounded-full bg-[#FEF2F2] blur-3xl opacity-60"
      />

      <div className="container-main relative py-16 md:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: easeOut }}
          >
            <span className="badge-red">Λογιστικό Γραφείο</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
            className="mt-6 text-[#111827]"
          >
            Οργανωμένη λογιστική και φοροτεχνική υποστήριξη για επιχειρήσεις,
            επαγγελματίες και ιδιώτες
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: easeOut }}
            className="mt-5 max-w-xl mx-auto lg:mx-0 text-lg text-[#64748B] leading-relaxed"
          >
            Υποστηρίζουμε επιχειρήσεις, επαγγελματίες και ιδιώτες με καθαρή
            επικοινωνία, δομημένη καταγραφή αιτήματος και υπεύθυνη φοροτεχνική
            καθοδήγηση.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: easeOut }}
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3"
          >
            <a href="#intake" onClick={(e) => scrollToId(e, "intake")} className="btn-primary">
              Συμπληρώστε φόρμα ενδιαφέροντος
              <ArrowRight size={18} />
            </a>
            <a href={BUSINESS.phoneHref} className="btn-secondary">
              <Phone size={16} />
              Καλέστε τώρα
            </a>
            <a href={BUSINESS.emailHref} className="btn-tertiary">
              <Mail size={16} />
              Στείλτε email
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: easeOut }}
            className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2.5"
          >
            {trustBadges.map((badge) => (
              <li
                key={badge.text}
                className="flex items-center gap-2 text-sm text-[#475569]"
              >
                <badge.icon size={17} className="text-[#B91C1C] shrink-0" />
                <span>{badge.text}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Right: interactive assistant teaser */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.45, ease: easeOut }}
          className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto"
        >
          <div className="rounded-2xl bg-white border border-[#E5E7EB] shadow-[0_20px_50px_-20px_rgba(17,24,39,0.25)] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#F1F5F9] bg-[#FBFAF8]">
              <div className="flex items-center gap-2.5">
                <span className="w-9 h-9 rounded-full bg-[#FEF2F2] flex items-center justify-center shrink-0">
                  <img src={LOGO_SRC} alt={LOGO_ALT} width={24} height={24} className="w-6 h-6" loading="eager" />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-[#111827]">
                    Βοηθός Συνεργασίας
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#16A34A]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                    Γενική ενημέρωση
                  </span>
                </div>
              </div>
              <Sparkles size={18} className="text-[#B91C1C]" />
            </div>

            {/* Conversation */}
            <div className="px-5 py-5 min-h-[150px] flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#FEF2F2] flex items-center justify-center shrink-0">
                  <img src={LOGO_SRC} alt="" width={18} height={18} className="w-[18px] h-[18px]" />
                </span>
                <p className="rounded-2xl rounded-tl-sm bg-[#F8FAFC] border border-[#E5E7EB] px-4 py-2.5 text-sm text-[#334155]">
                  Καλωσορίσατε. Πώς μπορούμε να βοηθήσουμε;
                </p>
              </div>

              <AnimatePresence mode="wait">
                {active && (
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: easeOut }}
                    className="flex flex-col gap-3"
                  >
                    <p className="self-end max-w-[85%] rounded-2xl rounded-tr-sm bg-[#B91C1C] text-white px-4 py-2.5 text-sm">
                      {active.question}
                    </p>
                    <div className="flex items-start gap-2.5">
                      <span className="w-7 h-7 rounded-full bg-[#FEF2F2] flex items-center justify-center shrink-0">
                        <img src={LOGO_SRC} alt="" width={18} height={18} className="w-[18px] h-[18px]" />
                      </span>
                      <p className="rounded-2xl rounded-tl-sm bg-[#F8FAFC] border border-[#E5E7EB] px-4 py-2.5 text-sm text-[#334155] leading-relaxed">
                        {active.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick replies */}
            <div className="px-5 pb-4">
              <p className="text-[11px] font-medium tracking-wide uppercase text-[#94A3B8] mb-2.5">
                Γρήγορες ερωτήσεις
              </p>
              <div className="flex flex-wrap gap-2">
                {starters.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => setActiveId(activeId === q.id ? null : q.id)}
                    aria-pressed={activeId === q.id}
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C1C] ${
                      activeId === q.id
                        ? "border-[#B91C1C] bg-[#FEF2F2] text-[#B91C1C]"
                        : "border-[#E5E7EB] text-[#475569] hover:border-[#FECACA] hover:text-[#B91C1C]"
                    }`}
                  >
                    {q.question}
                  </button>
                ))}
              </div>
            </div>

            {/* Footer link */}
            <a
              href="#assistant"
              onClick={(e) => scrollToId(e, "assistant")}
              className="flex items-center justify-center gap-1.5 border-t border-[#F1F5F9] px-5 py-3 text-sm font-medium text-[#B91C1C] hover:bg-[#FEF2F2] transition-colors"
            >
              <CornerDownRight size={15} />
              Δείτε όλες τις ερωτήσεις του βοηθού
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
