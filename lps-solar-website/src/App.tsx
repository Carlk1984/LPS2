import './App.css'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Factory, Wheat, ShoppingCart, Sun, Zap, Battery, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Sun className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-2xl font-bold text-gray-900">Life2Path Solar</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#models" className="text-gray-700 hover:text-blue-600">Our Models</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Get a Free Assessment
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Powering Industry, Farming & Retail Through Smarter Solar
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                We design and deliver energy solutions for factories, farms, and shopping centres — with flexible models from rooftop systems to PPAs and hybrid storage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get a Free Assessment
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop" 
                alt="Solar panels on commercial building rooftop"
                className="rounded-lg shadow-2xl"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/600x400/png";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized solar solutions tailored for different industries and their unique energy needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Industrial Clients */}
            <Card className="h-full">
              <CardHeader>
                <Factory className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Industrial Clients</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    High-demand operations that require predictable energy costs
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Rooftop or ground-mounted solar arrays reduce reliance on Eskom
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Hybrid options with storage improve uptime and reduce peak demand charges
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Farming & Agriculture */}
            <Card className="h-full">
              <CardHeader>
                <Wheat className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-2xl">Farming & Agriculture</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Powering irrigation, cooling, and processing with clean, low-cost energy
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Hybrid systems ensure 24/7 power in remote areas
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Seasonal savings models to match harvest cycles
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Shopping Centres & Retail */}
            <Card className="h-full">
              <CardHeader>
                <ShoppingCart className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-2xl">Shopping Centres & Retail</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Rooftop solar with tenant sub-metering and billing
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    PPA structures with one offtake, allocated fairly across tenants
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Enhanced reliability and reduced backup power costs during load-shedding
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Models Section */}
      <section id="models" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Models</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible financing and installation options to meet your specific needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Rooftop Solar */}
            <Card className="h-full border-2 hover:border-blue-500 transition-colors">
              <CardHeader>
                <Sun className="h-12 w-12 text-yellow-500 mb-4" />
                <CardTitle className="text-2xl">Rooftop Solar</CardTitle>
                <CardDescription>Direct ownership with long-term savings</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    Installations on existing buildings
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    Ideal for industrial roofs, packhouses, and shopping centre canopies
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    Long-term savings with guaranteed warranties
                  </li>
                </ul>
                <Badge variant="secondary">Own Your System</Badge>
              </CardContent>
            </Card>

            {/* Power Purchase Agreements */}
            <Card className="h-full border-2 hover:border-blue-500 transition-colors">
              <CardHeader>
                <Zap className="h-12 w-12 text-blue-500 mb-4" />
                <CardTitle className="text-2xl">Power Purchase Agreements (PPA)</CardTitle>
                <CardDescription>Zero upfront cost solution</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    No upfront cost for clients
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    Pay per kWh at a fixed tariff below municipal rates
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    Life2Path funds, installs, and maintains the system
                  </li>
                </ul>
                <Badge variant="secondary">Zero Capex</Badge>
              </CardContent>
            </Card>

            {/* Hybrid & Battery Storage */}
            <Card className="h-full border-2 hover:border-blue-500 transition-colors">
              <CardHeader>
                <Battery className="h-12 w-12 text-green-500 mb-4" />
                <CardTitle className="text-2xl">Hybrid & Battery Storage</CardTitle>
                <CardDescription>Maximum reliability and efficiency</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    Combine solar with battery storage
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    Manage peak demand and keep operations running during outages
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    AI-driven load management for maximum efficiency
                  </li>
                </ul>
                <Badge variant="secondary">Smart Technology</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Life2Path Section */}
      <section id="about" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Life2Path?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry expertise, flexible financing, and cutting-edge technology for reliable solar solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Factory className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Specialist Focus</h3>
              <p className="text-gray-600">We know industry, agriculture, and retail — not just solar</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Financing</h3>
              <p className="text-gray-600">Buy outright, lease, or sign a PPA</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Battery className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Technology Edge</h3>
              <p className="text-gray-600">Smart meters + AI billing ensure transparency and control</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Reliability</h3>
              <p className="text-gray-600">Certified installations, long warranties, and dedicated support</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 5-step process from assessment to ongoing support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {
                step: "1",
                title: "Assessment & Feasibility",
                description: "We analyze your site, tariffs, and energy profile"
              },
              {
                step: "2", 
                title: "Custom Design",
                description: "Rooftop, ground-mount, or hybrid — tailored to your sector"
              },
              {
                step: "3",
                title: "Installation & Commissioning", 
                description: "By accredited EPC partners"
              },
              {
                step: "4",
                title: "AI Monitoring & Billing",
                description: "Track performance, optimize loads, and allocate costs"
              },
              {
                step: "5",
                title: "Ongoing Support",
                description: "Maintenance, warranty claims, and performance guarantees"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to cut costs and secure your energy future?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Get started with a free assessment and discover how much you can save with our solar solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Request a Proposal
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Explore Case Studies
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="h-8 w-8 mx-auto mb-2" />
              <p className="font-semibold">Call Us</p>
              <p className="text-blue-100">+27 66 143 9477</p>
            </div>
            <div>
              <Mail className="h-8 w-8 mx-auto mb-2" />
              <p className="font-semibold">Email Us</p>
              <p className="text-blue-100">info@lightpathproperty.com</p>
            </div>
            <div>
              <Factory className="h-8 w-8 mx-auto mb-2" />
              <p className="font-semibold">Visit Us</p>
              <p className="text-blue-100">DIH Offices, Bryanston East, Johannesburg</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Sun className="h-8 w-8 text-blue-400 mr-2" />
                <span className="text-xl font-bold">Life2Path Solar</span>
              </div>
              <p className="text-gray-400">
                Powering Industry, Farming & Retail Through Smarter Solar
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Industrial Solar</li>
                <li>Agricultural Solar</li>
                <li>Retail Solar</li>
                <li>Battery Storage</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Rooftop Solar</li>
                <li>Power Purchase Agreements</li>
                <li>Hybrid Systems</li>
                <li>AI Monitoring</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+27 66 143 9477</li>
                <li>info@lightpathproperty.com</li>
                <li>Bryanston East, Johannesburg</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Life2Path Solar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
