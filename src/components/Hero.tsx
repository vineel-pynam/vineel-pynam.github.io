import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import vineelImg from '../assets/vineel-pynam.jpg';


const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Photo - Moved down with more top spacing */}
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gray-200 border-4 border-white shadow-xl overflow-hidden">
            <img
              src={vineelImg}
              alt="Vineel Pynam"
              className="w-400 h-400 object-cover"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 leading-tight">
              Vineel Pynam
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-4 font-light">
              Software Engineer (Backend & FullStack)
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-base text-gray-500 leading-relaxed">
              Architecting systems that scale, perform, and last.
              I care about clean design, strong ownership, and building what matters.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-2">
            <a
              href="https://github.com/vineel-pynam"
              className="text-gray-600 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-full"
              aria-label="GitHub"
              target='_blank'
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/vineelpynam/"
              className="text-gray-600 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-full"
              aria-label="LinkedIn"
              target='_blank'
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:pynamvineel23@gmail.com"
              className="text-gray-600 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-full"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator - Bottom */}
        <div className="mt-12">
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-400 hover:text-gray-600 transition-colors p-2"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;