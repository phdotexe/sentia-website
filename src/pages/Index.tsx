import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Star, Users, BookOpen, Zap } from "lucide-react";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.feature-fade-in');
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });
    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 min-h-[600px] flex items-center" style={{background: 'linear-gradient(120deg, #3b82f6 0%, #6366f1 50%, #a21caf 100%)'}}>
        {/* Animated Orbs */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute bg-blue-400 opacity-30 rounded-full blur-3xl w-80 h-80 left-[-6rem] top-[-6rem] animate-float-slow" />
          <div className="absolute bg-indigo-400 opacity-20 rounded-full blur-2xl w-60 h-60 right-[-4rem] top-32 animate-float-medium" />
          <div className="absolute bg-fuchsia-400 opacity-20 rounded-full blur-2xl w-40 h-40 left-1/2 bottom-[-3rem] animate-float-fast" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-200 to-fuchsia-200 bg-clip-text text-transparent drop-shadow-lg">
                Master Any Subject with <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-fuchsia-500 bg-clip-text text-transparent">Sentia</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 drop-shadow">
                The ultimate quiz bank app that runs locally on your computer. Study efficiently with spaced repetition, custom quizzes, and powerful analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-white/90 text-blue-700 hover:bg-white shadow-lg animate-bounce-slow" asChild>
                  <a href="https://github.com/your-username/sentia/releases" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" />
                    Download for Windows - Free
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="backdrop-blur bg-white/30 border-white/40 text-white hover:bg-white/40 hover:text-blue-700 shadow-md" asChild>
                  <a href="https://apps.apple.com/app/sentia" target="_blank" rel="noopener noreferrer">
                    Download for Mac - $9.99
                  </a>
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-white/80">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-300 mr-1" />
                  <span>4.8/5 rating</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span>10,000+ users</span>
                </div>
              </div>
            </div>
            {/* Product Mockup Placeholder */}
            <div className="flex justify-center items-center">
              <div className="relative w-[440px] h-[300px] bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 flex items-center justify-center animate-float-mockup">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" alt="App Mockup" className="w-full h-full object-cover rounded-2xl opacity-95" />
                <div className="absolute -inset-1 rounded-3xl border-2 border-white/10 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
        {/* Animations keyframes (add to global CSS) */}
      </section>

      {/* Features Section */}
      <section className="relative py-20 bg-gradient-to-b from-white via-blue-50 to-indigo-50">
        {/* Divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-blue-400/20 via-indigo-400/30 to-fuchsia-400/20 rounded-full blur-sm" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Sentia?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed for students, professionals, and lifelong learners who want to study more effectively
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-2xl hover:scale-[1.04] transition-all duration-300 feature-fade-in">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 via-blue-300 to-indigo-300 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Zap className="h-7 w-7 text-white drop-shadow" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
                <p className="text-gray-600">
                  Runs locally on your computer for instant access and blazing fast performance
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center hover:shadow-2xl hover:scale-[1.04] transition-all duration-300 feature-fade-in" style={{animationDelay: '0.15s'}}>
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 via-green-300 to-blue-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <BookOpen className="h-7 w-7 text-white drop-shadow" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Learning</h3>
                <p className="text-gray-600">
                  Advanced spaced repetition algorithms to optimize your learning and retention
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center hover:shadow-2xl hover:scale-[1.04] transition-all duration-300 feature-fade-in" style={{animationDelay: '0.3s'}}>
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-gradient-to-br from-fuchsia-400 via-purple-400 to-indigo-300 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="h-7 w-7 text-white drop-shadow" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Privacy Focused</h3>
                <p className="text-gray-600">
                  Your data stays on your device. No cloud storage required, complete privacy guaranteed
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Pricing */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available on Your Platform
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 12V6.75l9-5.25 9 5.25V12l-9 5.25L3 12z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Windows</h3>
                <div className="text-3xl font-bold text-green-600 mb-4">FREE</div>
                <p className="text-gray-600 mb-6">
                  Full featured version available for download from GitHub
                </p>
                <Button className="w-full" asChild>
                  <a href="https://github.com/your-username/sentia/releases" target="_blank" rel="noopener noreferrer">
                    Download for Windows
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.987 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.232 20.116c-3.79-1.146-6.077-4.116-5.816-7.527l6.91 6.91c-.536.433-1.13.783-1.094.617z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">macOS</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">$9.99</div>
                <p className="text-gray-600 mb-6">
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
