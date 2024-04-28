import Seat from "@/components/seat/Seat";
import React from "react";

function Page() {
  // Data seat dengan id dan value unik
  const seatsData = [
    { id: "1a", value: "Seat 1a" },
    { id: "1b", value: "Seat 1b" },
    { id: "1c", value: "Seat 1c" },
    { id: "1d", value: "Seat 1d" },
    { id: "2a", value: "Seat 2a" },
    { id: "2b", value: "Seat 2b" },
    { id: "2c", value: "Seat 2c" },
    { id: "2d", value: "Seat 2d" },
    { id: "3a", value: "Seat 3a" },
    { id: "3b", value: "Seat 3b" },
    { id: "3c", value: "Seat 3c" },
    { id: "3d", value: "Seat 3d" },
    { id: "4a", value: "Seat 4a" },
    { id: "4b", value: "Seat 4b" },
    { id: "4c", value: "Seat 4c" },
    { id: "4d", value: "Seat 4d" },
    { id: "5a", value: "Seat 5a" },
    { id: "5b", value: "Seat 5b" },
    { id: "5c", value: "Seat 5c" },
    { id: "5d", value: "Seat 5d" },
    { id: "6a", value: "Seat 6a" },
    { id: "6b", value: "Seat 6b" },
    { id: "6c", value: "Seat 6c" },
    { id: "6d", value: "Seat 6d" },
    { id: "7a", value: "Seat 7a" },
    { id: "7b", value: "Seat 7b" },
    { id: "7c", value: "Seat 7c" },
    { id: "7d", value: "Seat 7d" },
    { id: "8a", value: "Seat 8a" },
    { id: "8b", value: "Seat 8b" },
    { id: "8c", value: "Seat 8c" },
    { id: "8d", value: "Seat 8d" },
    { id: "9a", value: "Seat 9a" },
    { id: "9b", value: "Seat 9b" },
    { id: "9c", value: "Seat 9c" },
    { id: "9d", value: "Seat 9d" },
    { id: "10a", value: "Seat 10a" },
    { id: "10b", value: "Seat 10b" },
    { id: "10c", value: "Seat 10c" },
    { id: "10d", value: "Seat 10d" },
  ];

  return (
    <section>
      <div className="grid grid-cols-5 gap-2 px-2">
        {seatsData.map((seat, index) => ( 
          <React.Fragment key={seat.id}>
            <Seat id={seat.id} value={seat.value} />
            {(index + 1) % 2 === 0 && index !== seatsData.length - 1 ? <div className="w-4" /> : null}
          </React.Fragment>
        ))}
      </div>

      <div className="flex justify-center pt-[2rem] pb-2">
        <button className="w-[300px] h-11 bg-gradient-to-tl from-sky-500 to-white rounded-[20px] text-center text-white text-sm font-bold leading-[10px] tracking-widest">
          Book Seat
        </button>
      </div>
    </section>
  );
}

export default Page;