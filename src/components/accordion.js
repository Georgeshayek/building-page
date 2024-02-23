import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export function DefAccordion() {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
      <Accordion open={open === 1} className="p-4 bg-slate-500 text-white">
        <AccordionHeader className="flex" onClick={() => handleOpen(1)}><p>What is Material Tailwind?</p><p></p><button className="ml-[1000px] text-[1.5rem] w-[50px]  rounded-xl" onClick={() => handleOpen(1)}>{open===1&&<p>-</p>}{open!==1&&<p>+</p>}</button></AccordionHeader>
        <AccordionBody className={`${open === 1 ? "" : "text-transparent"}`}>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} className="p-4 bg-slate-500 text-white">
        <AccordionHeader className="flex" onClick={() => handleOpen(2)}><p>What is Material Tailwind?</p><p></p><button className="ml-[1000px] text-[1.5rem] w-[50px]  rounded-xl" onClick={() => handleOpen(2)}>{open===2&&<p>-</p>}{open!==2&&<p>+</p>}</button></AccordionHeader>
        <AccordionBody className={`${open === 2 ? "" : "text-transparent"}`}>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
    </>
  );
}
export default DefAccordion