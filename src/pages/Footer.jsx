import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          {/* Company Info */}
          <div className="mb-8 lg:mb-0">
            <h3 className="text-2xl font-semibold">Newton Driving School</h3>
            <p className="mt-2 text-gray-400">
              Your trusted driving school for expert lessons and guidance on the road.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-sm">
            <div>
              <h4 className="font-semibold">Quick Links</h4>
              <ul className="mt-2 space-y-2">
                <li><a href="/about-us" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="/pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="/contact-us" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Support</h4>
              <ul className="mt-2 space-y-2">
                <li><a href="/faq" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Follow Us</h4>
              <div className="flex space-x-4 mt-2">
                <a href="https://www.facebook.com" className="text-gray-400 hover:text-white">
                  <FaFacebook className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com/newton_driving_school/" className="text-gray-400 hover:text-white">
                  <FaInstagram className="h-6 w-6" />
                </a>
                {/* <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                  <FaTwitter className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
                  <FaLinkedin className="h-6 w-6" />
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">© 2024 Newton Driving School. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
