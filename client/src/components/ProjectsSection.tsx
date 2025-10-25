import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar } from "lucide-react";
import residentialImg from "@assets/generated_images/Completed_residential_building_project_bdb3a80f.png";
import commercialImg from "@assets/generated_images/Commercial_complex_building_eed3e149.png";
import villaImg from "@assets/generated_images/Modern_villa_project_6c58f311.png";

const projects = [
  {
    title: "Residential Building",
    location: "Tiruchengode",
    year: "2024",
    image: residentialImg,
    description: "Modern residential complex with sustainable design"
  },
  {
    title: "Commercial Complex",
    location: "Namakkal",
    year: "2023",
    image: commercialImg,
    description: "Multi-purpose commercial space with contemporary architecture"
  },
  {
    title: "Villa Project",
    location: "Erode",
    year: "2022",
    image: villaImg,
    description: "Luxury villa with premium finishes and landscaping"
  }
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" ref={ref} className="py-20 bg-muted/30" data-testid="section-projects">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcasing our commitment to excellence through completed works
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              data-testid={`project-card-${index}`}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md hover-elevate"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <p className="text-white text-sm">
                    {project.description}
                  </p>
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-golden transition-all duration-300 rounded-lg pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
