import React from 'react';
import { Code, Server, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-5 h-5" />,
      skills: ["React", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Backend",
      icon: <Server className="w-5 h-5" />,
      skills: ["Go", "Java", "C++", "Redis", "Kafka", "ElasticSearch", "AWS", "PostgreSQL", "Docker", "Kubernetes"]
    },
    {
      title: "Tools",
      icon: <Wrench className="w-5 h-5" />,
      skills: ["Git", "Splunk", "Datadog", "PagerDuty"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-gray-600">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="px-3 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium text-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;