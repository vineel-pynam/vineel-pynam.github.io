import React, { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

const WorkExperience = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const experiences = [
    {
      title: "Software Engineer(SDE2 - L3)",
      company: "Opendoor",
      location: "Hyderabad, India",
      period: "MAR, 2024 - FEB, 2025",
      achievements: [
        "Served as the DRI (Directly Responsible Individual) for three backend services, handling them end-to-end.",
        "Optimized AWS Redis usage, enabling a downgrade from an m5.2xLarge to an m5.large instance, resulting in a 60% reduction in storage costs.",
        "Managed high-priority SEV-1 incidents during on-call shifts, documented root causes and resolutions, and conducted demos for stakeholders.",
        "Migrated two out of twenty owned services from a Kops-managed Kubernetes cluster to EKS.",
        "Resolved a critical TLS certificate issue using OpenSSL, dedicating a late night over the weekend to ensure minimal downtime.",
        "Led the bifurcation of the file creation process during a subsidiary’s transition out of the company, involving extensive coordination on expectations and data sharing."
      ],
      technologies: ["Go", "Redis", "Kafka", "ElasticSearch", "AWS", "PostgreSQL", "Docker", "Kubernetes", "React"]
    },
    {
      title: "Software Engineer",
      company: "Optum (United Health Group)",
      location: "Hyderabad, India",
      period: "DEC, 2021 - MAR, 2024",
      achievements: [
        "Led the end-to-end design and implementation of the backend reporting system for a healthcare product.",
        "Addressed the challenge of report generation within SLA by using pre-processing and multithreading, reducing API latency from 2 minutes to 10 seconds (90% improvement).",
        "Implemented a cost optimization strategy by introducing a scheduled Cron Job for data pre-processing, and improved read performance on Azure Cosmos DB using indexing and server-side caching, cutting costs by nearly 70%.",
        "Contributed significantly to the design and development of the Q/A Service, a business-critical feature."
      ],
      technologies: ["Java", "SpringBoot", "MongoDB (Azure CosmosDB)", "Docker", "Kubernetes"]
    },
    {
      title: "Web Developer Internship",
      company: "Indian Institute Of Information Technology(RGUKT)",
      location: "Kadapa, India",
      period: "FEB, 2019 - FEB, 2021",
      achievements: [
        "Completed an internship at my university where I developed end-to-end real-time full-stack web applications.",
        "App 1: Built a system to manage admissions for RGUKT (IIIT) campuses across Andhra Pradesh.",
        "App 2: Developed a platform to handle academic activities for both students and administrators.",
        "Admin functionalities included uploading results, verifying payments, and managing student records.",
        "Student functionalities included checking results, registering for exams, and submitting faculty surveys.",
      ],
      technologies: ["HTML", "CSS", "Javascript", "PHP", "MySQL"]
    },
  ];

  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">
          Work Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isExpanded = expandedItems.includes(index);
              
              return (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-white border-2 border-gray-300 rounded-full hidden md:block"></div>
                  
                  <div className="md:ml-16">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {exp.title}
                          </h3>
                          <p className="text-blue-600 font-medium">{exp.company}</p>
                        </div>
                        <div className="flex flex-col md:items-end mt-2 md:mt-0">
                          <div className="flex items-center text-gray-500 text-sm mb-1">
                            <Calendar size={14} className="mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center text-gray-500 text-sm">
                            <MapPin size={14} className="mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Achievements - Expandable */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {(isExpanded ? exp.achievements : exp.achievements.slice(0, 3)).map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start space-x-2 text-gray-600 text-sm">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                        
                        {/* View More/Less Button */}
                        {exp.achievements.length > 3 && (
                          <button
                            onClick={() => toggleExpanded(index)}
                            className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium mt-3 transition-colors"
                          >
                            <span>{isExpanded ? 'View Less' : `View More (${exp.achievements.length - 3} more)`}</span>
                            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                          </button>
                        )}
                      </div>
                      
                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;