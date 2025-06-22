const RecentTasks = ({ recentTasks, setSelectedTaskData, selectedTaskData }) => {

  return (
    <div className="flex flex-col gap-y-2">
      {recentTasks.map((task) => (
        <div 
        key={task.id} 
        className={`w-full p-2 flex justify-between rounded-md cursor-pointer ${task.id === selectedTaskData?.id ? "bg-[#4564AA] text-white" : "bg-white"}`}
        onClick={() => setSelectedTaskData(task)}>
          {/* left side */}
          <div className="flex gap-x-2 items-center">
            {/* image */}
            <div className="h-10 w-10 rounded-full">
              <img src={task.avatar} alt="client-image" className="h-full w-full rounded-full" />
            </div>
            <div className="uppercase">
              <h1 className="text-[18px]">{task.title}</h1>
              <p className={`text-sm ${task.id === selectedTaskData?.id ? "text-white" : "text-[#4564AA]"}`}>{task.client_name}</p>
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
