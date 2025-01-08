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
    <section className={styles.container}>
      <div className={styles.headline}>
        <div>
          <h2 className={styles.heading}>Frequently asked questions</h2>
        </div>
      </div>
      <div className={styles["faq-wrapper"]}>
        <Accordion type='single' collapsible>
          {Faqs.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item- ${i + 1}`}
              className={cn(
                " pb-[2.063rem] border-b-2 mt-[3rem] w-full",
                i === 0 && "mt-0"
              )}
            >
              <AccordionTrigger className=' text-[25px] pb-2  font-light hover:no-underline '>
                {item.question}
                <span>
                  <FiPlus
                    className='group-data-[state=open]:rotate-45 transition-all duration-300 text-[#696969] '
                    size={40}
                  />
                </span>
              </AccordionTrigger>
              <AccordionContent className=' pt-2 overflow-hidden transition-opacity duration-[400ms] ease-[cubic-bezier(0.40,0.00,0.20,1.00)]  opacity-100 delay-200 text-lg max-w-[90%]'>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
