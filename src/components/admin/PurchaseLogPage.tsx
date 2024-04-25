import React from 'react';

interface PurchaseLog {
  transactionId: string;
  userId: string;
  trainId: string;
  seatNumber: string;
  ticketDestination: string;
  paymentTime: string;
}

const PurchaseLogPage: React.FC = () => {
  // Data log pembelian tiket
  const purchaseLogs: PurchaseLog[] = [
    { transactionId: 'TRX123', userId: 'Alif', trainId: 'T001', seatNumber: 'A12', ticketDestination: 'Jakarta', paymentTime: '2024-04-25 08:30' },
    { transactionId: 'TRX124', userId: 'Ali', trainId: 'T002', seatNumber: 'B15', ticketDestination: 'Surabaya', paymentTime: '2024-04-25 09:45' },
    { transactionId: 'TRX125', userId: 'Anisa', trainId: 'T003', seatNumber: 'C21', ticketDestination: 'Bandung', paymentTime: '2024-04-25 11:20' },
    { transactionId: 'TRX126', userId: 'Nabila', trainId: 'T004', seatNumber: 'E23', ticketDestination: 'Jambi', paymentTime: '2024-04-25 15:20' },
  ];

  return (
    <div className="flex flex-col items-center">
    <h1 className="text-xl font-bold mb-4">Purchase Log Page</h1>
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '15px', overflow: 'hidden' }}>
        {/* Header */}
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0' }}>
              <th style={{ padding: '10px' }}>Transaction ID</th>
              <th style={{ padding: '10px' }}>User ID</th>
              <th style={{ padding: '10px' }}>Train ID</th>
              <th style={{ padding: '10px' }}>Seat Number</th>
              <th style={{ padding: '10px' }}>Ticket Destination</th>
              <th style={{ padding: '10px' }}>Payment Time</th>
            </tr>
          </thead>

          {/* Data Rows */}
          <tbody>
            {purchaseLogs.map(log => (
              <tr key={log.transactionId} style={{ backgroundColor: '#ffffff' }}>
                <td style={{ padding: '10px' }}>{log.transactionId}</td>
                <td style={{ padding: '10px' }}>{log.userId}</td>
                <td style={{ padding: '10px' }}>{log.trainId}</td>
                <td style={{ padding: '10px' }}>{log.seatNumber}</td>
                <td style={{ padding: '10px' }}>{log.ticketDestination}</td>
                <td style={{ padding: '10px' }}>{log.paymentTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchaseLogPage;
