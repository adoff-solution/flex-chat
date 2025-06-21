import React from "react";

const recentTasks = [
  {
    id: 1,
    title: "yamarkets",
    subtitle: "lalit matla",
    time: "11 hours ago",
  },
  {
    id: 2,
    title: "alphafx",
    subtitle: "john doe",
    time: "3 hours ago",
  },
  {
    id: 3,
    title: "tradernet",
    subtitle: "emily clark",
    time: "1 day ago",
  },
];

const RecentTasks = () => {
  return (
    <div className="flex flex-col gap-y-2">
      {recentTasks.map((task) => (
        <div
          key={task.id}
          className="w-full p-2 flex justify-between bg-white rounded-md"
        >
          {/* left side s*/}
          <div className="flex gap-x-2 items-center">
            {/* image */}
            <div className="h-10 w-10 rounded-full bg-blue-200 uppercase" />
            <div className=" uppercase">
              <h1 className="text-xl">{task.title}</h1>
              <p className="text-[#4564AA] text-sm">{task.subtitle}</p>
            </div>
          </div>
          {/* right side */}
          <div>
            <h1>{task.time}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentTasks;
