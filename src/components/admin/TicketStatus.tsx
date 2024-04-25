import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Ticket {
  id: number;
  departureStation: string;
  arrivalStation: string;
  trainId: string;
  price: number;
  paid: boolean;
  userId: number;
}

const PaidTicketStatus: React.FC<{ ticket: Ticket; user: User }> = ({ ticket, user }) => {
  return (
    <tr style={{ backgroundColor: 'lightgreen', borderRadius: '10px' }}>
      <td>{ticket.id}</td>
      <td>{user.name}</td>
      <td>{ticket.departureStation}</td>
      <td>{ticket.arrivalStation}</td>
      <td>{ticket.trainId}</td>
      <td>{ticket.price}</td>
      <td>Paid</td>
    </tr>
  );
};

const UnpaidTicketStatus: React.FC<{ ticket: Ticket; user: User }> = ({ ticket, user }) => {
  return (
    <tr style={{ backgroundColor: 'lightcoral', borderRadius: '10px' }}>
      <td>{ticket.id}</td>
      <td>{user.name}</td>
      <td>{ticket.departureStation}</td>
      <td>{ticket.arrivalStation}</td>
      <td>{ticket.trainId}</td>
      <td>{ticket.price}</td>
      <td>Unpaid</td>
    </tr>
  );
};

const TicketStatus: React.FC = () => {
  // Sample user data
  const users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    { id: 3, name: 'Alice Smith', email: 'alice@example.com' },
    { id: 4, name: 'Bob Johnson', email: 'bob@example.com' },
    { id: 5, name: 'Emma Wilson', email: 'emma@example.com' },
    { id: 6, name: 'Michael Brown', email: 'michael@example.com' },
  ];

  // Sample ticket data
  const tickets: Ticket[] = [
    { id: 1, departureStation: 'Surabaya', arrivalStation: 'Jakarta', trainId: 'T001', price: 100000, paid: true, userId: 1 },
    { id: 2, departureStation: 'Yogyakarta', arrivalStation: 'Surabaya', trainId: 'T002', price: 120000, paid: false, userId: 2 },
    { id: 3, departureStation: 'Jakarta', arrivalStation: 'Bandung', trainId: 'T003', price: 90000, paid: true, userId: 3 },
    { id: 4, departureStation: 'Bandung', arrivalStation: 'Yogyakarta', trainId: 'T004', price: 110000, paid: false, userId: 4 },
    { id: 5, departureStation: 'Yogyakarta', arrivalStation: 'Malang', trainId: 'T005', price: 95000, paid: true, userId: 5 },
    { id: 6, departureStation: 'Malang', arrivalStation: 'Semarang', trainId: 'T006', price: 105000, paid: false, userId: 6 },
  ];

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', fontFamily: 'Arial, sans-serif', color: '#333', fontWeight: 'bold' }}>Ticket Status</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <table style={{ borderCollapse: 'collapse', borderRadius: '10px', overflow: 'hidden', borderSpacing: '0', width: '100%', maxWidth: '900px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0', borderRadius: '10px' }}>
              <th>ID</th>
              <th>User Name</th>
              <th>Departure Station</th>
              <th>Arrival Station</th>
              <th>Train ID</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map(ticket => {
              const user = users.find(u => u.id === ticket.userId);
              if (!user) return null;
              return (
                <React.Fragment key={ticket.id}>
                  {ticket.paid ? <PaidTicketStatus ticket={ticket} user={user} /> : <UnpaidTicketStatus ticket={ticket} user={user} />}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );

};

export default TicketStatus;
