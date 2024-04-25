import Card from '@/components/admin/Card';
import CrudTicket from "@/components/admin/CrudTicket";
import TrainSeats from "@/components/admin/TrainSeats";
import PurchaseLogPage from "@/components/admin/PurchaseLogPage";
import TicketStatus from "@/components/admin/TicketStatus";
import Passenger from "@/components/admin/Passenger";
import TrainComponent from "@/components/admin/TrainComponent";
import StationComponent from "@/components/admin/StationComponent";
import TicketList from "@/components/admin/TicketList";
import React from 'react';
import Link from 'next/link';


function Page() {
    return (
        <div>
           
                <StationComponent />
        
        </div>
    );
}

export default Page;
