import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <main className="flex-1">
      <section className="py-16 bg-gradient-to-br from-patriot-cream to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-patriot-navy mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-patriot-blue mb-8 max-w-3xl">
            We're here to answer your questions and support your journey.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-patriot-navy mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-patriot-red flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-patriot-navy">Email</h3>
                    <a href="mailto:contact@mustardseed.org" className="text-patriot-blue hover:text-patriot-red transition-colors">
                      contact@mustardseed.org
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-patriot-red flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-patriot-navy">Phone</h3>
                    <a href="tel:+1234567890" className="text-patriot-blue hover:text-patriot-red transition-colors">
                      (123) 456-7890
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-patriot-red flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-patriot-navy">Address</h3>
                    <p className="text-patriot-blue">
                      1234 Faith Street<br />
                      Grace City, GC 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-patriot-red flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-patriot-navy">Hours</h3>
                    <p className="text-patriot-blue">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-patriot-navy mb-6">Send us a Message</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-patriot-red text-white py-3 rounded-full font-semibold hover:bg-patriot-crimson transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}