import React from 'react';
import { Shield } from 'lucide-react';

export function Hero() {
  return (
    <section 
      id="home" 
      className="pt-20 pb-16 bg-black text-white relative min-h-screen"
      style={{
        backgroundImage: 'url("/images/hero.jpg")', // Update this to match your image name
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="flex justify-center">
            <Shield className="h-16 w-16 text-white" />
          </div>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl md:text-6xl">
            Secure Your Digital Life
          </h1>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl md:text-5xl text-gray-400">
            Enhance Your Privacy
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Enterprise-grade cybersecurity solutions protecting your business 24/7
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="#contact" className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-lg font-semibold transition">
              Get Started
            </a>
            <a href="#services" className="border border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-lg font-semibold transition">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}