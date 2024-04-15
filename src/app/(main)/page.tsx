import Greetings from "@/components/main/Greetings";
import Input from "@/components/main/Input";
import TrainCard from "@/components/main/TrainCard";
import TrainIcons from "@/components/main/TrainIcons";
import Image from "next/image";

const trainIcons = [
  {
    name : "Local",
    color : "#1C6AE4" 
  },
  {
    name : "KRL",
    color : "#FF7A1A" 
  },
  {
    name : "LRT",
    color : "#7E1DFA" 
  },
  {
    name : "MRT",
    color : "#1DC5FA" 
  },
]

export default function Home() {
  return (
    <section className="flex justify-center items-center">
      <div className="text-center">
        <Greetings />
        <Input type="text" placeholder="test" />
        <div className="grid grid-cols-4 gap-12 py-2">
          {trainIcons.map((trainIcon) => (
            <TrainIcons name={trainIcon.name} color={trainIcon.color} />
          ))}
        </div>
        <div className="">
            <TrainCard/>
        </div>
      </div>
    </section>
  );
}
