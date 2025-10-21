
import React from 'react';
import { CheckIcon, StarburstIcon } from './Icons';

const WhyUK: React.FC = () => {
  const benefits = [
    "Pursuing your studies in the UK offers an outstanding education paired with a rich cultural experience.",
    "The UK is home to prestigious universities that provide exceptional programs and research opportunities.",
    "Studying in the UK allows for a vibrant cultural experience and a global perspective, ideal for career-driven students.",
    "The UK's stunning scenery and friendly communities create an excellent environment for learning.",
    "Studying in the UK not only boosts your academic qualifications but also helps you build lasting friendships."
  ];

  return (
    <section className="py-16 lg:py-24 bg-brand-light overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="lg:order-2">
            <span className="text-sm font-semibold uppercase tracking-wider text-red-500 bg-red-100 px-3 py-1 rounded-full">Study in United Kingdom</span>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why United Kingdom
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover the lively culture and breathtaking landscapes of the UK while advancing your education.
            </p>
            <ul className="mt-8 space-y-4">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckIcon className="h-6 w-6 text-orange-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-600">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 lg:mt-0 lg:order-1 relative h-[450px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[450px] h-[450px] bg-yellow-400 rounded-full" />
            </div>
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full overflow-hidden transform -translate-x-8 -translate-y-8 shadow-2xl">
              <img src="https://picsum.photos/seed/harbour/400/400" className="w-full h-full object-cover" alt="Harbour bridge" />
            </div>
             <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full overflow-hidden transform translate-x-4 translate-y-8 shadow-2xl">
              <img src="https://picsum.photos/seed/grad3/400/400" className="w-full h-full object-cover" alt="Graduate student with diploma" />
            </div>
             <div className="absolute top-1/2 right-0 w-60 h-60 rounded-full overflow-hidden transform -translate-y-1/2 translate-x-8 shadow-2xl">
              <img src="https://picsum.photos/seed/opera/400/400" className="w-full h-full object-cover" alt="Opera house" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg">
                <StarburstIcon className="w-12 h-12 text-orange-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUK;
