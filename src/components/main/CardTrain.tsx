import Link from "next/link";
import { FaArrowRightArrowLeft, FaTrainSubway } from "react-icons/fa6";
import Separator from "../ui/Separator";

interface CardTrainProps {
  title: string;
  price: number;
  departureTime: string;
  arrivalTime: string;
  departureCity: string;
  arrivalCity: string;
  trainClass: string;
}

function CardTrain({
  title,
  price,
  departureTime,
  arrivalTime,
  departureCity,
  arrivalCity,
  trainClass,
}: CardTrainProps) {
  return (
    <div className="border border-violet-400 rounded-xl mb-2">
      <div className="flex justify-between p-3 border-b border-dashed rounded-t-xl bg-gradient-to-r from-blue-600 to-violet-600">
        <h1 className="text-xl font-medium text-white">{title}</h1>
        <div>
          <h1 className="text-base text-white">Price</h1>
          <h2 className="text-white px-3 py-1 rounded bg-violet-900">Rp{price.toFixed(3)}/pax</h2>
        </div>
      </div>
      <div>
        <div className="w-full max-w-md">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 p-4 sm:p-6">
            <div>
              <FaTrainSubway size={35} color="blue" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-medium">UA 123</span>
                <span className="text-gray-500 dark:text-gray-400">
                  {trainClass}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>{departureCity}</span>
                <FaArrowRightArrowLeft className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <span>{arrivalCity}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-400">
                  {departureTime}
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  {arrivalTime}
                </span>
              </div>
            </div>
          </div>
          <div className="py-2">
            <Link href="/available-seat">
              <button className="border px-7 py-2 rounded-md bg-blue-500 text-white">
                Book This Train
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTrain;
