
import React from 'react';
import { StarIcon, AustraliaFlag, USFlag, SparkleIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 lg:pt-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:flex-col lg:justify-center">
            <h1>
              <span className="flex items-center sm:justify-center lg:justify-start">
                <span className="bg-red-100 text-red-600 text-sm font-medium px-3 py-1 rounded-full flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  100% Free Counselling & Application Processing
                </span>
              </span>
              <span className="mt-4 block text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="text-gray-500">A Symbol of</span>
                <span className="block">Reliability on your</span>
                <span className="block text-gray-900">Innovative Path</span>
              </span>
            </h1>
            <p className="mt-6 text-base text-gray-600 sm:text-lg md:max-w-xl md:mx-auto lg:mx-0">
              Data Verse is a premier educational consultancy dedicated to helping students achieve their dreams of studying abroad. Our experienced team excels in providing tailored solutions, identifying new opportunities.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md">
                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-full text-black bg-brand-yellow hover:bg-yellow-400 md:py-4 md:text-lg md:px-10 transition duration-300">
                  Book an Appointment
                </a>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-4 flex items-center justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://picsum.photos/id/237/100/100" alt="User 1"/>
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://picsum.photos/id/238/100/100" alt="User 2"/>
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://picsum.photos/id/239/100/100" alt="User 3"/>
                </div>
                <div className="ml-4">
                  <div className="flex items-center">
                    <StarIcon className="w-5 h-5 text-yellow-400" />
                    <span className="ml-1 font-bold text-gray-800">4.9 Rating</span>
                  </div>
                  <div className="text-sm text-gray-500">(Google)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-100 rounded-full transform scale-125 translate-x-1/4 translate-y-1/4"></div>
                 <div className="absolute inset-0">
                    <svg className="absolute text-gray-200/50 w-[800px] h-[800px] -left-20 -top-20" fill="none" viewBox="0 0 800 800">
                        <defs>
                            <pattern id="pattern-wavy" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
                                <path d="M0 20 C10 10, 30 10, 40 20" stroke="currentColor" strokeWidth="1" fill="none"></path>
                            </pattern>
                        </defs>
                        <rect width="800" height="800" fill="url(#pattern-wavy)"></rect>
                    </svg>
                </div>
                <img className="relative mx-auto" src="https://i.imgur.com/n6bO0iN.png" alt="Graduation student" />
                <div className="absolute top-1/4 left-0 -translate-x-1/4 animate-pulse">
                    <SparkleIcon className="w-8 h-8 text-yellow-400"/>
                    <SparkleIcon className="w-5 h-5 text-yellow-400 ml-8"/>
                </div>
                <div className="absolute bottom-1/4 right-0 translate-x-1/4 animate-pulse">
                    <SparkleIcon className="w-6 h-6 text-indigo-400"/>
                </div>
                
                <div className="absolute top-1/2 -left-8 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg flex items-center">
                  <AustraliaFlag className="w-6 h-6 rounded-full" />
                  <span className="ml-2 font-semibold text-sm">Australia</span>
                </div>
                 <div className="absolute bottom-1/4 -right-10 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg flex items-center">
                  <USFlag className="w-6 h-6 rounded-full" />
                  <span className="ml-2 font-semibold text-sm">United States</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
