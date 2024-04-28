"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import CardTrain from "@/components/main/CardTrain";
import Greetings from "@/components/main/Greetings";
import Input from "@/components/main/Input";
import { getAllTickets } from "@/service/api/api-service";
import { Tickets, User } from "@/common.type";
import { getUserData } from "../../service/api/api-service";

export default function Home() {
  const [tickets, setTickets] = useState<Tickets[]>([]);
  const [users, setUsers] = useState<User>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const ticket = await getAllTickets();
        const user = await getUserData();
        console.log(user);
        setUsers(user);
        console.log(ticket);
        setTickets(ticket);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <section className="flex justify-center items-center">
      <div className="text-center">
        <Greetings />
        {users?.user_id}
        <Input type="text" placeholder="test" />

        <div className="m-2 ">
          {tickets ? (
            tickets.map((ticket) => (
              <div key={ticket.TicketId}>
                <CardTrain
                  userId={users?.user_id}
                  title={ticket.TicketTrain}
                  price={parseInt(ticket.TicketPrice)}
                  departureTime={ticket.TicketDeparture}
                  arrivalTime={ticket.TicketArrived}
                  departureCity={ticket.TicketFromCity}
                  arrivalCity={ticket.TicketToCity}
                  trainClass={ticket.TicketClass}
                />
              </div>
            ))
          ) : (
            <p>loading....</p>
          )}
        </div>
      </div>
    </section>
  );
}
