import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building, Ruler, Wrench, FileText, ClipboardList } from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Civil Construction",
    description: "Complete construction services from foundation to finishing, ensuring quality and durability in every project."
  },
  {
    icon: Ruler,
    title: "Structural Design",
    description: "Professional structural engineering and design services using latest software and industry best practices."
  },
  {
    icon: Wrench,
    title: "Renovation Works",
    description: "Expert renovation and remodeling services to transform existing structures with modern aesthetics."
  },
  {
    icon: FileText,
    title: "Architectural Consultation",
    description: "Comprehensive architectural planning and consultation to bring your vision to life effectively."
  },
  {
    icon: ClipboardList,
    title: "Project Planning",
    description: "Detailed project planning and management to ensure timely delivery within budget constraints."
  }
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="services" ref={ref} className="py-20 bg-background" data-testid="section-services">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive construction solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              data-testid={`service-card-${index}`}
              className="group bg-white rounded-lg p-8 shadow-sm border border-border hover-elevate active-elevate-2 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6 pt-6 border-t border-border/50">
                <div className="flex items-center text-sm text-primary font-medium group-hover:gap-2 transition-all">
                  <span>Learn more</span>
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="group-hover:opacity-100"
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
