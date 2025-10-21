
import React from 'react';
import { PlayIcon } from './Icons';

interface TestimonialCardProps {
    name: string;
    university: string;
    imageUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, university, imageUrl }) => (
    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group shadow-lg">
        <img src={imageUrl} alt={`Photo of ${name}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white w-full flex justify-between items-end">
            <div>
                <h3 className="font-bold text-lg">{name}</h3>
                <p className="text-sm opacity-90">{university}</p>
            </div>
            <button className="w-12 h-12 flex-shrink-0 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                <PlayIcon className="w-6 h-6"/>
            </button>
        </div>
    </div>
);

const testimonialsData = [
    { name: "Leslie Alexander", university: "University of Essex", imageUrl: "https://picsum.photos/seed/leslie/600/800" },
    { name: "Kristin Watson", university: "Richmond American University", imageUrl: "https://picsum.photos/seed/kristin/600/800" },
    { name: "Albert Flores", university: "Ulster University", imageUrl: "https://picsum.photos/seed/albert/600/800" },
    { name: "Savannah Nguyen", university: "University of Oxford", imageUrl: "https://picsum.photos/seed/savannah/600/800" },
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">What Our Students Are Saying</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        Clarity provides you with the essential blocks and components to build a polished website, landing page, or admin panel for your SaaS.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {testimonialsData.map(testimonial => (
                        <TestimonialCard key={testimonial.name} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
