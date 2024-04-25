import React from 'react';

interface TrainData {
  id: string; // Mengubah tipe data ID menjadi string
  name: string;
  from: string;
  to: string;
  stop: string;
}

const Train: React.FC<{ trainData: TrainData[] }> = ({ trainData }) => {
  return (
    <div style={{ overflowX: 'auto', margin: 'auto', width: '90%', maxWidth: '1200px' }}>
      <h2 style={{ fontWeight: 'bold', marginBottom: '10px', textAlign: 'center' }}>Train Data</h2>
      <table style={{ borderCollapse: 'collapse', borderRadius: '10px', overflow: 'hidden', borderSpacing: '0', width: '100%' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0', borderRadius: '10px' }}>
            <th style={{ padding: '10px', textAlign: 'center' }}>ID</th>
            <th style={{ padding: '10px', textAlign: 'center' }}>Train Name</th>
            <th style={{ padding: '10px', textAlign: 'center' }}>From</th>
            <th style={{ padding: '10px', textAlign: 'center' }}>To</th>
            <th style={{ padding: '10px', textAlign: 'center' }}>Stop Station</th>
          </tr>
        </thead>
        <tbody>
          {trainData.map(train => (
            <tr key={train.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '10px', textAlign: 'center' }}>{train.id}</td>
              <td style={{ padding: '10px', textAlign: 'center' }}>{train.name}</td>
              <td style={{ padding: '10px', textAlign: 'center' }}>{train.from}</td>
              <td style={{ padding: '10px', textAlign: 'center' }}>{train.to}</td>
              <td style={{ padding: '10px', textAlign: 'center' }}>{train.stop}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TrainComponent: React.FC = () => {
  const trainData: TrainData[] = [
    { id: 'RocketX123', name: 'Rocket 101', from: 'Surabaya', to: 'Jakarta', stop: 'Cool Junction' }, // Ganti ID dan Stop Station
    { id: 'SuperSonicZ202', name: 'Super Sonic 202', from: 'Yogyakarta', to: 'Surabaya', stop: 'Rapid Rest' }, // Ganti ID dan Stop Station
    { id: 'TurboF303', name: 'Turbo 303', from: 'Jakarta', to: 'Bandung', stop: 'Speedy Spot' }, // Ganti ID dan Stop Station
    { id: 'SpeedDemon404', name: 'Speedy 404', from: 'Bandung', to: 'Yogyakarta', stop: 'Fast Break' }, // Ganti ID dan Stop Station
    { id: 'RapidBlaster505', name: 'Rapid 505', from: 'Yogyakarta', to: 'Malang', stop: 'Turbo Terminal' }, // Ganti ID dan Stop Station
    { id: 'ExpressX606', name: 'Express 606', from: 'Malang', to: 'Semarang', stop: 'Quick Stop' }, // Ganti ID dan Stop Station
  ];

  return <Train trainData={trainData} />;
};

export default TrainComponent;
