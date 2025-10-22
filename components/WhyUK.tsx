import React from 'react';
import { CheckIcon } from './Icons';

const WhyUK: React.FC = () => {
  const benefits = [
    "We offer a transformative learning journey designed for individuals who are done with just watching tutorials and want to build real data analytics skills that employers actually hire for.",
    "With a commitment to practical, project-based learning, our program connects you with live datasets, real business challenges, and expert mentors who've solved analytics problems for top companies.",
    "Data Verse stands out for its dedication to delivering hands-on experience that goes beyond textbook exercises.",
    "Empowering you to tackle meaningful projects and create a portfolio that showcases your analytical abilities.",
    "Learn data analysis skills through real-world projects that matter to actual businesses."
  ];

  return (
    <section className="py-16 lg:py-24 bg-brand-light overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-blue-500 to-blue-700 px-3 py-1 rounded-full">Learning With Skills</span>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Tired of Theory Without Practice?
            </h2>
            <h3 className="mt-2 text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              Data Verse Hands-On Analytics Experience Program
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              We offer a transformative learning journey designed for individuals who are done with just watching tutorials and want to build real data analytics skills that employers actually hire for.
            </p>
            <ul className="mt-8 space-y-4">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckIcon className="h-6 w-6 text-blue-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-600">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-12 lg:mt-0 relative h-[450px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl transform rotate-3"></div>
            <div className="relative z-10">
              <img src="/dataverse2.png" alt="Data Verse Hands-On Learning" className="w-full h-auto max-w-lg rounded-2xl shadow-2xl" />
            </div>
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUK;