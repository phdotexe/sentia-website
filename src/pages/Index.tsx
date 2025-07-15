import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Star, Users, BookOpen, Zap, Quote } from "lucide-react";
import { testimonials, stats } from "@/constants";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 relative overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50/80 to-indigo-100/80 dark:from-gray-800/80 dark:to-indigo-900/80 backdrop-blur-sm py-[150px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Master Any Subject with{" "}
                <span className="text-blue-600 dark:text-blue-400">Sentia</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                The ultimate quiz bank app that runs locally on your computer. Study efficiently with spaced repetition, custom quizzes, and powerful analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <a href="https://github.com/your-username/sentia/releases" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-6 w-6" />
                    Download for Windows - FREE
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://apps.apple.com/app/sentia" target="_blank" rel="noopener noreferrer">
                    Download for Mac - $9.99
                  </a>
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span>4.8/5 rating</span>
                </div>
                <div className="flex items-center hover:scale-105 transform transition-all duration-300">
                  <Users className="h-4 w-4 mr-1" />
                  <span className="font-semibold">10,000+ users</span>
                </div>
              </div>
            </div>

            {/* Promotional Video Section */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden">
              <div className="aspect-video bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">Watch Sentia in Action</p>
                  <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">Promotional video coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Animations keyframes (add to global CSS) */}
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Lightning Fast</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Runs locally on your computer for instant access and blazing fast performance
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Smart Learning</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Advanced spaced repetition algorithms to optimize your learning and retention
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Privacy Focused</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Your data stays on your device. No cloud storage required, complete privacy guaranteed
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover how students, professionals, and educators are transforming
              their learning with Sentia's innovative quiz bank technology.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        {testimonial.university || testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="relative">
                    <Quote className="absolute top-0 left-0 h-6 w-6 text-blue-200 dark:text-blue-300 -mt-2 -ml-1" />
                    <p className="text-gray-600 dark:text-gray-300 italic pl-5">
                      {testimonial.content}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Pricing */}
      <section className="bg-gray-50/80 dark:bg-gray-700/80 backdrop-blur-sm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in"
              style={{
                transform: `scale(${1 + Math.sin(scrollY * 0.01) * 0.05}) rotate(${scrollY * 0.02}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              Available on Your Platform
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Choose your platform and start mastering your studies today.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 12V6.75l9-5.25 9 5.25V12l-9 5.25L3 12z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Windows</h3>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-4">FREE</div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Full featured version available for download from GitHub
                </p>
                <Button className="w-full" asChild>
                  <a href="https://github.com/your-username/sentia/releases" target="_blank" rel="noopener noreferrer">
                    Download for Windows
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.987 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.232 20.116c-3.79-1.146-6.077-4.116-5.816-7.527l6.91 6.91c-.536.433-1.13.783-1.094.617z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">macOS</h3>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">$9.99</div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Available on the Mac App Store with automatic updates
                </p>
                <Button className="w-full" variant="outline" asChild>
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
