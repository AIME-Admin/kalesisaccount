import { motion } from "framer-motion";
import {
  ClipboardList,
  MessageCircle,
  ShieldCheck,
  Send,
  Mail,
  ArrowRight,
  User,
  Building2,
  FileText,
  ChevronRight,
} from "lucide-react";

const trustBadges = [
  { icon: ClipboardList, text: "Δομημένη καταγραφή αιτήματος" },
  { icon: MessageCircle, text: "Άμεση επικοινωνία" },
  { icon: ShieldCheck, text: "Υποστήριξη επιχειρήσεων & ιδιωτών" },
  { icon: Send, text: "Ψηφιακή αποστολή στοιχείων" },
];

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-[72px] flex flex-col items-center justify-center bg-white"
    >
      <div className="container-main py-16 md:py-20 flex flex-col items-center text-center">
        {/* Overline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: easeOut }}
          className="mb-6"
        >
          <span className="badge-red">Λογιστικό Γραφείο</span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
          className="max-w-3xl text-[#111827]"
        >
          Οργανωμένη λογιστική υποστήριξη για επιχειρήσεις, επαγγελματίες και
          ιδιώτες
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: easeOut }}
          className="mt-5 max-w-2xl text-lg text-[#64748B] leading-relaxed"
        >
          Σύγχρονες λογιστικές και φοροτεχνικές υπηρεσίες με καθαρή επικοινωνία,
          δομημένη καταγραφή αιτήματος και υπεύθυνη καθοδήγηση.
        </motion.p>

        {/* CTA Group */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: easeOut }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#intake" className="btn-primary">
            Συμπληρώστε φόρμα ενδιαφέροντος
            <ArrowRight size={18} />
          </a>
          <a href="tel:+306980144612" className="btn-secondary">
            Καλέστε τώρα
          </a>
          <a
            href="mailto:kalesisacc@gmail.com"
            className="btn-tertiary mt-2 sm:mt-0"
          >
            <Mail size={16} />
            Στείλτε email
          </a>
        </motion.div>

        {/* Hero Visual Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: easeOut }}
          className="mt-14 w-full max-w-xl"
        >
          <div className="relative bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-5 md:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            {/* Red accent dot */}
            <div className="absolute top-4 left-4 w-2.5 h-2.5 rounded-full bg-[#B91C1C]" />

            <div className="ml-6 flex flex-col gap-3">
              {/* Mock form rows */}
              <div className="flex items-center gap-3 bg-white border border-[#E5E7EB] rounded-lg px-4 py-3">
                <User size={16} className="text-[#94A3B8] shrink-0" />
                <span className="text-sm text-[#94A3B8]">Ονοματεπώνυμο</span>
              </div>
              <div className="flex items-center gap-3 bg-white border border-[#E5E7EB] rounded-lg px-4 py-3">
                <Building2 size={16} className="text-[#94A3B8] shrink-0" />
                <span className="text-sm text-[#94A3B8]">Τύπος πελάτη</span>
                <ChevronRight
                  size={14}
                  className="text-[#CBD5E1] ml-auto shrink-0"
                />
              </div>
              <div className="flex items-center gap-3 bg-white border border-[#E5E7EB] rounded-lg px-4 py-3">
                <FileText size={16} className="text-[#94A3B8] shrink-0" />
                <span className="text-sm text-[#94A3B8]">Υπηρεσία</span>
                <ChevronRight
                  size={14}
                  className="text-[#CBD5E1] ml-auto shrink-0"
                />
              </div>
              <div className="flex items-center gap-3 bg-[#FEF2F2] border border-[#FECACA] rounded-lg px-4 py-3">
                <Send size={16} className="text-[#B91C1C] shrink-0" />
                <span className="text-sm font-medium text-[#B91C1C]">
                  Αποστολή αιτήματος
                </span>
                <ArrowRight
                  size={14}
                  className="text-[#B91C1C] ml-auto shrink-0"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: easeOut }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
        >
          {trustBadges.map((badge) => (
            <div
              key={badge.text}
              className="flex items-center gap-2 text-sm text-[#64748B]"
            >
              <badge.icon size={18} />
              <span>{badge.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
