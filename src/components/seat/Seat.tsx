import React from "react";

interface SeatProps {
  id: string;
  value: string;
  onChange: (id: string) => void;
  selectedSeat: string | null;
  filled?: string;
}

function Seat({ id, value, onChange, selectedSeat, filled }: SeatProps) {
  const handleSeatChange = () => {
    onChange(id);
  };

  return (
    <section>
      <input
        type="radio"
        id={id}
        name="seat"
        value={id}
        checked={id === selectedSeat}
        onChange={handleSeatChange}
        className="hidden"
      />
      <label
        htmlFor={id}
        className={`flex items-center justify-center text-gray-900 rounded-xl aspect-square cursor-pointer shadow-md ${
          id === selectedSeat
            ? "bg-[#56CCF2] text-white"
            : filled
            ? "bg-[#2596D7] text-white"
            : ""
        }`}
      >
        {id}
      </label>
    </section>
  );
}

export default Seat;
