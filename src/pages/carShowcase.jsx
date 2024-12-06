import React from "react";
import car1 from "../assets/car1.jpeg"
import car2 from "../assets/car2.jpeg"

const CarShowcase = () => {
  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-indigo-600 mb-4">Our Training Vehicles</h2>
        <p className="text-lg text-gray-600 mb-12">
          We use reliable and comfortable cars to ensure a safe and smooth driving experience.
        </p>
        
        {/* Image Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <img
              src={car1}
              alt="2021 Toyota Corolla Front View"
              className="rounded-lg shadow-xl border border-gray-200 w-full max-w-lg"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={car2}
              alt="2021 Toyota Corolla Side View"
              className="rounded-lg shadow-xl border border-gray-200 w-full max-w-lg"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12 ml-16 grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6 text-left">
            <div className="flex items-center space-x-4">
              <span className="text-blue-600 text-2xl">🚗</span>
              <p className="text-xl font-semibold">Reliable Performance</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-blue-600 text-2xl">🌟</span>
              <p className="text-xl font-semibold">Modern Safety Features</p>
            </div>
          </div>
          <div className="space-y-6 ml-8 text-left">
            <div className="flex items-center space-x-4">
              <span className="text-blue-600 text-2xl">📱</span>
              <p className="text-xl font-semibold">Smart Technology Integration</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-blue-600 text-2xl">🔋</span>
              <p className="text-xl font-semibold">Fuel Efficiency & Comfort</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarShowcase;
