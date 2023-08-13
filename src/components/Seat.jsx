import React from "react";
import clsx from "clsx";

const Seat = ({
  key,
  seatId,
  setSelectedSeat,
  selectedSeat,
  setOnHoverSeat,
}) => {
  const seatClassNames = clsx(
    "h-8 w-8 rounded-t-lg border border-gray-200 border-b-4 cursor-pointer text-gray-600",
    {
      "border-green-500 text-green-500": selectedSeat === seatId,
    }
  );

  return (
    <div
      onMouseEnter={() => setOnHoverSeat(seatId)}
      onMouseLeave={() => setOnHoverSeat(selectedSeat)}
      key={key}
      role="checkbox"
      aria-checked={status === "free" ? "false" : "true"}
      aria-label={`seat ${seatId} if you want to select this seat press space`}
      onClick={() => {
        setSelectedSeat(selectedSeat === seatId ? null : seatId);
      }}
      className={seatClassNames}
    >
      <div className="flex justify-center items-center h-full">
        <div className="font-medium text-sm">{seatId}</div>
      </div>
    </div>
  );
};

export default Seat;
