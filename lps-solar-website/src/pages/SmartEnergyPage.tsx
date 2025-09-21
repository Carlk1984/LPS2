import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Brain, TrendingUp, Shield, Monitor, Zap, Clock, Users, BarChart3, CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SmartEnergyPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Smart AI Energy Management</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Revolutionary AI-powered platform that optimizes energy usage, automates billing, and provides real-time insights for maximum efficiency and transparency.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                AI-Powered Energy Optimization
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our advanced AI algorithms continuously analyze energy patterns, weather forecasts, and operational demands to optimize your solar energy system's performance in real-time. This intelligent approach ensures maximum efficiency and cost savings.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Brain className="h-8 w-8 text-purple-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Predictive Forecasting</h3>
                    <p className="text-gray-600">AI models predict energy generation and consumption patterns up to 7 days in advance, enabling proactive energy management decisions.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <TrendingUp className="h-8 w-8 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Intelligent Dispatch</h3>
                    <p className="text-gray-600">Automated energy dispatch optimization balances solar generation, battery storage, and grid consumption to minimize costs.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Zap className="h-8 w-8 text-yellow-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Load Management</h3>
                    <p className="text-gray-600">Smart load balancing automatically shifts non-critical operations to periods of peak solar generation.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" 
                alt="AI dashboard showing energy optimization analytics"
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Automated Tenant Billing System</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary multi-tenant billing solution that ensures fair and transparent energy cost allocation across all tenants in shopping centres and commercial complexes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" 
                alt="Automated billing dashboard interface"
                className="rounded-lg shadow-xl"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/600x400/png";
                }}
              />
            </div>
            
            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">How It Works</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      Smart meters track individual tenant energy consumption in real-time
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      AI algorithms calculate fair allocation of solar energy benefits
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      Municipal tariff base pricing with solar energy credits applied
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      Automated monthly billing with detailed consumption reports
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      Transparent cost breakdown for landlords and tenants
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600 mb-2" />
                    <h4 className="font-semibold">Multi-Tenant Support</h4>
                    <p className="text-sm text-gray-600">Unlimited tenant accounts with individual tracking</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-blue-600 mb-2" />
                    <h4 className="font-semibold">Detailed Analytics</h4>
                    <p className="text-sm text-gray-600">Comprehensive usage and savings reports</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-600 mb-2" />
                    <h4 className="font-semibold">Real-time Updates</h4>
                    <p className="text-sm text-gray-600">Live consumption and cost tracking</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <Shield className="h-6 w-6 text-blue-600 mb-2" />
                    <h4 className="font-semibold">Audit Trail</h4>
                    <p className="text-sm text-gray-600">Complete transaction history and verification</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real-time Monitoring Dashboard</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive monitoring platform providing live insights into system performance, energy flows, and cost savings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Monitor className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Live Performance</CardTitle>
                <CardDescription>Real-time system monitoring</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Current power generation</li>
                  <li>• Energy consumption patterns</li>
                  <li>• System efficiency metrics</li>
                  <li>• Weather impact analysis</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Analytics & Reports</CardTitle>
                <CardDescription>Comprehensive data insights</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Historical performance data</li>
                  <li>• Cost savings calculations</li>
                  <li>• ROI tracking and projections</li>
                  <li>• Custom report generation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Alerts & Maintenance</CardTitle>
                <CardDescription>Proactive system management</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Automated fault detection</li>
                  <li>• Predictive maintenance alerts</li>
                  <li>• Performance optimization tips</li>
                  <li>• Remote troubleshooting</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Dashboard Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm mb-3">
                  <div className="text-3xl font-bold text-green-600">98.7%</div>
                  <div className="text-sm text-gray-600">System Uptime</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm mb-3">
                  <div className="text-3xl font-bold text-blue-600">2.4MW</div>
                  <div className="text-sm text-gray-600">Current Generation</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm mb-3">
                  <div className="text-3xl font-bold text-purple-600">R847k</div>
                  <div className="text-sm text-gray-600">Monthly Savings</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm mb-3">
                  <div className="text-3xl font-bold text-yellow-600">156t</div>
                  <div className="text-sm text-gray-600">CO₂ Avoided</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cybersecurity & Compliance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade security and full regulatory compliance ensure your energy data is protected and your operations meet all South African standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Security Standards</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">End-to-End Encryption</h4>
                    <p className="text-gray-600 text-sm">All data transmission and storage protected with AES-256 encryption</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Multi-Factor Authentication</h4>
                    <p className="text-gray-600 text-sm">Secure access controls with role-based permissions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Regular Security Audits</h4>
                    <p className="text-gray-600 text-sm">Continuous monitoring and vulnerability assessments</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Backup & Recovery</h4>
                    <p className="text-gray-600 text-sm">Automated backups with disaster recovery protocols</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Regulatory Compliance</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold mb-2">NERSA Compliance</h4>
                  <p className="text-gray-600 text-sm">Full compliance with National Energy Regulator requirements for embedded generation</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold mb-2">SANS Standards</h4>
                  <p className="text-gray-600 text-sm">Adherence to South African National Standards for electrical installations and safety</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-semibold mb-2">POPIA Compliance</h4>
                  <p className="text-gray-600 text-sm">Protection of Personal Information Act compliance for all customer data</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-semibold mb-2">ISO Certifications</h4>
                  <p className="text-gray-600 text-sm">ISO 27001 information security and ISO 9001 quality management systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our smart energy platform is built on cutting-edge technology designed for scalability, reliability, and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Brain className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>AI Engine</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Machine learning algorithms
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Weather data integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Predictive analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Continuous learning
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Monitor className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Data Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Real-time data processing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Cloud-based infrastructure
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    API integrations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Scalable architecture
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Security Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    AES-256 encryption
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Multi-factor authentication
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Role-based access
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Audit logging
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Future of Energy Management
          </h2>
          <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
            Join the revolution in intelligent energy management. Our AI-powered platform is ready to transform your energy operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100" asChild>
              <Link to="/contact">Request a Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600" asChild>
              <Link to="/projects">See It in Action</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
