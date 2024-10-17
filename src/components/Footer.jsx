import {
  FaUtensils,
  FaTiktok,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import logo from "../assets/logo1.png";

function Footer() {
  return (
    <footer className="bg-stone-100 text-gray-600 py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img src={logo} width={300} alt="" />
            <p className="text-sm">
              The purpose of lorem ipsum is to create a natural looking block of
              text (sentence, paragraph, page, etc.) that doesn't distract from
              the layout.
            </p>
          </div>

          {/* Quick Links 1 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-red-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/recipes" className="hover:text-red-400">
                  Recipes
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-red-400">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/share-recipe" className="hover:text-red-400">
                  Share Recipe
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:text-red-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-red-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter to get more free tip
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <button
                type="submit"
                className="w-full bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-md transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t">
          <p className="text-sm">&copy; 2023 RecipeLogo. All Right Reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <span className="sr-only">TikTok</span>
              <FaTiktok className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <span className="sr-only">Twitter</span>
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <span className="sr-only">Facebook</span>
              <FaFacebookF className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <span className="sr-only">Instagram</span>
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <span className="sr-only">Pinterest</span>
              <FaPinterestP className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
