
import React from 'react';

const Cta: React.FC = () => {
    return (
        <div className="py-16 lg:py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-brand-dark rounded-3xl p-8 sm:p-16 relative overflow-hidden">
                     <div className="absolute -bottom-20 -right-20 w-72 h-72">
                        <svg className="w-full h-full text-yellow-400/10" fill="none" viewBox="0 0 400 400">
                            <defs>
                                <pattern id="pattern-cta" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
                                    <path d="M0 20 C10 10, 30 10, 40 20" stroke="currentColor" strokeWidth="2" fill="none"></path>
                                </pattern>
                            </defs>
                            <rect width="400" height="400" fill="url(#pattern-cta)"></rect>
                        </svg>
                    </div>
                    <div className="relative flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
                        <div>
                            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Got a question?</h2>
                            <p className="mt-4 text-lg text-gray-300 max-w-xl">
                                If you have any queries, please drop us a message by filling out the form. We will connect you with an advisor as soon as possible!
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <a href="#" className="inline-block px-8 py-4 border border-transparent text-base font-semibold rounded-full text-black bg-brand-yellow hover:bg-yellow-400 transition duration-300">
                                Book an Appointment
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cta;
