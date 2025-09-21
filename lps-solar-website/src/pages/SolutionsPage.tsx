import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Sun, Zap, Battery, Network, CheckCircle, ArrowRight, DollarSign, Clock, Shield, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SolutionsPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Solar Solutions & Services</h1>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
              Comprehensive solar energy solutions designed to meet the unique needs of industrial, agricultural, and retail businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Solar Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of flexible solar solutions, each designed to maximize your energy savings and operational efficiency.
            </p>
          </div>

          <Tabs defaultValue="rooftop" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="rooftop">Rooftop Solar</TabsTrigger>
              <TabsTrigger value="ppa">Power Purchase Agreements</TabsTrigger>
              <TabsTrigger value="hybrid">Hybrid & Storage</TabsTrigger>
              <TabsTrigger value="microgrid">Microgrid as a Service</TabsTrigger>
            </TabsList>

            <TabsContent value="rooftop" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <Sun className="h-12 w-12 text-yellow-500 mr-4" />
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">Rooftop Solar Systems</h3>
                      <p className="text-gray-600">Direct ownership with maximum long-term savings</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-3">Key Benefits</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          Complete system ownership and control
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          Maximum long-term ROI and energy savings
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          Ideal for industrial roofs and shopping centre canopies
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          25-year performance warranties
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          Section 12B tax incentives available
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-3">Technical Specifications</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="font-semibold">System Size</p>
                          <p className="text-gray-600">50kW - 5MW+</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="font-semibold">Panel Efficiency</p>
                          <p className="text-gray-600">20-22%</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="font-semibold">Warranty</p>
                          <p className="text-gray-600">25 years</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="font-semibold">Payback Period</p>
                          <p className="text-gray-600">4-7 years</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=400&fit=crop" 
                    alt="Commercial rooftop solar installation"
                    className="rounded-lg shadow-xl"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/600x400/png";
                    }}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ppa" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop" 
                    alt="Solar PPA installation with monitoring"
                    className="rounded-lg shadow-xl"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/600x400/png";
                    }}
                  />
                </div>
                
                <div>
                  <div className="flex items-center mb-6">
                    <Zap className="h-12 w-12 text-blue-500 mr-4" />
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">Power Purchase Agreements</h3>
                      <p className="text-gray-600">Zero upfront cost, immediate savings</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-3">How It Works</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          LPS Solar funds, installs, and maintains the system
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          You pay only for the solar energy consumed
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          Fixed tariff below municipal rates
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          Immediate cost savings from day one
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          No maintenance or operational responsibilities
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-3">PPA Benefits</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <DollarSign className="h-6 w-6 text-blue-600 mb-2" />
                          <p className="font-semibold">Zero Capex</p>
                          <p className="text-sm text-gray-600">No upfront investment required</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <Clock className="h-6 w-6 text-blue-600 mb-2" />
                          <p className="font-semibold">Immediate Savings</p>
                          <p className="text-sm text-gray-600">Start saving from month one</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <Shield className="h-6 w-6 text-blue-600 mb-2" />
                          <p className="font-semibold">Performance Guarantee</p>
                          <p className="text-sm text-gray-600">We guarantee system performance</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <TrendingUp className="h-6 w-6 text-blue-600 mb-2" />
                          <p className="font-semibold">Predictable Costs</p>
                          <p className="text-sm text-gray-600">Fixed energy pricing</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="hybrid" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <Battery className="h-12 w-12 text-green-500 mr-4" />
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">Hybrid & Battery Storage</h3>
                      <p className="text-gray-600">Maximum reliability and energy independence</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-3">System Components</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          High-efficiency solar panels
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          Lithium-ion battery storage systems
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          Smart hybrid inverters
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          AI-driven energy management system
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          Grid-tie and backup capabilities
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-3">Key Applications</h4>
                      <div className="space-y-3">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h5 className="font-semibold mb-2">Peak Demand Management</h5>
                          <p className="text-sm text-gray-600">Reduce expensive peak demand charges by using stored energy during high-tariff periods</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h5 className="font-semibold mb-2">Load-shedding Protection</h5>
                          <p className="text-sm text-gray-600">Keep critical operations running during power outages</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h5 className="font-semibold mb-2">Remote Area Power</h5>
                          <p className="text-sm text-gray-600">Reliable 24/7 power for agricultural operations in remote locations</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=600&h=400&fit=crop" 
                    alt="Battery storage system with solar panels"
                    className="rounded-lg shadow-xl"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/600x400/png";
                    }}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="microgrid" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop" 
                    alt="Smart microgrid control system"
                    className="rounded-lg shadow-xl"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/600x400/png";
                    }}
                  />
                </div>
                
                <div>
                  <div className="flex items-center mb-6">
                    <Network className="h-12 w-12 text-purple-500 mr-4" />
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">Microgrid as a Service</h3>
                      <p className="text-gray-600">AI-managed energy ecosystems</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-3">Advanced Features</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                          AI-powered energy optimization and forecasting
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                          Automated load balancing and dispatch
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                          Multi-tenant energy allocation and billing
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                          Predictive maintenance and fault detection
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                          Real-time monitoring and control dashboard
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-3">Perfect For</h4>
                      <div className="space-y-3">
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h5 className="font-semibold mb-2">Shopping Centres</h5>
                          <p className="text-sm text-gray-600">Complex multi-tenant billing and energy allocation</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h5 className="font-semibold mb-2">Industrial Parks</h5>
                          <p className="text-sm text-gray-600">Multiple facilities with varying energy demands</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h5 className="font-semibold mb-2">Agricultural Complexes</h5>
                          <p className="text-sm text-gray-600">Coordinated energy management across multiple operations</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Solution Comparison</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare our solar solutions to find the perfect fit for your business needs and budget.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Rooftop Solar</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">PPA</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Hybrid & Storage</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Microgrid</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Upfront Cost</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">High</td>
                  <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold">Zero</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Very High</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Variable</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Ownership</td>
                  <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold">Full</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">None</td>
                  <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold">Full</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Service</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Maintenance</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Owner</td>
                  <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold">LPS Solar</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Owner</td>
                  <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold">LPS Solar</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Backup Power</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">No</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">No</td>
                  <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold">Yes</td>
                  <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold">Yes</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">AI Management</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Optional</td>
                  <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold">Included</td>
                  <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold">Included</td>
                  <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold">Advanced</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Choose Your Solar Solution?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Our energy specialists will help you select the perfect solution for your specific needs and budget.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link to="/contact">Get a Custom Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link to="/finance">Explore Financing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
