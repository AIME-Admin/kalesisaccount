import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Sparkles,
  Phone,
  Mail,
  ClipboardList,
} from "lucide-react";
import { assistantQuestions } from "../data/assistantQuestions";

export default function FAQAssistant() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeQA = assistantQuestions.find((q) => q.id === activeId);

  return (
    <section
      id="assistant"
      className="section-padding bg-[#172033] text-white"
    >
      <div className="container-main flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-14 h-14 rounded-full bg-[#B91C1C]/15 flex items-center justify-center">
              <Bot size={32} className="text-[#B91C1C]" />
            </div>
            <Sparkles size={24} className="text-[#B91C1C]" />
          </div>
          <h2 className="text-white">Ρωτήστε τον ψηφιακό βοηθό</h2>
          <p className="mt-4 text-[#94A3B8] leading-relaxed">
            Ο βοηθός απαντά σε βασικές ερωτήσεις για τις υπηρεσίες και τη
            διαδικασία συνεργασίας. Για εξατομικευμένη καθοδήγηση, χρειάζεται
            επικοινωνία με το γραφείο.
          </p>
        </motion.div>

        {/* Chat Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-10 w-full max-w-2xl rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm overflow-hidden"
        >
          {/* Chat Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-2.5">
              <Bot size={20} className="text-[#B91C1C]" />
              <span className="text-sm font-medium text-white/90">
                Ψηφιακός βοηθός γραφείου
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/15 px-2.5 py-0.5 text-xs text-green-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Γενική ενημέρωση
            </span>
          </div>

          {/* Question Chips */}
          <div className="px-5 py-5">
            <p className="text-xs text-[#64748B] mb-3">
              Επιλέξτε μια ερώτηση:
            </p>
            <div className="flex flex-wrap gap-2">
              {assistantQuestions.map((qa) => (
                <button
                  key={qa.id}
                  onClick={() =>
                    setActiveId(activeId === qa.id ? null : qa.id)
                  }
                  className={`inline-flex items-center rounded-full border px-4 py-2 text-sm transition-all duration-200 ${
                    activeId === qa.id
                      ? "border-[#B91C1C] bg-[#B91C1C]/20 text-white"
                      : "border-white/10 bg-white/[0.06] text-white/90 hover:bg-white/10 hover:border-[#B91C1C]/50"
                  }`}
                  aria-expanded={activeId === qa.id}
                >
                  {qa.question}
                </button>
              ))}
            </div>
          </div>

          {/* Answer Area */}
          <AnimatePresence mode="wait">
            {activeQA && (
              <motion.div
                key={activeQA.id}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5">
                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.06] p-4">
                    <p className="text-sm text-white/90 leading-relaxed">
                      {activeQA.answer}
                    </p>

                    {/* CTAs */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
                      className="flex flex-wrap gap-2 mt-4"
                    >
                      <a
                        href="#intake"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-[#B91C1C] text-white px-3 py-1.5 text-xs font-medium hover:bg-[#991B1B] transition-colors"
                      >
                        <ClipboardList size={13} />
                        Συμπληρώστε φόρμα
                      </a>
                      <a
                        href="tel:+306980144612"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.15] text-white/90 px-3 py-1.5 text-xs font-medium hover:bg-white/[0.08] transition-colors"
                      >
                        <Phone size={13} />
                        Καλέστε τώρα
                      </a>
                      <a
                        href="mailto:kalesisacc@gmail.com"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.15] text-white/90 px-3 py-1.5 text-xs font-medium hover:bg-white/[0.08] transition-colors"
                      >
                        <Mail size={13} />
                        Στείλτε email
                      </a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Disclaimer */}
          <div className="border-t border-white/[0.08] px-5 py-3">
            <p className="text-xs text-[#64748B] leading-relaxed">
              Οι απαντήσεις είναι γενικής ενημέρωσης και δεν αποτελούν
              εξατομικευμένη φορολογική, λογιστική ή νομική συμβουλή. Για την
              περίπτωσή σας, επικοινωνήστε με το γραφείο.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
