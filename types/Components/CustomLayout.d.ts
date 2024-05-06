import React, { ReactNode } from "react";
import type { MenuProps } from "antd";
type MenuItem = Required<MenuProps>["items"][number];
declare const CustomLayout: React.FC<{
    items: MenuItem[];
    children?: ReactNode;
}>;
export default CustomLayout;
