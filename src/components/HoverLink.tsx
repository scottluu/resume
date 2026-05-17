import * as React from "react";

export const HoverLink = (
  props: React.PropsWithChildren<{ link: string; isHovering: boolean }>,
) => {
  return (
    <div className={"flex gap-2 center transition-all"}>
      {props.children}
      {props.isHovering ? (
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className={"hover:cursor-pointer"}
        >
          🔗
        </a>
      ) : null}
    </div>
  );
};
