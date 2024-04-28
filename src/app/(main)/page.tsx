import CardTrain from "@/components/main/CardTrain";
import Greetings from "@/components/main/Greetings";
import Input from "@/components/main/Input";

export default function Home() {
  return (
    <section className="flex justify-center items-center">
      <div className="text-center">
        <Greetings />
        <Input type="text" placeholder="test" />

        <div className="m-2 ">
          <CardTrain
            title="Express Class"
            price={239}
            departureTime="10:00 AM"
            arrivalTime="05:00 PM"
            departureCity="New York"
            arrivalCity="Los Angeles"
            trainClass="First Class"
          />
          <CardTrain
            title="Express Class"
            price={239}
            departureTime="10:00 AM"
            arrivalTime="05:00 PM"
            departureCity="New York"
            arrivalCity="Los Angeles"
            trainClass="First Class"
          />
          <CardTrain
            title="Express Class"
            price={239}
            departureTime="10:00 AM"
            arrivalTime="05:00 PM"
            departureCity="New York"
            arrivalCity="Los Angeles"
            trainClass="First Class"
          />
        </div>
      </div>
    </section>
  );
}
