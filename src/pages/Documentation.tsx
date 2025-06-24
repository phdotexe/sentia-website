
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Settings, BookOpen, BarChart } from "lucide-react";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to know to get started with Sentia
            </p>
          </div>

          <Tabs defaultValue="getting-started" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="advanced">Advanced Usage</TabsTrigger>
              <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
            </TabsList>
            
            <TabsContent value="getting-started" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Download className="mr-2 h-5 w-5" />
                      Installation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Windows</h4>
                        <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1">
                          <li>Download the latest release from GitHub</li>
                          <li>Run the installer (.exe file)</li>
                          <li>Follow the installation wizard</li>
                          <li>Launch Sentia from your desktop</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">macOS</h4>
                        <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1">
                          <li>Download from the Mac App Store</li>
                          <li>Click "Get" to install</li>
                          <li>Launch from Applications folder</li>
                          <li>Grant necessary permissions when prompted</li>
                        </ol>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="mr-2 h-5 w-5" />
                      First Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="list-decimal list-inside text-sm text-gray-600 space-y-2">
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Quiz Creation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Multiple choice questions</li>
                      <li>• True/false questions</li>
                      <li>• Fill-in-the-blank</li>
                      <li>• Image-based questions</li>
                      <li>• Rich text formatting</li>
                      <li>• Bulk import from CSV</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Study Modes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Spaced repetition</li>
                      <li>• Custom practice sessions</li>
                      <li>• Timed quizzes</li>
                      <li>• Review mode</li>
                      <li>• Weak areas focus</li>
                      <li>• Random shuffling</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-600 space-y-2">
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
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="mr-2 h-5 w-5" />
                      Advanced Configuration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Spaced Repetition Settings</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Customize interval multipliers</li>
                          <li>• Adjust difficulty ratings</li>
                          <li>• Set minimum/maximum intervals</li>
                          <li>• Configure algorithm parameters</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Data Management</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Backup and restore</li>
                          <li>• Export quiz banks</li>
                          <li>• Sync between devices</li>
                          <li>• Database optimization</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Keyboard Shortcuts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Study Mode</h4>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span>Show answer</span>
                            <code className="bg-gray-100 px-2 py-1 rounded">Space</code>
                          </div>
                          <div className="flex justify-between">
                            <span>Mark as easy</span>
                            <code className="bg-gray-100 px-2 py-1 rounded">1</code>
                          </div>
                          <div className="flex justify-between">
                            <span>Mark as good</span>
                            <code className="bg-gray-100 px-2 py-1 rounded">2</code>
                          </div>
                          <div className="flex justify-between">
                            <span>Mark as hard</span>
                            <code className="bg-gray-100 px-2 py-1 rounded">3</code>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">General</h4>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span>New quiz bank</span>
                            <code className="bg-gray-100 px-2 py-1 rounded">Ctrl+N</code>
                          </div>
                          <div className="flex justify-between">
                            <span>Start study session</span>
                            <code className="bg-gray-100 px-2 py-1 rounded">Ctrl+S</code>
                          </div>
                          <div className="flex justify-between">
                            <span>Open settings</span>
                            <code className="bg-gray-100 px-2 py-1 rounded">Ctrl+,</code>
                          </div>
                          <div className="flex justify-between">
                            <span>Exit application</span>
                            <code className="bg-gray-100 px-2 py-1 rounded">Ctrl+Q</code>
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
                <Card>
                  <CardHeader>
                    <CardTitle>Common Issues</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">App won't start</h4>
                        <ul className="text-sm text-gray-600 space-y-1 ml-4">
                          <li>• Check if you have sufficient permissions</li>
                          <li>• Ensure your system meets minimum requirements</li>
                          <li>• Try running as administrator (Windows)</li>
                          <li>• Check for antivirus interference</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Data not saving</h4>
                        <ul className="text-sm text-gray-600 space-y-1 ml-4">
                          <li>• Verify disk space availability</li>
                          <li>• Check write permissions for app directory</li>
                          <li>• Disable read-only mode if enabled</li>
                          <li>• Restart the application</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Performance issues</h4>
                        <ul className="text-sm text-gray-600 space-y-1 ml-4">
                          <li>• Close other resource-intensive applications</li>
                          <li>• Check available RAM and storage</li>
                          <li>• Optimize database (Settings → Database → Optimize)</li>
                          <li>• Update to the latest version</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Getting Help</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        If you're still experiencing issues, here are the best ways to get help:
                      </p>
                      <ul className="text-sm text-gray-600 space-y-2">
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
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Documentation;
