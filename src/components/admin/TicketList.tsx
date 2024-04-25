import React from 'react';

interface TicketData {
  id: number;
  passengerName: string;
  NIK: string;
  phoneNumber: string;
  email: string;
  from: string;
  to: string;
  trainId: string;
  price: number;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  class: string;
}

const TicketList: React.FC<{ ticketData: TicketData[] }> = ({ ticketData }) => {
  return (
    <div style={{ overflowX: 'auto', margin: 'auto', width: '90%', maxWidth: '1200px' }}>
      <table style={{ borderCollapse: 'collapse', borderRadius: '10px', overflow: 'hidden', borderSpacing: '0', width: '100%' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0', borderRadius: '10px' }}>
            <th style={{ padding: '10px' }}>ID</th>
            <th style={{ padding: '10px' }}>Passenger Name</th>
            <th style={{ padding: '10px' }}>NIK</th>
            <th style={{ padding: '10px' }}>Phone Number</th>
            <th style={{ padding: '10px' }}>Email</th>
            <th style={{ padding: '10px' }}>From</th>
            <th style={{ padding: '10px' }}>To</th>
            <th style={{ padding: '10px' }}>Train ID</th>
            <th style={{ padding: '10px' }}>Price</th>
            <th style={{ padding: '10px' }}>Departure Time</th>
            <th style={{ padding: '10px' }}>Arrival Time</th>
            <th style={{ padding: '10px' }}>Duration</th>
            <th style={{ padding: '10px' }}>Class</th>
          </tr>
        </thead>
        <tbody>
          {ticketData.map(ticket => (
            <tr key={ticket.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '10px' }}>{ticket.id}</td>
              <td style={{ padding: '10px' }}>{ticket.passengerName}</td>
              <td style={{ padding: '10px' }}>{ticket.NIK}</td>
              <td style={{ padding: '10px' }}>{ticket.phoneNumber}</td>
              <td style={{ padding: '10px' }}>{ticket.email}</td>
              <td style={{ padding: '10px' }}>{ticket.from}</td>
              <td style={{ padding: '10px' }}>{ticket.to}</td>
              <td style={{ padding: '10px' }}>{ticket.trainId}</td>
              <td style={{ padding: '10px' }}>{ticket.price}</td>
              <td style={{ padding: '10px' }}>{ticket.departureTime}</td>
              <td style={{ padding: '10px' }}>{ticket.arrivalTime}</td>
              <td style={{ padding: '10px' }}>{ticket.duration}</td>
              <td style={{ padding: '10px' }}>{ticket.class}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TicketListComponent: React.FC = () => {
  const ticketData: TicketData[] = [
    { id: 1, passengerName: 'John Doe', NIK: '1234567890123456', phoneNumber: '1234567890', email: 'john@example.com', from: 'Surabaya', to: 'Jakarta', trainId: 'T001', price: 100000, departureTime: '08:00', arrivalTime: '12:00', duration: '4 hours', class: 'Economy' },
    { id: 2, passengerName: 'Jane Doe', NIK: '2345678901234567', phoneNumber: '2345678901', email: 'jane@example.com', from: 'Yogyakarta', to: 'Surabaya', trainId: 'T002', price: 120000, departureTime: '09:00', arrivalTime: '13:00', duration: '4 hours', class: 'Business' },
    { id: 3, passengerName: 'Alice Smith', NIK: '3456789012345678', phoneNumber: '3456789012', email: 'alice@example.com', from: 'Jakarta', to: 'Bandung', trainId: 'T003', price: 90000, departureTime: '10:00', arrivalTime: '14:00', duration: '4 hours', class: 'Executive' },
    { id: 4, passengerName: 'Bob Johnson', NIK: '4567890123456789', phoneNumber: '4567890123', email: 'bob@example.com', from: 'Bandung', to: 'Yogyakarta', trainId: 'T004', price: 110000, departureTime: '11:00', arrivalTime: '15:00', duration: '4 hours', class: 'Economy' },
    { id: 5, passengerName: 'Emma Wilson', NIK: '5678901234567890', phoneNumber: '5678901234', email: 'emma@example.com', from: 'Yogyakarta', to: 'Malang', trainId: 'T005', price: 95000, departureTime: '12:00', arrivalTime: '16:00', duration: '4 hours', class: 'Business' },
  ];

  return <TicketList ticketData={ticketData} />;
};

export default TicketListComponent;
