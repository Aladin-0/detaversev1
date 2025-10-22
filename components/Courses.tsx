import React, { useState, useEffect } from 'react';

interface Course {
  id: number;
  title: string;
  tagline: string;
  description: string;
  price: string;
  originalPrice: string;
  features: string[];
  color: string;
  accentColor: string;
  stats: {
    label: string;
    value: string;
    icon: string;
  }[];
}

const coursesData: Course[] = [
  {
    id: 1,
    title: "Data Analytics",
    tagline: "Transform Data Into Stories",
    description: "Master the art of turning raw data into actionable business insights. Learn from real-world datasets and build a portfolio that speaks volumes.",
    price: "21,238",
    originalPrice: "43,000",
    features: ["12 Weeks", "Live Projects", "2.5K+ Students", "Industry Mentors"],
    color: "from-blue-600 via-cyan-500 to-teal-400",
    accentColor: "blue",
    stats: [
      { label: "Students Enrolled", value: "2,500+", icon: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png" },
      { label: "Success Rate", value: "97%", icon: "https://cdn-icons-png.flaticon.com/512/7518/7518748.png" },
      { label: "Average Salary Hike", value: "50%", icon: "https://cdn-icons-png.flaticon.com/512/2489/2489756.png" },
      { label: "Career Ready Skills", value: "15+", icon: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png" }
    ]
  },
  {
    id: 2,
    title: "Business Analytics",
    tagline: "Drive Strategic Decisions",
    description: "Bridge the gap between data and business strategy. Learn to communicate insights that drive million-dollar decisions.",
    price: "21,238",
    originalPrice: "43,000",
    features: ["10 Weeks", "Case Studies", "1.8K+ Students", "Career Support"],
    color: "from-purple-600 via-pink-500 to-rose-400",
    accentColor: "purple",
    stats: [
      { label: "Students Enrolled", value: "1,800+", icon: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png" },
      { label: "Success Rate", value: "93%", icon: "https://cdn-icons-png.flaticon.com/512/1533/1533913.png" },
      { label: "Average Salary Hike", value: "42%", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png" },
      { label: "Business Projects", value: "20+", icon: "https://cdn-icons-png.flaticon.com/512/1087/1087815.png" }
    ]
  }
];

const tools = [
  { 
    name: "Excel", 
    icon: "https://cdn-icons-png.flaticon.com/512/732/732220.png", 
    desc: "Data Management" 
  },
  { 
    name: "Python", 
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png", 
    desc: "Programming" 
  },
  { 
    name: "Power BI", 
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/2048px-New_Power_BI_Logo.svg.png", 
    desc: "Visualization" 
  },
  { 
    name: "Tableau", 
    icon: "https://logos-world.net/wp-content/uploads/2021/10/Tableau-Symbol.png", 
    desc: "Dashboards" 
  },
  { 
    name: "SQL", 
    icon: "https://cdn-icons-png.flaticon.com/512/4492/4492311.png", 
    desc: "Databases" 
  },
  { 
    name: "R", 
    icon: "https://www.r-project.org/logo/Rlogo.png", 
    desc: "Statistics" 
  },
  { 
    name: "Pandas", 
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pandas_mark.svg/1200px-Pandas_mark.svg.png", 
    desc: "Analysis" 
  },
  { 
    name: "NumPy", 
    icon: "https://user-images.githubusercontent.com/67586773/105040771-43887300-5a88-11eb-9f01-bee100b9ef22.png", 
    desc: "Computing" 
  },
  { 
    name: "Matplotlib", 
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Created_with_Matplotlib-logo.svg/2048px-Created_with_Matplotlib-logo.svg.png", 
    desc: "Plotting" 
  },
  { 
    name: "Seaborn", 
    icon: "https://seaborn.pydata.org/_static/logo-wide-lightbg.svg", 
    desc: "Visuals" 
  },
  { 
    name: "Looker", 
    icon: "https://cdn.worldvectorlogo.com/logos/looker-1.svg", 
    desc: "BI Tools" 
  },
  { 
    name: "MongoDB", 
    icon: "https://www.svgrepo.com/show/331488/mongodb.svg", 
    desc: "NoSQL" 
  }
];

const benefitsData = {
  1: [ // Data Analytics
    { 
      icon: "https://cdn-icons-png.flaticon.com/512/4807/4807735.png", 
      title: "Industry Certification",
      points: ["Globally Recognized Certificate", "LinkedIn Verified Badge", "Portfolio of 5+ Real Projects"]
    },
    { 
      icon: "https://cdn-icons-png.flaticon.com/512/2821/2821634.png", 
      title: "Real-World Datasets",
      points: ["Work with Live Data", "Industry Case Studies", "Kaggle Competitions"]
    },
    { 
      icon: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png", 
      title: "Expert Data Mentors",
      points: ["Weekly 1-on-1 Sessions", "Code & Analysis Reviews", "Career Path Guidance"]
    },
    { 
      icon: "https://cdn-icons-png.flaticon.com/512/3079/3079652.png", 
      title: "Analytics Community",
      points: ["500+ Data Professionals", "50+ Countries Network", "Monthly Hackathons"]
    },
    { 
      icon: "https://cdn-icons-png.flaticon.com/512/2942/2942156.png", 
      title: "Career Acceleration",
      points: ["Interview Preparation", "Resume Building Workshop", "Networking Events"]
    },
    { 
      icon: "https://cdn-icons-png.flaticon.com/512/2354/2354576.png", 
      title: "Lifetime Learning",
      points: ["Self-Paced Access", "Updated Course Content", "Alumni Community"]
    }
  ],
  2: [ // Business Analytics
    { 
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135810.png", 
      title: "Professional Certification",
      points: ["Recognized by Top Companies", "Digital Badge for LinkedIn", "Business Case Portfolio"]
    },
    { 
      icon: "https://cdn-icons-png.flaticon.com/512/921/921591.png", 
      title: "Business Case Studies",
      points: ["Fortune 500 Cases", "Strategic Decision Making", "Financial Modeling"]
    },
    { 
      icon: "https://cdn-icons-png.flaticon.com/512/2917/2917641.png", 
      title: "Business Leaders Mentorship",
      points: ["1-on-1 Strategy Sessions", "Business Plan Reviews", "Industry Insights"]
    },
    { 
      icon: "https://cdn-icons-png.flaticon.com/512/1534/1534938.png", 
      title: "Professional Network",
      points: ["Business Analysts Circle", "Global Networking Events", "Peer Learning Groups"]
    },
    { 
      icon: "https://cdn-icons-png.flaticon.com/512/2942/2942327.png", 
      title: "Career Growth",
      points: ["Executive Role Prep", "Salary Negotiation Tips", "LinkedIn Optimization"]
    },
    { 
      icon: "https://cdn-icons-png.flaticon.com/512/747/747376.png", 
      title: "Continuous Access",
      points: ["Learn At Your Pace", "Regular Content Updates", "Professional Community"]
    }
  ]
};

const Courses: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeSection, setActiveSection] = useState<'overview' | 'tools' | 'benefits'>('overview');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCourseChange = (courseId: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedCourse(courseId);
      setIsAnimating(false);
    }, 300);
  };

  const currentCourse = coursesData.find(c => c.id === selectedCourse) || coursesData[0];
  const currentBenefits = benefitsData[selectedCourse as keyof typeof benefitsData] || benefitsData[1];

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Dynamic Gradient Background with Mouse Tracking */}
      <div 
        className="absolute inset-0 opacity-5 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3), transparent 50%)`
        }}
      />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Minimalist Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-300"></div>
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Learn • Grow • Excel</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Choose Your
            <br />
            <span className={`bg-gradient-to-r ${currentCourse.color} bg-clip-text text-transparent transition-all duration-700`}>
              Path Forward
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Immersive learning experiences designed for the modern data professional
          </p>
        </div>

        {/* Revolutionary Course Selector - Horizontal Timeline */}
        <div className="mb-20">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 -translate-y-1/2 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative max-w-3xl mx-auto">
              {coursesData.map((course, index) => (
                <div
                  key={course.id}
                  onClick={() => handleCourseChange(course.id)}
                  className="relative cursor-pointer group"
                >
                  {/* Node Circle */}
                  <div className="flex justify-center mb-6">
                    <div className={`
                      relative w-20 h-20 rounded-full flex items-center justify-center
                      transition-all duration-500 transform
                      ${selectedCourse === course.id 
                        ? `bg-gradient-to-br ${course.color} scale-110 shadow-2xl` 
                        : 'bg-gray-100 scale-90 hover:scale-100'
                      }
                    `}>
                      <span className={`text-3xl font-bold transition-colors duration-300 ${
                        selectedCourse === course.id ? 'text-white' : 'text-gray-400 group-hover:text-gray-600'
                      }`}>
                        {index + 1}
                      </span>
                      
                      {/* Pulse Animation for Active */}
                      {selectedCourse === course.id && (
                        <>
                          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${course.color} animate-ping opacity-20`}></div>
                          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${course.color} opacity-30 blur-xl`}></div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Course Info */}
                  <div className={`
                    text-center transition-all duration-500
                    ${selectedCourse === course.id ? 'opacity-100' : 'opacity-50 group-hover:opacity-75'}
                  `}>
                    <h3 className={`text-2xl font-bold mb-2 transition-all duration-300 ${
                      selectedCourse === course.id 
                        ? `bg-gradient-to-r ${course.color} bg-clip-text text-transparent` 
                        : 'text-gray-700'
                    }`}>
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium">{course.tagline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Immersive Content Area with Glassmorphism */}
        <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
          
          {/* Navigation Pills */}
          <div className="flex justify-center gap-3 mb-12">
            {(['overview', 'tools', 'benefits'] as const).map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`
                  px-8 py-3 rounded-full font-semibold capitalize transition-all duration-300
                  ${activeSection === section
                    ? `bg-gradient-to-r ${currentCourse.color} text-white shadow-lg scale-105`
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }
                `}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Dynamic Content Sections */}
          <div className="min-h-[600px]">
            {/* Overview Section */}
            {activeSection === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fadeIn">
                {/* Left: Course Details */}
                <div className="space-y-8">
                  <div>
                    <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${currentCourse.color} text-white text-sm font-bold mb-6`}>
                      🔥 Limited Seats Available
                    </div>
                    <h3 className="text-4xl font-black text-gray-900 mb-4">
                      {currentCourse.title}
                    </h3>
                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                      {currentCourse.description}
                    </p>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {currentCourse.features.map((feature, index) => (
                        <div
                          key={index}
                          className="px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-700 hover:bg-gray-200 transition-colors"
                        >
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Pricing */}
                    <div className="flex items-end gap-4 mb-8">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Special Price</p>
                        <div className="flex items-baseline gap-3">
                          <span className={`text-5xl font-black bg-gradient-to-r ${currentCourse.color} bg-clip-text text-transparent`}>
                            ₹{currentCourse.price}
                          </span>
                          <span className="text-2xl text-gray-400 line-through">
                            ₹{currentCourse.originalPrice}
                          </span>
                        </div>
                      </div>
                      <div className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm font-bold">
                        Save 50%
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-4">
                      <button className={`
                        flex-1 py-4 px-8 rounded-2xl font-bold text-white
                        bg-gradient-to-r ${currentCourse.color}
                        hover:shadow-2xl transform hover:scale-105 transition-all duration-300
                      `}>
                        Start Learning →
                      </button>
                      <button className="py-4 px-8 rounded-2xl font-bold border-2 border-gray-300 text-gray-700 hover:border-gray-400 transition-all duration-300">
                        View Curriculum
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right: Interactive Visual */}
                <div className="relative">
                  <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${currentCourse.color} p-1`}>
                    <div className="bg-white rounded-3xl p-8">
                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-6">
                        {currentCourse.stats.map((stat, index) => (
                          <div
                            key={index}
                            className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                          >
                            <img 
                              src={stat.icon} 
                              alt={stat.label} 
                              className="w-16 h-16 mx-auto mb-3 object-contain" 
                            />
                            <div className={`text-3xl font-black bg-gradient-to-r ${currentCourse.color} bg-clip-text text-transparent mb-1`}>
                              {stat.value}
                            </div>
                            <div className="text-xs text-gray-600 font-semibold">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className={`absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br ${currentCourse.color} rounded-full opacity-20 blur-2xl animate-pulse`}></div>
                  <div className={`absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br ${currentCourse.color} rounded-full opacity-20 blur-2xl animate-pulse delay-1000`}></div>
                </div>
              </div>
            )}

            {/* Tools Section */}
            {activeSection === 'tools' && (
              <div className="animate-fadeIn">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-black text-gray-900 mb-4">Master Industry Tools</h3>
                  <p className="text-gray-600">Build expertise in the most in-demand technologies</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {tools.map((tool, index) => (
                    <div
                      key={index}
                      className="group relative bg-white border-2 border-gray-100 rounded-2xl p-6 text-center hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
                    >
                      <img 
                        src={tool.icon} 
                        alt={tool.name} 
                        className="w-16 h-16 mx-auto mb-3 object-contain transform group-hover:scale-125 transition-transform duration-300" 
                      />
                      <h4 className="font-bold text-gray-900 mb-1">{tool.name}</h4>
                      <p className="text-xs text-gray-500">{tool.desc}</p>
                      
                      {/* Hover Gradient Effect */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${currentCourse.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits Section */}
            {activeSection === 'benefits' && (
              <div className="animate-fadeIn">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-black text-gray-900 mb-4">Everything You Need To Succeed</h3>
                  <p className="text-gray-600">Comprehensive support from day one to career growth</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="group relative bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
                    >
                      <img 
                        src={benefit.icon} 
                        alt={benefit.title} 
                        className="w-16 h-16 mb-4 object-contain transform group-hover:scale-110 transition-transform duration-300" 
                      />
                      <h4 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h4>
                      <ul className="space-y-2">
                        {benefit.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600">
                            <span className={`mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${currentCourse.color} flex-shrink-0`}></span>
                            <span className="text-sm">{point}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Hover Effect */}
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${currentCourse.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Social Proof */}

      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Courses;