import { Col, Row } from "antd";
import React, { useState } from "react";
import RecentTasks from "../../components/dashboard/RecentTasks";
import avatar1 from "../../assets/avatar/1.png";
import avatar2 from "../../assets/avatar/2.png";
import avatar3 from "../../assets/avatar/3.png";
import avatar4 from "../../assets/avatar/4.png";
import avatar5 from "../../assets/avatar/5.png";
import avatar6 from "../../assets/avatar/6.png";
import ChatTicketsTaskTab from "../../components/dashboard/ChatTicketsTaskTab";
import SelectedClientInfo from "../../components/dashboard/SelectedClientInfo";
const recentTasks = [
  {
    id: 1,
    title: "yamarkets",
    client_name: "lalit matla",
    time: "3 hours ago",
    avatar: avatar1,
    issues: "10/7",
    ticket: "09/6"
  },
  {
    id: 2,
    title: "alphafx",
    client_name: "john doe",
    time: "11 hours ago",
    avatar: avatar2,
      issues: "01/6",
    ticket: "05/6"
  },
  {
    id: 3,
    title: "tradernet",
    client_name: "emily clark",
    time: "1 day ago",
    avatar: avatar3,
     issues: "21/4",
    ticket: "24/5"
  },
  {
    id: 4,
    title: "marketmasters",
    client_name: "robert johnson",
    time: "2 day ago",
    avatar: avatar4,
       issues: "18/4",
    ticket: "20/5"
  },
  {
    id: 5,
    title: "alphafx",
    client_name: "robert johnson",
    time: "3 day ago",
    avatar: avatar5,
    issues: "25/4",
    ticket: "01/5"
  },
  {
    id: 6,
    title: "tradewise",
    client_name: "jennifer smith",
    time: "4 day ago",
    avatar: avatar6,
     issues: "10/3",
    ticket: "11/5"
  },
];

const Dashboard = () => {
  const [selectedTaskData, setSelectedTaskData] = useState(recentTasks[0]);
  return (
    <div className="w-full ">
      <Row gutter={[16, 16]} className="">
        {/* Left side */}
        <Col xs={24} sm={24} md={6} lg={6} className="">
          <div className="w-full  ">
            <RecentTasks recentTasks={recentTasks} selectedTaskData={selectedTaskData} setSelectedTaskData={setSelectedTaskData} />
          </div>
        </Col>

        {/* Center */}
        <Col xs={24} sm={24} md={12} lg={14} className="h-full">
          <div className="w-full   bg-white/5 p-4 rounded-lg shadow-md">
          <SelectedClientInfo selectedTaskData={selectedTaskData}/>
            <ChatTicketsTaskTab selectedTaskData={selectedTaskData}/>
          </div>
        </Col>

        {/* Right side */}
        <Col xs={24} sm={24} md={6} lg={4} className="">
          <div className="w-full  bg-[#90A6D1] p-4 rounded-lg shadow-md">
            <h1 className="text-white text-lg font-bold">Right Side</h1>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
