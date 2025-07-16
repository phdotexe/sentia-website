import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, MessageCircle, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { navigationLinks } from "@/constants";

const filteredLinks = navigationLinks.filter(link => link.label !== 'Reviews');

const Navigation = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  if (!mounted) {
    return null;
  }

  return (
    <nav id="navigation" className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 animate-fade-in" role="navigation" aria-label="Main navigation">
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-2xl px-6 py-3 max-w-6xl w-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transform transition-all duration-300"
            aria-label="Sentia - Go to homepage"
          >
            Sentia
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6" role="menubar" aria-label="Main menu">
            {filteredLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 transform focus-visible:focus ${
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
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:scale-110 transform transition-all duration-300 focus-visible:focus"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <a
              href="https://github.com/your-username/sentia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:scale-110 transform duration-300 focus-visible:focus"
              aria-label="Visit Sentia on GitHub (opens in new tab)"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://discord.gg/your-invite"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:scale-110 transform duration-300 focus-visible:focus"
              aria-label="Join Sentia Discord community (opens in new tab)"
            >
              <MessageCircle className="h-6 w-6" />
            </a>
            <Button
              variant="outline"
              size="sm"
              className="hover:scale-105 transform transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 hover:shadow-lg focus-visible:focus"
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
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:scale-110 transform transition-all duration-300 focus-visible:focus"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="hover:scale-110 transform transition-all duration-300 focus-visible:focus"
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
                className="w-full max-w-xs hover:scale-105 transform transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 hover:shadow-lg"
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
                  className={`w-full max-w-xs px-4 py-3 rounded-xl text-sm font-medium text-center transition-all duration-300 hover:scale-105 transform focus-visible:focus ${
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
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:scale-110 transform duration-300"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://discord.gg/your-invite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:scale-110 transform duration-300"
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
