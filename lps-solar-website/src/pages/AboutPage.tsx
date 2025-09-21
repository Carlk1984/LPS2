import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Target, Eye, Users, Award, CheckCircle, Brain, Shield, Zap, Factory } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About LPS Solar</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Leading the transformation of South Africa's energy landscape through intelligent solar solutions and AI-driven energy management.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <div className="flex items-start mb-6">
                <Target className="h-8 w-8 text-blue-600 mr-4 mt-1" />
                <div>
                  <p className="text-lg text-gray-600 mb-4">
                    To empower South African businesses with reliable, cost-effective solar energy solutions that reduce dependence on traditional power sources while maximizing operational efficiency through cutting-edge AI technology.
                  </p>
                  <p className="text-gray-600">
                    We specialize in serving industrial facilities, agricultural operations, and shopping centres with tailored energy solutions that address their unique challenges and requirements.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop" 
                alt="Solar installation team working on industrial rooftop"
                className="rounded-lg shadow-xl"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/600x400/png";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop" 
                alt="Sustainable energy future vision"
                className="rounded-lg shadow-xl"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/600x400/png";
                }}
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <div className="flex items-start">
                <Eye className="h-8 w-8 text-green-600 mr-4 mt-1" />
                <div>
                  <p className="text-lg text-gray-600 mb-4">
                    To become South Africa's leading provider of intelligent solar energy ecosystems, where every business has access to clean, reliable, and affordable energy powered by AI-driven optimization.
                  </p>
                  <p className="text-gray-600">
                    We envision a future where energy independence is accessible to all businesses, supported by transparent billing, real-time monitoring, and predictive maintenance that ensures maximum uptime and efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose LPS Solar?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our unique combination of industry expertise, cutting-edge technology, and flexible financing sets us apart in the solar energy market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center h-full">
              <CardHeader>
                <Factory className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Specialist Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Deep understanding of industrial, agricultural, and retail energy needs — not just generic solar installations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center h-full">
              <CardHeader>
                <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Flexible Financing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Multiple options including outright purchase, leasing, and Power Purchase Agreements to suit any budget.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center h-full">
              <CardHeader>
                <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Technology Edge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  AI-powered smart meters and billing systems ensure complete transparency and optimal energy management.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center h-full">
              <CardHeader>
                <Shield className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Proven Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  NERSA-certified installations, comprehensive warranties, and dedicated support ensure long-term performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Years of experience and industry partnerships enable us to deliver exceptional results across all sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Expert Team</CardTitle>
                <CardDescription>Certified professionals with deep industry knowledge</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    NERSA-certified engineers and technicians
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Sector-specific energy consultants
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    AI and data analytics specialists
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Dedicated project management team
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-2xl">Partner Network</CardTitle>
                <CardDescription>Strategic alliances with leading technology providers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Tier-1 solar panel manufacturers
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Leading inverter and battery suppliers
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Accredited EPC contractors
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Financial institutions and funders
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-2xl">Compliance & Standards</CardTitle>
                <CardDescription>Meeting all regulatory and safety requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    NERSA registration and compliance
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    SANS safety standards adherence
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    POPIA data protection compliance
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    ISO quality management systems
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner with LPS Solar?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join hundreds of businesses across South Africa who have already made the switch to intelligent solar energy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link to="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
