import React from "react";
import Seat from "./Seat";
import Tooltip from "./Tooltip";

const SeatContainer = ({ saloonProperties, selectedSeat, setSelectedSeat }) => {
  const { data } = saloonProperties;
  const [onHoverSeat, setOnHoverSeat] = React.useState(null);

  const groupedData = data.reduce((acc, item) => {
    const groupName = item.rowName;
    if (!acc[groupName]) {
      acc[groupName] = [];
    }
    acc[groupName].push(item);
    return acc;
  }, {});

  const similatedViewBg = (seatId) => {
    const seat = data.find((item) => item.seatId === seatId);
    if (seat) {
      return seat.simulateSchene;
    }
    return "";
  };

  return (
    <div className="p-2 pb-8 bg-gray-50 rounded-lg flex flex-col items-center justify-center gap-5 w-full max-w-xs">
      <div
        aria-hidden="true"
        className="w-full bg-gray-400 text-gray-200 flex justify-center items-center rounded shadow-md h-40 transition-all relative"
        style={{
          backgroundImage: `url(${similatedViewBg(onHoverSeat)})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          border: onHoverSeat && "1px solid #c1faa2",
        }}
      >
        SCHENE
        {onHoverSeat && (
          <Tooltip className="-top-8 left-0">
            preview your angle of vision
          </Tooltip>
        )}
      </div>
      {Object.keys(groupedData).map((key) => {
        return (
          <div className="flex items-center justify-center gap-5 relative w-full">
            {groupedData[key].map((item) => {
              return (
                <Seat
                  setOnHoverSeat={setOnHoverSeat}
                  key={item.seatId}
                  rowName={item.rowName}
                  seatId={item.seatId}
                  selectedSeat={selectedSeat}
                  setSelectedSeat={setSelectedSeat}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default SeatContainer;
