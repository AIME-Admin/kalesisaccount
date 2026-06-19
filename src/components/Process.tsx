import { motion } from "framer-motion";

const steps = [
  {
    num: 1,
    title: "Συμπληρώνετε τη φόρμα",
    desc: "Στέλνετε τα βασικά στοιχεία και την υπηρεσία που σας ενδιαφέρει.",
  },
  {
    num: 2,
    title: "Γίνεται αρχική αξιολόγηση",
    desc: "Το γραφείο βλέπει το αίτημα και καταγράφει τα βασικά επόμενα βήματα.",
  },
  {
    num: 3,
    title: "Υπάρχει επικοινωνία",
    desc: "Ο Φιλιππός Καλέσης επικοινωνεί μαζί σας για διευκρινίσεις ή οδηγίες.",
  },
  {
    num: 4,
    title: "Συγκεντρώνονται τα απαραίτητα στοιχεία",
    desc: "Λαμβάνετε καθοδήγηση για τα έγγραφα και τις πληροφορίες που χρειάζονται.",
  },
  {
    num: 5,
    title: "Ξεκινά η υποστήριξη",
    desc: "Η συνεργασία συνεχίζεται με βάση την υπηρεσία και τις ανάγκες σας.",
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
    <section id="process" className="section-padding bg-white">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-xl mx-auto"
        >
          <h2 className="text-[#111827]">Πώς λειτουργεί η διαδικασία</h2>
          <p className="mt-4 text-[#64748B] leading-relaxed">
            Απλή καταγραφή, καθαρά βήματα και επικοινωνία από το γραφείο.
          </p>
        </motion.div>

        {/* Timeline - Desktop Horizontal */}
        <div className="hidden lg:block mt-14 max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="relative flex justify-between items-start px-[40px]">
            <div className="absolute top-5 left-[40px] right-[40px] h-0.5 bg-[#E5E7EB]" />
            <div className="absolute top-5 left-[40px] right-[40px] h-0.5 bg-gradient-to-r from-[#B91C1C] to-[#B91C1C]/20" />

            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={stepVariants}
                className="relative flex flex-col items-center text-center"
                style={{ width: 160 }}
              >
                <div
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-semibold bg-white z-10 ${
                    i <= 2
                      ? "border-[#B91C1C] text-[#B91C1C] bg-[#FEF2F2]"
                      : "border-[#E5E7EB] text-[#64748B]"
                  }`}
                >
                  {step.num}
                </div>
                <h4 className="mt-4 text-[15px] font-semibold text-[#111827] max-w-[140px]">
                  {step.title}
                </h4>
                <p className="mt-1.5 text-sm text-[#64748B] max-w-[160px] leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline - Mobile Vertical */}
        <div className="lg:hidden mt-12 max-w-md mx-auto relative">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-[#E5E7EB]" />
          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={stepVariants}
                className="relative flex items-start gap-5 pl-1"
              >
                <div
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-semibold bg-white shrink-0 z-10 ${
                    i <= 2
                      ? "border-[#B91C1C] text-[#B91C1C] bg-[#FEF2F2]"
                      : "border-[#E5E7EB] text-[#64748B]"
                  }`}
                >
                  {step.num}
                </div>
                <div>
                  <h4 className="text-[15px] font-semibold text-[#111827]">
                    {step.title}
                  </h4>
                  <p className="mt-1 text-sm text-[#64748B] leading-relaxed">
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
