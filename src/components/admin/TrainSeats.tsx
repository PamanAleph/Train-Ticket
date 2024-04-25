import React from 'react';

// Contoh komponen vektor gambar orang
const PersonIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21v-8a4 4 0 00-4-4H7a4 4 0 00-4 4v8m12-3h4m-4 0a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

interface SeatProps {
  seatNumber: string;
}

const Seat: React.FC<SeatProps> = ({ seatNumber }) => {
  return (
    <div className="border rounded-md p-2 flex items-center justify-center">
      <PersonIcon />
      <span className="ml-2">{seatNumber}</span>
    </div>
  );
};

const TrainSeats: React.FC = () => {
  const renderSeats = () => {
    const seats: JSX.Element[] = [];
    for (let i = 1; i <= 40; i++) {
      seats.push(<Seat key={i} seatNumber={`Seat ${i}`} />);
    }
    return seats;
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-bold mb-4">Passenger Seats</h1>
      <div className="grid grid-cols-4 gap-4">
        {renderSeats()}
      </div>
    </div>
  );
};

export default TrainSeats;
