import { motion } from "framer-motion";
import {
  Building2,
  Rocket,
  Receipt,
  Users,
  Calculator,
  UserCheck,
  User,
  FileText,
  ArrowRight,
} from "lucide-react";
import { services } from "../data/services";

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Rocket,
  Receipt,
  Users,
  Calculator,
  UserCheck,
  User,
  FileText,
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: Math.min(i, 6) * 0.06 },
  }),
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[#F8FAFC] scroll-mt-20">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#B91C1C]">
            Υπηρεσίες
          </span>
          <h2 className="text-[#111827] mt-3">
            Υπηρεσίες λογιστικής και φοροτεχνικής υποστήριξης
          </h2>
          <p className="mt-4 text-[#64748B] leading-relaxed">
            Οι υπηρεσίες καλύπτουν βασικές ανάγκες επιχειρήσεων, επαγγελματιών
            και ιδιωτών, με έμφαση στην οργάνωση, τη συνέπεια και την καθαρή
            επικοινωνία.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {services.map((service, i) => {
            const IconComp = iconMap[service.icon] || FileText;
            return (
              <motion.article
                key={service.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                className="group relative bg-white border border-[#E5E7EB] rounded-2xl p-6 md:p-7 flex flex-col transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#FECACA] hover:shadow-[0_14px_40px_-18px_rgba(185,28,28,0.35)]"
              >
                {/* top accent bar */}
                <span className="absolute top-0 left-7 right-7 h-0.5 rounded-full bg-gradient-to-r from-[#B91C1C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="icon-circle-red mb-5">
                  <IconComp size={24} className="text-[#B91C1C]" />
                </div>
                <h3 className="text-[17px] font-semibold text-[#111827] mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {service.description}
                </p>
                <p className="text-[13px] text-[#64748B] leading-relaxed mt-3 pt-3 border-t border-dashed border-[#E5E7EB]">
                  {service.seoDetail}
                </p>
                <a
                  href="#intake"
                  className="btn-tertiary mt-5"
                  aria-label={`Στείλτε αίτημα για ${service.title}`}
                >
                  Στείλτε αίτημα
                  <ArrowRight size={14} />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
