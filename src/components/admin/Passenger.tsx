import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  NIK: string;
  phoneNumber: string;
}

interface Ticket {
  id: number;
  from: string;
  to: string;
  trainId: string;
  price: number;
  userId: number;
}

const Passenger: React.FC = () => {
  // Sample user data
  const users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', NIK: '1234567890123456', phoneNumber: '1234567890' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', NIK: '2345678901234567', phoneNumber: '2345678901' },
    { id: 3, name: 'Alice Smith', email: 'alice@example.com', NIK: '3456789012345678', phoneNumber: '3456789012' },
    { id: 4, name: 'Bob Johnson', email: 'bob@example.com', NIK: '4567890123456789', phoneNumber: '4567890123' },
    { id: 5, name: 'Emma Wilson', email: 'emma@example.com', NIK: '5678901234567890', phoneNumber: '5678901234' },
    { id: 6, name: 'Michael Brown', email: 'michael@example.com', NIK: '6789012345678901', phoneNumber: '6789012345' },
  ];

  // Sample ticket data
  const tickets: Ticket[] = [
    { id: 1, from: 'Surabaya', to: 'Jakarta', trainId: 'T001', price: 100000, userId: 1 },
    { id: 2, from: 'Yogyakarta', to: 'Surabaya', trainId: 'T002', price: 120000, userId: 2 },
    { id: 3, from: 'Jakarta', to: 'Bandung', trainId: 'T003', price: 90000, userId: 3 },
    { id: 4, from: 'Bandung', to: 'Yogyakarta', trainId: 'T004', price: 110000, userId: 4 },
    { id: 5, from: 'Yogyakarta', to: 'Malang', trainId: 'T005', price: 95000, userId: 5 },
    { id: 6, from: 'Malang', to: 'Semarang', trainId: 'T006', price: 105000, userId: 6 },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ fontWeight: 'bold', marginBottom: '10px', textAlign: 'center' }}>Passenger Status</h2>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ borderCollapse: 'collapse', borderRadius: '10px', overflow: 'hidden', borderSpacing: '0', width: '100%', maxWidth: '1200px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0', borderRadius: '10px' }}>
              <th style={{ padding: '10px' }}>ID</th>
              <th style={{ padding: '10px' }}>User Name</th>
              <th style={{ padding: '10px' }}>NIK</th>
              <th style={{ padding: '10px' }}>Phone Number</th>
              <th style={{ padding: '10px' }}>Email</th>
              <th style={{ padding: '10px' }}>From</th>
              <th style={{ padding: '10px' }}>To</th>
              <th style={{ padding: '10px' }}>Train ID</th>
              <th style={{ padding: '10px' }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map(ticket => {
              const user = users.find(u => u.id === ticket.userId);
              if (!user) return null;
              return (
                <tr key={ticket.id} style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '10px' }}>{ticket.id}</td>
                  <td style={{ padding: '10px' }}>{user.name}</td>
                  <td style={{ padding: '10px' }}>{user.NIK}</td>
                  <td style={{ padding: '10px' }}>{user.phoneNumber}</td>
                  <td style={{ padding: '10px' }}>{user.email}</td>
                  <td style={{ padding: '10px' }}>{ticket.from}</td>
                  <td style={{ padding: '10px' }}>{ticket.to}</td>
                  <td style={{ padding: '10px' }}>{ticket.trainId}</td>
                  <td style={{ padding: '10px' }}>{ticket.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Passenger;
