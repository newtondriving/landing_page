const images = import.meta.glob('../assets/client_image/*.jpeg', { eager: true });
const imageArray = Object.values(images).map((img) => img.default || img);


const Gallery = () => {
  return (
    <div className="px-4 py-8 lg:px-16">
      <h2 className="text-4xl font-bold text-center mt-28 mb-8 text-gray-900">Our Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {imageArray.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

