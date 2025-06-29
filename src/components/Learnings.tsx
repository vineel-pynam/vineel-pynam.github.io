import React from 'react';
import { BookOpen, Code, Lightbulb } from 'lucide-react';

const Learnings = () => {
  const currentLearning = [
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "High Level & Low Level Design",
      description: "Deep diving into HLD & LLD in Java"
    }
  ];

  const booksReading = [
    {
      title: "Clean Architecture",
      author: "Robert C. Martin"
    },
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann"
    },
    {
      title: "The Pragmatic Programmer",
      author: "David Thomas & Andrew Hunt"
    }
  ];

  const recentLearnings = [
    "Studied design patterns in C++, Java",
  ];

  return (
    <section id="learnings" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">
          Continuous Learning
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Current Learning */}
          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-6 flex items-center">
              <Code className="w-5 h-5 mr-2" />
              Currently Learning
            </h3>
            <div className="space-y-4">
              {currentLearning.map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <div className="text-blue-600 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Books Reading */}
          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-6 flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              Currently Reading
            </h3>
            <div className="space-y-4">
              {booksReading.map((book, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-1">{book.title}</h4>
                  <p className="text-gray-600 text-sm">by {book.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Learnings */}
        <div className="mt-12">
          <h3 className="text-xl font-medium text-gray-900 mb-6 flex items-center">
            <Lightbulb className="w-5 h-5 mr-2" />
            Recent Learnings
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {recentLearnings.map((learning, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 text-sm">{learning}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learnings;