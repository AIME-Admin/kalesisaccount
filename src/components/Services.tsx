import { motion } from "framer-motion";
import {
  FileText,
  Building2,
  Users,
  Sparkles,
  Receipt,
  UserCheck,
  ArrowRight,
} from "lucide-react";
import { services } from "../data/services";

const iconMap: Record<string, React.ElementType> = {
  FileText,
  Building2,
  Users,
  Sparkles,
  Receipt,
  UserCheck,
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[#F8FAFC]">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-[#111827]">
            Υπηρεσίες λογιστικής και φοροτεχνικής υποστήριξης
          </h2>
          <p className="mt-4 text-[#64748B] leading-relaxed">
            Καλύπτουμε τις βασικές ανάγκες επιχειρήσεων, επαγγελματιών και
            ιδιωτών με καθαρή διαδικασία και υπεύθυνη επικοινωνία.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {services.map((service, i) => {
            const IconComp = iconMap[service.icon] || FileText;
            return (
              <motion.div
                key={service.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={cardVariants}
                className="card-standard flex flex-col"
              >
                <div className="icon-circle-red mb-4">
                  <IconComp size={24} className="text-[#B91C1C]" />
                </div>
                <h3 className="text-[17px] font-semibold text-[#111827] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed flex-1">
                  {service.description}
                </p>
                <a
                  href="#intake"
                  className="btn-tertiary mt-4"
                  aria-label={`Στείλτε αίτημα για ${service.title}`}
                >
                  Στείλτε αίτημα
                  <ArrowRight size={14} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
