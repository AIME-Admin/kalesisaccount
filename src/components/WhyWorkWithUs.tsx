import { motion } from "framer-motion";
import { MessageSquare, FolderKanban, CalendarCheck, Users } from "lucide-react";

const cards = [
  {
    icon: MessageSquare,
    title: "Καθαρή επικοινωνία",
    text: "Ενημέρωση σε απλή γλώσσα για τις υποχρεώσεις και τα επόμενα βήματα.",
  },
  {
    icon: FolderKanban,
    title: "Οργάνωση στοιχείων",
    text: "Συγκέντρωση και παρακολούθηση βασικών πληροφοριών με δομημένο τρόπο.",
  },
  {
    icon: CalendarCheck,
    title: "Συνέπεια στις προθεσμίες",
    text: "Υποστήριξη για φορολογικές και λογιστικές υποχρεώσεις με προσοχή στις ημερομηνίες.",
  },
  {
    icon: Users,
    title: "Υποστήριξη ανά ανάγκη",
    text: "Υπηρεσίες για ιδιώτες, επαγγελματίες, επιχειρήσεις και νέες δραστηριότητες.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function WhyWorkWithUs() {
  return (
    <section className="section-padding bg-[#F8FAFC] border-y border-[#E5E7EB]">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-[#111827]">
            Γιατί να συνεργαστείτε με το γραφείο
          </h2>
          <p className="mt-4 text-[#64748B] leading-relaxed">
            Η σωστή λογιστική συνεργασία δεν είναι μόνο η υποβολή δηλώσεων. Είναι
            η καθαρή επικοινωνία, η οργάνωση και η υπεύθυνη παρακολούθηση των
            υποχρεώσεων.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
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
              <div className="icon-circle-red mb-4">
                <card.icon size={24} className="text-[#B91C1C]" />
              </div>
              <h3 className="text-[17px] font-semibold text-[#111827] mb-2">
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
