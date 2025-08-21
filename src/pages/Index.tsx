import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Star, Users, BookOpen, Zap, Quote } from "lucide-react";
import { testimonials, stats } from "@/constants";
import { useState, useEffect, useRef } from "react";

const sentences = [
  "Sentia Transforms Your Learning",
  "Sentia Boosts Memory Retention",
  "Sentia Makes Studying Efficient"
];

const Index = () => {
  const [userOS, setUserOS] = useState('');
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));
  const statsRef = useRef(null);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('win')) setUserOS('windows');
    else if (userAgent.includes('mac')) setUserOS('mac');
    else setUserOS('linux');
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = sentences[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % sentences.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          stats.forEach((stat, index) => {
            const target = index === 2 ? 48 : parseInt(stat.number.replace(/[^0-9]/g, ''));
            let current = 0;
            const increment = target / 100;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCounters(prev => {
                const newCounters = [...prev];
                newCounters[index] = index === 2 ? Math.floor(current * 10) / 10 : Math.floor(current);
                return newCounters;
              });
            }, 20);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <Navigation />

      <main id="main-content">
        {/* Hero Section */}
        <section className="bg-white py-[150px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-5xl font-bold text-gray-900 mb-6">
            Download <span className="text-[#525]">Sentia</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            The ultimate quiz bank app that runs locally on your computer. Study efficiently with spaced repetition, custom quizzes, and powerful analytics.
          </p>
          <div className="flex flex-col items-center gap-4 mb-8">
            <div>
              {userOS === 'windows' && (
                <Button size="lg" className="bg-gray-400 text-gray-600 cursor-not-allowed" disabled>
                  <Download className="mr-2 h-6 w-6" />
                  Coming Soon - Windows
                </Button>
              )}
              {userOS === 'mac' && (
                <Button size="lg" className="bg-gray-400 text-gray-600 cursor-not-allowed" disabled>
                  <Download className="mr-2 h-6 w-6" />
                  Coming Soon - Mac
                </Button>
              )}
              {userOS === 'linux' && (
                <Button size="lg" className="bg-gray-400 text-gray-600 cursor-not-allowed" disabled>
                  <Download className="mr-2 h-6 w-6" />
                  Coming Soon - Linux
                </Button>
              )}
            </div>
            <div className="space-y-3">
              <p className="text-sm text-gray-500">
                Sentia will be available for Windows, Mac, and Linux
              </p>
              <a href="/about" className="text-[#313] hover:text-[#313]/80 text-sm inline-flex items-center gap-1 px-3 py-2 rounded-lg">
                Learn about Sentia
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
        {/* Animations keyframes (add to global CSS) */}
      </section>

      {/* Parallax Section */}
      <section className="h-96 bg-[url('/bg-image.png')] bg-fixed bg-cover bg-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-5xl font-bold mb-4">Take control of your exam prep</h2>
            <p className="text-xl max-w-2xl mx-auto">Practice quizzes. See analytics. Get better</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Started in 4 Simple Steps</h2>
            <p className="text-xl text-gray-600">Your journey to better grades starts here</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <Card className="p-6 text-center bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Download Sentia</h3>
                  <p className="text-gray-600">
                    Get the app for your platform and install it locally on your computer
                  </p>
                </CardContent>
              </Card>
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <div className="w-8 h-0.5 bg-gray-300"></div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <Card className="p-6 text-center bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Get Question Banks</h3>
                  <p className="text-gray-600">
                    Browse our free question banks or find more on our <a href="https://discord.gg/sentia" target="_blank" rel="noopener noreferrer" className="text-[#313] hover:underline">Discord community</a>
                  </p>
                </CardContent>
              </Card>
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <div className="w-8 h-0.5 bg-gray-300"></div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <Card className="p-6 text-center bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Import Questions</h3>
                  <p className="text-gray-600">
                    Import your question banks into the app and start practicing
                  </p>
                </CardContent>
              </Card>
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <div className="w-8 h-0.5 bg-gray-300"></div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <Card className="p-6 text-center bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    4
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Get Those A's</h3>
                  <p className="text-gray-600">
                    Practice regularly and watch your grades improve with better retention
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Sentia is helping students and professionals achieve their learning goals
            </p>
          </div>

          {/* Single Testimonial */}
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="h-12 w-12 text-gray-300 mx-auto mb-6" />
            <p className="text-2xl text-gray-700 font-light italic mb-8 leading-relaxed">
              "Sentia completely transformed my study routine. The spaced repetition algorithm helped me retain complex medical terminology like never before."
            </p>
            <div className="flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b5b5?w=150&h=150&fit=crop&crop=face"
                alt="Sarah Chen"
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">Sarah Chen</h3>
                <p className="text-gray-600">Medical Student, Johns Hopkins</p>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      </main>

      <Footer />
    </div>
  );
};

export default Index;