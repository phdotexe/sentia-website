import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Coffee, Server, Code, Users, Star } from "lucide-react";

const Donations = () => {
  const donationTiers = [
    {
      icon: Coffee,
      title: "Buy us a Coffee",
      amount: "$5",
      description: "Help fuel late-night coding sessions",
      benefits: [
        "Our eternal gratitude",
        "Supporter badge in Discord",
        "Knowledge that you're supporting education"
      ]
    },
    {
      icon: Heart,
      title: "Support Development",
      amount: "$25",
      description: "Contribute to ongoing feature development",
      benefits: [
        "All Coffee tier benefits",
        "Early access to beta features",
        "Priority support in Discord",
        "Your name in app credits"
      ]
    },
    {
      icon: Server,
      title: "Infrastructure Supporter",
      amount: "$50",
      description: "Help us maintain servers and tools",
      benefits: [
        "All previous tier benefits",
        "Monthly development updates",
        "Vote on upcoming features",
        "Direct line to the development team"
      ]
    },
    {
      icon: Code,
      title: "Platinum Sponsor",
      amount: "$100+",
      description: "Become a major supporter of the project",
      benefits: [
        "All previous tier benefits",
        "Logo placement on website",
        "Quarterly video calls with dev team",
        "Custom feature requests consideration"
      ]
    }
  ];

  const expenses = [
    { category: "Development Tools", amount: "$200/month", description: "IDEs, testing tools, design software" },
    { category: "Website Hosting", amount: "$50/month", description: "Web hosting, CDN, domain costs" },
    { category: "Code Signing", amount: "$300/year", description: "Certificate for trusted app distribution" },
    { category: "App Store Fees", amount: "$99/year", description: "Apple Developer Program membership" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-[150px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Support Sentia's Development
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sentia is built with love by a small team passionate about improving education.
              Your support helps us keep the app free, private, and constantly improving.
            </p>
          </div>

          {/* Why Support Section */}
          <div className="mb-20">
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-none">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Why Your Support Matters
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Keep It Free</h3>
                    <p className="text-gray-600 text-sm">
                      Windows version stays completely free for students and educators worldwide
                    </p>
                  </div>
                  <div className="text-center">
                    <Code className="h-8 w-8 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Fund Development</h3>
                    <p className="text-gray-600 text-sm">
                      Support new features, bug fixes, and platform improvements
                    </p>
                  </div>
                  <div className="text-center">
                    <Server className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Maintain Independence</h3>
                    <p className="text-gray-600 text-sm">
                      Stay ad-free and user-focused without external pressures
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Donation Tiers */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Choose Your Support Level
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {donationTiers.map((tier, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <tier.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{tier.title}</CardTitle>
                    <div className="text-2xl font-bold text-blue-600">{tier.amount}</div>
                    <p className="text-sm text-gray-600">{tier.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full"
                      variant={index === 1 ? "default" : "outline"}
                    >
                      Donate {tier.amount}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Alternative Support Methods */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Other Ways to Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Star className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Leave a Review</h3>
                  <p className="text-gray-600 mb-4">
                    Rate Sentia on the Mac App Store or share your experience online
                  </p>
                  <Button variant="outline" size="sm">
                    Write a Review
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Spread the Word</h3>
                  <p className="text-gray-600 mb-4">
                    Tell friends, classmates, and colleagues about Sentia
                  </p>
                  <Button variant="outline" size="sm">
                    Share Sentia
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Code className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Contribute Code</h3>
                  <p className="text-gray-600 mb-4">
                    Help improve Sentia by contributing to our open-source project
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://github.com/your-username/sentia" target="_blank" rel="noopener noreferrer">
                      View on GitHub
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Transparency Section */}
          <div className="mb-20">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">How We Use Your Donations</CardTitle>
                <p className="text-center text-gray-600">
                  We believe in complete transparency about where your money goes
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4">Monthly Expenses</h4>
                    <div className="space-y-3">
                      {expenses.map((expense, index) => (
                        <div key={index} className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="font-medium">{expense.category}</div>
                            <div className="text-sm text-gray-600">{expense.description}</div>
                          </div>
                          <div className="font-semibold text-right ml-4">{expense.amount}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Development Goals</h4>
                    <ul className="space-y-2 text-gray-600">
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
          </div>

          {/* Payment Methods */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Secure Payment Options
            </h2>
            <div className="flex justify-center items-center space-x-8 mb-8">
              <div className="text-gray-400">PayPal</div>
              <div className="text-gray-400">Stripe</div>
              <div className="text-gray-400">GitHub Sponsors</div>
              <div className="text-gray-400">Ko-fi</div>
            </div>
            <p className="text-gray-600 text-sm">
              All transactions are secure and encrypted. We never store your payment information.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donations;
