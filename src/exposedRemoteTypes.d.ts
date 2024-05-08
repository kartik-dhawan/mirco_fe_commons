declare module "micro_fe_commons/Components" {
  import React, { ReactNode } from "react";
  import type { MenuProps } from "antd";
  type MenuItem = Required<MenuProps>["items"][number];
  export const CustomLayout: React.FC<{
    items: MenuItem[];
    children?: ReactNode;
    name?: string;
  }>;

  const Section: React.FC;
}

declare module "micro_fe_commons/methods" {
  export const getUniqueBykey: <T>(items: T[], key: keyof T) => T[];
  export const sumArray: (numbers: number[]) => number;
  export const mapArray: <T, U>(items: T[], mapFn: (item: T) => U) => U[];
}
