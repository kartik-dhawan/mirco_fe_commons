import React from "react";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Breadcrumb } from "antd";

const Section: React.FC = () => {
  return (
    <>
      <Header style={{ padding: 0, background: "#565656" }} />
      <Content style={{ margin: "0 16px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            minHeight: 360,
            background: "#ccc",
            borderRadius: "8px",
          }}
        >
          Section from common app.
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </>
  );
};

export default Section;
