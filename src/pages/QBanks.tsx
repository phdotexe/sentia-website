import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Download, Search, Star } from "lucide-react";
import { useState } from "react";
import { categories, qbanks } from "@/constants";

const QBanks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

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

      <main id="main-content">
        <section className="pt-[150px] pb-20 px-4">
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
              <Card key={index} className="overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <img
                    src={qbank.thumbnail}
                    alt={qbank.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getDifficultyColor(qbank.difficulty)}>{qbank.difficulty}</Badge>
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{qbank.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{qbank.description}</p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>{qbank.author}</span>
                    <span>{qbank.lastUpdated}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                    <span>{qbank.questions} questions</span>
                    <span>{qbank.size}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="font-semibold">{qbank.rating}/5</span>
                    <span className="ml-4"><Download className="h-4 w-4 inline mr-1" />{qbank.downloads.toLocaleString()} downloads</span>
                  </div>
                </div>
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

export default QBanks;
