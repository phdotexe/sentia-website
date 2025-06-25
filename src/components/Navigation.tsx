import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, MessageCircle } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/60 backdrop-blur-lg border-b border-white/30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 via-indigo-400 to-fuchsia-400 animate-pulse"></span>
              Sentia
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/docs', label: 'Documentation' },
                { to: '/tutorials', label: 'Tutorials' },
                { to: '/testimonials', label: 'Testimonials' },
                { to: '/donations', label: 'Donate' },
              ].map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 rounded-full text-base font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/50
                    ${isActive(link.to)
                      ? 'bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white shadow-md'
                      : 'text-gray-700 hover:bg-blue-100 hover:text-blue-700'}
                  `}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/your-username/sentia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-fuchsia-500 transition-all duration-200 transform hover:scale-125"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://discord.gg/your-invite"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-500 transition-all duration-200 transform hover:scale-125"
            >
              <MessageCircle className="h-6 w-6" />
            </a>
            <Button className="bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200 px-6 py-2 rounded-full" size="sm" asChild>
              <a href="https://apps.apple.com/app/sentia" target="_blank" rel="noopener noreferrer">
                Download
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
