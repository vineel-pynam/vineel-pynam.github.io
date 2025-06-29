import React from 'react';
import { MapPin, Code, Palette, Brain } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "Full-Stack Development",
      description: "Building end-to-end solutions with modern technologies"
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Machine Learning",
      description: "Exploring AI and data-driven solutions"
    }
  ];

  const stats = [
    { number: "3.3+", label: "Years Experience" },
    { number: "2+", label: "Years Of Internship Experience" },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-gray-900 mb-16 text-center">
          About Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a backend-focused Software Engineer with <span className="font-semibold text-gray-900">3.3+ years of experience</span>, having worked at Opendoor and Optum (UHG). 
                I enjoy building scalable systems, solving production issues, and delivering impact through clean, reliable code.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I work primarily with Go, Java (Spring Boot), Kafka, and Kubernetes, with hands-on experience across AWS and Azure.
                I've led service migrations, reduced infra costs by up to 70%, and improved API performance by 90%. 
                I also enjoy building fullstack apps with React.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I love exploring new tools, contributing to tech communities, and mentoring developers. 
                I've earned multiple Bravo Awards and actively solve problems on LeetCode and InterviewBit.
                Currently, I'm open to new opportunities as an immediate joiner.
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>Hyderabad, India</span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">What I Do</h3>
              <div className="space-y-4">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-sm transition-shadow">
                    <div className="text-blue-600 mt-1 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">My Philosophy</h4>
              <blockquote className="text-gray-600 italic leading-relaxed">
                "Great software is not just about clean code—it's about understanding people, 
                solving real problems, and creating experiences that make life better."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;