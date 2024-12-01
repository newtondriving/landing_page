import React from 'react';

export default function TermsOfUse() {
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
          <h1 className="text-5xl font-semibold text-center text-gray-900">Terms of Use</h1>
          <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl">
            By using Newton Driving School's services, you agree to these Terms of Use. Please read them carefully before using our website or booking a lesson.
          </p>
          <div className="mt-10 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">1. General Terms</h2>
              <p className="mt-4 text-lg text-gray-500">
                These Terms of Use govern your access to and use of our website and services. By accessing our services, you agree to comply with these terms. We reserve the right to modify these terms at any time, and it is your responsibility to review them periodically.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">2. Service Rates</h2>
              <p className="mt-4 text-lg text-gray-500">
                The rates for our driving lessons and other services are provided on our website. Prices may vary based on lesson type, duration, and location. All prices are subject to change without prior notice.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">3. Booking and Cancellation</h2>
              <p className="mt-4 text-lg text-gray-500">
                To book a lesson, contact us via phone or email, or use our online booking system. Cancellations made less than 24 hours before the scheduled lesson will incur a cancellation fee.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">4. Liability</h2>
              <p className="mt-4 text-lg text-gray-500">
                Newton Driving School is not liable for any accidents or damages that occur during driving lessons. Students are responsible for following all traffic laws and guidelines during the lesson.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">5. Changes to Terms</h2>
              <p className="mt-4 text-lg text-gray-500">
                We may update or modify these Terms of Use at any time without prior notice. Any changes will be effective immediately upon posting to the website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
