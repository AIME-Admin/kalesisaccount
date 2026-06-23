import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Phone, Mail, ClipboardList, MessageSquare } from "lucide-react";
import {
  assistantCategories,
  assistantQuestions,
} from "../data/assistantQuestions";
import { BUSINESS } from "../config";

export default function AssistantSection() {
  const [catId, setCatId] = useState(assistantCategories[0].id);
  const [questionId, setQuestionId] = useState(
    assistantCategories[0].questions[0].id
  );

  const activeCat =
    assistantCategories.find((c) => c.id === catId) ?? assistantCategories[0];
  const activeQuestion =
    assistantQuestions.find((q) => q.id === questionId) ??
    activeCat.questions[0];

  const selectCategory = (id: string) => {
    const cat = assistantCategories.find((c) => c.id === id);
    if (!cat) return;
    setCatId(id);
    setQuestionId(cat.questions[0].id);
  };

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

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-12 max-w-5xl mx-auto rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm overflow-hidden shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]"
        >
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.08]">
            <span className="text-sm font-semibold text-white/90">
              Βοηθός Συνεργασίας
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/15 px-2.5 py-1 text-xs text-green-300">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Γενική ενημέρωση
            </span>
          </div>

          {/* Category chips */}
          <div className="px-5 pt-5 flex flex-wrap gap-1.5">
            {assistantCategories.map((cat) => {
              const isActive = cat.id === catId;
              return (
                <button
                  key={cat.id}
                  onClick={() => selectCategory(cat.id)}
                  aria-pressed={isActive}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F87171] ${
                    isActive
                      ? "bg-[#B91C1C] text-white"
                      : "bg-white/[0.06] text-white/75 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            {/* Questions */}
            <div className="p-5 lg:border-r border-white/[0.08] flex flex-col gap-1.5">
              {activeCat.questions.map((qa) => {
                const isActive = qa.id === questionId;
                return (
                  <button
                    key={qa.id}
                    onClick={() => setQuestionId(qa.id)}
                    aria-pressed={isActive}
                    className={`flex items-center gap-2.5 text-left rounded-lg px-3 py-2.5 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F87171] ${
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

            {/* Answer + CTAs */}
            <div className="p-5 md:p-7 bg-white/[0.02] flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeQuestion.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-1"
                >
                  <h3 className="text-lg font-semibold text-white leading-snug">
                    {activeQuestion.question}
                  </h3>
                  <p className="mt-3 text-[15px] text-white/80 leading-relaxed">
                    {activeQuestion.answer}
                  </p>
                </motion.div>
              </AnimatePresence>

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

      {/* Crawlable Q&A for search engines */}
      <div className="sr-only">
        <h2>Συχνές ερωτήσεις — Βοηθός Συνεργασίας</h2>
        <dl>
          {assistantQuestions.map((qa) => (
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
