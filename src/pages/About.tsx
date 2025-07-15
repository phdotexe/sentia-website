
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <Navigation />

      <section className="py-[150px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Sentia
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Empowering learners worldwide with intelligent quiz bank technology
            </p>
          </div>

          <div className="prose prose-lg mx-auto mb-16">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
              Sentia was born from a simple observation: traditional study methods are inefficient.
              Students spend countless hours re-reading notes and highlighting textbooks, but research
              shows that active recall and spaced repetition are far more effective for long-term retention.
            </p>

            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
              Our mission is to make evidence-based learning accessible to everyone. Sentia combines
              the power of spaced repetition algorithms with an intuitive interface, creating a
              study tool that adapts to your learning pace and maximizes your retention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To revolutionize how people learn by making scientifically-proven study methods accessible to all
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Our Community</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Over 10,000 students, professionals, and lifelong learners trust Sentia for their studies
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Our Values</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Privacy-first, evidence-based, and committed to making learning more effective for everyone
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-50/80 dark:bg-blue-900/20 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why Privacy Matters</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-4">
              Unlike cloud-based alternatives, Sentia runs entirely on your local machine. This means:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Your study data never leaves your device</li>
              <li>No internet connection required for studying</li>
              <li>Complete ownership of your learning progress</li>
              <li>No monthly subscription fees or data harvesting</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
