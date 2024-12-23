import React from 'react';

export default function Privacy() {
  return (
    <div className="py-12 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-600">
              At DailyAI.Studio, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Information We Collect</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Contact information (name, email, phone number) when you book a consultation</li>
              <li>Information you provide during consultations and communications</li>
              <li>Usage data and analytics when you browse our website</li>
              <li>Technical information such as your IP address and browser type</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>To provide and improve our services</li>
              <li>To communicate with you about our services</li>
              <li>To send you relevant updates and marketing communications (with your consent)</li>
              <li>To analyze and improve our website performance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Data Protection</h2>
            <p className="text-gray-600">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-gray-600">
              You have the right to:
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2 mt-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Withdraw consent for marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@dailyai.studio" className="text-custom-pink hover:underline">
                privacy@dailyai.studio
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Updates to This Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. The latest version will always be posted on this page with the effective date.
            </p>
            <p className="text-gray-600 mt-2">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 