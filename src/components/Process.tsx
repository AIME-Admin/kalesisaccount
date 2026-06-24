import { motion } from "framer-motion";
import {
  ClipboardList,
  Search,
  PhoneCall,
  FolderCheck,
  Handshake,
} from "lucide-react";

const steps = [
  {
    num: 1,
    icon: ClipboardList,
    title: "Συμπληρώνετε τη φόρμα",
    desc: "Μας λέτε ποιος είστε, τι χρειάζεστε και αν υπάρχει κάποια προθεσμία.",
  },
  {
    num: 2,
    icon: Search,
    title: "Αξιολογούμε το αίτημα",
    desc: "Βλέπουμε τι αφορά, αν τρέχει προθεσμία και ποια στοιχεία θα χρειαστούν.",
  },
  {
    num: 3,
    icon: PhoneCall,
    title: "Επικοινωνούμε μαζί σας",
    desc: "Σας καλούμε για τις απαραίτητες διευκρινίσεις και σας λέμε πώς προχωράμε.",
  },
  {
    num: 4,
    icon: FolderCheck,
    title: "Συγκεντρώνουμε τα στοιχεία",
    desc: "Σας λέμε ακριβώς ποια δικαιολογητικά και στοιχεία χρειάζονται για την περίπτωσή σας.",
  },
  {
    num: 5,
    icon: Handshake,
    title: "Ξεκινάμε την υποστήριξη",
    desc: "Αναλαμβάνουμε τις υποχρεώσεις σας και είμαστε δίπλα σας σε ό,τι προκύψει.",
  },
];

const stepVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Process() {
  return (
    <section id="process" className="section-padding bg-white scroll-mt-20">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-xl mx-auto"
        >
          <h2 className="text-[#111827]">Πώς ξεκινά η συνεργασία</h2>
          <p className="mt-4 text-[#64748B] leading-relaxed">
            Λίγα, ξεκάθαρα βήματα — από το πρώτο μήνυμα μέχρι τη συνεχή
            υποστήριξη.
          </p>
        </motion.div>

        {/* Timeline - Desktop Horizontal */}
        <div className="hidden lg:block mt-16 max-w-5xl mx-auto">
          <div className="relative flex justify-between items-start px-[40px]">
            <div className="absolute top-7 left-[80px] right-[80px] h-0.5 bg-[#E5E7EB]" />
            <div className="absolute top-7 left-[80px] right-[80px] h-0.5 bg-gradient-to-r from-[#B91C1C] via-[#B91C1C]/60 to-[#E5E7EB]" />

            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={stepVariants}
                className="relative flex flex-col items-center text-center"
                style={{ width: 170 }}
              >
                <div className="w-14 h-14 rounded-full border-2 border-[#FECACA] bg-[#FEF2F2] flex items-center justify-center z-10 shadow-[0_4px_12px_rgba(185,28,28,0.12)]">
                  <step.icon size={22} className="text-[#B91C1C]" />
                </div>
                <span className="mt-3 inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#111827] text-white text-xs font-semibold">
                  {step.num}
                </span>
                <h3 className="mt-3 text-[15px] font-semibold text-[#111827] max-w-[150px]">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm text-[#64748B] max-w-[160px] leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline - Mobile Vertical */}
        <div className="lg:hidden mt-12 max-w-md mx-auto relative">
          <div className="absolute left-7 top-2 bottom-2 w-0.5 bg-[#E5E7EB]" />
          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={stepVariants}
                className="relative flex items-start gap-5"
              >
                <div className="w-14 h-14 rounded-full border-2 border-[#FECACA] bg-[#FEF2F2] flex items-center justify-center shrink-0 z-10">
                  <step.icon size={22} className="text-[#B91C1C]" />
                </div>
                <div className="pt-1">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#111827] text-white text-[11px] font-semibold">
                      {step.num}
                    </span>
                    <h3 className="text-[15px] font-semibold text-[#111827]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-1.5 text-sm text-[#64748B] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
