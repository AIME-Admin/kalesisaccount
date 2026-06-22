import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Phone, Mail, ClipboardList, MessageSquare } from "lucide-react";
import { assistantCategories, assistantQuestions } from "../data/assistantQuestions";
import { BUSINESS, LOGO_SRC, LOGO_ALT } from "../config";

const allQuestions = assistantQuestions;

export default function FAQAssistant() {
  const [activeId, setActiveId] = useState<string>(allQuestions[0].id);
  const activeQA =
    allQuestions.find((q) => q.id === activeId) ?? allQuestions[0];

  return (
    <section
      id="assistant"
      className="section-padding bg-[#172033] text-white scroll-mt-20"
    >
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/10 px-3 py-1 text-xs font-medium tracking-wide text-white/80">
            <Sparkles size={14} className="text-[#F87171]" />
            Βοηθός Συνεργασίας
          </span>
          <h2 className="text-white mt-5">Ρωτήστε τον βοηθό συνεργασίας</h2>
          <p className="mt-4 text-[#94A3B8] leading-relaxed">
            Βρείτε γρήγορες απαντήσεις για τις υπηρεσίες, τη διαδικασία
            συνεργασίας και τα επόμενα βήματα. Για εξατομικευμένη φορολογική ή
            λογιστική καθοδήγηση, επικοινωνούμε απευθείας μαζί σας.
          </p>
        </motion.div>

        {/* Assistant card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-12 max-w-5xl mx-auto rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm overflow-hidden shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]"
        >
          {/* Card header bar */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
                <img src={LOGO_SRC} alt={LOGO_ALT} width={22} height={22} className="w-[22px] h-[22px]" loading="lazy" />
              </span>
              <span className="text-sm font-semibold text-white/90">
                Βοηθός Συνεργασίας
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/15 px-2.5 py-1 text-xs text-green-300">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Γενική ενημέρωση
            </span>
          </div>

          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            {/* Left: categorized questions */}
            <div className="p-5 md:p-6 lg:border-r border-white/[0.08] max-h-none lg:max-h-[560px] lg:overflow-y-auto">
              <div className="flex flex-col gap-6">
                {assistantCategories.map((cat) => (
                  <div key={cat.id}>
                    <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#64748B] mb-2.5">
                      {cat.label}
                    </p>
                    <div className="flex flex-col gap-1.5">
                      {cat.questions.map((qa) => {
                        const isActive = qa.id === activeId;
                        return (
                          <button
                            key={qa.id}
                            onClick={() => setActiveId(qa.id)}
                            aria-pressed={isActive}
                            className={`flex items-center gap-2.5 text-left rounded-lg px-3 py-2.5 text-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F87171] ${
                              isActive
                                ? "bg-[#B91C1C] text-white shadow-[0_4px_14px_rgba(185,28,28,0.4)]"
                                : "text-white/75 hover:text-white hover:bg-white/[0.06]"
                            }`}
                          >
                            <MessageSquare
                              size={15}
                              className={`shrink-0 ${
                                isActive ? "text-white" : "text-[#64748B]"
                              }`}
                            />
                            <span>{qa.question}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: answer panel */}
            <div className="p-5 md:p-7 bg-white/[0.02] flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeQA.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-1"
                >
                  <h3 className="text-lg font-semibold text-white leading-snug">
                    {activeQA.question}
                  </h3>
                  <p className="mt-3 text-[15px] text-white/80 leading-relaxed">
                    {activeQA.answer}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* CTAs */}
              <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-white/[0.08]">
                <a
                  href="#intake"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#B91C1C] text-white px-3.5 py-2 text-xs font-medium hover:bg-[#991B1B] transition-colors"
                >
                  <ClipboardList size={14} />
                  Συμπληρώστε φόρμα
                </a>
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.15] text-white/90 px-3.5 py-2 text-xs font-medium hover:bg-white/[0.08] transition-colors"
                >
                  <Phone size={14} />
                  Καλέστε τώρα
                </a>
                <a
                  href={BUSINESS.emailHref}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.15] text-white/90 px-3.5 py-2 text-xs font-medium hover:bg-white/[0.08] transition-colors"
                >
                  <Mail size={14} />
                  Στείλτε email
                </a>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="border-t border-white/[0.08] px-5 py-3.5">
            <p className="text-xs text-[#64748B] leading-relaxed">
              Οι απαντήσεις είναι γενικής ενημέρωσης και δεν αποτελούν
              εξατομικευμένη φορολογική, λογιστική ή νομική συμβουλή.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Crawlable Q&A for search engines (kept in DOM, not interaction-gated) */}
      <div className="sr-only">
        <h2>Συχνές ερωτήσεις προς τον βοηθό συνεργασίας</h2>
        <dl>
          {allQuestions.map((qa) => (
            <div key={qa.id}>
              <dt>{qa.question}</dt>
              <dd>{qa.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
