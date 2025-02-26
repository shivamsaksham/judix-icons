// src/Icon.tsx
import React from "react";
import * as Icons from "./iconse";

type IconName = keyof typeof Icons;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
}

const Icon: React.FC<IconProps> = ({ name, size = 16, color = "currentColor", strokeWidth , ...props }) => {
  const IconComponent = (Icons[name] as unknown) as React.FC<React.SVGProps<SVGSVGElement>>;

  if (!IconComponent) {
    console.error(`Icon with name "${name}" does not exist.`);
    return null;
  }

  return <IconComponent width={size} height={size} strokeWidth={strokeWidth} {...props} />;
};

export default Icon;
