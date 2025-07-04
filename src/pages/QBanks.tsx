
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Star, Users, Search, Filter } from "lucide-react";
import { useState } from "react";

const QBanks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Medicine", "Biology", "Chemistry", "Physics", "Math", "Computer Science", "History"];

  const qbanks = [
    {
      id: 1,
      title: "Medical Terminology Mastery",
      description: "Comprehensive medical terminology quiz bank with 500+ questions",
      category: "Medicine",
      questions: 534,
      rating: 4.8,
      downloads: 12500,
      size: "2.4 MB",
      thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop",
      author: "Dr. Sarah Chen",
      difficulty: "Intermediate",
      lastUpdated: "2024-01-15"
    },
    {
      id: 2,
      title: "Organic Chemistry Reactions",
      description: "Master organic chemistry with detailed reaction mechanisms",
      category: "Chemistry",
      questions: 425,
      rating: 4.9,
      downloads: 8200,
      size: "3.1 MB",
      thumbnail: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=300&h=200&fit=crop",
      author: "Prof. Michael Rodriguez",
      difficulty: "Advanced",
      lastUpdated: "2024-01-12"
    },
    {
      id: 3,
      title: "Python Programming Fundamentals",
      description: "Learn Python basics with hands-on coding questions",
      category: "Computer Science",
      questions: 380,
      rating: 4.7,
      downloads: 15600,
      size: "1.8 MB",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
      author: "Alex Thompson",
      difficulty: "Beginner",
      lastUpdated: "2024-01-20"
    },
    {
      id: 4,
      title: "World History: Ancient Civilizations",
      description: "Explore ancient civilizations from around the world",
      category: "History",
      questions: 290,
      rating: 4.6,
      downloads: 6800,
      size: "2.2 MB",
      thumbnail: "https://images.unsplash.com/photo-1471919743851-c4df8b6ee133?w=300&h=200&fit=crop",
      author: "Dr. Jennifer Liu",
      difficulty: "Intermediate",
      lastUpdated: "2024-01-10"
    },
    {
      id: 5,
      title: "Calculus Problem Solving",
      description: "Master calculus concepts with step-by-step solutions",
      category: "Math",
      questions: 456,
      rating: 4.8,
      downloads: 11200,
      size: "2.8 MB",
      thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=300&h=200&fit=crop",
      author: "Prof. David Kim",
      difficulty: "Advanced",
      lastUpdated: "2024-01-18"
    },
    {
      id: 6,
      title: "Cell Biology Essentials",
      description: "Comprehensive study guide for cellular biology",
      category: "Biology",
      questions: 367,
      rating: 4.7,
      downloads: 9400,
      size: "2.6 MB",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
      author: "Dr. Emily Watson",
      difficulty: "Intermediate",
      lastUpdated: "2024-01-14"
    }
  ];

  const filteredQBanks = qbanks.filter(qbank => {
    const matchesSearch = qbank.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         qbank.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || qbank.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Advanced": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
              Free Quiz Banks
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Discover and download high-quality quiz banks created by educators and verified by Sentia. 
              All free to use with your Sentia app.
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search quiz banks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`hover:scale-105 transform transition-all duration-300 ${
                    selectedCategory === category 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0' 
                      : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured QBank */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Card className="overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 flex flex-col justify-center">
                  <Badge className="bg-white/20 text-white w-fit mb-4">Featured</Badge>
                  <h2 className="text-3xl font-bold mb-4">Medical Terminology Mastery</h2>
                  <p className="text-white/90 mb-6 text-lg">
                    The most comprehensive medical terminology quiz bank with over 500 questions, 
                    created by medical professionals and used by thousands of students worldwide.
                  </p>
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-300 mr-1" />
                      <span className="font-semibold">4.8/5</span>
                    </div>
                    <div className="flex items-center">
                      <Download className="h-5 w-5 mr-1" />
                      <span>12.5K downloads</span>
                    </div>
                  </div>
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 w-fit"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Now
                  </Button>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
                    alt="Featured QBank"
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-600/20"></div>
                </div>
              </div>
            </Card>
          </div>

          {/* QBank Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredQBanks.map((qbank, index) => (
              <Card 
                key={qbank.id} 
                className="overflow-hidden hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={qbank.thumbnail} 
                    alt={qbank.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={getDifficultyColor(qbank.difficulty)}>
                      {qbank.difficulty}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {qbank.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Star className="h-3 w-3 text-yellow-400 mr-1" />
                      {qbank.rating}
                    </div>
                  </div>
                  <CardTitle className="text-lg text-gray-900 dark:text-white">
                    {qbank.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    {qbank.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>{qbank.questions} questions</span>
                    <span>{qbank.size}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                    <span>by {qbank.author}</span>
                    <div className="flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      {qbank.downloads.toLocaleString()}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full hover:scale-105 transform transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
                    size="sm"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredQBanks.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No quiz banks found matching your search criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QBanks;
