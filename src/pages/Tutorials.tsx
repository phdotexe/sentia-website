
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Clock, User } from "lucide-react";

const Tutorials = () => {
  const tutorials = [
    {
      title: "Getting Started with Sentia",
      description: "Learn the basics of creating your first quiz bank and starting your study journey",
      duration: "8 min",
      level: "Beginner",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video IDs
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
    },
    {
      title: "Creating Effective Quiz Questions",
      description: "Best practices for writing questions that enhance learning and retention",
      duration: "12 min",
      level: "Beginner",
      videoId: "dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
    },
    {
      title: "Mastering Spaced Repetition",
      description: "Understanding and optimizing the spaced repetition algorithm for maximum effectiveness",
      duration: "15 min",
      level: "Intermediate",
      videoId: "dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
    },
    {
      title: "Advanced Study Strategies",
      description: "Combine Sentia with other learning techniques for optimal results",
      duration: "18 min",
      level: "Advanced",
      videoId: "dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
    },
    {
      title: "Importing and Organizing Content",
      description: "Efficiently manage large question banks and organize your study materials",
      duration: "10 min",
      level: "Intermediate",
      videoId: "dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
    },
    {
      title: "Analytics and Progress Tracking",
      description: "Use Sentia's analytics to identify weak areas and track your improvement",
      duration: "14 min",
      level: "Intermediate",
      videoId: "dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tutorials & Guides
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master Sentia with our comprehensive video tutorials and written guides. 
              Learn at your own pace with step-by-step instructions.
            </p>
          </div>

          {/* Featured Tutorial */}
          <div className="mb-16">
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img 
                    src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" 
                    alt="Featured tutorial"
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <Button
                      size="lg"
                      className="bg-white text-black hover:bg-gray-100"
                      asChild
                    >
                      <a 
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Play className="mr-2 h-5 w-5" />
                        Watch Now
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-sm font-medium text-blue-600 mb-2">FEATURED TUTORIAL</span>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Complete Sentia Masterclass
                  </h2>
                  <p className="text-gray-600 mb-6">
                    A comprehensive 45-minute tutorial covering everything from basic setup 
                    to advanced study strategies. Perfect for both new and experienced users.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      45 min
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      All Levels
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Tutorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={tutorial.thumbnail} 
                    alt={tutorial.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity flex items-center justify-center opacity-0 hover:opacity-100">
                    <Button
                      size="sm"
                      className="bg-white text-black hover:bg-gray-100"
                      asChild
                    >
                      <a 
                        href={`https://www.youtube.com/watch?v=${tutorial.videoId}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Play className="mr-2 h-4 w-4" />
                        Play
                      </a>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(tutorial.level)}`}>
                      {tutorial.level}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      {tutorial.duration}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{tutorial.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{tutorial.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Written Guides Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Written Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Study Methodology Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Learn the science behind effective studying and how to apply these principles with Sentia.
                  </p>
                  <Button variant="outline" size="sm">
                    Read Guide
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Question Writing Best Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Comprehensive guide on creating effective quiz questions that promote deep learning.
                  </p>
                  <Button variant="outline" size="sm">
                    Read Guide
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Customizing Spaced Repetition</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Advanced techniques for fine-tuning the spaced repetition algorithm to match your learning style.
                  </p>
                  <Button variant="outline" size="sm">
                    Read Guide
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Data Import & Export</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Step-by-step instructions for importing existing question banks and exporting your data.
                  </p>
                  <Button variant="outline" size="sm">
                    Read Guide
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* YouTube Channel CTA */}
          <div className="mt-20 bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Subscribe to Our YouTube Channel
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get notified when we release new tutorials, tips, and study strategies. 
              Join thousands of learners improving their study habits with Sentia.
            </p>
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700"
              asChild
            >
              <a 
                href="https://www.youtube.com/channel/your-channel-id" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Subscribe on YouTube
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tutorials;
