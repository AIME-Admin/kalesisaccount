import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Phone,
  Mail,
  ClipboardList,
  Sparkles,
} from "lucide-react";
import {
  assistantCategories,
  assistantQuestions,
} from "../data/assistantQuestions";
import { BUSINESS } from "../config";

const DISCLAIMER =
  "Οι απαντήσεις είναι γενικής ενημέρωσης και δεν αποτελούν εξατομικευμένη φορολογική, λογιστική ή νομική συμβουλή.";

export default function AssistantPopup() {
  const [open, setOpen] = useState(false);
  const [catId, setCatId] = useState(assistantCategories[0].id);
  const [questionId, setQuestionId] = useState(
    assistantCategories[0].questions[0].id
  );
  // Hide the launcher over the form section and the footer so it never covers
  // the form CTA / embed or the contact & footer links (important on mobile).
  const [nearReserved, setNearReserved] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

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

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Allow other components (e.g. the hero teaser) to open the popup.
  useEffect(() => {
    const openHandler = () => setOpen(true);
    window.addEventListener("open-assistant", openHandler);
    return () => window.removeEventListener("open-assistant", openHandler);
  }, []);

  // Hide the launcher over the form, the final CTA and the footer so it never
  // covers their buttons / links (important on mobile).
  useEffect(() => {
    const ids = ["intake", "final-cta", "contact"];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;
    const visible = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        });
        setNearReserved(visible.size > 0);
      },
      { threshold: 0.01 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const goToForm = () => {
    setOpen(false);
    document.getElementById("intake")?.scrollIntoView({ behavior: "smooth" });
  };

  const widgetHidden = nearReserved && !open;

  return (
    <>
      {/* Crawlable Q&A for search engines (always in the DOM, not gated) */}
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

      {/* Launcher */}
      <AnimatePresence>
        {!open && !widgetHidden && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(true)}
            aria-label="Ανοίξτε τον βοηθό συνεργασίας"
            aria-expanded={open}
            className="fixed z-40 bottom-4 right-4 sm:bottom-6 sm:right-6 inline-flex items-center gap-2 rounded-full bg-[#B91C1C] text-white pl-4 pr-5 py-3 text-sm font-semibold shadow-[0_10px_30px_-8px_rgba(185,28,28,0.6)] hover:bg-[#991B1B] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B91C1C]"
          >
            <MessageSquare size={18} />
            Ρωτήστε μας
          </motion.button>
        )}
      </AnimatePresence>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-label="Βοηθός Συνεργασίας"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed z-50 bottom-4 right-4 left-4 sm:left-auto sm:bottom-6 sm:right-6 sm:w-[390px] max-h-[78vh] flex flex-col rounded-2xl bg-white border border-[#E5E7EB] shadow-[0_24px_60px_-15px_rgba(17,24,39,0.4)] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3.5 bg-[#172033] text-white shrink-0">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-[#B91C1C]/20 flex items-center justify-center">
                  <Sparkles size={16} className="text-[#F87171]" />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold">Βοηθός Συνεργασίας</p>
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-green-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    Γενική ενημέρωση
                  </span>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Κλείσιμο βοηθού"
                className="p-1.5 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-4 py-4">
              <p className="text-sm text-[#64748B] leading-relaxed">
                Βρείτε γρήγορες απαντήσεις για υπηρεσίες, διαδικασία συνεργασίας
                και επόμενα βήματα.
              </p>

              {/* Category chips */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {assistantCategories.map((cat) => {
                  const isActive = cat.id === catId;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => selectCategory(cat.id)}
                      aria-pressed={isActive}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C1C] ${
                        isActive
                          ? "bg-[#B91C1C] text-white"
                          : "bg-[#F1F5F9] text-[#475569] hover:bg-[#FEF2F2] hover:text-[#B91C1C]"
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>

              {/* Questions for active category */}
              <div className="mt-3 flex flex-col gap-1.5">
                {activeCat.questions.map((qa) => {
                  const isActive = qa.id === questionId;
                  return (
                    <button
                      key={qa.id}
                      onClick={() => setQuestionId(qa.id)}
                      aria-pressed={isActive}
                      className={`text-left rounded-lg px-3 py-2 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B91C1C] ${
                        isActive
                          ? "bg-[#FEF2F2] text-[#B91C1C] font-medium"
                          : "text-[#334155] hover:bg-[#F8FAFC]"
                      }`}
                    >
                      {qa.question}
                    </button>
                  );
                })}
              </div>

              {/* Answer */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeQuestion.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="mt-3 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] p-3.5"
                >
                  <p className="text-sm text-[#334155] leading-relaxed">
                    {activeQuestion.answer}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* CTAs */}
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  onClick={goToForm}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#B91C1C] text-white px-3 py-2 text-xs font-medium hover:bg-[#991B1B] transition-colors"
                >
                  <ClipboardList size={14} />
                  Συμπληρώστε φόρμα
                </button>
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5E7EB] text-[#334155] px-3 py-2 text-xs font-medium hover:border-[#B91C1C] hover:text-[#B91C1C] transition-colors"
                >
                  <Phone size={14} />
                  Καλέστε τώρα
                </a>
                <a
                  href={BUSINESS.emailHref}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5E7EB] text-[#334155] px-3 py-2 text-xs font-medium hover:border-[#B91C1C] hover:text-[#B91C1C] transition-colors"
                >
                  <Mail size={14} />
                  Στείλτε email
                </a>
              </div>

              {/* Disclaimer */}
              <p className="mt-4 text-[11px] text-[#94A3B8] leading-relaxed">
                {DISCLAIMER}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
