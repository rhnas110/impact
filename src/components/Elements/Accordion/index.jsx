import "./styles.css";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { IoAdd } from "react-icons/io5";
import { cn } from "../../../utils";
export default function Accordion({
  children,
  className,
  type = "single",
  defaultValue,
  collapsible,
  ...props
}) {
  return (
    <AccordionPrimitive.Root
      className={cn("rounded-lg", className)}
      type={type}
      defaultValue={defaultValue}
      collapsible={collapsible ? "true" : "false"}
      {...props}
    >
      {children}
    </AccordionPrimitive.Root>
  );
}

function AccordionItem({ children, className, value, ...props }) {
  return (
    <AccordionPrimitive.Item
      className={cn("overflow-hidden mt-4 shadow-sm rounded-lg", className)}
      value={value}
      {...props}
    >
      {children}
    </AccordionPrimitive.Item>
  );
}

function AccordionTrigger({ children, className, size = 25, ...props }) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "AccordionTrigger font-bold px-6 py-6 flex flex-1 min-h-10 items-center justify-between bg-white",
          className
        )}
        {...props}
      >
        {children}
        <IoAdd
          className="stroke-[#0046C7] AccordionIcon flex-shrink-0"
          aria-hidden
          size={size}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ children, className, ...props }) {
  return (
    <AccordionPrimitive.Content
      className={cn("AccordionContent overflow-hidden bg-white", className)}
      {...props}
    >
      <div className="px-6 pb-6">{children}</div>
    </AccordionPrimitive.Content>
  );
}

Accordion.Item = AccordionItem;
Accordion.Button = AccordionTrigger;
Accordion.Content = AccordionContent;
Accordion.Header = AccordionPrimitive.Header;
Accordion.Trigger = AccordionPrimitive.Trigger;
