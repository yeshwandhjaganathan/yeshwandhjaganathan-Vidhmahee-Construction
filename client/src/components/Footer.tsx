import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import companyLogo from "@assets/generated_images/Construction_company_logo_design_336a5c92.png";

export function Footer() {
  const socialLinks = [
    { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" }
  ];

  return (
    <footer id="contact" className="bg-primary text-primary-foreground" data-testid="section-contact">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={companyLogo} 
                alt="Vidhmahee Construction" 
                className="h-12 w-12 object-contain brightness-0 invert"
              />
              <div>
                <h3 className="text-xl font-bold">Vidhmahee Construction</h3>
                <p className="text-sm text-primary-foreground/80">Quality Beyond Concrete</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Building dreams with strength and precision. Your trusted partner for 
              quality construction in Tiruchengode and surrounding areas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-primary-foreground/80">
                    Tiruchengode, Namakkal District<br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a 
                    href="tel:+919750172873" 
                    className="text-primary-foreground/80 hover:text-white transition-colors"
                    data-testid="link-phone"
                  >
                    +91 97501 72873,+91 98436 87273
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href="mailto:vidhmaheeconstruction@gmail.com" 
                    className="text-primary-foreground/80 hover:text-white transition-colors"
                    data-testid="link-email"
                  >
                    vidhmaheeconstruction@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-6">Follow Us</h3>
            <p className="text-primary-foreground/80 mb-6">
              Stay connected with us on social media for updates on our latest projects and news.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                  className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-all hover-elevate"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80">
            &copy; {new Date().getFullYear()} Vidhmahee Construction. All rights reserved.
             <a 
                    href="https://yeshwandhjs-portfolio.netlify.app/" 
                    className="text-primary-foreground/80 hover:text-white transition-colors"
                    data-testid="link-email"
                  >
                        &copy; {} Designd by YESHWANDH J S
                  </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
