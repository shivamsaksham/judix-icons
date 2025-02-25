// src/Icon.tsx
import React from "react";
import * as Icons from "./iconse";

type IconName = keyof typeof Icons;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color = "currentColor", ...props }) => {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    console.error(`Icon with name "${name}" does not exist.`);
    return null;
  }

  return <IconComponent width={size} height={size} fill={color} {...props} />;
};

export default Icon;
