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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="p-8">
              <h1 className="text-6xl md:text-5xl font-bold text-gray-900 mb-6">
                Download <span className="text-[#525]">Sentia</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                The ultimate quiz bank app that runs locally on your computer. Study efficiently with spaced repetition, custom quizzes, and powerful analytics.
              </p>
              <div className="flex flex-col gap-4 mb-8">
                <div>
                  {userOS === 'windows' && (
                    <Button size="lg" className="bg-[#313] hover:bg-[#525]/80" asChild>
                      <a href="/sentia-windows.exe" download="sentia-windows.exe">
                        <Download className="mr-2 h-6 w-6" />
                        Download for Windows
                      </a>
                    </Button>
                  )}
                  {userOS === 'mac' && (
                    <Button size="lg" className="bg-black hover:bg-black/80" asChild>
                      <a href="/sentia-mac.dmg" download="sentia-mac.dmg">
                        <Download className="mr-2 h-6 w-6" />
                        Download for Mac
                      </a>
                    </Button>
                  )}
                  {userOS === 'linux' && (
                    <Button size="lg" className="bg-black hover:bg-black/80" asChild>
                      <a href="/sentia-linux.AppImage" download="sentia-linux.AppImage">
                        <Download className="mr-2 h-6 w-6" />
                        Download for Linux
                      </a>
                    </Button>
                  )}
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-gray-500">
                    {userOS === 'windows' && (
                      <>Also available for <a href="/sentia-mac.dmg" download className="text-[#313] hover:underline">Mac</a> and <a href="/sentia-linux.AppImage" download className="text-[#313] hover:underline">Linux</a></>
                    )}
                    {userOS === 'mac' && (
                      <>Also available for <a href="/sentia-windows.exe" download className="text-[#313] hover:underline">Windows</a> and <a href="/sentia-linux.AppImage" download className="text-[#313] hover:underline">Linux</a></>
                    )}
                    {userOS === 'linux' && (
                      <>Also available for <a href="/sentia-windows.exe" download className="text-[#313] hover:underline">Windows</a> and <a href="/sentia-mac.dmg" download className="text-[#313] hover:underline">Mac</a></>
                    )}
                  </p>
                  <a href="/about" className="text-[#313] hover:text-[#313]/80 text-sm flex items-center gap-1 px-3 py-2 rounded-lg">
                    Learn about Sentia
                    <span>→</span>
                  </a>
                </div>
              </div>              
            </div>

            {/* Promotional Video Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#344959] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Watch Sentia in Action</p>
                  <p className="text-sm text-gray-400 mt-2">Promotional video coming soon</p>
                </div>
              </div>
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
            <h2 className="text-5xl font-bold mb-4">Practice makes perfect</h2>
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
                    Browse our <a href="/free-qbanks" className="text-[#313] hover:underline">free question banks</a> or find more on our <a href="https://discord.gg/sentia" target="_blank" rel="noopener noreferrer" className="text-[#313] hover:underline">Discord community</a>
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

      {/* Features Section */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold  mb-4 animate-fade-in"
              style={{
                transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              Why Choose Sentia?
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto animate-fade-in"
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
            <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Lightning Fast</h3>
                <p className="text-gray-600">
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
      </section> */}

      {/* Testimonials Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
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
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {hasAnimated ? (
                    index === 0 ? counters[index] + '%' :
                    index === 1 ? counters[index] + '+' :
                    index === 2 ? (counters[index] / 10).toFixed(1) + '/5' :
                    index === 3 ? counters[index] + 'M+' :
                    counters[index]
                  ) : (
                    index === 2 ? '0.0/5' : '0'
                  )}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
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
      </main>

      <Footer />
    </div>
  );
};

export default Index;
