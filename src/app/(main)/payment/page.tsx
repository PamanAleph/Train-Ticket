import PaymentRadio from "@/components/payment/PaymentRadio";
import React from "react";

function page() {
  return (
    <section className="max-w-xl mx-auto px-2">
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
