import { motion } from "framer-motion";
import {
  ClipboardList,
  MessageCircle,
  Building2,
  ShieldCheck,
  Mail,
  ArrowRight,
  Phone,
  FileText,
  CheckCircle2,
} from "lucide-react";
import { BUSINESS } from "../config";

const trustBadges = [
  { icon: ClipboardList, text: "Δομημένη καταγραφή αιτήματος" },
  { icon: MessageCircle, text: "Άμεση επικοινωνία" },
  { icon: Building2, text: "Υποστήριξη επιχειρήσεων & ιδιωτών" },
  { icon: ShieldCheck, text: "Γενική ενημέρωση χωρίς υπερβολές" },
];

const previewRows = [
  { icon: Building2, label: "Τύπος πελάτη", value: "Επιχείρηση" },
  { icon: FileText, label: "Υπηρεσία", value: "Λογιστική υποστήριξη" },
  { icon: MessageCircle, label: "Επόμενο βήμα", value: "Επικοινωνία από το γραφείο" },
];

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-[72px] overflow-hidden bg-gradient-to-b from-[#FBFAF8] to-white"
    >
      {/* Soft brand glow */}
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
            Ο Φίλιππος Καλέσης, {BUSINESS.jobTitle}, υποστηρίζει επιχειρήσεις,
            επαγγελματίες και ιδιώτες με καθαρή επικοινωνία, δομημένη καταγραφή
            αιτήματος και υπεύθυνη καθοδήγηση.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: easeOut }}
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3"
          >
            <a href="#intake" className="btn-primary">
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

          {/* Trust chips */}
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

        {/* Right: smart intake preview card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.45, ease: easeOut }}
          className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto"
        >
          <div className="relative rounded-2xl bg-white border border-[#E5E7EB] shadow-[0_20px_50px_-20px_rgba(17,24,39,0.25)] p-6 md:p-7">
            {/* Card header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B91C1C]" />
                <span className="text-sm font-semibold text-[#111827]">
                  Νέο αίτημα
                </span>
              </div>
              <span className="badge-red !text-xs !py-0.5">
                Φόρμα ενδιαφέροντος
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {previewRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center gap-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl px-4 py-3"
                >
                  <span className="w-8 h-8 rounded-lg bg-white border border-[#E5E7EB] flex items-center justify-center shrink-0">
                    <row.icon size={15} className="text-[#B91C1C]" />
                  </span>
                  <span className="text-xs text-[#94A3B8]">{row.label}</span>
                  <span className="ml-auto text-sm font-medium text-[#111827] text-right">
                    {row.value}
                  </span>
                </div>
              ))}

              <div className="flex items-center gap-2 mt-1 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] px-4 py-3">
                <CheckCircle2 size={17} className="text-[#16A34A] shrink-0" />
                <span className="text-sm font-medium text-[#15803D]">
                  Έτοιμο για αποστολή στο γραφείο
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
