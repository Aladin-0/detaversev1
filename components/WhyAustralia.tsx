
import React from 'react';
import { CheckIcon } from './Icons';

const WhyAustralia: React.FC = () => {
  const benefits = [
    "Studying in Australia provides an exceptional education along with a rich cultural experience.",
    "Australia boasts top-tier universities with outstanding programs and research opportunities.",
    "Australia offers a dynamic cultural immersion and a global viewpoint, perfect for career-focused students.",
    "Australia's breathtaking scenery and welcoming communities foster an excellent learning atmosphere.",
    "Studying in Australia not only enhances your academic credentials but also helps forge lifelong friendships."
  ];

  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="relative h-96 lg:h-auto">
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-blue-100 rounded-full"></div>
            <div className="absolute bottom-0 -right-12 w-24 h-24 bg-yellow-100 rounded-full"></div>

            <div className="absolute top-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-2xl transform rotate-[-8deg] hover:rotate-[-4deg] hover:scale-105 transition-transform duration-300">
              <img src="https://picsum.photos/seed/bigben/800/600" alt="Big Ben" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-1/4 w-[45%] h-[45%] rounded-3xl overflow-hidden shadow-2xl transform rotate-[4deg] hover:rotate-[2deg] hover:scale-105 transition-transform duration-300">
              <img src="https://picsum.photos/seed/cathedral/800/600" alt="Cathedral" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-1/4 right-0 w-[55%] h-[55%] rounded-3xl overflow-hidden shadow-2xl transform rotate-[6deg] hover:rotate-[3deg] hover:scale-105 transition-transform duration-300">
              <img src="https://picsum.photos/seed/grad2/800/600" alt="Graduate student" className="w-full h-full object-cover" />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md p-3 rounded-lg shadow-xl flex items-center">
                <span className="bg-red-100 p-2 rounded-md">
                    <img src="https://i.imgur.com/GCR3z46.png" alt="Scholarship icon" className="w-6 h-6" />
                </span>
                <p className="ml-3 text-sm text-gray-700 font-semibold max-w-[150px]">More than 95% of our students receive scholarships</p>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <span className="text-sm font-semibold uppercase tracking-wider text-red-500 bg-red-100 px-3 py-1 rounded-full">Study in Australia</span>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Australia
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore the vibrant culture and stunning landscapes of Australia while pursuing your education.
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
        </div>
      </div>
    </section>
  );
};

export default WhyAustralia;
