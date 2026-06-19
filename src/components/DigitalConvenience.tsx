import { motion } from "framer-motion";
import { ClipboardList, Database, MessageCircle, Sparkles } from "lucide-react";

const cards = [
  {
    icon: ClipboardList,
    title: "Φόρμα ενδιαφέροντος",
    text: "Στέλνετε οργανωμένα το αίτημά σας.",
  },
  {
    icon: Database,
    title: "Google Sheets-ready καταγραφή",
    text: "Τα αιτήματα μπορούν να αποθηκεύονται σε οργανωμένο αρχείο για παρακολούθηση.",
  },
  {
    icon: MessageCircle,
    title: "Άμεση επαφή",
    text: "Το γραφείο μπορεί να επικοινωνήσει με βάση τα στοιχεία που δώσατε.",
  },
  {
    icon: Sparkles,
    title: "Έτοιμο για μελλοντική αυτοματοποίηση",
    text: "Η δομή μπορεί να επεκταθεί αργότερα με n8n και Google Drive workflow.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function DigitalConvenience() {
  return (
    <section className="section-padding bg-[#F8FAFC]">
      <div className="container-main max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-[#111827]">Πιο οργανωμένη αρχική επικοινωνία</h2>
          <p className="mt-4 text-[#64748B] leading-relaxed">
            Η φόρμα ενδιαφέροντος βοηθά στην καλύτερη καταγραφή της ανάγκης σας
            από την πρώτη επικοινωνία. Έτσι μειώνονται τα ασαφή μηνύματα, τα
            χαμένα στοιχεία και οι άσκοπες καθυστερήσεις.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              className="card-standard flex flex-col items-start"
            >
              <card.icon size={28} className="text-[#B91C1C] mb-4" />
              <h3 className="text-[15px] font-semibold text-[#111827] mb-1.5">
                {card.title}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
