import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <h1 className="text-5xl font-semibold text-center text-gray-900">Privacy Policy</h1>
          <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl">
            At Newton Driving School, we value your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information.
          </p>
          <div className="mt-10 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">1. Information Collection</h2>
              <p className="mt-4 text-lg text-gray-500">
                We collect personal information such as your name, contact details, and payment information when you book a lesson or interact with our services.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">2. Information Usage</h2>
              <p className="mt-4 text-lg text-gray-500">
                Your personal information is used for booking purposes, processing payments, and communicating with you about your lessons. We may also use your data for marketing purposes with your consent.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">3. Data Protection</h2>
              <p className="mt-4 text-lg text-gray-500">
                We take the security of your data seriously and implement appropriate measures to protect it from unauthorized access, disclosure, or loss.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">4. Data Sharing</h2>
              <p className="mt-4 text-lg text-gray-500">
                We do not sell, rent, or share your personal information with third parties, except as necessary to provide our services or as required by law.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">5. Changes to Privacy Policy</h2>
              <p className="mt-4 text-lg text-gray-500">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page and will take effect immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
