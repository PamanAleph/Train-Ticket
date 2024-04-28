import Link from 'next/link'
import React from 'react'
import { MdOutlineArrowBack } from 'react-icons/md';

function Page() {
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
      <form className="space-y-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="passengerName" className="block text-sm font-medium text-gray-700">Passenger Name</label>
            <input
              type="text"
              name="passengerName"
              id="passengerName"
              placeholder="John Doe"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="08xxxxxxxxxx"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="numberResidence" className="block text-sm font-medium text-gray-700">NIK</label>
            <input
              type="text"
              name="numberResidence"
              id="numberResidence"
              placeholder="NIK"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Submit
        </button>
      </form>
    </section>
  )
}

export default Page;
