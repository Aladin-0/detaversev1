
import React from 'react';
import { CanadaFlag, USFlag, MalaysiaFlag, NewZealandFlag } from './Icons';

interface DestinationMarkerProps {
    name: string;
    icon: React.ReactNode;
    position: string;
}

const DestinationMarker: React.FC<DestinationMarkerProps> = ({ name, icon, position }) => (
    <div className={`absolute ${position} flex items-center bg-white shadow-lg rounded-full p-2 pr-4`}>
        {icon}
        <span className="ml-2 font-semibold text-gray-800">{name}</span>
    </div>
);

const Destinations: React.FC = () => {
    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Destinations</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                    Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.
                </p>
                <div className="mt-12 relative h-96 bg-dots-pattern">
                    <img src="https://i.imgur.com/Y8bB5Mh.png" className="absolute inset-0 w-full h-full object-contain opacity-50" alt="Dotted world map"/>
                    
                    <div className="absolute top-1/4 left-1/4">
                        <DestinationMarker name="Canada" icon={<CanadaFlag className="w-8 h-8"/>} position="" />
                        <div className="absolute -bottom-8 left-1/2 w-3 h-3 bg-yellow-400 rounded-full ring-4 ring-yellow-200"></div>
                    </div>
                     <div className="absolute top-1/2 left-1/4 translate-y-4">
                        <DestinationMarker name="United States" icon={<USFlag className="w-8 h-8"/>} position="" />
                        <div className="absolute -bottom-8 left-1/2 w-3 h-3 bg-yellow-400 rounded-full ring-4 ring-yellow-200"></div>
                    </div>
                     <div className="absolute top-1/2 right-1/4 translate-y-8">
                        <DestinationMarker name="Malaysia" icon={<MalaysiaFlag className="w-8 h-8"/>} position="" />
                        <div className="absolute -bottom-8 left-1/2 w-3 h-3 bg-yellow-400 rounded-full ring-4 ring-yellow-200"></div>
                    </div>
                     <div className="absolute bottom-8 right-1/4">
                        <DestinationMarker name="New Zealand" icon={<NewZealandFlag className="w-8 h-8"/>} position="" />
                        <div className="absolute -bottom-8 left-1/2 w-3 h-3 bg-yellow-400 rounded-full ring-4 ring-yellow-200"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Destinations;
