import React from 'react';
import { Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-white" />
              <span className="ml-2 font-bold text-xl">Sonix.Tech</span>
            </div>
            <p className="mt-4 text-gray-400">
              Protecting your digital assets with enterprise-grade security solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="https://wa.me/5524999998558" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">WhatsApp</a></li>
              <li><a href="mailto:contact@cybershield.com" className="text-gray-400 hover:text-white transition">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sonix.Tech All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}