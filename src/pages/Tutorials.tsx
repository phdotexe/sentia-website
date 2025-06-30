
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowUp, ChevronRight, ChevronLeft, BookOpen, Target, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const Tutorials = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const tutorialSteps = [
    {
      id: 1,
      title: "Welcome to Sentia",
      content: "Get ready to revolutionize your learning experience with Sentia's powerful quiz bank system.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      icon: Target,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Installation & Setup",
      content: "Download and install Sentia on your device. The app runs completely offline for maximum privacy and speed.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      icon: BookOpen,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Creating Your First Quiz Bank",
      content: "Learn how to create your first quiz bank with custom questions, categories, and difficulty levels.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      icon: Zap,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Mastering Spaced Repetition",
      content: "Understand how Sentia's spaced repetition algorithm works to optimize your learning and retention.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      icon: Target,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Advanced Features",
      content: "Explore advanced features like analytics, custom scheduling, and importing external question banks.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
      icon: BookOpen,
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Study Strategies",
      content: "Learn proven study strategies and how to combine them with Sentia for maximum learning efficiency.",
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=600&h=400&fit=crop",
      icon: Zap,
      color: "from-teal-500 to-blue-500"
    }
  ];

  const nextStep = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setIsScrolling(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setIsScrolling(false);
      }, 300);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setIsScrolling(true);
      setTimeout(() => {
        setCurrentStep(currentStep - 1);
        setIsScrolling(false);
      }, 300);
    }
  };

  const goToStep = (stepIndex: number) => {
    if (stepIndex !== currentStep) {
      setIsScrolling(true);
      setTimeout(() => {
        setCurrentStep(stepIndex);
        setIsScrolling(false);
      }, 300);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        nextStep();
      } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        prevStep();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStep]);

  const currentTutorial = tutorialSteps[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
              Interactive Tutorials
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Master Sentia with our step-by-step interactive guide. Use arrow keys or buttons to navigate.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Step {currentStep + 1} of {tutorialSteps.length}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {Math.round(((currentStep + 1) / tutorialSteps.length) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${((currentStep + 1) / tutorialSteps.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Step Navigation */}
          <div className="flex justify-center mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex space-x-2">
              {tutorialSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToStep(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentStep 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Main Tutorial Content */}
          <div className={`transition-all duration-500 ${isScrolling ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
            <Card className="overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-2xl animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img 
                    src={currentTutorial.image} 
                    alt={currentTutorial.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${currentTutorial.color} opacity-20`}></div>
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${currentTutorial.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <currentTutorial.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className={`bg-gradient-to-r ${currentTutorial.color} text-white w-fit mb-4`}>
                    Step {currentStep + 1}
                  </Badge>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    {currentTutorial.title}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {currentTutorial.content}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Button
                      onClick={prevStep}
                      disabled={currentStep === 0}
                      variant="outline"
                      size="lg"
                      className="hover:scale-105 transform transition-all duration-300"
                    >
                      <ChevronLeft className="mr-2 h-5 w-5" />
                      Previous
                    </Button>
                    
                    <div className="flex flex-col items-center space-y-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Use arrow keys to navigate</span>
                      <div className="flex space-x-2">
                        <ArrowUp className="h-4 w-4 text-gray-400" />
                        <ArrowDown className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    
                    <Button
                      onClick={nextStep}
                      disabled={currentStep === tutorialSteps.length - 1}
                      size="lg"
                      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 hover:scale-105 transform transition-all duration-300"
                    >
                      Next
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '1s' }}>
            <Card className="p-6 text-center hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Quick Start Guide</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Get up and running in 5 minutes</p>
              <Button size="sm" variant="outline" className="hover:scale-105 transform transition-all duration-300">
                Start Guide
              </Button>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Video Tutorials</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Watch detailed video guides</p>
              <Button size="sm" variant="outline" className="hover:scale-105 transform transition-all duration-300">
                Watch Videos
              </Button>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Advanced Tips</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Pro tips for power users</p>
              <Button size="sm" variant="outline" className="hover:scale-105 transform transition-all duration-300">
                Learn More
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tutorials;
