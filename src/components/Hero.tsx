import { motion } from "framer-motion";
import {
  ClipboardList,
  MessageCircle,
  Building2,
  ShieldCheck,
  Mail,
  ArrowRight,
  Phone,
  Check,
  Clock,
  BadgeCheck,
} from "lucide-react";
import { BUSINESS, LOGO_SRC, LOGO_ALT } from "../config";

const trustBadges = [
  { icon: ClipboardList, text: "Δομημένη καταγραφή αιτήματος" },
  { icon: MessageCircle, text: "Άμεση επικοινωνία" },
  { icon: Building2, text: "Υποστήριξη επιχειρήσεων & ιδιωτών" },
  { icon: ShieldCheck, text: "Γενική ενημέρωση χωρίς υπερβολές" },
];

const highlights = [
  "Λογιστική υποστήριξη επιχειρήσεων",
  "myDATA & ηλεκτρονική τιμολόγηση",
  "Μισθοδοσία & εργασιακά",
  "Φορολογικές δηλώσεις & φοροτεχνικά",
];

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

function scrollToId(e: React.MouseEvent, id: string) {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
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
            <span className="badge-red">Λογιστικό Γραφείο · Αχαρνές</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
            className="mt-6 text-[#111827]"
          >
            Λογιστικό Γραφείο Φίλιππος Καλέσης στις Αχαρνές
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: easeOut }}
            className="mt-5 max-w-xl mx-auto lg:mx-0 text-lg text-[#475569] leading-relaxed"
          >
            Λογιστική και φοροτεχνική υποστήριξη για επιχειρήσεις, ελεύθερους
            επαγγελματίες και ιδιώτες: λογιστική παρακολούθηση, φορολογικές
            δηλώσεις, έναρξη επιχείρησης, myDATA και μισθοδοσία — με επικεφαλής
            τον Φίλιππο Καλέση, Λογιστή - Φοροτεχνικό Α’ Τάξης.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: easeOut }}
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3"
          >
            <a
              href="#intake"
              onClick={(e) => scrollToId(e, "intake")}
              className="btn-primary"
            >
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

        {/* Right: credentials / profile card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.45, ease: easeOut }}
          className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto"
        >
          <div className="rounded-2xl bg-white border border-[#E5E7EB] shadow-[0_20px_50px_-20px_rgba(17,24,39,0.25)] overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-[#172033] to-[#111827] text-white">
              <span className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                <img
                  src={LOGO_SRC}
                  alt={LOGO_ALT}
                  width={48}
                  height={48}
                  className="w-12 h-12"
                  loading="eager"
                />
              </span>
              <div className="min-w-0">
                <p className="text-lg font-semibold leading-tight">
                  {BUSINESS.person}
                </p>
                <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-[#CBD5E1]">
                  <BadgeCheck size={15} className="text-[#F87171] shrink-0" />
                  {BUSINESS.jobTitle}
                </p>
              </div>
            </div>

            {/* Highlights */}
            <ul className="p-6 flex flex-col gap-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#FEF2F2] flex items-center justify-center shrink-0">
                    <Check size={14} className="text-[#B91C1C]" />
                  </span>
                  <span className="text-sm text-[#334155]">{h}</span>
                </li>
              ))}
            </ul>

            {/* Footer: hours + phone */}
            <div className="px-6 py-4 border-t border-[#F1F5F9] bg-[#FBFAF8] flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 text-sm text-[#64748B]">
                <Clock size={15} className="text-[#B91C1C]" />
                {BUSINESS.hours.display}
              </span>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#B91C1C] hover:underline font-mono-tabular"
              >
                <Phone size={14} />
                {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
