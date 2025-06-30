
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Star, Users, BookOpen, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-scale-in">
                Your questions. Your drive. Your {" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
                  Sentia
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                The ultimate quiz bank app that runs locally on your computer. Study efficiently with spaced repetition, custom quizzes, and powerful analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl" 
                  asChild
                >
                  <a href="https://github.com/your-username/sentia/releases" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" />
                    Download for Windows - Free
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="hover:scale-105 transform transition-all duration-300 border-2 border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900" 
                  asChild
                >
                  <a href="https://apps.apple.com/app/sentia" target="_blank" rel="noopener noreferrer">
                    Download for Mac - $9.99
                  </a>
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center hover:scale-105 transform transition-all duration-300">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span>4.8/5 rating</span>
                </div>
                <div className="flex items-center hover:scale-105 transform transition-all duration-300">
                  <Users className="h-4 w-4 mr-1" />
                  <span>10,000+ users</span>
                </div>
              </div>
            </div>
            
            {/* Promotional Video Section */}
            <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transform transition-all duration-300 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">Watch Sentia in Action</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Promotional video coming soon</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
              Why Choose Sentia?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
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
                className="p-6 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: feature.delay }}
              >
                <CardContent className="pt-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Pricing */}
      <section className="py-20 px-4 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
              Available on Your Platform
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 text-center hover:shadow-2xl transform hover:scale-105 transition-all duration-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm animate-fade-in">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 12V6.75l9-5.25 9 5.25V12l-9 5.25L3 12z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Windows</h3>
                <div className="text-3xl font-bold text-green-500 mb-4">FREE</div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Full featured version available for download from GitHub
                </p>
                <Button className="w-full hover:scale-105 transform transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
                  <a href="https://github.com/your-username/sentia/releases" target="_blank" rel="noopener noreferrer">
                    Download for Windows
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-2xl transform hover:scale-105 transition-all duration-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-800 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.987 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.232 20.116c-3.79-1.146-6.077-4.116-5.816-7.527l6.91 6.91c-.536.433-1.13.783-1.094.617z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">macOS</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">$9.99</div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Available on the Mac App Store with automatic updates
                </p>
                <Button className="w-full hover:scale-105 transform transition-all duration-300" variant="outline" asChild>
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
