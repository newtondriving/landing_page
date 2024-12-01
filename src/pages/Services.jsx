import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Book Lessons Online',
    description:
      'Easily schedule your driving lessons through our online portal. Convenient, hassle-free, and available 24/7.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Certified Instructor',
    description:
      'Our highly qualified and experienced instructor ensure that you receive the best training in a safe and supportive environment.',
    icon: LockClosedIcon,
  },
  {
    name: 'Flexible Timings',
    description:
      'Choose lesson times that fit your schedule. We offer flexible timings to accommodate your busy lifestyle.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced Vehicle Safety',
    description:
      'We use top-of-the-line vehicles equipped with the latest safety features to ensure a secure driving experience.',
    icon: FingerPrintIcon,
  },
]

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Learn to Drive with Confidence</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Everything you need to become a safe, confident driver
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            At Newton Driving School, we offer personalized lessons and expert guidance to help you pass your test and drive safely on the road.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}


