import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Target, Award } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Jarurat Care</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              We're dedicated to revolutionizing healthcare management through innovative technology and user-centered
              design.
            </p>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To empower healthcare professionals with intuitive tools that improve patient care and streamline
                  administrative processes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  A world where healthcare data is seamlessly accessible, secure, and contributes to better patient
                  outcomes globally.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Privacy, security, innovation, and user experience are at the core of everything we build and deliver.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* About Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Why Choose Jarurat Care?</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Founded by healthcare professionals and technology experts, Jarurat Care understands the unique
                  challenges faced in modern healthcare environments. Our platform is built from the ground up with
                  input from doctors, nurses, and administrative staff.
                </p>
                <p>
                  We believe that technology should enhance the human connection in healthcare, not replace it. That's
                  why our tools are designed to reduce administrative burden while maintaining the personal touch that
                  makes healthcare special.
                </p>
                <p>
                  With enterprise-grade security, intuitive interfaces, and comprehensive features, Jarurat Care is
                  trusted by healthcare facilities of all sizes to manage their most important asset: patient
                  information.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to transform your practice?</h2>
            <p className="text-muted-foreground mb-6">
              Experience the difference that thoughtful design and powerful features can make.
            </p>
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/patients">Get Started</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
