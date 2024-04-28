import TicketList from "@/components/dashboard/TicketList";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowBack } from "react-icons/md";

function Page() {
  // Define an array of ticket data
  const tickets = [
    {
      trainTitle: "test",
      destination: "tet",
      estimation: "dasdas",
      date: "adsadas",
      price: 232,
    },
    {
      trainTitle: "test",
      destination: "tet",
      estimation: "dasdas",
      date: "21 desember 2024",
      price: 232,
    },
    {
      trainTitle: "test",
      destination: "tet",
      estimation: "dasdas",
      date: "adsadas",
      price: 232,
    },
  ];

  return (
    <section className="max-w-xl mx-auto px-2">
      <div className="flex justify-between p-2 px-4 items-center">
        <h1 className="text-[#262626] font-[700] text-[36px]">My Ticket</h1>
        <Link href="/">
          <MdOutlineArrowBack
            className="border rounded-full bg-[#F2F2F2]"
            color="gray"
            size={45}
          />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-y-4">
        {tickets.map((ticket, index) => (
          <TicketList
            key={index}
            trainTitle={ticket.trainTitle}
            destination={ticket.destination}
            estimation={ticket.estimation}
            date={ticket.date}
            price={ticket.price}
          />
        ))}
      </div>
    </section>
  );
}

export default Page;
