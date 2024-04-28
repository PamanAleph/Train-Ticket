import React, { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";

interface TicketProps {
  trainName: string;
  departureCity: string;
  arrivalCity: string;
  duration: string;
  date: string;
  passengersName: string;
  bookingCode: string;
  seatNumber: string;
  departureTime: string;
  arrivalTime: string;
}

function Ticket({
  trainName,
  departureCity,
  departureTime,
  arrivalTime,
  arrivalCity,
  duration,
  date,
  passengersName,
  bookingCode,
  seatNumber,
}: TicketProps) {
  const barcodeRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (barcodeRef.current) {
      JsBarcode(barcodeRef.current, bookingCode, {
        format: "CODE128",
        displayValue: false,
      });
    }
  }, [bookingCode]);

  return (
    <section className="px-4">
      <div className="bg-white border p-2 rounded-xl shadow">
        <h1 className="font-[700] text-[16px] text-[#59597C]">{trainName}</h1>
        <h2 className="pb-6 font-[400] text-[14px] text-[#88879C]">{date}</h2>
        <hr className="pb-4 border-dashed border-[#B7B7B763]" />
        <div className="grid grid-cols-2">
          <div>
            <h1 className="font-[400] text-[14px] text-[#88879C]">Departure</h1>
            <p className="font-[400] text-[16px] text-[#141511]">
              {departureCity}
            </p>
            <p className="font-[400] text-[14px] text-[#8C8D89]">
              {departureTime}
            </p>
          </div>
          <div className="text-right ">
            <h1 className="font-[400] text-[14px] text-[#88879C]">Arrival</h1>
            <p className="font-[400] text-[16px] text-[#141511]">
              {arrivalCity}
            </p>
            <p className="font-[400] text-[14px] text-[#8C8D89]">
              {arrivalTime}
            </p>
          </div>
        </div>
        <div className="py-2">
          <hr className="pb-2 border-dashed border-[#B7B7B763]" />
        </div>
        <div className="grid grid-cols-2 gap-y-4">
          <div>
            <h1 className="font-[400] text-[14px] text-[#88879C]">Name</h1>
            <p className="font-[400] text-[16px] text-[#141511]">
              {passengersName}
            </p>
          </div>
          <div className="text-right">
            <h1 className="font-[400] text-[14px] text-[#88879C]">
              Booking Code
            </h1>
            <p className="font-[400] text-[16px] text-[#141511]">
              {bookingCode}
            </p>
          </div>
          <div>
            <h1 className="font-[400] text-[14px] text-[#88879C]">Duration</h1>
            <p className="font-[400] text-[16px] text-[#141511]">{duration}</p>
          </div>
          <div className="text-right">
            <h1 className="font-[400] text-[14px] text-[#88879C]">
              Seat Number
            </h1>
            <p className="font-[400] text-[16px] text-[#141511]">
              {seatNumber}
            </p>
          </div>
        </div>
        <div className="py-2">
          <hr className="pb-2 border-dashed border-[#B7B7B763]" />
        </div>
        {/* barcode  */}
        <div className="flex justify-center">
          <canvas ref={barcodeRef} />
        </div>
        <p className="text-center">{bookingCode}</p>
      </div>
    </section>
  );
}

export default Ticket;
