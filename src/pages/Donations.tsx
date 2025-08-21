import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Coffee, Server, Code, Users, Star } from "lucide-react";
import { donationTiers, expenses } from "@/constants";

const iconMap = { Heart, Coffee, Server, Code };

const Donations = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <Navigation />

      <main id="main-content">
        <section className="py-[150px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Support Sentia's Development
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Sentia is built with love by a small team passionate about improving education.
              Your support helps us keep the app free, private, and constantly improving.
            </p>
          </div>

          {/* Why Support Section */}
          <div className="mb-20">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-none">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Why Your Support Matters
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <Users className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Keep It Free</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Windows version stays completely free for students and educators worldwide
                    </p>
                  </div>
                  <div className="text-center">
                    <Code className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Fund Development</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Support new features, bug fixes, and platform improvements
                    </p>
                  </div>
                  <div className="text-center">
                    <Server className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Maintain Independence</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Stay ad-free and user-focused without external pressures
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Donation Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Choose Your Support Level
            </h2>
            <div className="max-w-2xl mx-auto">
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-none shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Support Sentia's Future
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Choose any amount that feels right for you
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <Button variant="outline" className="py-6 text-lg font-semibold">
                      $5
                    </Button>
                    <Button variant="outline" className="py-6 text-lg font-semibold">
                      $25
                    </Button>
                    <Button variant="outline" className="py-6 text-lg font-semibold">
                      $50
                    </Button>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Or enter a custom amount:
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                      <input
                        type="number"
                        placeholder="0.00"
                        className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <Button className="w-full py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    Donate Now
                  </Button>
                  
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Secure payment powered by Stripe • One-time donation
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Alternative Support Methods */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Other Ways to Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Star className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Leave a Review</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Rate Sentia on the Mac App Store or share your experience online
                  </p>
                  <Button variant="outline" size="sm">
                    Write a Review
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Spread the Word</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Tell friends, classmates, and colleagues about Sentia
                  </p>
                  <Button variant="outline" size="sm">
                    Share Sentia
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Code className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Contribute Code</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Help improve Sentia by contributing to our open-source project
                  </p>
                  {/* <Button variant="outline" size="sm" asChild>
                    <a href="https://github.com/your-username/sentia" target="_blank" rel="noopener noreferrer">
                      View on GitHub
                    </a>
                  </Button> */}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Transparency Section */}
          {/* <div className="mb-20">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center text-gray-900 dark:text-white">How We Use Your Donations</CardTitle>
                <p className="text-center text-gray-600 dark:text-gray-300">
                  We believe in complete transparency about where your money goes
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Monthly Expenses</h4>
                    <div className="space-y-3">
                      {expenses.map((expense, index) => (
                        <div key={index} className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="font-medium text-gray-900 dark:text-white">{expense.category}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">{expense.description}</div>
                          </div>
                          <div className="font-semibold text-right ml-4 text-gray-900 dark:text-white">{expense.amount}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Development Goals</h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Mobile app development</li>
                      <li>• Advanced analytics features</li>
                      <li>• Multi-language support</li>
                      <li>• Enhanced import/export tools</li>
                      <li>• Collaboration features</li>
                      <li>• Accessibility improvements</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div> */}

          {/* Payment Methods */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Secure Payment Options
            </h2>
            <div className="flex justify-center items-center space-x-8 mb-8">
              <div className="text-gray-600 dark:text-gray-400">PayPal</div>
              <div className="text-gray-600 dark:text-gray-400">Stripe</div>
              <div className="text-gray-600 dark:text-gray-400">GitHub Sponsors</div>
              <div className="text-gray-600 dark:text-gray-400">Ko-fi</div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              All transactions are secure and encrypted. We never store your payment information.
            </p>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
};

export default Donations;
