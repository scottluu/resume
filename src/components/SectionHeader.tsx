import * as React from "react";

export const SectionHeader = (props: React.PropsWithChildren) => {
  return <h2 className={"text-2xl font-bold"}>{props.children}</h2>;
};
