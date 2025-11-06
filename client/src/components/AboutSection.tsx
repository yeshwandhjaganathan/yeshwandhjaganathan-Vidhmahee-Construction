import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Award, Users } from "lucide-react";
import teamImage from "@assets/generated_images/Construction_team_working_together_d27a28f4.png";
import qualityImage from "@assets/generated_images/Construction_quality_and_materials_16a32c95.png";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: Building2,
      title: "Quality Construction",
      description: "Durable and sustainable civil structures built to last"
    },
    {
      icon: Award,
      title: "Innovation Driven",
      description: "Cutting-edge techniques and materials for superior results"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals dedicated to excellence"
    }
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-background" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Vidhmahee Construction, based in Tiruchengode, specializes in durable and 
            sustainable civil structures. With a focus on quality and innovation, we shape 
            spaces that stand the test of time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-semibold text-foreground">
              Building Excellence Since Day One
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              At Vidhmahee Construction, we believe that every structure tells a story. 
              Our commitment to excellence is reflected in every project we undertake, 
              from residential buildings to commercial complexes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We combine traditional craftsmanship with modern technology to deliver 
              projects that exceed expectations. Our team of skilled engineers and 
              architects work closely with clients to bring their visions to life.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 pt-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-3">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="rounded-lg overflow-hidden shadow-lg col-span-2"
            >
              <img 
                src={teamImage} 
                alt="Construction team at work" 
                className="w-full h-64 object-cover"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="rounded-lg overflow-hidden shadow-lg col-span-2 sm:col-span-1"
            >
              <img 
                src={qualityImage} 
                alt="Quality construction materials" 
                className="w-full h-48 object-cover"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="rounded-lg overflow-hidden shadow-lg col-span-2 sm:col-span-1 bg-primary flex items-center justify-center p-6"
            >
              <div className="text-center text-white">
                <p className="text-5xl font-bold mb-2">10+</p>
                <p className="text-sm opacity-90">Years of Excellence</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
