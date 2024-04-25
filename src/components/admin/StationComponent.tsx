import React from 'react';

interface StationData {
  id: number;
  name: string;
  service: string;
  schedule: string;
  facilities: string;
  operationalStatus: string;
  contactInfo: string;
}

const Station: React.FC<{ stationData: StationData[] }> = ({ stationData }) => {
  return (
    <div style={{ overflowX: 'auto', margin: 'auto', width: '90%', maxWidth: '1200px' }}>
      <table style={{ borderCollapse: 'collapse', borderRadius: '10px', overflow: 'hidden', borderSpacing: '0', width: '100%' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0', borderRadius: '10px' }}>
            <th style={{ padding: '10px' }}>ID</th>
            <th style={{ padding: '10px' }}>Station Name</th>
            <th style={{ padding: '10px' }}>Service</th>
            <th style={{ padding: '10px' }}>Schedule</th>
            <th style={{ padding: '10px' }}>Facilities</th>
            <th style={{ padding: '10px' }}>Operational Status</th>
            <th style={{ padding: '10px' }}>Contact Information</th>
          </tr>
        </thead>
        <tbody>
          {stationData.map(station => (
            <tr key={station.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '10px' }}>{station.id}</td>
              <td style={{ padding: '10px' }}>{station.name}</td>
              <td style={{ padding: '10px' }}>{station.service}</td>
              <td style={{ padding: '10px' }}>{station.schedule}</td>
              <td style={{ padding: '10px' }}>{station.facilities}</td>
              <td style={{ padding: '10px' }}>{station.operationalStatus}</td>
              <td style={{ padding: '10px' }}>{station.contactInfo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const StationComponent: React.FC = () => {
  const stationData: StationData[] = [
    { id: 1, name: 'Grand Central Terminal', service: 'Local, Express', schedule: '24/7', facilities: 'Restrooms, Waiting Area, Ticket Booths', operationalStatus: 'Operational', contactInfo: '+1-212-340-2583' },
    { id: 2, name: "King's Cross Station", service: 'Regional, Intercity', schedule: 'Mon-Sun: 6 AM - 12 AM', facilities: 'Restaurants, Shops, Taxi Stand', operationalStatus: 'Operational', contactInfo: '+44 345 711 4141' },
    { id: 3, name: 'Shinjuku Station', service: 'Local, Shinkansen', schedule: 'Mon-Sun: 5 AM - 1 AM', facilities: 'Escalators, Elevators, Luggage Lockers', operationalStatus: 'Operational', contactInfo: '+81 3-3215-0008' },
    { id: 4, name: 'Union Station', service: 'Commuter, Regional, Long-Distance', schedule: '24/7', facilities: 'Restaurants, ATMs, Baggage Storage', operationalStatus: 'Operational', contactInfo: '+1 800-872-7245' },
    { id: 5, name: 'Berlin Hauptbahnhof', service: 'S-Bahn, Regional, Intercity', schedule: '24/7', facilities: 'Information Desk, Shops, Post Office', operationalStatus: 'Operational', contactInfo: '+49 30 2971055' },
  ];

  return <Station stationData={stationData} />;
};

export default StationComponent;
