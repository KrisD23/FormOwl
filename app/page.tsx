import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { auth } from "@/auth";
import {
  FormInput,
  BarChart3,
  Bird,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle,
  Database,
} from "lucide-react";

const Home = async () => {
  const session = await auth();
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
              FormOwl
            </h1>
          </div>
          <div>
            {session?.user ? (
              <Button asChild variant="outline" className="mr-2">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            ) : (
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                <Link href="/api/auth/signin">Sign in</Link>
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8">
              <Bird className="h-4 w-4 mr-2" />
              Privacy-first · No sign-in required for respondents
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent leading-tight">
              Forms Built for
              <span className="block text-blue-600">Anonymous Responses</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Create and share forms publicly. Anyone can submit — no account
              needed. You stay in full control of your data.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              {session?.user ? (
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-6"
                >
                  <Link
                    href="/dashboard/forms/create"
                    className="flex items-center"
                  >
                    Create a Form
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              ) : (
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-6"
                >
                  <Link href="/api/auth/signin" className="flex items-center">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              )}

              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6"
                asChild
              >
                <Link href="/dashboard/forms">Browse Forms</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">
                  No auth for respondents
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">
                  Server-side validation
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">Real-time dashboard</span>
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
              Built for real-world use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Production-ready architecture with clean data flow and scalable
              design from day one
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <FormInput className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Dynamic Form Builder
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Create forms with multiple question types — text,
                multiple-choice, required and optional fields. Publish instantly
                with a shareable link.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Creator Dashboard
              </h3>
              <p className="text-gray-600 leading-relaxed">
                View, filter, and inspect form responses in real time. Full
                visibility into every submission from a clean, organized
                interface.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-violet-50 hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-r from-purple-600 to-violet-600 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Bird className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Anonymous Submissions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Respondents never need an account. Forms are publicly accessible
                while you retain ownership and control as the creator.
              </p>
            </Card>

            {/* Feature 4 */}
            <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-orange-50 to-red-50 hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Secure Endpoints
              </h3>
              <p className="text-gray-600 leading-relaxed">
                All submission endpoints include server-side validation to
                reject malformed or abusive payloads before they touch the
                database.
              </p>
            </Card>

            {/* Feature 5 */}
            <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-teal-50 to-cyan-50 hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Database className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Scalable Data Model
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Relational schema designed for forms, questions, submissions,
                and responses — optimised for analytics, filtering, and future
                CSV export.
              </p>
            </Card>

            {/* Feature 6 */}
            <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-yellow-50 to-amber-50 hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-r from-yellow-600 to-amber-600 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Next.js App Router
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Built with server components and server actions throughout,
                minimising client-side complexity and delivering fast, reliable
                page loads.
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
              Why FormOwl?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Focused on clean UX, predictable data flow, and production-ready
              architecture — not demo-only features
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { text: "No sign-in barrier for respondents" },
              { text: "Server-side payload validation" },
              { text: "Relational schema built for analytics" },
              { text: "Real-time response dashboard" },
              { text: "Extensible for CSV export & versioning" },
              { text: "Clean architecture over demo shortcuts" },
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
              Ready to build your first form?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Sign in to create forms. Share the link — no sign-in needed for
              your respondents.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {session?.user ? (
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-6"
                >
                  <Link
                    href="/dashboard/forms/create"
                    className="flex items-center"
                  >
                    Create a Form
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              ) : (
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-6"
                >
                  <Link href="/api/auth/signin" className="flex items-center">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              )}
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
              <span className="font-bold text-xl">FormOwl</span>
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
            <p>&copy; 2026 FormOwl. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
