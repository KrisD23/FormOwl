import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import {
  FormInput,
  BarChart3,
  Users,
  Zap,
  Shield,
  Smartphone,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
              <FormInput className="h-6 w-6 text-white" />
            </div>
            <h1 className="font-bold text-2xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Form Builder
            </h1>
          </div>
          <div>
            <SignedOut>
              <SignInButton>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  Sign in
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button asChild variant="outline" className="mr-2">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            </SignedIn>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8">
              <Zap className="h-4 w-4 mr-2" />
              Build forms in minutes, not hours
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent leading-tight">
              Create Beautiful Forms
              <span className="block text-blue-600">With Zero Effort</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Build professional forms, collect responses, and analyze data with
              our intuitive drag-and-drop form builder. No coding required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <SignedIn>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-6"
                >
                  <Link
                    href="/dashboard/forms/create"
                    className="flex items-center"
                  >
                    Create Your First Form
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </SignedIn>
              <SignedOut>
                <SignInButton>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-6"
                  >
                    <span className="flex items-center">
                      Get Started Free
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                  </Button>
                </SignInButton>
              </SignedOut>

              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-600">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full border-2 border-white"
                    ></div>
                  ))}
                </div>
                <span className="text-sm">Trusted by 10,000+ users</span>
              </div>
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm">4.9/5 rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to make form creation and data
              collection effortless
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <FormInput className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Easy Form Builder
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Create professional forms with our intuitive drag-and-drop
                interface. Add questions, customize layouts, and publish in
                minutes.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Real-time Analytics
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get instant insights into your form responses with beautiful
                charts and detailed analytics dashboards.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-violet-50 hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-r from-purple-600 to-violet-600 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Team Collaboration
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Work together with your team to create and manage forms. Share
                insights and collaborate seamlessly.
              </p>
            </Card>

            {/* Feature 4 */}
            <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-orange-50 to-red-50 hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Secure & Private
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your data is protected with enterprise-grade security. GDPR
                compliant with advanced encryption.
              </p>
            </Card>

            {/* Feature 5 */}
            <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-teal-50 to-cyan-50 hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Mobile Responsive
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your forms look perfect on any device. Optimized for mobile,
                tablet, and desktop experiences.
              </p>
            </Card>

            {/* Feature 6 */}
            <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-yellow-50 to-amber-50 hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-r from-yellow-600 to-amber-600 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Lightning Fast
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Built for speed with modern technology. Your forms load
                instantly and perform flawlessly.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why choose Form Builder?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join thousands of satisfied users who have transformed their data
              collection process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { text: "Save 90% of your time creating forms" },
              { text: "Increase response rates by 40%" },
              { text: "Get insights 10x faster" },
              { text: "Reduce manual data entry to zero" },
              { text: "Improve team collaboration" },
              { text: "Scale without limits" },
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-lg">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Ready to get started?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Create your first form in under 2 minutes. No credit card
              required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SignedIn>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-6"
                >
                  <Link
                    href="/dashboard/forms/create"
                    className="flex items-center"
                  >
                    Start Building Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </SignedIn>
              <SignedOut>
                <SignInButton>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-6"
                  >
                    <span className="flex items-center">
                      Start Free Trial
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                  </Button>
                </SignInButton>
              </SignedOut>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                <FormInput className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl">Form Builder</span>
            </div>

            <div className="flex space-x-8 text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Support
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Form Builder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
