import { useState } from 'react';

const images = import.meta.glob('../assets/client_image/*.jpeg', { eager: true });
const firstAttemptPass = import.meta.glob('../assets/firstattempt/*.jpeg', { eager: true });

const firstAttemptImages = Object.values(firstAttemptPass).map((img) => img.default || img);  // Passed on first attempt
const otherImages = Object.values(images).map((img) => img.default || img);  // Add your other images here

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('firstAttempt');
  const [isModalOpen, setIsModalOpen] = useState(false);  // Modal visibility state
  const [modalImage, setModalImage] = useState('');  // Selected image URL for the modal

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const openModal = (image) => {
    setModalImage(image);  // Set the selected image to be displayed in the modal
    setIsModalOpen(true);   // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);  // Close the modal
    setModalImage('');      // Clear the modal image
  };

  const renderImages = (images) => {
    return images.map((image, index) => (
      <div key={index} className="overflow-hidden rounded-lg shadow-lg relative">
        <img
          src={image}
          alt={`Gallery Image ${index + 1}`}
          className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
          onClick={() => openModal(image)}  // Open modal on image click
        />
        {activeTab === 'firstAttempt' && (
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
            <p className="text-sm font-semibold">Passed on First Attempt</p>
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="px-4 py-8 lg:px-16">
      <h2 className="text-4xl font-bold text-center mt-28 mb-8 text-gray-900">Our Gallery</h2>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => handleTabChange('firstAttempt')}
          className={`px-8 py-3 text-lg font-semibold rounded-l-lg transition duration-300 ease-in-out transform ${
            activeTab === 'firstAttempt'
              ? 'bg-indigo-600 text-white shadow-lg scale-105'
              : 'bg-gray-200 text-gray-800 hover:bg-blue-100 hover:text-blue-600'
          }`}
        >
          Passed on First Attempt
        </button>
        <button
          onClick={() => handleTabChange('other')}
          className={`px-8 py-3 text-lg font-semibold rounded-r-lg transition duration-300 ease-in-out transform ${
            activeTab === 'other'
              ? 'bg-indigo-600 text-white shadow-lg scale-105'
              : 'bg-gray-200 text-gray-800 hover:bg-blue-100 hover:text-blue-600'
          }`}
        >
          Other Students
        </button>
      </div>

      {/* Display images based on selected tab */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {activeTab === 'firstAttempt' ? renderImages(firstAttemptImages) : renderImages(otherImages)}
      </div>

      {/* Modal for full image view */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center z-50"
          onClick={closeModal}  // Close modal when clicked outside the image
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={modalImage}
              alt="Full view"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-xl bg-black p-2 rounded-full hover:bg-gray-700"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
