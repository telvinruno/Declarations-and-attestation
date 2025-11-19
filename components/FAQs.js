import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQs() {
  return (

  <Accordion type="single" collapsible className="w-250">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it anonymous?</AccordionTrigger>
    <AccordionContent>
      Yes.
    </AccordionContent>
  </AccordionItem>

    <AccordionItem value="item-1">
    <AccordionTrigger>Is it anonymous?</AccordionTrigger>
    <AccordionContent>
      Yes 100%.
    </AccordionContent>
  </AccordionItem>

    <AccordionItem value="item-1">
    <AccordionTrigger>Is it anonymous?</AccordionTrigger>
    <AccordionContent>
      Yup.
    </AccordionContent>
  </AccordionItem>

    <AccordionItem value="item-1">
    <AccordionTrigger>Is it anonymous?</AccordionTrigger>
    <AccordionContent>
      100000%.
    </AccordionContent>
  </AccordionItem>

    <AccordionItem value="item-1">
    <AccordionTrigger>Is it anonymous?</AccordionTrigger>
    <AccordionContent>
      Try it!.
    </AccordionContent>
  </AccordionItem>
</Accordion>
     
  );
}

