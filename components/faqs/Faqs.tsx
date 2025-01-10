import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Faqs } from "@/constant/faqs";
import styles from "./faq.module.css";
import { FiPlus } from "react-icons/fi";
import { cn } from "@/lib/utils";

export default function FAQs() {
  return (
    <section
      className='my-container !gap-y-0 mt-4
    '
    >
      {/* Section Header */}
      <header className={styles.headline}>
        <h2 className={styles.heading}>Frequently Asked Questions</h2>
      </header>

      {/* FAQ Accordion */}
      <div className={styles["faq-wrapper"]}>
        <Accordion type='single' collapsible defaultValue='item-1'>
          {Faqs.map((faq, index) => (
            <AccordionItem
              key={faq.id || index} // Use `id` if available, fallback to `index`
              value={`item-${index + 1}`}
              className={cn(
                "pb-[2.063rem] border-b-2 w-full",
                index === 0 ? "mt-0" : "mt-[3rem]"
              )}
            >
              <AccordionTrigger className='md:text-[25px] text-xl pb-2 font-light hover:no-underline flex justify-between items-center'>
                {faq.question}
                <FiPlus
                  className='group-data-[state=open]:rotate-45 transition-transform duration-300 text-[#696969]'
                  size={40}
                />
              </AccordionTrigger>
              <AccordionContent className='pt-2 text-lg max-w-[90%] transition-opacity duration-[400ms] ease-[cubic-bezier(0.40,0.00,0.20,1.00)]'>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
