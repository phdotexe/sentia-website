import { Link } from "react-router-dom";
import { Github, MessageCircle, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-900 pt-16 pb-8 relative overflow-hidden" role="contentinfo" aria-label="Site footer">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-200 opacity-20 rounded-full blur-3xl left-[-8rem] top-[-8rem]" />
        <div className="absolute w-72 h-72 bg-pink-200 opacity-20 rounded-full blur-2xl right-[-6rem] bottom-[-6rem]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12 gap-6 text-center lg:text-left">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 lg:mb-0 drop-shadow">Ready to master your studies?</h3>
          {/* <a href="https://github.com/your-username/sentia/releases" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-fuchsia-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 focus-visible:focus" aria-label="Download Sentia from GitHub (opens in new tab)">
            Download Sentia
          </a> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-8 border-b border-gray-200">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Sentia</h3>
            <p className="text-gray-600 text-sm">
              The ultimate quiz bank app for efficient learning. Available on Windows and Mac.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-gray-900">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link></li>
              {/* <li><Link to="/docs" className="text-gray-600 hover:text-blue-600 transition-colors">Documentation</Link></li>
              <li><Link to="/tutorials" className="text-gray-600 hover:text-blue-600 transition-colors">Tutorials</Link></li> */}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-gray-900">Community</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</Link></li>
              {/* <li>
                <a
                  href="https://discord.gg/your-invite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Discord Community
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/your-username/sentia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  GitHub
                </a>
              </li> */}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-gray-900">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/donations" className="text-gray-600 hover:text-blue-600 transition-colors">Donate</Link></li>
              <li>
                <a
                  href="mailto:support@sentia.app"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center pt-8 mt-8 gap-6 text-center lg:text-left">
          <p className="text-gray-600 text-sm">© 2024 Sentia. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            {/* <a
              href="https://github.com/your-username/sentia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-all duration-200 transform hover:scale-125 focus-visible:focus"
              aria-label="Visit Sentia on GitHub (opens in new tab)"
            >
              <Github className="h-7 w-7" />
            </a>
            <a
              href="https://discord.gg/your-invite"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-all duration-200 transform hover:scale-125 focus-visible:focus"
              aria-label="Join Sentia Discord community (opens in new tab)"
            >
              <MessageCircle className="h-7 w-7" />
            </a> */}
            <Link
              to="/donations"
              className="text-gray-600 hover:text-pink-500 transition-all duration-200 transform hover:scale-125 focus-visible:focus"
              aria-label="Support Sentia with a donation"
            >
              <Heart className="h-7 w-7" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
