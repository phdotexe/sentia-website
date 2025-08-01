import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import { navigationLinks } from "@/constants";

const filteredLinks = navigationLinks.filter(link => link.label !== 'Reviews');

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav id="navigation" className="fixed top-0 left-0 right-0 z-50 animate-fade-in" role="navigation" aria-label="Main navigation">
      <div className="bg-[#333] px-6 py-2 w-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className=""
            aria-label="Sentia - Go to homepage"
          >
            <img src="/sentia_logo.svg" alt="Sentia" className="h-9 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6" role="menubar" aria-label="Main menu">
            {filteredLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-xl text-sm font-medium focus-visible:focus ${
                  isActive(item.path)
                    ? 'bg-white text-black shadow-lg'
                    : 'text-white hover:bg-white hover:text-black'
                }`}
                role="menuitem"
                aria-current={isActive(item.path) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://github.com/your-username/sentia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white focus-visible:focus"
              aria-label="Visit Sentia on GitHub (opens in new tab)"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://discord.gg/your-invite"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white focus-visible:focus"
              aria-label="Join Sentia Discord community (opens in new tab)"
            >
              <MessageCircle className="h-6 w-6" />
            </a>
            <Button
              variant="outline"
              size="sm"
              className="bg-white text-black border-0 focus-visible:focus"
              asChild
            >
              <a href="https://apps.apple.com/app/sentia" target="_blank" rel="noopener noreferrer" aria-label="Download Sentia from App Store (opens in new tab)">
                Download
              </a>
            </Button>
          </div>

          {/* Mobile Right Side */}
          <div className="flex lg:hidden items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="focus-visible:focus text-white"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div id="mobile-menu" className="lg:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-700" role="menu" aria-label="Mobile navigation menu">
            <div className="flex flex-col items-center space-y-4">
              {/* Download Button */}
              <Button
                variant="outline"
                size="sm"
                className="w-full max-w-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0"
                asChild
              >
                <a href="https://apps.apple.com/app/sentia" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                  Download
                </a>
              </Button>

              {/* Navigation Links */}
              {filteredLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`w-full max-w-xs px-4 py-3 rounded-xl text-sm font-medium text-center focus-visible:focus ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  role="menuitem"
                  aria-current={isActive(item.path) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}

              {/* Social Links */}
              <div className="flex items-center space-x-4 pt-2">
                <a
                  href="https://github.com/your-username/sentia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://discord.gg/your-invite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300"
                >
                  <MessageCircle className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
