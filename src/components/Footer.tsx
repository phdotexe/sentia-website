import { Link } from "react-router-dom";
import { Github, MessageCircle, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-indigo-900 to-fuchsia-900 text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-700 opacity-20 rounded-full blur-3xl left-[-8rem] top-[-8rem]" />
        <div className="absolute w-72 h-72 bg-fuchsia-700 opacity-20 rounded-full blur-2xl right-[-6rem] bottom-[-6rem]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-0 drop-shadow">Ready to master your studies?</h3>
          <a href="https://github.com/your-username/sentia/releases" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-fuchsia-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
            Download Sentia
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 pb-8 border-b border-white/10">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sentia</h3>
            <p className="text-gray-400 text-sm">
              The ultimate quiz bank app for efficient learning. Available on Windows and Mac.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/docs" className="text-gray-400 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link to="/tutorials" className="text-gray-400 hover:text-white transition-colors">Tutorials</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Community</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</Link></li>
              <li>
                <a
                  href="https://discord.gg/your-invite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Discord Community
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/your-username/sentia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/donations" className="text-gray-400 hover:text-white transition-colors">Donate</Link></li>
              <li>
                <a
                  href="mailto:support@sentia.app"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 mt-8 gap-6">
          <p className="text-gray-300 text-sm">© 2024 Sentia. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/your-username/sentia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-fuchsia-400 transition-all duration-200 transform hover:scale-125"
            >
              <Github className="h-7 w-7" />
            </a>
            <a
              href="https://discord.gg/your-invite"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-blue-400 transition-all duration-200 transform hover:scale-125"
            >
              <MessageCircle className="h-7 w-7" />
            </a>
            <Link
              to="/donations"
              className="text-white/80 hover:text-pink-400 transition-all duration-200 transform hover:scale-125"
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
