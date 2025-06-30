
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Star, Users, BookOpen, Zap, Play } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [currentText, setCurrentText] = useState(0);
  const [showText, setShowText] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const heroTexts = [
    "Master Any Subject",
    "Study Smarter, Not Harder", 
    "Your Personal Quiz Engine",
    "Unlock Your Potential"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(false);
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % heroTexts.length);
        setShowText(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-pink-900 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 relative overflow-hidden">
      <Navigation />
      
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
      
      {/* Hero Section with Video Background */}
      <section className="relative pt-20 pb-20 px-4 min-h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-blue-900/90 via-purple-900/90 to-pink-900/90 flex items-center justify-center">
            {/* Placeholder for video - in production, replace with actual video */}
            <div className="relative w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 animate-pulse">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjIiLz48L2c+PC9zdmc+')] opacity-30"></div>
              
              {/* Animated particles */}
              <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${3 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>

              {/* Mock video content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/60">
                  <Play className="w-16 h-16 mx-auto mb-4 animate-pulse" />
                  <p className="text-lg font-semibold">Sentia Promotional Video</p>
                  <p className="text-sm mt-2">Student studying happily with Sentia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Text Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="animate-fade-in">
              {/* Dynamic rotating text */}
              <div className="mb-6 h-20">
                <h1 className={`text-4xl md:text-6xl font-bold text-white mb-2 transition-all duration-500 transform ${
                  showText ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95'
                }`}>
                  {heroTexts[currentText]}
                </h1>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-white/90 mb-6 animate-scale-in">
                with {" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-glow">
                  Sentia
                </span>
              </h2>
              
              <p className="text-xl text-white/80 mb-8 animate-fade-in backdrop-blur-sm bg-black/20 p-4 rounded-xl" style={{ animationDelay: '0.2s' }}>
                The ultimate quiz bank app that runs locally on your computer. Study efficiently with spaced repetition, custom quizzes, and powerful analytics.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 text-lg font-bold animate-glow" 
                  asChild
                >
                  <a href="https://github.com/your-username/sentia/releases" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-6 w-6" />
                    Download for Windows - FREE
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="hover:scale-105 transform transition-all duration-300 border-2 border-purple-400 text-white bg-black/20 backdrop-blur-sm hover:bg-purple-500/20 shadow-xl font-bold" 
                  asChild
                >
                  <a href="https://apps.apple.com/app/sentia" target="_blank" rel="noopener noreferrer">
                    Download for Mac - $9.99
                  </a>
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-white/70 animate-fade-in backdrop-blur-sm bg-black/20 p-3 rounded-xl inline-flex" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center hover:scale-105 transform transition-all duration-300">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="font-semibold">4.8/5 rating</span>
                </div>
                <div className="flex items-center hover:scale-105 transform transition-all duration-300">
                  <Users className="h-4 w-4 mr-1" />
                  <span className="font-semibold">10,000+ users</span>
                </div>
              </div>
            </div>
            
            {/* Right side - empty to let video background show */}
            <div className="hidden lg:block"></div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section with Scroll Animations */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-black/20 to-black/30 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in"
              style={{
                transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              Why Choose Sentia?
            </h2>
            <p 
              className="text-xl text-white/80 max-w-3xl mx-auto animate-fade-in"
              style={{
                transform: `translateX(${Math.sin(scrollY * 0.01) * 10}px)`,
                transition: 'transform 0.1s ease-out',
                animationDelay: '0.2s'
              }}
            >
              Designed for students, professionals, and lifelong learners who want to study more effectively
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Runs locally on your computer for instant access and blazing fast performance",
                color: "from-blue-500 to-cyan-500",
                delay: "0s"
              },
              {
                icon: BookOpen,
                title: "Smart Learning",
                description: "Advanced spaced repetition algorithms to optimize your learning and retention",
                color: "from-green-500 to-emerald-500",
                delay: "0.2s"
              },
              {
                icon: Users,
                title: "Privacy Focused",
                description: "Your data stays on your device. No cloud storage required, complete privacy guaranteed",
                color: "from-purple-500 to-pink-500",
                delay: "0.4s"
              }
            ].map((feature, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm animate-fade-in border-white/20"
                style={{ 
                  animationDelay: feature.delay,
                  transform: `translateY(${scrollY * 0.05 * (index + 1)}px) rotate(${Math.sin(scrollY * 0.01 + index) * 2}deg)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <CardContent className="pt-6">
                  <div 
                    className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300`}
                    style={{
                      transform: `rotate(${scrollY * 0.1 + index * 30}deg)`,
                      transition: 'transform 0.1s ease-out'
                    }}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-white/70">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Pricing with Scroll Animations */}
      <section className="py-20 px-4 bg-gradient-to-b from-black/30 to-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in"
              style={{
                transform: `scale(${1 + Math.sin(scrollY * 0.01) * 0.05}) rotate(${scrollY * 0.02}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              Available on Your Platform
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card 
              className="p-8 text-center hover:shadow-2xl transform hover:scale-105 transition-all duration-500 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm animate-fade-in border-white/20"
              style={{
                transform: `translateX(${Math.sin(scrollY * 0.01) * 20}px) rotate(${Math.cos(scrollY * 0.01) * 2}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <CardContent className="pt-6">
                <div 
                  className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                  style={{
                    transform: `rotate(${scrollY * 0.2}deg)`,
                    transition: 'transform 0.1s ease-out'
                  }}
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 12V6.75l9-5.25 9 5.25V12l-9 5.25L3 12z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">Windows</h3>
                <div className="text-3xl font-bold text-green-400 mb-4">FREE</div>
                <p className="text-white/70 mb-6">
                  Full featured version available for download from GitHub
                </p>
                <Button className="w-full hover:scale-105 transform transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
                  <a href="https://github.com/your-username/sentia/releases" target="_blank" rel="noopener noreferrer">
                    Download for Windows
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card 
              className="p-8 text-center hover:shadow-2xl transform hover:scale-105 transition-all duration-500 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm animate-fade-in border-white/20" 
              style={{ 
                animationDelay: '0.2s',
                transform: `translateX(${Math.sin(scrollY * 0.01 + Math.PI) * 20}px) rotate(${Math.cos(scrollY * 0.01 + Math.PI) * 2}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <CardContent className="pt-6">
                <div 
                  className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-800 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                  style={{
                    transform: `rotate(${-scrollY * 0.2}deg)`,
                    transition: 'transform 0.1s ease-out'
                  }}
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.987 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.232 20.116c-3.79-1.146-6.077-4.116-5.816-7.527l6.91 6.91c-.536.433-1.13.783-1.094.617z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">macOS</h3>
                <div className="text-3xl font-bold text-blue-400 mb-4">$9.99</div>
                <p className="text-white/70 mb-6">
                  Available on the Mac App Store with automatic updates
                </p>
                <Button className="w-full hover:scale-105 transform transition-all duration-300 border-white/30 text-white hover:bg-white/20" variant="outline" asChild>
                  <a href="https://apps.apple.com/app/sentia" target="_blank" rel="noopener noreferrer">
                    Get on App Store
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
