import React from 'react';

export default function Terms() {
  return (
    <div className="py-12 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">1. Services Overview</h2>
            <p className="text-gray-600">
              DailyAI.Studio provides AI consulting and automation services, including but not limited to workflow analysis, 
              AI integration planning, and implementation of AI-driven automation solutions. Our services are intended for 
              business use and professional development.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">2. Consulting Agreement</h2>
            <p className="text-gray-600">
              All consulting services are provided under specific project agreements that will detail scope, deliverables, 
              timeline, and compensation. These agreements will be provided separately and must be signed before work begins.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">3. Client Responsibilities</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Provide accurate and complete information about your business processes</li>
              <li>Maintain appropriate security measures for your systems and data</li>
              <li>Ensure proper authorization for any system access needed</li>
              <li>Review and provide feedback on deliverables in a timely manner</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">4. Intellectual Property</h2>
            <p className="text-gray-600">
              Upon full payment, clients receive a license to use custom implementations and solutions developed specifically 
              for them. DailyAI.Studio retains ownership of pre-existing tools, frameworks, and methodologies used in 
              delivering services.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">5. Confidentiality</h2>
            <p className="text-gray-600">
              We maintain strict confidentiality of all client information and require signed NDAs before beginning work. 
              We will not share your business information or implementation details without explicit permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">6. Payment Terms</h2>
            <p className="text-gray-600">
              Payment terms are specified in individual project agreements. Standard terms include:
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2 mt-2">
              <li>Initial deposit before work begins</li>
              <li>Milestone payments based on deliverables</li>
              <li>Final payment upon project completion</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-600">
              While we strive for excellence, we cannot guarantee specific business outcomes from AI implementations. 
              Our liability is limited to the amount paid for services. We are not responsible for consequential damages 
              or lost profits.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">8. Modifications</h2>
            <p className="text-gray-600">
              We reserve the right to modify these terms at any time. Continued use of our services constitutes 
              acceptance of updated terms. Material changes will be communicated to active clients.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-gray-600">
              For questions about these terms, please contact us at{' '}
              <a href="mailto:terms@dailyai.studio" className="text-custom-pink hover:underline">
                terms@dailyai.studio
              </a>
            </p>
          </section>

          <p className="text-gray-600 mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
} 