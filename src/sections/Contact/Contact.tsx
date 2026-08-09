import { ArrowUpRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

import { Container, ContactForm } from '@/components/ui';
import { contactContent } from '@/data/contact';

function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-[var(--border)] py-28 lg:py-36"
    >
      <Container>
        {/* Header */}
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]"
            >
              {contactContent.eyebrow}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-5 font-heading text-4xl font-bold leading-tight tracking-[-0.035em] text-[var(--text-primary)] sm:text-5xl lg:text-6xl"
            >
              {contactContent.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-7 max-w-lg text-base leading-8 text-[var(--text-secondary)]"
            >
              {contactContent.description}
            </motion.p>

            {/* Email */}
            <motion.a
              href={`mailto:${contactContent.email}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="group mt-9 inline-flex items-center gap-3 text-sm font-semibold text-[var(--text-primary)]"
            >
              <Mail
                size={18}
                className="text-[var(--accent)]"
              />

              {contactContent.email}

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.a>

            {/* Socials */}
            <div className="mt-10 flex flex-wrap gap-5">
              {contactContent.socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                >
                  {social.label}
                </a>
              ))}
            </div>

            {/* Resume */}
            <a
              href={contactContent.resume.href}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center gap-2 border-b border-[var(--border)] pb-2 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--accent)]"
            >
              {contactContent.resume.label}

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;