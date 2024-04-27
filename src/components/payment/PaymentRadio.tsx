import Image from "next/image";
import React from "react";

interface PaymentRadioProps {
    title: string;
    checked?: boolean;
    price: number;
}

function PaymentRadio({ title, checked, price }: PaymentRadioProps) {
    return (
        <div>
            <fieldset className="space-y-4">
                <legend className="sr-only">Payment Options</legend>

                <div>
                    <label
                        htmlFor={`${title.toLowerCase()}`}
                        className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
                    >

                        <div>
                            <p className="text-gray-700"> Pay With {title}</p>

                            <p className="mt-1 text-gray-900 font-semibold">Rp{price.toFixed(3)}</p>
                        </div>

                        <input
                            type="radio"
                            name="PaymentOption"
                            value={title.toLowerCase()}
                            id={title.toLowerCase()}
                            className="size-5 border-gray-300 text-blue-500"
                            checked={checked}
                        />
                    </label>
                </div>
            </fieldset>
        </div>
    );
}

export default PaymentRadio;
