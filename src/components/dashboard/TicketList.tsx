import React from 'react'

interface TicketListProps {
    trainTitle: string;
    destination: string;
    estimation: string;
    date: string;
    price: number;

}

function TicketList({trainTitle,destination,estimation,date,price}:TicketListProps) {
  return (
    <section className='bg-white rounded-xl shadow-lg'>
        <div className='grid grid-cols-2 p-6'>
            <div>
                <h1 className='text-xl font-bold text-[#59597C]'>{trainTitle}</h1>
                <p className='text-md text-[#88879C] font-[400] pt-3'>{destination}</p>
                <p className='text-md text-[#88879C] font-[400]'>{estimation}</p>
                <p className='border text-center rounded text-[#FE9B4B] bg-[#FE9B4B26] font-bold text-md w-[180px]'>{date}</p>
            </div>

            <div className='text-right'>
                <h1>{price}</h1>
            </div>
        </div>
    </section>
  )
}

export default TicketList