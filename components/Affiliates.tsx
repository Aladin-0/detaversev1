import React from 'react';

const affiliatesRow1 = [
  { name: "Wipro", logo: "/logos/wipro.png" },
  { name: "IBM", logo: "/logos/ibm.png" },
  { name: "Citibank", logo: "/logos/citibank.png" },
  { name: "Infosys", logo: "/logos/infosys.png" },
  { name: "Capgemini", logo: "/logos/capgemini.png" }
];

const affiliatesRow2 = [
  { name: "Cognizant", logo: "/logos/cognizant.png" },
  { name: "Datametica", logo: "/logos/datametica.png" },
  { name: "TCS", logo: "/logos/tcs.png" },
  { name: "Amdocs", logo: "/logos/amdocs.png" },
  { name: "Xoriant", logo: "/logos/xoriant.png" }
];

const LogoCard: React.FC<{ affiliate: { name: string; logo: string } }> = ({ affiliate }) => (
  <div className="flex-shrink-0 mx-6 group">
    <div className="relative w-40 h-28 flex items-center justify-center bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2">
      {/* Gradient glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/0 via-purple-400/0 to-pink-400/0 group-hover:from-blue-400/20 group-hover:via-purple-400/20 group-hover:to-pink-400/20 transition-all duration-500"></div>
      
      <img 
        src={affiliate.logo} 
        alt={`${affiliate.name} logo`}
        className="relative z-10 h-14 w-auto max-w-[140px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
        onError={(e) => {
          const target = e.currentTarget;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            const text = document.createElement('span');
            text.className = 'relative z-10 text-lg font-bold text-gray-700 group-hover:text-gray-900 transition-colors';
            text.textContent = affiliate.name;
            parent.appendChild(text);
          }
        }}
      />
    </div>
  </div>
);

const Affiliates: React.FC = () => {
    // Duplicate arrays for seamless loop
    const extendedRow1 = [...affiliatesRow1, ...affiliatesRow1, ...affiliatesRow1];
    const extendedRow2 = [...affiliatesRow2, ...affiliatesRow2, ...affiliatesRow2];

    return (
        <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
            
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                {/* Header */}
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Our Partners</span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent via-purple-400 to-transparent"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        Trusted By Industry
                        <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Leaders Worldwide
                        </span>
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        Partnering with Fortune 10+companies and innovative startups across the globe
                    </p>
                </div>

                {/* Animated Logo Rows */}
                <div className="space-y-8">
                    {/* Row 1 - Left to Right */}
                    <div className="relative">
                        <div className="flex overflow-hidden">
                            <div className="flex animate-scroll-left">
                                {extendedRow1.map((affiliate, index) => (
                                    <LogoCard key={`row1-${index}`} affiliate={affiliate} />
                                ))}
                            </div>
                        </div>
                        {/* Gradient fade edges */}
                        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
                    </div>

                    {/* Row 2 - Right to Left */}
                    <div className="relative">
                        <div className="flex overflow-hidden">
                            <div className="flex animate-scroll-right">
                                {extendedRow2.map((affiliate, index) => (
                                    <LogoCard key={`row2-${index}`} affiliate={affiliate} />
                                ))}
                            </div>
                        </div>
                        {/* Gradient fade edges */}
                        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { value: "10+", label: "Global Partners" },
                        { value: "50K+", label: "Professionals Trained" },
                        { value: "25+", label: "Countries" },
                        { value: "95%", label: "Success Rate" }
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes scroll-left {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.333%);
                    }
                }

                @keyframes scroll-right {
                    0% {
                        transform: translateX(-33.333%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }

                .animate-scroll-left {
                    animation: scroll-left 30s linear infinite;
                }

                .animate-scroll-right {
                    animation: scroll-right 30s linear infinite;
                }

                .animate-scroll-left:hover,
                .animate-scroll-right:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}

export default Affiliates;