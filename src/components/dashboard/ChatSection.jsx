import { MoreOutlined, PlusOutlined, SendOutlined } from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import { memo } from "react";

const items = [
  {
    label: "Create Ticket",
    key: "0",
  },
  {
    label: "Add Task",
    key: "1",
  },

  {
    label: "Tag Billing",
    key: "3",
  },
  {
    label: "Assign Team",
    key: "4",
  },
];

const ChatSection = memo(({ selectedTaskData }) => {
  
  console.log("ChatSection selectedTaskData", selectedTaskData);

  return (
    <div className="mt-5 flex flex-col justify-between h-[30rem]">
      <div className=" flex flex-col gap-y-8">
        {/* client message */}
        <div className="flex  gap-2">
          {/* image */}
          <div className="w-10 h-10 rounded-full bg-gray-200">
            <img src={selectedTaskData?.avatar} alt="client-image" className="w-full h-full rounded-full" />
          </div>

          {/* project name and message */}
          <div>
            {/* remove p tag spacing */}
            <p className="m-0 mb-1 uppercase font-semibold text-[#4564AA]">{selectedTaskData?.client_name}</p>

            <div className="px-3 py-3 rounded-md w-[50%] bg-[#4564AA] text-white">
              <div className="flex items-center justify-between">
                <p className="uppercase font-semibold m-0">Project: {selectedTaskData?.title}</p>

                {/* dropdown trigger aligned */}
                <div className="flex items-center">
                  <Dropdown menu={{ items }} trigger={["click"]}>
                    <button className="text-white focus:outline-none">
                      <MoreOutlined rotate={90} style={{ fontSize: "25px" }} />
                    </button>
                  </Dropdown>
                </div>
              </div>

              {/* client message */}
              <p className="text-truncate m-0">Issue on copy system please fix the problem on PAMM system the copy from master to stave is not working for sometime</p>
            </div>
          </div>
        </div>
        {/* subject and ticket or task details assign to developer  */}
        <div className="flex  gap-2">
          {/* image */}
          <div className="w-10 h-10 rounded-full bg-gray-200">
            <img src="https://avatars.githubusercontent.com/u/87908048?v=4" alt="client-image" className="w-full h-full rounded-full" />
          </div>

          {/* project name and message */}
          <div className=" w-[50%] ">
            {/* task assign developer name */}
            <p className="m-0 mb-1 uppercase font-semibold text-[#4564AA]">Lutfor Rahman</p>

            <div className=" w-full flex flex-col gap-y-2">
              {/* subject  */}
              <div className=" w-full rounded-md bg-white">
                <input type="text" placeholder="Subject" className=" outline-none w-full px-3 py-3 rounded-md border border-blue-400"/>
              </div>
              {/* ticket or task details  */}
               <div className=" w-full h-24 rounded-md bg-white">
                <input type="text" placeholder="Ticket or Task Details" className=" outline-none w-full h-full px-3 py-3 rounded-md border border-blue-400"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* find or search  office worker bottom section */}
      <div className=" bg-white bottom-0 w-full flex items-center border border-blue-500 rounded-md pr-5">
        <input type="text" placeholder="write here" className=" w-full py-3 outline-none px-5 rounded-md" />
        <div className=" flex items-center gap-x-2">
          <Button>
            <PlusOutlined style={{ fontSize: "25px" }} />
          </Button>
          <Button>
            <SendOutlined style={{ fontSize: "25px" }} />
          </Button>
        </div>
      </div>

      {/* find office developer modal box  */}

   
    </div>
  );
});

export default ChatSection;
