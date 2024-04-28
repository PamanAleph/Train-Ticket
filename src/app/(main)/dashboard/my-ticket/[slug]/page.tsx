"use client";
import Ticket from "@/components/dashboard/Ticket";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowBack } from "react-icons/md";

function page() {
  return (
    <section className="max-w-xl mx-auto">
      <div className="flex justify-between p-2 px-4 items-center">
        <h1 className="text-[#262626] font-[700] text-[36px]">E-Ticket</h1>
        <Link href="../my-ticket">
          <MdOutlineArrowBack
            className="border rounded-full bg-[#F2F2F2]"
            color="gray"
            size={45}
          />
        </Link>
      </div>
      <Ticket
        trainName="AU-192"
        departureCity="Jakarta"
        arrivalCity="Bandung"
        duration="2 hours"
        date="21 December 2024"
        passengersName="John Doe"
        bookingCode="AU-192"
        seatNumber="A3"
        departureTime="08:00"
        arrivalTime="10:00"
      />
    </section>
  );
}

export default page;
