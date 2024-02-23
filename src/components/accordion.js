import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { GrAdd,GrSubtract  } from "react-icons/gr";

function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
  }
export function DefAccordion() {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
      <Accordion open={open === 1} className="p-4 bg-slate-500 text-white" icon={open===1?<GrSubtract/>:<GrAdd/>}>
        <AccordionHeader className="flex justify-between" onClick={() => handleOpen(1)}>What is Material Tailwind?</AccordionHeader>
        <AccordionBody className={`${open === 1 ? "" : "text-transparent"}`}>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} className="p-4 bg-slate-500 text-white" icon={open===2?<GrSubtract/>:<GrAdd/>}>
        <AccordionHeader className="flex justify-between" onClick={() => handleOpen(2)}>What is Material Tailwind?</AccordionHeader>
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