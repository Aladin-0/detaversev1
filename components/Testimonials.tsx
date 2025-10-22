import React, { useState, useEffect } from 'react';

interface Testimonial {
  name: string;
  university: string;
  review: string;
  imageUrl: string;
  linkedinUrl: string;
  role: string;
  achievement: string;
  rating: number;
  company: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: "Leslie Alexander",
    university: "University of Essex",
    role: "Data Analyst",
    company: "Google",
    achievement: "Hired at Google",
    rating: 5,
    review: "Data Verse transformed my career trajectory. The hands-on projects and expert mentorship provided exactly what I needed to transition into data analytics at a top-tier company.",
    imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
    linkedinUrl: "https://linkedin.com/in/lesliealexander"
  },
  {
    name: "Kristin Watson",
    university: "Richmond American University",
    role: "Business Analyst",
    company: "Microsoft",
    achievement: "Promoted in 6 months",
    rating: 5,
    review: "The practical, industry-focused curriculum made all the difference. I went from complete beginner to confident analyst, and was promoted within six months of completing the program.",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    linkedinUrl: "https://linkedin.com/in/kristinwatson"
  },
  {
    name: "Albert Flores",
    university: "Ulster University",
    role: "Senior Analyst",
    company: "Amazon",
    achievement: "50% salary increase",
    rating: 5,
    review: "Best investment in my professional development. The real-world datasets and industry projects prepared me perfectly for the demands of working at a major tech company.",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    linkedinUrl: "https://linkedin.com/in/albertflores"
  },
  {
    name: "Savannah Nguyen",
    university: "University of Oxford",
    role: "Data Scientist",
    company: "Meta",
    achievement: "Leading ML projects",
    rating: 5,
    review: "The mentorship and community support at Data Verse are exceptional. The program gave me the confidence and skills to lead machine learning projects at one of the world's top tech companies.",
    imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
    linkedinUrl: "https://linkedin.com/in/savannahnguyen"
  },
  {
    name: "Robert Fox",
    university: "Stanford University",
    role: "Analytics Manager",
    company: "Apple",
    achievement: "Team lead in 1 year",
    rating: 5,
    review: "The curriculum is perfectly designed for career changers. Within a year of completing the program, I was leading a team of analysts at a Fortune 500 company.",
    imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
    linkedinUrl: "https://linkedin.com/in/robertfox"
  },
  {
    name: "Jenny Wilson",
    university: "MIT",
    role: "BI Developer",
    company: "IBM",
    achievement: "Built 5+ dashboards",
    rating: 5,
    review: "Outstanding program with industry-expert instructors. The challenging projects pushed me to develop skills that directly translated to success in my current role.",
    imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
    linkedinUrl: "https://linkedin.com/in/jennywilson"
  }
];

const ProfessionalTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-blue-700">Success Stories That Speak Volumes</span>
          </div>
          
          {/* ----- MODIFIED SECTION START ----- */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            From Learning to <span className="text-blue-600">Earning</span>
          </h2>
          {/* Changed text-base to text-xs */}
          <p className="text-xs text-gray-600 max-w-3xl mx-auto">
            Our students share their journey from zero analytics experience to landing data analyst roles—complete with salary jumps and career growth.
          </p>
          {/* ----- MODIFIED SECTION END ----- */}

        </div>

        {/* Main Testimonial Card */}
        <div 
          className="max-w-5xl mx-auto mb-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-xl">
            <div className="grid md:grid-cols-5 gap-8 p-8 md:p-12">
              {/* Left Side - Image */}
              <div className="md:col-span-2 flex flex-col items-center justify-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 group-hover:opacity-30 blur transition duration-500" />
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <img
                      src={testimonialsData[currentIndex].imageUrl}
                      alt={testimonialsData[currentIndex].name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Profile Info */}
                <div className="text-center mt-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {testimonialsData[currentIndex].name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-1">
                    {testimonialsData[currentIndex].role}
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    {testimonialsData[currentIndex].university}
                  </p>
                  
                  {/* Company Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium text-gray-700">
                      {testimonialsData[currentIndex].company}
                    </span>
                  </div>

                  {/* LinkedIn Link */}
                  <a
                    href={testimonialsData[currentIndex].linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    View Profile
                  </a>
                </div>
              </div>

              {/* Right Side - Review */}
              <div className="md:col-span-3 flex flex-col justify-center">
                {/* Quote Icon */}
                <svg className="w-12 h-12 text-blue-100 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                {/* Review Text */}
                <p className="text-xl text-gray-700 leading-relaxed mb-8 font-light">
                  {testimonialsData[currentIndex].review}
                </p>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonialsData[currentIndex].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-gray-600 font-medium">5.0</span>
                </div>

                {/* Achievement Badge */}
                <div className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100 w-fit">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span className="text-sm font-semibold text-gray-700">
                    {testimonialsData[currentIndex].achievement}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="group w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-blue-500 hover:bg-blue-50 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="flex items-center gap-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-blue-600'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="group w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-blue-500 hover:bg-blue-50 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Thumbnail Strip */}
        <div className="mt-12 flex justify-center gap-4 overflow-x-auto pb-4">
          {testimonialsData.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 transition-all duration-300 ${
                index === currentIndex ? 'scale-100 opacity-100' : 'scale-90 opacity-40 hover:opacity-70'
              }`}
            >
              <div className={`w-16 h-16 rounded-full overflow-hidden border-3 transition-all duration-300 ${
                index === currentIndex ? 'border-blue-600 shadow-lg' : 'border-gray-200'
              }`}>
                <img
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </button>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gray-200">
          {[
            { number: '10,000+', label: 'Happy Students', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
            { number: '95%', label: 'Success Rate', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
            { number: '4.9/5', label: 'Average Rating', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
            { number: '50+', label: 'Partner Companies', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                  </svg>
                </div>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalTestimonials;