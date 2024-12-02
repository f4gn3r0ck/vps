import React from 'react';
import { CheckCircle } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-16 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white">About Sonix.Tech</h2>
            <p className="mt-4 text-lg text-gray-400">
              With over two decades of experience in networking, we provide enterprise-level protection
              for businesses of all sizes. Our team of experts is dedicated to keeping your digital
              assets safe and secure.
            </p>
            <div className="mt-8">
              {[
                "24/7 Security Monitoring",
                "Certified Security Experts",
                "Creative Solutions",
                "We Basis in the OSI Model",
                "Global Threat Intelligence",
                "IA Powered",
                "Rapid Incident Response"
              ].map((item, index) => (
                <div key={index} className="flex items-center mt-2">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="ml-2 text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <img
              src="/images/about.jpg"
              alt="Digital Security Padlock"
              className="rounded-lg shadow-lg brightness-75"
            />
          </div>
        </div>
      </div>
    </section>
  );
}