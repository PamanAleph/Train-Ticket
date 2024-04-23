import CardTrain from "@/components/main/CardTrain";
import Greetings from "@/components/main/Greetings";
import Input from "@/components/main/Input";
import TrainCard from "@/components/main/TrainCard";
import TrainIcons from "@/components/main/TrainIcons";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex justify-center items-center">
      <div className="text-center">
        <Greetings />
        <Input type="text" placeholder="test" />

        <div className="py-2">
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
