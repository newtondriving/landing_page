import { useState } from 'react'

export default function ContactUs() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Contact Newton Driving School</h2>
        <p className="mt-2 text-lg/8 text-gray-600">Reach out to us to book your driving lessons or for more information.</p>
      </div>

      {/* Flexbox container for layout */}
      <div className="mt-6 flex flex-col lg:flex-row lg:gap-12">
        {/* Left side (Map + Contact Info) */}
        <div className="flex-1 lg:max-w-[45%] ml-8"> {/* Increased left margin */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
            <div className="mt-4">
              <p className="text-gray-600">Email: <a href="mailto:newtondrivings@gmail.com" className="text-indigo-600">newtondrivings@gmail.com</a></p>
              <p className="text-gray-600">Phone: <a href="tel:+1-778-697-3322" className="text-indigo-600">+1-778-697-3322</a></p>
              <p className="text-gray-600 mt-2">Address: 7321 145 St, Surrey, BC V3S 9E7, Canada</p>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.1230759635717!2d-122.8212939!3d49.1361837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d93680784645%3A0xe257e93b289bd1b6!2s7321%20145%20St%2C%20Surrey%2C%20BC%20V3S%209E7%2C%20Canada!5e0!3m2!1sen!2sca!4v1697583720327!5m2!1sen!2sca"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-md border-0 shadow-md"
            ></iframe>
            <div className="mt-2 text-center">
              <a
                href="https://www.google.com/maps/place/7321+145+St,+Surrey,+BC+V3S+9E7,+Canada/@49.1361837,-122.8212939,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Right side (Form) */}
        <div className="flex-1 lg:max-w-[50%]">
          {/* New heading for form */}
          <h3 className="text-lg font-semibold text-gray-900 pl-14">For any suggestions, please contact</h3>

          <form action="#" method="POST" className="mx-auto mt-8 max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="tel"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center">
                <input
                  id="agreed"
                  name="agreed"
                  type="checkbox"
                  checked={agreed}
                  onChange={() => setAgreed(!agreed)}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="agreed" className="ml-2 block text-sm/6 text-gray-900">
                  I agree to the <span className='text-indigo-700 italic'>terms and conditions.</span> 
                </label>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={!agreed}
                className="w-full inline-flex justify-center rounded-md border-2 border-transparent bg-indigo-600 py-2.5 px-6 text-lg font-semibold text-white shadow-sm ring-1 ring-gray-300 hover:bg-indigo-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
