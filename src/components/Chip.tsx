import * as React from "react";

export const Chip = (
  props: React.PropsWithChildren<{ badgeType?: "info" | "accent" }>,
) => {
  let badgeType: "badge-info" | "badge-accent";
  if (props.badgeType === undefined || props.badgeType === "info")
    badgeType = "badge-info";
  else badgeType = "badge-accent";
  return (
    <div className={`badge badge-soft hover:badge-outline ${badgeType}`}>
      {props.children}
    </div>
  );
};
