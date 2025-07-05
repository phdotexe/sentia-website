import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, MessageCircle, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { navigationLinks } from "@/constants";

const filteredLinks = navigationLinks.filter(link => link.label !== 'Reviews');

const Navigation = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  if (!mounted) {
    return null;
  }

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 animate-fade-in">
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-2xl px-6 py-3 max-w-6xl w-full">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transform transition-all duration-300"
          >
            Sentia
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            {filteredLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 transform ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:scale-110 transform transition-all duration-300"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
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
            <Button
              variant="outline"
              size="sm"
              className="hover:scale-105 transform transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 hover:shadow-lg"
              asChild
            >
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
