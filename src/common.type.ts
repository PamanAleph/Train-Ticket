export interface Tickets {
  TicketId: number;
  TicketTrain: string;
  TicketFromCity: string;
  TicketToCity: string;
  TicketClass: string;
  TicketPrice: string;
  TicketDate: string;
  TicketDeparture: string;
  TicketArrived: string;
  CreatedAt: string;
  UpdatedAt: string;
}

export interface Order {
  OrderId: number;
  OrderNumber: string;
  OrderPassengerName: string;
  OrderHpNumber: string;
  OrderResidenceNumber: string;
  OrderUserId: number;
  User: {
    UserID: number;
    username: string;
  };
  OrderTicketId: number;
  Ticket: {
    TicketId: number;
    TicketTrain: string;
  };
  OrderSeatId: number;
  Seat: {
    SeatId: number;
    SeatNumber: string;
  };
}

export interface Seats {
  SeatId: number;
  SeatNumber: string;
  SeatTicket: number;
  Ticket: {
    TicketId: number;
    TicketTrain: string;
  };
}
export interface SeatForm {
  SeatNumber: string;
  SeatTicket: number;
}

export interface TicketForm {
  TicketTrain: string;
  TicketFromCity: string;
  TicketToCity: string;
  TicketClass: string;
  TicketPrice: string;
  TicketDate: string;
  TicketDeparture: string;
  TicketArrived: string;
}

export interface Payment {
  PaymentId: number;
  PaymentStatus: string;
  PaymentTotal: string;
  PaymentMethod: string;
  PaymentCode: string;
  PaymentOrderId: number;
}

export interface PaymentForm {
  PaymentStatus: string;
  PaymentTotal: string;
  PaymentMethod: string;
  PaymentCode: string;
  PaymentOrderId: number;
}

export interface User {
  UserID: number;
  username: string;
  email: string;
  password: string;
  roleuser: number;
  Role: {
    RoleID: number;
    Name: string;
  };
}
export interface UserForm {
  username: string;
  email: string;
  password: string;
  roleuser: number;
}

export interface Roles {
  RoleID: number;
  Name: string;
  Description: string;
}

export interface User {
  user_id: number;
  email: string;
  username: string;
}

export interface OrderForm {
  orderPassengerName: string;
  orderHpNumber: string;
  orderResidenceNumber: string;
  orderUserId?: number;
  orderSeatId?: number;
  orderTicketId?: number;
}
