import { faqData } from '@/utils/constant';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; 
function FAQ({ staggerContainer, fadeInUp }: { staggerContainer: {}; fadeInUp: {} }) {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-card">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <motion.div
          variants={fadeInUp}
          className="inline-block px-4 py-1 rounded-full bg-chetwode text-white dark:text-white text-sm font-medium mb-4 shadow-sm"
        >
          Need Answers?
        </motion.div>
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold text-card-foreground mb-4"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-lg text-card-foreground/80"
        >
          Find quick answers to common inquiries about our services and processes.
        </motion.p>
      </motion.div>
  
      {/* FAQ Accordion */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="max-w-3xl mx-auto"
      >
        <Accordion type="single" collapsible className="w-full divide-y divide-border">
          {faqData.map((item, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="py-4 text-left text-base md:text-lg font-medium w-full transition-colors duration-300 ease-in-out hover:text-[color:var(--brand-gold)] hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 pt-1 text-foreground/80 text-sm md:text-base leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
  
  );
}

export default FAQ;
