import { XMarkIcon } from '@heroicons/react/20/solid';

export default function PromotionalBanner({ onClose }) {
  const contactDetails = [
    { label: 'Email', value: 'info@newtondriving.com' },
    { label: 'Phone', value: '+1 (123) 456-7890' },
    { label: 'Address', value: '123 Main Street, Vancouver, BC' },
  ];

  return (
    <div className="hidden md:flex w-full bg-gradient-to-r from-[#ff80b5] to-[#9089fc] text-white px-6 py-3 justify-between items-center">
      <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-6">
        {contactDetails.map((detail, index) => (
          <p key={index} className="text-sm sm:text-base">
            <strong className="font-semibold">{detail.label}:</strong> <span className="font-medium">{detail.value}</span>
          </p>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <a
          href="#"
          className="rounded-full bg-indigo-600 px-4 py-1.5 text-sm font-semibold shadow-md hover:bg-indigo-500"
        >
          Book a Lesson <span aria-hidden="true">&rarr;</span>
        </a>
        <button type="button" className="p-2" onClick={onClose}>
          <XMarkIcon className="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  );
}
