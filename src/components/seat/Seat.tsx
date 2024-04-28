import React from "react";

interface SeatProps {
  id: number;
  value: string;
  // onChange: (id: number) => void;
  // selectedSeat: number | null;
  filled?: string;
}
// onChange, selectedSeat,
function Seat({ id, value, filled }: SeatProps) {
  // const handleSeatChange = () => {
  //   onChange(id);
  // };

  return (
    <section>
      <input
        type="radio"
        name="seat"
        value={id}
        // checked={id === selectedSeat}
        // onChange={handleSeatChange}
        className="hidden"
      />
      <label
        className={`flex items-center justify-center text-gray-900 rounded-xl aspect-square cursor-pointer shadow-md`}
        // ${
        //   id === selectedSeat
        //     ? "bg-[#56CCF2] text-white"
        //     : filled
        //     ? "bg-[#2596D7] text-white"
        //     : ""
        // }
      >
        {id}
      </label>
    </section>
  );
}

export default Seat;
