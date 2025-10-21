
import React from 'react';

const affiliates_row1 = [
    "https://i.imgur.com/eBwwE5j.png",
    "https://i.imgur.com/N7iVp5a.png",
    "https://i.imgur.com/Kz4dY8a.png",
    "https://i.imgur.com/w2mBqA8.png",
    "https://i.imgur.com/UTr3c35.png",
    "https://i.imgur.com/0v8XqB7.png",
];
const affiliates_row2 = [
    "https://i.imgur.com/lJ4aE5E.png",
    "https://i.imgur.com/3q1Z5T3.png",
    "https://i.imgur.com/1mX1f0F.png",
    "https://i.imgur.com/jM8c3B9.png",
    "https://i.imgur.com/8Q4s6O4.png",
];
const affiliates_row3 = [
    "https://i.imgur.com/qA6G8S1.png",
    "https://i.imgur.com/6E2wG8u.png",
    "https://i.imgur.com/h5E3R3L.png",
    "https://i.imgur.com/uR2K2bT.png",
    "https://i.imgur.com/FjK8G9C.png",
    "https://i.imgur.com/tV8O0hG.png",
];


const Affiliates: React.FC = () => {
    const allAffiliates = [...affiliates_row1, ...affiliates_row2, ...affiliates_row3, ...affiliates_row1, ...affiliates_row2.slice(0,3)];
    return (
        <section className="py-16 lg:py-24 bg-brand-light">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Affiliates</h2>
                 <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                    Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.
                </p>
                <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-8 gap-y-12 items-center">
                    {allAffiliates.map((logo, index) => (
                         <div key={index} className="flex justify-center">
                            <img src={logo} alt={`Affiliate logo ${index + 1}`} className="h-10 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Affiliates;
