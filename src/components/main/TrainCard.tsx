import { IoMdSwap } from "react-icons/io";
import Separator from "../ui/Separator";

function TrainCard() {
    return (
        <section>
            <article className="w-full bg-white rounded-2xl p-2 shadow-lg">
                <header className="flex flex-col-2 justify-between p-3 text-[#2D9CDB] text-[9px] text-xl font-[700]">
                    <h1>Departure</h1>
                    <h1>Destination</h1>
                </header>
                <div className="flex flex-col-3 justify-between p-3">
                    <div className="text-left">
                        <h1 className="text-[#59597C] font-[700]">Cikarang</h1>
                        <p className="pt-2 text-[#88879C] font-400">Lemah Abang Station</p>
                    </div>
                    <button>
                        <IoMdSwap />
                    </button>
                    <div className="text-right">
                        <h1 className="text-[#59597C] font-[700]">Jakarta</h1>
                        <p className="pt-2 text-[#88879C] font-400">Lemah Abang Station</p>
                    </div>
                </div>
                <Separator />
                <div className="p-3">
                    <h1 className="text-left">Departure Date</h1>
                    <div className="flex flex-col-2 justify-between items-center">
                        <h1>Tuesday, 2 April 2024</h1>
                        <div className="flex items-center gap-3">
                            <label
                                htmlFor="AcceptConditions"
                                className="relative h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-green-500"
                            >
                                <input
                                    type="checkbox"
                                    id="AcceptConditions"
                                    className="peer sr-only"
                                />

                                <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
                            </label>
                            Commuting
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 p-3">
                    <div>
                        <h1>Number of passenger</h1>
                        <div>
                            <label htmlFor="Quantity" className="sr-only">
                                {" "}
                                Quantity{" "}
                            </label>

                            <div className="flex items-center gap-1">
                                <button
                                    type="button"
                                    className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                                >
                                    -
                                </button>

                                <input
                                    type="number"
                                    id="Quantity"
                                    value="1"
                                    className="h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                />

                                <button
                                    type="button"
                                    className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="w-[20px] py-3 font-semibold rounded dark:bg-gray-800 dark:text-gray-100"
                    >
                        Find Ticket
                    </button>
                </div>
            </article>
        </section>
    );
}

export default TrainCard;
