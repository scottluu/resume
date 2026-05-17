import * as React from "react";

export const Accordion = ({
  title,
  children,
}: React.PropsWithChildren<{ title: string }>) => {
  return (
    <div className="collapse collapse-arrow border border-transparent transition-colors duration-500 ease-in-out hover:border-gray-300">
      <input type="radio" name="my-accordion-2" defaultChecked />
      <div className="collapse-title font-semibold text-4xl">{title}</div>
      <div className="collapse-content">{children}</div>
    </div>
  );
};
