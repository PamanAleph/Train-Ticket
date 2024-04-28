import React from "react";
import Button from "./_components/Button";
import Link from "next/link";

function page() {
  return (
    <section className="max-w-xl mx-auto px-2 my-2">
      <div className="bg-white border rounded-md">
        <div id="invoiceContent">
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="101"
              height="100"
              viewBox="0 0 101 100"
              fill="none"
            >
              <path
                d="M50.5 9.375C42.4652 9.375 34.6107 11.7576 27.93 16.2215C21.2492 20.6855 16.0422 27.0302 12.9674 34.4535C9.8926 41.8767 9.08809 50.0451 10.6556 57.9255C12.2231 65.806 16.0923 73.0447 21.7738 78.7262C27.4553 84.4077 34.694 88.2769 42.5745 89.8444C50.455 91.4119 58.6233 90.6074 66.0465 87.5326C73.4698 84.4578 79.8145 79.2508 84.2785 72.57C88.7424 65.8893 91.125 58.0349 91.125 50C91.1136 39.2291 86.8299 28.9025 79.2137 21.2863C71.5975 13.6701 61.2709 9.38637 50.5 9.375ZM68.336 42.8359L46.461 64.7109C46.1707 65.0015 45.8261 65.232 45.4467 65.3893C45.0673 65.5465 44.6607 65.6275 44.25 65.6275C43.8393 65.6275 43.4327 65.5465 43.0533 65.3893C42.674 65.232 42.3293 65.0015 42.0391 64.7109L32.6641 55.3359C32.0777 54.7496 31.7483 53.9543 31.7483 53.125C31.7483 52.2957 32.0777 51.5004 32.6641 50.9141C33.2505 50.3277 34.0458 49.9983 34.875 49.9983C35.7043 49.9983 36.4996 50.3277 37.086 50.9141L44.25 58.082L63.9141 38.4141C64.2044 38.1237 64.5491 37.8934 64.9285 37.7363C65.3078 37.5791 65.7144 37.4983 66.125 37.4983C66.5356 37.4983 66.9422 37.5791 67.3216 37.7363C67.7009 37.8934 68.0456 38.1237 68.336 38.4141C68.6263 38.7044 68.8566 39.0491 69.0137 39.4284C69.1709 39.8078 69.2518 40.2144 69.2518 40.625C69.2518 41.0356 69.1709 41.4422 69.0137 41.8216C68.8566 42.2009 68.6263 42.5456 68.336 42.8359Z"
                fill="url(#paint0_linear_58_19)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_58_19"
                  x1="79"
                  y1="62"
                  x2="-41.5"
                  y2="-152"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2596D7" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h1 className="flex justify-center text-[#141511] font-[600] text-[20px]  ">
            Your payment was successful!
          </h1>

          <div className="grid grid-cols-2 justify-around px-4 py-6">
            <div>
              <h3 className="text-[#8C8D89]">Invoice Number</h3>
              <p className="text-[16px] font-[500] text-[#141511] mb-2">
                Invoice Number
              </p>

              <h3 className="text-[#8C8D89]">Date</h3>
              <p className="text-[16px] font-[500] text-[#141511] mb-2">
                2 April 2024
              </p>

              <h3 className="text-[#8C8D89]">Amount Paid</h3>
              <p className="text-[16px] font-[500] text-[#141511]">
                Rp 160.000
              </p>
            </div>
            <div className="text-right">
              <h3 className="text-[#8C8D89]">Payment Method</h3>
              <p className="text-[16px] font-[500] text-[#141511] mb-2">
                Mandiri
              </p>

              <h3 className="text-[#8C8D89]">Time</h3>
              <p className="text-[16px] font-[500] text-[#141511] mb-2">
                19:00
              </p>

              <h3 className="text-[#8C8D89]">Status</h3>
              <p className="text-[16px] font-[500] text-[#141511]">Sukses</p>
            </div>
          </div>
        </div>

        <hr className="border-dashed" />

        <div className="flex justify-center pt-6 pb-4">
          <Button />
        </div>
      </div>
      <div className="flex justify-center pt-[5.4rem]">
        <Link href="/">
        
        <button className="w-[300px] h-11 bg-gradient-to-tl from-sky-500 to-white rounded-[20px] text-center text-white text-sm font-bold leading-[10px] tracking-widest">
         Back to Home
        </button>
        </Link>
      </div>
    </section>
  );
}

export default page;
