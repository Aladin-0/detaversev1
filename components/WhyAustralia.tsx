import React from 'react';
import { CheckIcon } from './Icons';

const WhyAustralia: React.FC = () => {
  const benefits = [
    "Data Verse brings together 500+ data professionals, industry mentors, and learners from 50+ countries who share your passion for analytics.",
    "Research shows that 85% of jobs are filled through networking, and our community is designed to maximize these opportunities for you.",
    "Every person you meet—from classmates on project teams to expert mentors—becomes part of your professional circle.",
    "You'll collaborate on real analytics problems, learn industry best practices, and build relationships that extend far beyond the classroom.",
    "Studies reveal that 70% of professionals landed their current position through connections they built in their network."
  ];

  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="relative h-auto flex items-center justify-center">
            <img src="/dataverse1.png" alt="Data Verse Networking" className="w-full h-auto" />
          </div>

          <div className="mt-12 lg:mt-0">
            <span className="text-sm font-semibold uppercase tracking-wider text-red-500 bg-red-100 px-3 py-1 rounded-full">Study With Data Verse</span>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Build Connections That Launch Careers
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Data Verse brings together 500+ data professionals, industry mentors, and learners from 50+ countries who share your passion for analytics. Research shows that 85% of jobs are filled through networking, and our community is designed to maximize these opportunities for you.
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