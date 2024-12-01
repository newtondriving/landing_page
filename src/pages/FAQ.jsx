import React from 'react';

export default function FAQs() {
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
          <h1 className="text-5xl font-semibold text-center text-gray-900">Frequently Asked Questions</h1>
          <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl">
            Find answers to the most common questions about Newton Driving School’s services, booking process, and policies.
          </p>
          <div className="mt-10 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">1. What areas does Newton Driving School serve?</h2>
              <p className="mt-4 text-lg text-gray-500">
                Newton Driving School serves the Newton area, with driving lessons available within a 5 km radius. We offer both in-person and online lessons.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">2. How do I book a driving lesson?</h2>
              <p className="mt-4 text-lg text-gray-500">
                You can book a lesson by calling us at <strong>778-697-3322</strong> or by emailing us at <strong>newtondrivings@gmail.com</strong>. Alternatively, you can use our online booking system available on our website.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">3. What are the prices for driving lessons?</h2>
              <p className="mt-4 text-lg text-gray-500">
                Our prices vary based on the type of lesson you require. For detailed pricing information, please visit the "Pricing" section of our website or contact us directly.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">4. What should I bring to my driving lesson?</h2>
              <p className="mt-4 text-lg text-gray-500">
                Please bring your valid driver's permit, a form of identification, and comfortable clothes for driving. If it's your first lesson, feel free to bring any questions you may have.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">5. How do I reschedule or cancel a lesson?</h2>
              <p className="mt-4 text-lg text-gray-500">
                You can reschedule or cancel your lesson by contacting us at least 24 hours in advance. Cancellations made less than 24 hours before the lesson will incur a cancellation fee.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">6. Do you offer group lessons?</h2>
              <p className="mt-4 text-lg text-gray-500">
                Yes, we offer group lessons. Please contact us for more details about group rates and availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
