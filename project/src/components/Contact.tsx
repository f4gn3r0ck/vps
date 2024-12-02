import React from 'react';
import { MessageCircle, Mail, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Contact us</h2>
          <p className="mt-4 text-xl text-gray-400">Get in touch with our security experts team right now</p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="text-center">
            <Mail className="h-8 w-8 text-white mx-auto" />
            <h3 className="mt-4 text-lg font-medium text-white">Email</h3>
            <p className="mt-2 text-gray-400">f4gn3r@duck.com</p>
          </div>
          <div className="text-center">
            <MapPin className="h-8 w-8 text-white mx-auto" />
            <h3 className="mt-4 text-lg font-medium text-white">Location</h3>
            <p className="mt-2 text-gray-400">World Wide</p>
          </div>
          <div className="text-center">
            <MessageCircle className="h-8 w-8 text-white mx-auto" />
            <h3 className="mt-4 text-lg font-medium text-white">WhatsApp</h3>
            <a
              href="https://wa.me/5524999998558"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block bg-white hover:bg-gray-100 text-black px-4 py-2 rounded-lg transition"
            >
              Chat with us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}