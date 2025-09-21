import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Factory, Wheat, ShoppingCart, Sun, Zap, Battery, CheckCircle, ArrowRight, Phone, Mail, Brain, TrendingUp, Shield, Award } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
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
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                  <Link to="/contact">Request a Free Energy Assessment</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                  <Link to="/about">Learn More</Link>
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

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized solar solutions tailored for different industries and their unique energy needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <Factory className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Industrial Facilities</CardTitle>
                <CardDescription>Factories, warehouses, manufacturing plants</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    High-demand operations requiring predictable energy costs
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Reduce reliance on Eskom with reliable solar power
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Improve uptime and reduce peak demand charges
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline" asChild>
                  <Link to="/sectors">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <Wheat className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-2xl">Agricultural Operations</CardTitle>
                <CardDescription>Farms, irrigation, processing plants</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Power irrigation, cooling, and processing systems
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    24/7 power in remote areas with hybrid systems
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Seasonal savings models matching harvest cycles
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline" asChild>
                  <Link to="/sectors">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <ShoppingCart className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-2xl">Shopping Centres</CardTitle>
                <CardDescription>Multi-tenant retail complexes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Tenant sub-metering and transparent billing
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    PPA structures with fair tenant allocation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Enhanced reliability during load-shedding
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline" asChild>
                  <Link to="/sectors">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Smart AI Energy Management
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our AI-driven platform optimizes energy usage, automates billing, and provides real-time insights for maximum efficiency and transparency.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Brain className="h-8 w-8 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">AI Optimization</h3>
                    <p className="text-gray-600 text-sm">Predictive forecasting and intelligent dispatch</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="h-8 w-8 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Automated Billing</h3>
                    <p className="text-gray-600 text-sm">Municipal tariff base with solar credits</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-8 w-8 text-purple-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Cybersecurity</h3>
                    <p className="text-gray-600 text-sm">NERSA & SANS compliance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-8 w-8 text-yellow-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Real-time Monitoring</h3>
                    <p className="text-gray-600 text-sm">Live dashboard and performance tracking</p>
                  </div>
                </div>
              </div>
              <Button className="mt-8" asChild>
                <Link to="/smart-energy">Explore Smart Energy</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" 
                alt="AI dashboard monitoring solar energy systems"
                className="rounded-lg shadow-xl"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/600x400/png";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Business Models</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible financing and installation options to meet your specific needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    Ideal for industrial roofs and shopping centres
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    Long-term savings with guaranteed warranties
                  </li>
                </ul>
                <Badge variant="secondary" className="mb-4">Own Your System</Badge>
                <Button className="w-full" variant="outline" asChild>
                  <Link to="/solutions">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="h-full border-2 hover:border-blue-500 transition-colors">
              <CardHeader>
                <Zap className="h-12 w-12 text-blue-500 mb-4" />
                <CardTitle className="text-2xl">Power Purchase Agreements</CardTitle>
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
                    Fixed tariff below municipal rates
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    We fund, install, and maintain
                  </li>
                </ul>
                <Badge variant="secondary" className="mb-4">Zero Capex</Badge>
                <Button className="w-full" variant="outline" asChild>
                  <Link to="/solutions">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="h-full border-2 hover:border-blue-500 transition-colors">
              <CardHeader>
                <Battery className="h-12 w-12 text-green-500 mb-4" />
                <CardTitle className="text-2xl">Hybrid & Storage</CardTitle>
                <CardDescription>Maximum reliability and efficiency</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    Solar with battery storage
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    Manage peak demand and outages
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    AI-driven load management
                  </li>
                </ul>
                <Badge variant="secondary" className="mb-4">Smart Technology</Badge>
                <Button className="w-full" variant="outline" asChild>
                  <Link to="/solutions">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped businesses across South Africa reduce costs and secure their energy future
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=200&fit=crop" 
                  alt="Industrial facility with solar installation"
                  className="w-full h-48 object-cover rounded-t-lg"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/400x200/png";
                  }}
                />
                <CardTitle className="text-xl">Manufacturing Plant</CardTitle>
                <CardDescription>2.5MW Solar Installation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-blue-600">35%</p>
                    <p className="text-sm text-gray-600">Cost Reduction</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-600">99.8%</p>
                    <p className="text-sm text-gray-600">Uptime</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <img 
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=200&fit=crop" 
                  alt="Agricultural irrigation system powered by solar"
                  className="w-full h-48 object-cover rounded-t-lg"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/400x200/png";
                  }}
                />
                <CardTitle className="text-xl">Citrus Farm</CardTitle>
                <CardDescription>1.2MW Hybrid System</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-blue-600">40%</p>
                    <p className="text-sm text-gray-600">Energy Savings</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-600">24/7</p>
                    <p className="text-sm text-gray-600">Irrigation Power</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=200&fit=crop" 
                  alt="Shopping centre with rooftop solar panels"
                  className="w-full h-48 object-cover rounded-t-lg"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/400x200/png";
                  }}
                />
                <CardTitle className="text-xl">Shopping Centre</CardTitle>
                <CardDescription>3.8MW Rooftop PPA</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-blue-600">25%</p>
                    <p className="text-sm text-gray-600">Tenant Savings</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-600">50+</p>
                    <p className="text-sm text-gray-600">Tenants Served</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/projects">View All Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to cut costs and secure your energy future?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Get started with a free assessment and discover how much you can save with our solar solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link to="/contact">Request a Proposal</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link to="/projects">Explore Case Studies</Link>
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
    </div>
  )
}
