import { motion } from "framer-motion";
import { Mail, Instagram, Phone, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="relative overflow-hidden px-6 py-32">
      {/* Subtle gradient transition from sections above */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/0 to-transparent" />

      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm uppercase tracking-widest text-muted-foreground"
        >
          Get in Touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 text-4xl font-bold tracking-tight md:text-6xl"
        >
          Let's Work Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-14 text-lg text-muted-foreground"
        >
          Available for bookings and collaborations. Reach out and let's create
          something beautiful.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-6"
        >
          <a
            href="mailto:hello@yourdomain.com"
            className="group flex items-center gap-3 text-xl font-medium text-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-5 w-5" />
            hello@yourdomain.com
            <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>

          <div className="flex items-center gap-8">
            <a
              href="https://www.instagram.com/njomoproductions254/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Instagram className="h-5 w-5" />
              @njomoproductions254
            </a>
            <a
              href="tel:+13106580519"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="h-5 w-5" />
              3106580519
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-16 h-px w-32 origin-center bg-border"
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 text-xs text-muted-foreground"
        >
          © {new Date().getFullYear()} Elvis Njomo. All rights reserved.
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
