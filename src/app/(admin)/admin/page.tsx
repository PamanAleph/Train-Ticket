import Card from '@/components/admin/Card';
import CrudTicket from "@/components/admin/CrudTicket";
import TrainSeats from "@/components/admin/TrainSeats";
import PurchaseLogPage from "@/components/admin/PurchaseLogPage";
import TicketStatus from "@/components/admin/TicketStatus";
import Passenger from "@/components/admin/Passenger";
import StationComponent from "@/components/admin/StationComponent";
import TicketList from "@/components/admin/TicketList";
import React from 'react';
import Link from 'next/link';


function Page() {
    return (
        <div>
            <div className='grid grid-cols-4 gap-4'>
                <Link href="/admin/passenger">
                    <Card title='Passenger' img='user.jpg' />
                </Link>
                <Link href="/admin/traincomponent">
                    <Card title='Train' img='train.jpg' />
                </Link>
                <Link href="/admin/stationcomponent">
                    <Card title='Station' img='station.jpg' />
                </Link>
                <Link href="/admin/ticketlist">
                    <Card title='Ticket List' img='ticket.jpg' />
                </Link>
            </div>
            <div className='mt-8 grid grid-cols-1 gap-4'>
                <CrudTicket img='terminal.jpg' title={''} />
                <TrainSeats />
                <PurchaseLogPage />
                <TicketStatus />
            </div>
        </div>
    );
}

export default Page;
