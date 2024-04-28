"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { useEffect } from "react";
import {
  getDetailsTicketByName,
  getAllSeatsByTicketId,
} from "../../../../service/api/api-service";
import { Seats, Tickets } from "@/common.type";
import Seat from "@/components/seat/Seat";
function Page({ params }: { params: { slug: string } }) {
  const ticketName = decodeURIComponent(params.slug);
  const [tickets, setTickets] = useState<Tickets>();
  const [seats, setSeats] = useState<Seats[]>([]);
  const [selectedSeat, setSelectedSeat] = useState<string>("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const ticket = await getDetailsTicketByName({
          ticketName: ticketName,
        });
        const seat = await getAllSeatsByTicketId({ ticketId: ticket.TicketId });
        console.log("seat", seat);
        setSeats(seat);
        setTickets(ticket);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      {/* header  */}
      <div className="flex justify-between p-2 px-4 items-center">
        <h1 className="text-[#262626] font-[700] text-[36px]">
          Ticket {tickets?.TicketTrain}
        </h1>
        <Link href="/">
          <MdOutlineArrowBack
            className="border rounded-full bg-[#F2F2F2]"
            color="gray"
            size={45}
          />
        </Link>
      </div>

      {/* description  */}
      <div className="flex justify-center pt-2 pb-4">
        <div className="w-[315px] h-[50px] bg-white rounded-[40px] shadow flex gap-4 px-3">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white rounded border-2 border-zinc-100" />
            <p>Available</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-sky-500 rounded" />
            <p>Filled</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-cyan-300 rounded" />
            <p>Selected</p>
          </div>
        </div>
      </div>

      {/* seat  */}
      <form>
        <div className="grid grid-cols-5 gap-2 px-2">
          {seats.map((seat) => (
            <React.Fragment key={seat.SeatId}>
              <div className="border border-black">
                <label htmlFor="">{seat.SeatNumber}</label>
                <input
                  type="radio"
                  name="PPPP"
                  id=""
                  value={seat.SeatNumber}
                  onChange={(e) => setSelectedSeat(e.target.value)}
                />
              </div>
              {/* {seat.SeatId.includes("b") &&
              seats.find((s) => s.SeatId === seat.SeatId.replace("b", "c")) && (
                <div className="w-4" />
              )} */}
            </React.Fragment>
          ))}
        </div>
      </form>

      <div className="flex justify-center pt-[2rem] pb-2">
        <Link href={`/order/${params.slug}/${selectedSeat}`}>
          <button className="w-[300px] h-11 bg-gradient-to-tl from-sky-500 to-white rounded-[20px] text-center text-white text-sm font-bold leading-[10px] tracking-widest">
            Book Seat
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Page;
