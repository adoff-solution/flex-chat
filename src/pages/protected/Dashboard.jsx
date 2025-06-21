import { Col, Row } from "antd";
import React from "react";
import RecentTasks from "../../components/dashboard/RecentTasks";

const Dashboard = () => {
  return (
    <div className="w-full h-screen ">
      <Row gutter={[16, 16]} className="h-full">
        {/* Left side */}
        <Col xs={24} sm={24} md={6} lg={6} className="h-full">
          <div className="w-full h-full ">
            <RecentTasks />
          </div>
        </Col>

        {/* Center */}
        <Col xs={24} sm={24} md={12} lg={14} className="h-full">
          <div className="w-full h-full bg-blue-500 p-4 rounded-lg shadow-md">
            <h1 className="text-white text-lg font-bold">Center</h1>
          </div>
        </Col>

        {/* Right side */}
        <Col xs={24} sm={24} md={6} lg={4} className="h-full">
          <div className="w-full h-full bg-green-500 p-4 rounded-lg shadow-md">
            <h1 className="text-white text-lg font-bold">Right Side</h1>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
