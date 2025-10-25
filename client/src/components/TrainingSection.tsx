import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Practical site visits with real-world exposure",
  "Mentorship from experienced engineers",
  "Certificate of Completion upon finishing",
  "Hands-on project-based learning",
  "Technical guidance and support"
];

export function TrainingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="training" ref={ref} className="py-20 bg-muted/30" data-testid="section-training">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Training & Internships
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-8 md:p-12"
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center">
            At Vidhmahee Constructions, we provide hands-on construction training and 
            internship programs for engineering students. Our sessions include real-site 
            exposure, technical guidance, and project-based learning.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center pt-6 border-t border-border"
          >
            <p className="text-muted-foreground mb-6">
              Ready to gain practical construction experience? Join our training program today.
            </p>
            <a href="mailto:vidhmaheeconstructions@gmail.com?subject=Training%20and%20Internship%20Inquiry">
              <Button
                size="lg"
                data-testid="button-join-training"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base"
              >
                <Mail className="w-5 h-5 mr-2" />
                Join Now
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
