import PaymentRadio from "@/components/payment/PaymentRadio";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowBack } from "react-icons/md";

function page() {
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

export default page;
