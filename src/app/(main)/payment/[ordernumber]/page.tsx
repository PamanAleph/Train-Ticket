"use client";
import { Order, User } from "@/common.type";
import PaymentRadio from "@/components/payment/PaymentRadio";
import { getOrderByOrderNum, getUserData } from "@/service/api/api-service";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlineArrowBack } from "react-icons/md";

function Page({ params }: { params: { ordernumber: string } }) {
  const orderNum = params.ordernumber;
  const [orders, setOrders] = useState<Order>();
  const [users, setUsers] = useState<User>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUserData();
        const order = await getOrderByOrderNum({ orderNUm: orderNum });
        console.log(user);
        console.log(order);
        setUsers(user);
        setOrders(order);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
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
      <PaymentRadio title="Mandiri" price={120} />
      <PaymentRadio title="Gopay" price={120} />
      <PaymentRadio title="Shopeepay" price={120} />

      <div className="flex justify-center pt-[14.7rem]">
        <button className="w-[300px] h-11 bg-gradient-to-tl from-sky-500 to-white rounded-[20px] text-center text-white text-sm font-bold leading-[10px] tracking-widest">
          Payment Now
        </button>
      </div>
    </section>
  );
}

export default Page;
