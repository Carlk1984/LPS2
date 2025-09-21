import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Factory, Wheat, ShoppingCart, CheckCircle, Zap, Clock, DollarSign, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SectorsPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Specialized solar solutions tailored for industrial facilities, agricultural operations, and shopping centres across South Africa.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="flex items-center mb-6">
                <Factory className="h-16 w-16 text-blue-600 mr-4" />
                <div>
                  <h2 className="text-4xl font-bold text-gray-900">Industrial Facilities</h2>
                  <p className="text-xl text-gray-600">Factories, warehouses, manufacturing plants</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                Industrial operations face unique energy challenges including high demand loads, peak demand charges, and the need for reliable power to maintain production schedules. Our industrial solar solutions are designed to address these specific requirements while maximizing cost savings and operational efficiency.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Key Challenges We Address</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      High electricity costs impacting production margins
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Expensive peak demand charges during production hours
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Power outages disrupting manufacturing processes
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Unpredictable energy costs affecting budget planning
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Environmental compliance and sustainability goals
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4">Our Industrial Solutions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <Zap className="h-6 w-6 text-blue-600 mb-2" />
                      <h4 className="font-semibold">Large-Scale Rooftop Systems</h4>
                      <p className="text-sm text-gray-600">1MW+ installations on factory roofs and warehouses</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <Clock className="h-6 w-6 text-blue-600 mb-2" />
                      <h4 className="font-semibold">Peak Demand Management</h4>
                      <p className="text-sm text-gray-600">Reduce expensive demand charges with smart load management</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <DollarSign className="h-6 w-6 text-blue-600 mb-2" />
                      <h4 className="font-semibold">PPA Options</h4>
                      <p className="text-sm text-gray-600">Zero upfront cost with immediate savings</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <Shield className="h-6 w-6 text-blue-600 mb-2" />
                      <h4 className="font-semibold">Backup Power</h4>
                      <p className="text-sm text-gray-600">Hybrid systems for uninterrupted operations</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="mt-8" size="lg" asChild>
                <Link to="/contact">Talk to an Industrial Energy Specialist</Link>
              </Button>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=500&fit=crop" 
                alt="Industrial facility with large solar installation"
                className="rounded-lg shadow-xl"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/600x500/png";
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=500&fit=crop" 
                alt="Agricultural solar installation powering irrigation"
                className="rounded-lg shadow-xl"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/600x500/png";
                }}
              />
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <Wheat className="h-16 w-16 text-green-600 mr-4" />
                <div>
                  <h2 className="text-4xl font-bold text-gray-900">Agricultural Operations</h2>
                  <p className="text-xl text-gray-600">Farms, irrigation systems, processing plants</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                Agricultural operations often face unique energy challenges including remote locations, seasonal demand variations, and the critical need for reliable power for irrigation and processing. Our agricultural solar solutions are designed to provide reliable, cost-effective energy that supports farming operations year-round.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Agricultural Applications</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Irrigation pump systems and water management
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Cold storage and processing facilities
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Packhouse operations and sorting facilities
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Livestock facilities and dairy operations
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Remote monitoring and control systems
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4">Specialized Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <Zap className="h-6 w-6 text-green-600 mb-2" />
                      <h4 className="font-semibold">24/7 Power Availability</h4>
                      <p className="text-sm text-gray-600">Hybrid systems ensure continuous irrigation</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <Clock className="h-6 w-6 text-green-600 mb-2" />
                      <h4 className="font-semibold">Seasonal Optimization</h4>
                      <p className="text-sm text-gray-600">Savings models that match harvest cycles</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <DollarSign className="h-6 w-6 text-green-600 mb-2" />
                      <h4 className="font-semibold">Remote Area Solutions</h4>
                      <p className="text-sm text-gray-600">Off-grid and weak-grid applications</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <Shield className="h-6 w-6 text-green-600 mb-2" />
                      <h4 className="font-semibold">Weather Resilience</h4>
                      <p className="text-sm text-gray-600">Robust systems designed for harsh conditions</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="mt-8" size="lg" asChild>
                <Link to="/contact">Talk to an Agricultural Energy Specialist</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <ShoppingCart className="h-16 w-16 text-purple-600 mr-4" />
                <div>
                  <h2 className="text-4xl font-bold text-gray-900">Shopping Centres & Retail</h2>
                  <p className="text-xl text-gray-600">Multi-tenant retail complexes and landlords</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                Shopping centres and retail complexes present unique opportunities for solar energy with large roof spaces and consistent daytime energy demand. Our retail solutions include sophisticated tenant sub-metering and billing systems that ensure fair allocation of solar benefits across all tenants.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Retail Energy Solutions</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Large rooftop installations with optimal sun exposure
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Tenant sub-metering and transparent billing systems
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      PPA structures with single offtake, fair tenant allocation
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Enhanced reliability during load-shedding periods
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Reduced common area electricity costs
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4">Multi-Tenant Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <Zap className="h-6 w-6 text-purple-600 mb-2" />
                      <h4 className="font-semibold">Smart Billing</h4>
                      <p className="text-sm text-gray-600">AI-powered tenant energy allocation</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <Clock className="h-6 w-6 text-purple-600 mb-2" />
                      <h4 className="font-semibold">Real-time Monitoring</h4>
                      <p className="text-sm text-gray-600">Individual tenant consumption tracking</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <DollarSign className="h-6 w-6 text-purple-600 mb-2" />
                      <h4 className="font-semibold">Cost Savings</h4>
                      <p className="text-sm text-gray-600">Reduced electricity costs for all tenants</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <Shield className="h-6 w-6 text-purple-600 mb-2" />
                      <h4 className="font-semibold">Backup Power</h4>
                      <p className="text-sm text-gray-600">Essential services during outages</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="mt-8" size="lg" asChild>
                <Link to="/contact">Talk to a Retail Energy Specialist</Link>
              </Button>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=500&fit=crop" 
                alt="Shopping centre with extensive rooftop solar installation"
                className="rounded-lg shadow-xl"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/600x500/png";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sector Comparison</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each sector has unique energy requirements and challenges. See how our solutions are tailored for each industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="h-full">
              <CardHeader className="text-center">
                <Factory className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Industrial</CardTitle>
                <CardDescription>High-demand, continuous operations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Typical System Size</h4>
                    <Badge variant="outline">500kW - 5MW+</Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Primary Benefits</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Peak demand reduction</li>
                      <li>• Predictable energy costs</li>
                      <li>• Improved uptime</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Preferred Solutions</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Rooftop Solar</Badge>
                      <Badge variant="secondary">Hybrid Systems</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader className="text-center">
                <Wheat className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Agricultural</CardTitle>
                <CardDescription>Seasonal demand, remote locations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Typical System Size</h4>
                    <Badge variant="outline">100kW - 2MW</Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Primary Benefits</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 24/7 irrigation power</li>
                      <li>• Remote area reliability</li>
                      <li>• Seasonal optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Preferred Solutions</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Hybrid Systems</Badge>
                      <Badge variant="secondary">PPA</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader className="text-center">
                <ShoppingCart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Retail</CardTitle>
                <CardDescription>Multi-tenant, complex billing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Typical System Size</h4>
                    <Badge variant="outline">1MW - 10MW</Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Primary Benefits</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Tenant cost savings</li>
                      <li>• Transparent billing</li>
                      <li>• Load-shedding protection</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Preferred Solutions</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">PPA</Badge>
                      <Badge variant="secondary">Microgrid</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Energy Future?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Our sector specialists understand your unique challenges and can design the perfect solar solution for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link to="/projects">See Sector Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
