import React, { ReactNode, useState } from "react";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { printHello } from "micro_fe_main/methods";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const CustomLayout: React.FC<{ items: MenuItem[]; children?: ReactNode }> = ({
  items,
  children,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const abc: string[] = printHello([2, 3, 34]);
  console.log(abc);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>{children}</Layout>
    </Layout>
  );
};

export default CustomLayout;
