import image from "../assets/1.jpeg"

export default function AboutUs() {
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32 lg:px-8 px-6">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
        
        {/* Left side: Instructor's Image */}
        <div className="flex-none mr-10 w-full sm:w-80 lg:w-1/3 mx-auto">
          <img
            src={image}
            alt="Instructor"
            className="rounded-full border-4 border-indigo-600 shadow-xl mx-auto"
          />
        </div>

        {/* Right side: Instructor's History */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h2 className="text-3xl font-semibold text-indigo-700">
            Meet Your Instructor, <span className="italic">Barjinder Singh</span>
          </h2>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Barjinder Singh</span>, the founder and lead instructor at Newton Driving School, brings over 20 years of driving experience. His passion for road safety and skillful driving led him to establish the school in <span className="italic">2020</span>. Since then, Barjinder has successfully trained thousands of students, helping them become confident and safe drivers.
          </p>
          <p className="text-lg text-gray-700">
            Barjinder customizes each student’s course schedule based on their individual driving experience and specific needs. Whether you're a beginner or looking to refine your skills, his tailored approach ensures that every lesson is <span className="font-semibold italic">relevant and effective</span>, giving you the best chance of success on the road.
          </p>
          <p className="text-lg text-gray-700">
            Barjinder’s teaching philosophy is based on a blend of practical experience, patience, and personalized instruction, ensuring that every student receives the support they need to succeed. His dedication to driving education is reflected in the numerous <span className="font-semibold text-indigo-600">positive testimonials</span> from past students who have passed their driving tests with flying colors.
          </p>
          <div className="flex justify-center lg:justify-start mt-6">
            <a
              href="#testimonials"
              className="inline-block px-6 py-3 text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-700 transition-all"
            >
              View Testimonials
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
