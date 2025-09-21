import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Factory, Wheat, ShoppingCart, Zap, TrendingUp, Clock, Users, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Automotive Manufacturing Plant",
      sector: "Industrial",
      icon: Factory,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
      capacity: "2.5MW",
      type: "Rooftop Solar + Battery Storage",
      location: "Gauteng, South Africa",
      completion: "2024",
      description: "Large-scale rooftop installation with battery storage for a major automotive manufacturer, providing reliable power during production hours and reducing peak demand charges.",
      metrics: {
        costReduction: "35%",
        uptime: "99.8%",
        co2Avoided: "1,850 tons/year",
        payback: "4.2 years"
      },
      challenges: [
        "High peak demand charges during production shifts",
        "Critical need for uninterrupted power supply",
        "Complex roof structure requiring custom mounting",
        "Integration with existing electrical infrastructure"
      ],
      solutions: [
        "2.5MW rooftop solar array with optimized panel layout",
        "1.2MWh battery storage system for peak shaving",
        "Smart energy management system with AI optimization",
        "Seamless integration with existing plant operations"
      ],
      results: [
        "35% reduction in electricity costs",
        "99.8% system uptime achieved",
        "Zero production disruptions during installation",
        "1,850 tons CO₂ emissions avoided annually"
      ]
    },
    {
      id: 2,
      title: "Citrus Farm Irrigation System",
      sector: "Agricultural",
      icon: Wheat,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop",
      capacity: "1.2MW",
      type: "Hybrid Solar + Storage",
      location: "Western Cape, South Africa",
      completion: "2023",
      description: "Hybrid solar system powering irrigation pumps and cold storage facilities for a 500-hectare citrus farm, ensuring 24/7 power availability in a remote location.",
      metrics: {
        costReduction: "40%",
        uptime: "24/7",
        co2Avoided: "890 tons/year",
        payback: "3.8 years"
      },
      challenges: [
        "Remote location with unreliable grid connection",
        "Critical irrigation timing requirements",
        "Seasonal energy demand variations",
        "Need for 24/7 cold storage operation"
      ],
      solutions: [
        "1.2MW ground-mounted solar array",
        "800kWh battery storage for night irrigation",
        "Smart irrigation scheduling based on weather forecasts",
        "Remote monitoring and control system"
      ],
      results: [
        "40% reduction in energy costs",
        "100% irrigation reliability achieved",
        "Increased crop yield due to optimal irrigation timing",
        "890 tons CO₂ emissions avoided annually"
      ]
    },
    {
      id: 3,
      title: "Regional Shopping Centre",
      sector: "Retail",
      icon: ShoppingCart,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      capacity: "3.8MW",
      type: "PPA with Multi-Tenant Billing",
      location: "KwaZulu-Natal, South Africa",
      completion: "2024",
      description: "Comprehensive PPA solution for a major shopping centre with 85 tenants, featuring advanced sub-metering and transparent billing allocation system.",
      metrics: {
        costReduction: "25%",
        uptime: "99.5%",
        tenantsServed: "85",
        payback: "N/A (PPA)"
      },
      challenges: [
        "Complex multi-tenant billing requirements",
        "Fair allocation of solar benefits across tenants",
        "Varying tenant energy consumption patterns",
        "Need for transparent cost breakdown"
      ],
      solutions: [
        "3.8MW rooftop solar installation",
        "AI-powered multi-tenant billing system",
        "Individual smart meters for each tenant",
        "Real-time energy allocation and cost tracking"
      ],
      results: [
        "25% average tenant electricity cost reduction",
        "100% billing transparency achieved",
        "85 tenants benefiting from solar energy",
        "Improved tenant satisfaction and retention"
      ]
    },
    {
      id: 4,
      title: "Food Processing Facility",
      sector: "Industrial",
      icon: Factory,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
      capacity: "1.8MW",
      type: "Rooftop Solar",
      location: "Mpumalanga, South Africa",
      completion: "2023",
      description: "Rooftop solar installation for a large food processing facility, designed to handle high energy demands during processing operations while maintaining food safety standards.",
      metrics: {
        costReduction: "30%",
        uptime: "99.2%",
        co2Avoided: "1,200 tons/year",
        payback: "5.1 years"
      },
      challenges: [
        "Strict food safety and hygiene requirements",
        "High energy demands during processing shifts",
        "Temperature-controlled storage requirements",
        "Need for backup power during critical operations"
      ],
      solutions: [
        "1.8MW rooftop solar installation with food-grade mounting",
        "Specialized inverters for food processing environments",
        "Energy monitoring integrated with production systems",
        "Backup power integration for critical cold storage"
      ],
      results: [
        "30% reduction in energy costs",
        "Maintained all food safety certifications",
        "1,200 tons CO₂ emissions avoided annually",
        "Improved energy cost predictability for budgeting"
      ]
    },
    {
      id: 5,
      title: "Wine Estate & Cellar",
      sector: "Agricultural",
      icon: Wheat,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      capacity: "800kW",
      type: "Hybrid Solar + Storage",
      location: "Western Cape, South Africa",
      completion: "2023",
      description: "Solar and battery system for a premium wine estate, powering cellar operations, irrigation, and visitor facilities while maintaining the aesthetic appeal of the historic property.",
      metrics: {
        costReduction: "45%",
        uptime: "99.9%",
        co2Avoided: "650 tons/year",
        payback: "4.5 years"
      },
      challenges: [
        "Heritage building restrictions and aesthetic requirements",
        "Critical temperature control for wine storage",
        "Seasonal irrigation and harvest energy demands",
        "Tourist facility power requirements"
      ],
      solutions: [
        "800kW ground-mounted solar array in vineyard areas",
        "500kWh battery storage for critical cellar operations",
        "Smart irrigation scheduling based on weather and soil data",
        "Aesthetic integration with landscape design"
      ],
      results: [
        "45% reduction in energy costs",
        "Zero temperature excursions in wine storage",
        "Enhanced sustainability credentials for premium market",
        "650 tons CO₂ emissions avoided annually"
      ]
    },
    {
      id: 6,
      title: "Logistics Distribution Center",
      sector: "Industrial",
      icon: Factory,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
      capacity: "4.2MW",
      type: "PPA with Smart Charging",
      location: "Gauteng, South Africa",
      completion: "2024",
      description: "Large-scale PPA installation for a major logistics hub, including EV charging infrastructure for delivery fleet and smart energy management for warehouse operations.",
      metrics: {
        costReduction: "28%",
        uptime: "99.6%",
        vehiclesCharged: "150+ daily",
        payback: "N/A (PPA)"
      },
      challenges: [
        "Large-scale energy demands for 24/7 operations",
        "Integration with electric vehicle charging infrastructure",
        "Peak demand management during shift changes",
        "Coordination with multiple operational systems"
      ],
      solutions: [
        "4.2MW rooftop and carport solar installation",
        "Smart EV charging stations with load balancing",
        "AI-powered energy management for warehouse operations",
        "Integration with fleet management systems"
      ],
      results: [
        "28% reduction in facility energy costs",
        "150+ electric vehicles charged daily",
        "Reduced fleet operating costs through smart charging",
        "Enhanced corporate sustainability profile"
      ]
    }
  ]

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Projects & Case Studies</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover how we've transformed energy operations for businesses across South Africa with our innovative solar solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real businesses. See how our solar solutions have delivered measurable benefits across different sectors.
            </p>
          </div>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <div key={project.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <project.icon className="h-12 w-12 text-blue-600 mr-4" />
                    <div>
                      <Badge variant="outline" className="mb-2">{project.sector}</Badge>
                      <h3 className="text-3xl font-bold text-gray-900">{project.title}</h3>
                      <p className="text-gray-600">{project.location} • {project.completion}</p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 mb-8">{project.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <Zap className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                      <p className="font-semibold">{project.capacity}</p>
                      <p className="text-sm text-gray-600">System Capacity</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <TrendingUp className="h-6 w-6 text-green-600 mx-auto mb-2" />
                      <p className="font-semibold">{project.metrics.costReduction}</p>
                      <p className="text-sm text-gray-600">Cost Reduction</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <Clock className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                      <p className="font-semibold">{project.metrics.uptime}</p>
                      <p className="text-sm text-gray-600">System Uptime</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg text-center">
                      <Users className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
                      <p className="font-semibold">{project.metrics.co2Avoided || project.metrics.tenantsServed || project.metrics.vehiclesCharged}</p>
                      <p className="text-sm text-gray-600">{project.metrics.co2Avoided ? 'CO₂ Avoided' : project.metrics.tenantsServed ? 'Tenants Served' : 'Vehicles Charged'}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-3">Key Challenges</h4>
                      <ul className="space-y-2">
                        {project.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start text-gray-600">
                            <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-3">Our Solutions</h4>
                      <ul className="space-y-2">
                        {project.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start text-gray-600">
                            <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-3">Results Achieved</h4>
                      <ul className="space-y-2">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="flex items-start text-gray-600">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg shadow-xl w-full h-96 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/600x400/png";
                    }}
                  />
                  <div className="mt-6 p-6 bg-gray-50 rounded-lg">
                    <h5 className="font-semibold mb-2">Project Type</h5>
                    <p className="text-gray-600">{project.type}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Project Impact Summary</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cumulative impact across all our completed projects demonstrates the transformative power of intelligent solar solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-blue-600">50+</CardTitle>
                <CardDescription>Projects Completed</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Across industrial, agricultural, and retail sectors</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-green-600">85MW</CardTitle>
                <CardDescription>Total Capacity Installed</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Generating clean energy across South Africa</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-purple-600">R2.1B</CardTitle>
                <CardDescription>Client Savings Generated</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Cumulative energy cost reductions achieved</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-yellow-600">45,000t</CardTitle>
                <CardDescription>CO₂ Emissions Avoided</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Annual environmental impact across all projects</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join the growing number of businesses that have transformed their energy operations with our intelligent solar solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link to="/solutions">Explore Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
