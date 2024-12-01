import { useState } from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'

const pricingPlans = [
  {
    name: 'Beginner',
    id: 'tier-beginner',
    href: '#',
    priceMonthly: '$475',
    description: 'Ideal for first-time drivers to learn the basics.',
    features: [
      '10 hours of driving lessons',
      'Basic road safety training',
      'Mock driving test',
      'Flexible scheduling',
    ],
  },
  {
    name: 'Intermediate',
    id: 'tier-intermediate',
    href: '#',
    priceMonthly: '$750',
    description: 'For drivers who want to refine their skills.',
    features: [
      '15 hours of driving lessons',
      'Advanced road safety training',
      'Highway driving practice',
      '1-on-1 coaching',
      'Mock test with feedback',
    ],
  },
  {
    name: 'Advanced',
    id: 'tier-advanced',
    href: '#',
    priceMonthly: '$1250',
    description: 'Perfect for drivers preparing for their license test.',
    features: [
      '20 hours of driving lessons',
      'Defensive driving techniques',
      'Night driving practice',
      'Test day support',
      'Priority scheduling',
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState(null)

  const handleMouseEnter = (id) => setSelectedPlan(id)
  const handleMouseLeave = () => setSelectedPlan(null)
  const handleClick = (id) => setSelectedPlan(id)

  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base font-semibold text-indigo-600">Pricing</h2>
        <p className="mt-2 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Find the plan that works for you
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-600 sm:text-xl">
        Choose from our affordable driving packages designed to cater to all skill levels and schedules.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 gap-x-4 sm:gap-y-8 lg:max-w-4xl lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            onMouseEnter={() => handleMouseEnter(plan.id)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(plan.id)}
            className={classNames(
              selectedPlan === plan.id ? 'bg-indigo-600 text-white' : 'bg-gray-50 text-gray-900',
              'rounded-3xl p-8 shadow-md cursor-pointer transition transform hover:scale-105 ring-1 ring-gray-200',
            )}
          >
            <h3 className="text-base font-semibold">{plan.name}</h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-bold">{plan.priceMonthly}</span>
              <span className="text-base">/package</span>
            </p>
            <p className="mt-6">{plan.description}</p>
            <ul className="mt-8 space-y-3 text-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-x-3">
                  <CheckIcon
                    className={classNames(
                      selectedPlan === plan.id ? 'text-white' : 'text-indigo-400',
                      'h-6 w-6',
                    )}
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
  href={`https://wa.me/17786973322?text=I%20would%20like%20to%20enroll%20in%20the%20${plan.name}%20plan`}
  className={classNames(
    selectedPlan === plan.id
      ? 'mt-8 block bg-white text-indigo-600 hover:bg-indigo-100'
      : 'mt-8 block bg-indigo-600 text-white hover:bg-indigo-700',
    'rounded-md px-4 py-2 text-center font-medium',
  )}
  target="_blank" // Open in a new tab
  rel="noopener noreferrer" // Security measure when using target="_blank"
>
  Enroll Now
</a>
          </div>
        ))}
      </div>
      <p className="mt-10 text-center text-sm text-gray-500">
  * We charge <span className="font-semibold">$50 per session</span>. The number of sessions to be taken can change according to the client's needs.
</p>
    </div>
  )
}
