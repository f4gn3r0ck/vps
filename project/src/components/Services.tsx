import React from 'react';
import { Shield, Lock, Server, Cloud, Database, AlertTriangle, HardDrive } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Shield,
      title: "Network Security",
      description: "Advanced firewall protection and network monitoring"
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      description: "Protection for cloud-based applications and data"
    },
    {
      icon: Lock,
      title: "Virtual Private Network - VPN",
      description: "Secure and encrypted connection for remote access"
    },
    {
      icon: AlertTriangle,
      title: "Threat Detection",
      description: "24/7 monitoring and threat prevention"
    },
    {
      icon: Server,
      title: "Servers Deployment",
      description: "Professional server setup and configuration services"
    },
    {
      icon: Database,
      title: "Data Recovery",
      description: "Complete data recovery and backup solutions"
    },
    {
      icon: HardDrive,
      title: "Data Storage",
      description: "Secure and redundant data storage solutions"
    }
  ];

  return (
    <section id="services" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Our Services</h2>
          <p className="mt-4 text-xl text-gray-400">Comprehensive security solutions for your business</p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-zinc-900 p-6 rounded-lg hover:bg-zinc-800 transition border border-zinc-800">
              <service.icon className="h-12 w-12 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}