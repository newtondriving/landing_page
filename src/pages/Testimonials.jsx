import { useEffect, useState } from "react";
import image from "../assets/client_image/5.jpeg";

export default function TestimonialSection() {
  const testimonials = [
    {
      text: "“I recently passed my Class 7 road test at 13426 78 Ave in Surrey, and I couldn't have done it without Mr. Barjinder, my amazing driving instructor...”",
      name: "Iva Mariia",
      role: "Local Guide",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjU3lQDsPMf4atHV6tGisPHo_f8vKwf6i9A_c3Dt7ooPJTjqvY4DoQ=w120-h120-p-rp-mo-ba3-br100",
    },
    {
      text: "“I had a fantastic experience with Mr Pannu, who played a crucial role in helping me pass my Class 5 road test today in Surrey Guildford...”",
      name: "Prabhsimran Kaur",
      role: "Student",
      image: image,
    },
    {
      text: "“I passed my Class 5 road test at ICBC, Surrey. It was all because of professionals at Newton Driving School...”",
      name: "Deepak Kumar",
      role: "Local Guide",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjVGFfyLm70vAKQtWnjM1LqOK2AckFm2yVc4RKSsnPsyzR3pOzlC=w120-h120-p-rp-mo-ba3-br100",
    },
    {
      text: "“I passed my Class 5 road test at ICBC, Surrey. It was all because of professionals at Newton Driving School...”",
      name: "Vikas Mor",
      role: "Local Guide",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjUh3jsfXlKJbisf0g5MANfIlLJpY8AINvhsV3THTbnV8MHBwdmu=w120-h120-p-rp-mo-br100",
    },
    {
      text: "“I had a fantastic experience with Mr Pannu, who played a crucial role in helping me pass my Class 5 road test today in Surrey Guildford...”",
      name: "Prabhsimran Kaur",
      role: "Student",
      image: image,
    },
    {
      text: "“I passed my Class 5 road test at ICBC, Surrey. It was all because of professionals at Newton Driving School...”",
      name: "Deepak Kumar",
      role: "Local Guide",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjVGFfyLm70vAKQtWnjM1LqOK2AckFm2yVc4RKSsnPsyzR3pOzlC=w120-h120-p-rp-mo-ba3-br100",
    },
    {
      text: "“I recently passed my Class 7 road test at 13426 78 Ave in Surrey, and I couldn't have done it without Mr. Barjinder, my amazing driving instructor...”",
      name: "Iva Mariia",
      role: "Local Guide",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjU3lQDsPMf4atHV6tGisPHo_f8vKwf6i9A_c3Dt7ooPJTjqvY4DoQ=w120-h120-p-rp-mo-ba3-br100",
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 3));
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative isolate bg-white px-6 py-16 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 mt-10 sm:text-4xl">
          What Our Clients Say
        </h2>

        <div className="overflow-hidden mt-10">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full md:w-1/3 px-4 flex-shrink-0 snap-center"
              >
                <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
                  <img
                    alt={testimonial.name}
                    src={testimonial.image}
                    className="w-16 h-16 rounded-full mb-4"
                  />
                  <blockquote className="text-lg text-gray-700">
                    <p>{testimonial.text}</p>
                  </blockquote>
                  <figcaption className="mt-4">
                    <div className="text-base font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </figcaption>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map(
            (_, index) => (
              <span
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 w-2 rounded-full cursor-pointer ${
                  currentIndex === index
                    ? "bg-indigo-600"
                    : "bg-gray-300 bg-opacity-50"
                }`}
              />
            )
          )}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://www.google.com/search?q=newton+driving+school+reviews#lrd=0x5485db61a2202023:0x472fd690a147c42a,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500"
          >
            Read More on Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
