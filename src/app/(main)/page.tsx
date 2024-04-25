"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import TrainCard from "@/components/main/TrainCard";
import TrainIcons from "@/components/main/TrainIcons";
import Image from "next/image";
import axios from "axios";
import { TrainTicket } from "../../../common.type";
import CardTrain from "@/components/main/CardTrain";
import Greetings from "@/components/main/Greetings";
import Input from "@/components/main/Input";

export default function Home() {
  const [tickets, setTickets] = useState<TrainTicket[]>([]);
  useEffect(() => {
    const ticketData = async () => {
      const response = await axios.get(`http://localhost:5002/tickets/all`);
      if (response) {
        console.log(response.data);
        setTickets(response.data.Tickets);
      }
    };
    ticketData();
  }, []);
  return (
    <section className="flex justify-center items-center">
      <div className="text-center">
        <Greetings />
        <Input type="text" placeholder="test" />
        <div className="py-2">
          {tickets.map((ticket) => (
            <div key={ticket.TicketId} className="mb-4">
              <CardTrain
                title={ticket.TicketTrain}
                price={3232}
                departureTime={ticket.TicketDeparture}
                arrivalTime={ticket.TicketArrived}
                departureCity={ticket.TicketFromCity}
                arrivalCity={ticket.TicketToCity}
                trainClass={ticket.TicketClass}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
