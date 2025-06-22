import React, { memo } from "react";

const SelectedClientInfo = memo(({ selectedTaskData }) => {
  return (
    <div>
      {/* Top Clients info */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 sm:gap-0">
        {/* image and info */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="h-24 w-24 rounded-full bg-gray-300">
            <img
              src={selectedTaskData?.avatar}
              alt="client-image"
              className="w-full h-full rounded-full"
            />
          </div>
          <div>
            <h1 className="text-3xl text-gray-600 uppercase">{selectedTaskData?.title}</h1>
            <p className="text-gray-400 uppercase">{selectedTaskData?.client_name}</p>
          </div>
        </div>

        {/* issue and ticket */}
        <div className="flex flex-col sm:items-end items-center gap-y-4">
          <div className="flex gap-x-3">
            <p className="text-sm">Issues</p>
            <p className="text-3xl text-gray-600">{selectedTaskData?.issues}</p>
          </div>
          <div className="flex gap-x-3">
            <p className="text-sm">Ticket</p>
            <p className="text-3xl text-gray-600">{selectedTaskData?.ticket}</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SelectedClientInfo;
