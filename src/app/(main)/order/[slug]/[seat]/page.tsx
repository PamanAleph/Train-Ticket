"use client";

import Link from "next/link";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import {
  createOrderUser,
  getSeatByName,
  getTicketByName,
  getUserData,
} from "@/service/api/api-service";
import { OrderForm, Seats, Tickets, User } from "@/common.type";

function Page({ params }: { params: { slug: ""; seat: string } }) {
  const ticketName = decodeURIComponent(params.slug);
  const seatName = decodeURIComponent(params.seat);
  const [tickets, setTickets] = useState<Tickets>();
  const [seats, setSeats] = useState<Seats>();
  const [users, setUsers] = useState<User>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUserData();
        const ticket = await getTicketByName({ ticketName: ticketName });
        const seat = await getSeatByName({ seatName: seatName });
        setUsers(user);
        setSeats(seat);
        setTickets(ticket);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [ticketName, seatName]); // Add dependencies here

  const [orderForm, setOrderForm] = useState<OrderForm>({
    orderPassengerName: "",
    orderHpNumber: "",
    orderResidenceNumber: "",
    orderUserId: users?.user_id || undefined,
    orderSeatId: seats?.SeatId || undefined,
    orderTicketId: tickets?.TicketId || undefined,
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUserData();
        const ticket = await getTicketByName({ ticketName: ticketName });
        const seat = await getSeatByName({ seatName: seatName });
        setUsers(user);
        setSeats(seat);
        setTickets(ticket);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [ticketName, seatName]); // Add dependencies here

  useEffect(() => {
    console.log("user", users);
    console.log("seat", seats);
    console.log("tickets", tickets);
    console.log(ticketName);
    console.log(seatName);

    // When users, seats, and tickets are set, update orderForm
    if (users && seats && tickets) {
      setOrderForm((prevForm) => ({
        ...prevForm,
        orderUserId: users.user_id,
        orderSeatId: seats.SeatId,
        orderTicketId: tickets.TicketId,
      }));
    }
  }, [users, seats, tickets, ticketName, seatName]);
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setOrderForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const handleSubmitOrder = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await createOrderUser(orderForm);
      if (response) {
        alert("Order succes CREATED");
      }
    } catch (error) {
      alert("gagal");
      console.log(error);
    }
  };
  return (
    <section className="max-w-xl mx-auto px-4 py-8">
      <div className="flex justify-between pb-4 items-center">
        <h1 className="text-[#262626] font-[700] text-[36px]">My Ticket</h1>
        <Link href="/">
          <MdOutlineArrowBack
            className="border rounded-full bg-[#F2F2F2]"
            color="gray"
            size={45}
          />
        </Link>
      </div>
      <form className="space-y-6" onSubmit={handleSubmitOrder}>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="passengerName"
              className="block text-sm font-medium text-gray-700"
            >
              Passenger Name
            </label>
            <input
              type="text"
              id="passengerName"
              name="orderPassengerName"
              value={orderForm.orderPassengerName}
              onChange={handleInputChange}
              placeholder="John Doe"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="orderHpNumber"
              name="orderHpNumber"
              value={orderForm.orderHpNumber}
              onChange={handleInputChange}
              placeholder="08xxxxxxxxxx"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="numberResidence"
              className="block text-sm font-medium text-gray-700"
            >
              NIK
            </label>
            <input
              type="text"
              name="orderResidenceNumber"
              value={orderForm.orderResidenceNumber}
              onChange={handleInputChange}
              placeholder="Residence Number"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Page;
