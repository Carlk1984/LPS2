import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { DollarSign, TrendingUp, Calculator, CheckCircle, ArrowRight, PiggyBank, CreditCard, Banknote } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function FinancePage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-green-600 to-yellow-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Finance & Billing Solutions</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Flexible financing options and transparent billing systems that make solar energy accessible and profitable for your business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Power Purchase Agreement (PPA) Model</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our flagship PPA model eliminates upfront costs while delivering immediate savings and long-term energy security.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-semibold mb-6">How Our PPA Works</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <span className="text-blue-600 font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">System Design & Installation</h4>
                    <p className="text-gray-600">LPS Solar designs, funds, and installs the complete solar system on your property at no cost to you.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <span className="text-blue-600 font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Energy Purchase Agreement</h4>
                    <p className="text-gray-600">You purchase solar energy at a fixed rate below municipal tariffs, typically 15-25% lower than grid electricity.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <span className="text-blue-600 font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Operation & Maintenance</h4>
                    <p className="text-gray-600">We handle all system maintenance, monitoring, and performance guarantees throughout the contract period.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <span className="text-blue-600 font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Immediate Savings</h4>
                    <p className="text-gray-600">Start saving on electricity costs from day one with predictable energy pricing for 15-20 years.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop" 
                alt="Financial planning and solar investment"
                className="rounded-lg shadow-xl"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/600x400/png";
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Zero Upfront Cost</CardTitle>
                <CardDescription>No capital investment required</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• No equipment purchase</li>
                  <li>• No installation costs</li>
                  <li>• No maintenance expenses</li>
                  <li>• No performance risk</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Immediate Savings</CardTitle>
                <CardDescription>Start saving from month one</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 15-25% cost reduction</li>
                  <li>• Fixed pricing protection</li>
                  <li>• Predictable energy costs</li>
                  <li>• Improved cash flow</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Calculator className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Performance Guarantee</CardTitle>
                <CardDescription>We guarantee system performance</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 25-year performance warranty</li>
                  <li>• Guaranteed energy production</li>
                  <li>• Professional maintenance</li>
                  <li>• Insurance coverage included</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Alternative Financing Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the financing model that best suits your business needs and financial strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="h-full">
              <CardHeader>
                <PiggyBank className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-2xl">Outright Purchase</CardTitle>
                <CardDescription>Own your system from day one</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Benefits</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Maximum long-term savings
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Full ownership and control
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Section 12B tax benefits
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Asset value addition
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Typical Payback</h4>
                    <Badge variant="outline">4-7 years</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CreditCard className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Solar Lease</CardTitle>
                <CardDescription>Low monthly payments with ownership option</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Benefits</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Low monthly payments
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Option to purchase
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Maintenance included
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Flexible terms
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Lease Terms</h4>
                    <Badge variant="outline">5-15 years</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <Banknote className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-2xl">Hybrid Financing</CardTitle>
                <CardDescription>Combine multiple financing methods</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Benefits</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Customized structure
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Optimized cash flow
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Risk sharing
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Scalable solutions
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Flexibility</h4>
                    <Badge variant="outline">Custom Terms</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Section 12B Tax Incentives</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take advantage of South African government incentives to accelerate your solar investment returns.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Tax Benefits Overview</h3>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3">Section 12B Allowance</h4>
                  <p className="text-gray-600 mb-4">
                    Accelerated depreciation allowance for renewable energy assets, allowing you to deduct the full cost of your solar system in the first year.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      100% first-year depreciation allowance
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Applies to solar PV systems up to 1MW per site
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Significant tax savings in year one
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Improved project ROI and payback period
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3">Additional Benefits</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      VAT exemption on solar equipment imports
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      Reduced customs duties on renewable energy equipment
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      Carbon tax exemptions for clean energy generation
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      Potential for carbon credit revenue streams
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-lg">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Tax Savings Calculator</h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">System Cost Example</p>
                    <p className="text-2xl font-bold text-gray-900">R 2,500,000</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Corporate Tax Rate</p>
                    <p className="text-2xl font-bold text-gray-900">28%</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Section 12B Tax Savings</p>
                    <p className="text-2xl font-bold text-green-600">R 700,000</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Effective System Cost</p>
                    <p className="text-2xl font-bold text-blue-600">R 1,800,000</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  *Actual savings depend on individual tax circumstances. Consult with your tax advisor for specific calculations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Financial Comparison</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare the financial impact of different financing options for a typical 1MW commercial solar installation.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Financing Option</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Upfront Cost</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Year 1 Savings</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">20-Year Savings</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Ownership</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Power Purchase Agreement</td>
                  <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold">R 0</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">R 180,000</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">R 4.2M</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">No</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Outright Purchase</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">R 12M</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">R 1.2M</td>
                  <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold">R 18M</td>
                  <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold">Yes</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Solar Lease</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">R 500K</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">R 300,000</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">R 8.5M</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Optional</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Purchase + Section 12B</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">R 8.6M*</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">R 4.6M*</td>
                  <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold">R 21M*</td>
                  <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold">Yes</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-gray-600 mt-4">
              *Includes tax benefits. Actual figures depend on individual circumstances and tax rates.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-green-600 to-yellow-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Explore Your Financing Options?
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
            Our financial specialists will help you choose the optimal financing structure for your solar investment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" asChild>
              <Link to="/contact">Get Financial Analysis</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600" asChild>
              <Link to="/solutions">View Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
