import React from "react";

interface SeatProps {
  id: string;
  value: string;
}

function Seat({ id, value }: SeatProps) {
  return (
    <section>
      <input
        type="radio"
        id={id}
        name="seat"
        value={value}
        className="hidden"
      />
      <label
        htmlFor={id}
        className="flex items-center justify-center border aspect-square cursor-pointer"
      >
        {value}
      </label>
    </section>
  );
}

export default Seat;
