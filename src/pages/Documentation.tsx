import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Settings, BookOpen, BarChart, ArrowDown, ArrowUp, ChevronRight, ChevronLeft, Target, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { tutorialSteps } from "@/constants";

const iconMap = { Target, BookOpen, Zap };

const Documentation = () => {
  // Interactive Tutorials logic
  const [currentStep, setCurrentStep] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

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
  const CurrentIcon = iconMap[currentTutorial.icon as keyof typeof iconMap];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <Navigation />

      <main id="main-content">
        <section className="py-[150px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to know to get started with Sentia
            </p>
          </div>

          <Tabs defaultValue="getting-started" className="w-full">
            <TabsList
              className="flex w-full overflow-x-auto scrollbar-hide bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-1"
              role="tablist"
              aria-label="Documentation sections"
            >
                            <TabsTrigger
                value="getting-started"
                className="flex-shrink-0 whitespace-nowrap px-6 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 transform focus-visible:focus"
                role="tab"
                aria-selected="true"
                aria-controls="panel-getting-started"
              >
                Getting Started
              </TabsTrigger>
                            <TabsTrigger
                value="features"
                className="flex-shrink-0 whitespace-nowrap px-6 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 transform focus-visible:focus"
                role="tab"
                aria-selected="false"
                aria-controls="panel-features"
              >
                Features
              </TabsTrigger>
              <TabsTrigger
                value="advanced"
                className="flex-shrink-0 whitespace-nowrap px-6 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 transform focus-visible:focus"
                role="tab"
                aria-selected="false"
                aria-controls="panel-advanced"
              >
                Advanced Usage
              </TabsTrigger>
              <TabsTrigger
                value="troubleshooting"
                className="flex-shrink-0 whitespace-nowrap px-6 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 transform focus-visible:focus"
                role="tab"
                aria-selected="false"
                aria-controls="panel-troubleshooting"
              >
                Troubleshooting
              </TabsTrigger>
              <TabsTrigger
                value="interactive-tutorials"
                className="flex-shrink-0 whitespace-nowrap px-6 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 transform focus-visible:focus"
                role="tab"
                aria-selected="false"
                aria-controls="panel-interactive-tutorials"
              >
                Interactive Tutorials
              </TabsTrigger>
            </TabsList>

            <TabsContent value="getting-started" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center text-gray-900 dark:text-white">
                      <Download className="mr-2 h-5 w-5" />
                      Installation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Windows</h4>
                        <ol className="list-decimal list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                          <li>Download the latest release from GitHub</li>
                          <li>Run the installer (.exe file)</li>
                          <li>Follow the installation wizard</li>
                          <li>Launch Sentia from your desktop</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">macOS</h4>
                        <ol className="list-decimal list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                          <li>Download from the Mac App Store</li>
                          <li>Click "Get" to install</li>
                          <li>Launch from Applications folder</li>
                          <li>Grant necessary permissions when prompted</li>
                        </ol>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center text-gray-900 dark:text-white">
                      <BookOpen className="mr-2 h-5 w-5" />
                      First Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="list-decimal list-inside text-sm text-gray-600 dark:text-gray-300 space-y-2">
                      <li>Create your first quiz bank</li>
                      <li>Import questions or create new ones</li>
                      <li>Set up your study schedule</li>
                      <li>Configure spaced repetition settings</li>
                      <li>Start your first study session</li>
                    </ol>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="features" className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-white">Quiz Creation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                      <li>• Multiple choice questions</li>
                      <li>• True/false questions</li>
                      <li>• Fill-in-the-blank</li>
                      <li>• Image-based questions</li>
                      <li>• Rich text formatting</li>
                      <li>• Bulk import from CSV</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-white">Study Modes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                      <li>• Spaced repetition</li>
                      <li>• Custom practice sessions</li>
                      <li>• Timed quizzes</li>
                      <li>• Review mode</li>
                      <li>• Weak areas focus</li>
                      <li>• Random shuffling</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-white">Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                      <li>• Progress tracking</li>
                      <li>• Performance statistics</li>
                      <li>• Study streak counters</li>
                      <li>• Retention graphs</li>
                      <li>• Time spent analysis</li>
                      <li>• Export study data</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="mt-8">
              <div className="space-y-6">
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center text-gray-900 dark:text-white">
                      <Settings className="mr-2 h-5 w-5" />
                      Advanced Configuration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Spaced Repetition Settings</h4>
                        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                          <li>• Customize interval multipliers</li>
                          <li>• Adjust difficulty ratings</li>
                          <li>• Set minimum/maximum intervals</li>
                          <li>• Configure algorithm parameters</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Data Management</h4>
                        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                          <li>• Backup and restore</li>
                          <li>• Export quiz banks</li>
                          <li>• Sync between devices</li>
                          <li>• Database optimization</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-white">Keyboard Shortcuts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Study Mode</h4>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-300">Show answer</span>
                            <code className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-2 py-1 rounded">Space</code>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-300">Mark as easy</span>
                            <code className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-2 py-1 rounded">1</code>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-300">Mark as good</span>
                            <code className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-2 py-1 rounded">2</code>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-300">Mark as hard</span>
                            <code className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-2 py-1 rounded">3</code>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">General</h4>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-300">New quiz bank</span>
                            <code className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-2 py-1 rounded">Ctrl+N</code>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-300">Start study session</span>
                            <code className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-2 py-1 rounded">Ctrl+S</code>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-300">Open settings</span>
                            <code className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-2 py-1 rounded">Ctrl+,</code>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-300">Exit application</span>
                            <code className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-2 py-1 rounded">Ctrl+Q</code>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="troubleshooting" className="mt-8">
              <div className="space-y-6">
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-white">Common Issues</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">App won't start</h4>
                        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                          <li>• Check if you have sufficient permissions</li>
                          <li>• Ensure your system meets minimum requirements</li>
                          <li>• Try running as administrator (Windows)</li>
                          <li>• Check for antivirus interference</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Data not saving</h4>
                        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                          <li>• Verify disk space availability</li>
                          <li>• Check write permissions for app directory</li>
                          <li>• Disable read-only mode if enabled</li>
                          <li>• Restart the application</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Performance issues</h4>
                        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                          <li>• Close other resource-intensive applications</li>
                          <li>• Check available RAM and storage</li>
                          <li>• Optimize database (Settings → Database → Optimize)</li>
                          <li>• Update to the latest version</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-white">Getting Help</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-300">
                        If you're still experiencing issues, here are the best ways to get help:
                      </p>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                        <li>• Join our Discord community for real-time support</li>
                        <li>• Check existing GitHub issues for similar problems</li>
                        <li>• Create a new GitHub issue with detailed information</li>
                        <li>• Email us at support@sentia.app</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="interactive-tutorials" className="mt-8">
              <div className="min-h-[60vh]">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
                    Interactive Tutorials
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    Master Sentia with our step-by-step interactive guide. Use arrow keys or buttons to navigate.
                  </p>
                </div>
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
                            {CurrentIcon && <CurrentIcon className="h-6 w-6 text-white" />}
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
            </TabsContent>
          </Tabs>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
};

export default Documentation;
