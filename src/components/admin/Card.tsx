import Link from 'next/link';
import React from 'react';

interface CardProps {
  title: string;
  img: string;
}

function Card({ title, img }: CardProps) {
  return (
    <section className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
      <div className="flex items-start sm:gap-8">
        <div
          className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
          aria-hidden="true"
        >
          <img
            className="h-full w-full object-cover rounded-full"
            src= {`/icon/${img}`}
            alt="User Logo"
          />
        </div>
        <h3 className="mt-4 text-lg font-medium sm:text-xl">
          <a href="#" className="hover:underline">
            {' '}
            {title}{' '}
          </a>
        </h3>
        <div className="mt-4 sm:flex sm:items-center sm:gap-2">
          <div className="flex items-center gap-1 text-gray-500">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
            <span className="hidden sm:block" aria-hidden="true">
              &middot;
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
