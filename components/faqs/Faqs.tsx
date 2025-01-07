import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Faqs } from "@/constant/faqs";
import styles from "./faq.module.css";
import { FiPlus } from "react-icons/fi";

export default function FAQs() {
  return (
    <div className='my-container'>
      <section className={styles["faq-wrapper"]}>
        <div className={styles.headline}>
          <div>
            <h2 className={styles.heading}>Frequently asked questions</h2>
          </div>
        </div>

        <Accordion type='single' collapsible className=' '>
          {Faqs.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item- ${i + 1}`}
              className=' pb-[3rem] border-b mb-[3rem] w-full'
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
      </section>
    </div>
  );
}
