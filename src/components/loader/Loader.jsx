import React from "react";
import { Spin, Flex } from "antd";

const Loader = ({ message = "Loading...", size = "large" }) => {
  return (
    <Flex
      justify="center"
      align="center"
      style={{
        height: "100vh",
        width: "100%",
        flexDirection: "column",
        gap: "1rem",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Spin size={size} />
      <div style={{ fontSize: "16px", color: "#555" }}>{message}</div>
    </Flex>
  );
};

export default Loader;
