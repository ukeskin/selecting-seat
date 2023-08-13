import React from "react";

import SeatContainer from "./components/SeatContainer";

const App = () => {
  const [selectedSeat, setSelectedSeat] = React.useState(null);

  const saloonProperties = {
    data: [
      {
        rowName: "A",
        seatIndex: 1,
        seatId: "A1",
        price: 200,
        status: "free",
        simulateSchene:
          "https://cdnuploads.aa.com.tr/uploads/Contents/2020/01/26/thumbs_b_c_0024dbb4a9754f245746a75c03504c7b.jpg",
      },
      {
        rowName: "A",
        seatIndex: 1,
        seatId: "A2",
        price: 200,
        status: "free",
        simulateSchene:
          "https://cdnuploads.aa.com.tr/uploads/Contents/2020/01/26/thumbs_b_c_0024dbb4a9754f245746a75c03504c7b.jpg",
      },
      {
        rowName: "A",
        seatIndex: 1,
        seatId: "A3",
        price: 200,
        status: "free",
        simulateSchene:
          "https://cdnuploads.aa.com.tr/uploads/Contents/2020/01/26/thumbs_b_c_0024dbb4a9754f245746a75c03504c7b.jpg",
      },
      {
        rowName: "A",
        seatIndex: 1,
        seatId: "A4",
        price: 200,
        status: "free",
        simulateSchene:
          "https://cdnuploads.aa.com.tr/uploads/Contents/2020/01/26/thumbs_b_c_0024dbb4a9754f245746a75c03504c7b.jpg",
      },
      {
        rowName: "B",
        seatIndex: 2,
        seatId: "B1",
        price: 200,
        status: "free",
        simulateSchene:
          "https://d1nslcd7m2225b.cloudfront.net/Pictures/1024x536/9/4/5/1341945_gscinema1_505271.jpg",
      },
      {
        rowName: "B",
        seatIndex: 2,
        seatId: "B2",
        price: 200,
        status: "free",
        simulateSchene:
          "https://cdnuploads.aa.com.tr/uploads/Contents/2020/01/26/thumbs_b_c_0024dbb4a9754f245746a75c03504c7b.jpg",
      },
      {
        rowName: "B",
        seatIndex: 2,
        seatId: "B3",
        price: 200,
        status: "free",
        simulateSchene:
          "https://cdnuploads.aa.com.tr/uploads/Contents/2020/01/26/thumbs_b_c_0024dbb4a9754f245746a75c03504c7b.jpg",
      },
      {
        rowName: "B",
        seatIndex: 2,
        seatId: "B4",
        price: 200,
        status: "free",
        simulateSchene:
          "https://cdnuploads.aa.com.tr/uploads/Contents/2020/01/26/thumbs_b_c_0024dbb4a9754f245746a75c03504c7b.jpg",
      },
      {
        rowName: "C",
        seatIndex: 1,
        seatId: "C1",
        price: 200,
        status: "free",
        simulateSchene:
          "https://www.cinenews.be/ckContents/33/images/the-shape-of-water-9dc82b461e1feabd-2.jpg",
      },
      {
        rowName: "C",
        seatIndex: 1,
        seatId: "C2",
        price: 200,
        status: "free",
        simulateSchene:
          "https://cdnuploads.aa.com.tr/uploads/Contents/2020/01/26/thumbs_b_c_0024dbb4a9754f245746a75c03504c7b.jpg",
      },
      {
        rowName: "C",
        seatIndex: 3,
        seatId: "C3",
        price: 200,
        status: "free",
        simulateSchene:
          "https://blooloop.com/wp-content/uploads/2022/09/backyard-cinema-manchester.jpg",
      },
    ],
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <SeatContainer
        selectedSeat={selectedSeat}
        setSelectedSeat={setSelectedSeat}
        saloonProperties={saloonProperties}
      />
    </div>
  );
};

export default App;
