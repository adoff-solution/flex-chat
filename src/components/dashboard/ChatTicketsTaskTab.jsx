import { memo, useState } from "react";
import ChatSection from "./ChatSection";

const ChatTicketsTaskTab = memo(({ selectedTaskData }) => {
  const [activeKey, setActiveKey] = useState("1");

  const onChange = (key) => {
    setActiveKey(key);
  };

  const tabItems = [
    { label: "Chat", key: "1", children: <ChatSection selectedTaskData={selectedTaskData} /> },
    { label: "Tickets", key: "2", children: "Tickets content here" },
    { label: "Task", key: "3", children: "Task content here" },
  ];

  return (
    <div className="mt-4">
      {/* Tab headers */}
      <div className="flex flex-wrap sm:flex-nowrap space-x-0 sm:space-x-2 gap-y-2 px-2">
        {tabItems.map((item) => {
          const isActive = item.key === activeKey;
          return (
            <button
              key={item.key}
              onClick={() => onChange(item.key)}
              className={`w-full sm:w-auto px-4 sm:px-16 py-2 rounded-t-md text-sm font-medium transition-all duration-200
                ${
                  isActive
                    ? "bg-gradient-to-r from-gray-600/10 to-blue-600/10 text-blue-600"
                    : "bg-white text-gray-600 mb-2 rounded-md"
                }
                ${!isActive ? "shadow-sm" : ""}
              `}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      <div className="rounded-b-xl rounded-tr-xl p-4 bg-gradient-to-r from-gray-600/10 to-blue-400/10 text-gray-800 min-h-[33rem]">
        {tabItems.find((item) => item.key === activeKey)?.children}
      </div>
    </div>
  );
});

export default ChatTicketsTaskTab;
