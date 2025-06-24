
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Medical Student",
      university: "Johns Hopkins University",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5b5?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: "Sentia completely transformed my study routine. The spaced repetition algorithm helped me retain complex medical terminology like never before. I went from struggling with anatomy to acing my exams."
    },
    {
      name: "Marcus Rodriguez",
      role: "Software Engineer",
      company: "Google",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: "As someone who needs to constantly learn new technologies, Sentia has been a game-changer. I use it to study programming concepts, and the local storage means I can access my materials even without internet."
    },
    {
      name: "Dr. Emily Watson",
      role: "Resident Physician",
      university: "Harvard Medical School",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: "The privacy aspect of Sentia is crucial for medical education. Having my study data stored locally gives me peace of mind, and the analytics help me identify which topics need more review."
    },
    {
      name: "James Kim",
      role: "Law Student",
      university: "Stanford Law School",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: "Bar exam prep was overwhelming until I found Sentia. The ability to create custom quiz banks for different legal topics and track my progress made all the difference. Highly recommend!"
    },
    {
      name: "Lisa Thompson",
      role: "Language Teacher",
      company: "International School",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: "I use Sentia both for my own language learning and for creating quizzes for my students. The interface is intuitive, and the results speak for themselves - my retention has improved dramatically."
    },
    {
      name: "David Park",
      role: "Graduate Student",
      university: "MIT",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: "Research requires memorizing countless papers and concepts. Sentia's spaced repetition keeps everything fresh in my mind. The fact that it's free on Windows made it accessible during my tight graduate school budget."
    }
  ];

  const stats = [
    { number: "98%", label: "User Satisfaction Rate" },
    { number: "10,000+", label: "Active Users" },
    { number: "4.8/5", label: "Average Rating" },
    { number: "2M+", label: "Questions Studied" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Users Say
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how students, professionals, and educators are transforming 
              their learning with Sentia's innovative quiz bank technology.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs text-gray-500">
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
                    <Quote className="absolute top-0 left-0 h-6 w-6 text-blue-200 -mt-2 -ml-1" />
                    <p className="text-gray-600 italic pl-5">
                      {testimonial.content}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Success Story */}
          <div className="mt-20">
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-none">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Featured Success Story
                  </h2>
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
                      alt="Rachel Martinez"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Dr. Rachel Martinez</h3>
                  <p className="text-gray-600">Neurosurgery Resident, Mayo Clinic</p>
                </div>
                
                <div className="max-w-4xl mx-auto">
                  <Quote className="h-8 w-8 text-blue-300 mb-4 mx-auto" />
                  <blockquote className="text-lg text-gray-700 text-center leading-relaxed mb-6">
                    "During my neurosurgery residency, I was drowning in the sheer volume of information I needed to memorize. 
                    Traditional flashcards weren't cutting it. Sentia's spaced repetition algorithm changed everything. 
                    I went from spending 4-5 hours daily on review to just 90 minutes, while actually improving my retention. 
                    The analytics showed me exactly which areas needed more focus, helping me optimize my limited study time. 
                    Six months later, I scored in the top 5% on my board exams. Sentia didn't just help me study better—it 
                    gave me my life back."
                  </blockquote>
                  <div className="flex justify-center items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Learning?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of successful learners who have already discovered the power of intelligent spaced repetition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Download Free for Windows
              </button>
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors">
                Get on Mac App Store
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
