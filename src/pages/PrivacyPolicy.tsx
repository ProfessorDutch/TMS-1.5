import React from 'react';
import { Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <main className="flex-1">
      <section className="py-16 bg-gradient-to-br from-patriot-cream to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Shield className="w-12 h-12 text-patriot-red" />
            <h1 className="text-4xl md:text-5xl font-bold text-patriot-navy">
              Privacy Policy
            </h1>
          </div>
          <p className="text-xl text-patriot-blue mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg">
            <h2 className="text-2xl font-bold text-patriot-navy mb-4">Information We Collect</h2>
            <p className="text-patriot-blue mb-6">
              We collect information you provide directly to us when you create an account, make a donation,
              or interact with our platform. This may include your name, email address, phone number,
              and payment information.
            </p>

            <h2 className="text-2xl font-bold text-patriot-navy mb-4">How We Use Your Information</h2>
            <p className="text-patriot-blue mb-6">
              We use the information we collect to provide and improve our services, process your donations,
              communicate with you about our mission and activities, and ensure the security of our platform.
            </p>

            <h2 className="text-2xl font-bold text-patriot-navy mb-4">Information Sharing</h2>
            <p className="text-patriot-blue mb-6">
              We do not sell or rent your personal information to third parties. We may share your
              information with service providers who assist us in operating our platform and processing
              donations.
            </p>

            {/* Add more privacy policy sections as needed */}
          </div>
        </div>
      </section>
    </main>
  );
}