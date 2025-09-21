import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    sector: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact LPS Solar</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to transform your energy future? Get in touch with our specialists for a free consultation and customized solar solution.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get Your Free Energy Assessment</h2>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Send className="h-6 w-6 text-blue-600 mr-2" />
                    Request a Proposal
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and our energy specialists will contact you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company *</Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@company.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+27 XX XXX XXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="sector">Industry Sector *</Label>
                      <select 
                        id="sector"
                        name="sector"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={formData.sector}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select your industry</option>
                        <option value="industrial">Industrial / Manufacturing</option>
                        <option value="agricultural">Agricultural / Farming</option>
                        <option value="retail">Shopping Centre / Retail</option>
                        <option value="logistics">Logistics / Warehousing</option>
                        <option value="hospitality">Hospitality / Tourism</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="education">Education</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Project Details</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your energy needs, current monthly electricity costs, roof space, and any specific requirements..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                      <Send className="h-5 w-5 mr-2" />
                      Request Free Assessment
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Phone className="h-6 w-6 text-blue-600 mr-2" />
                      Call Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-semibold text-gray-900 mb-2">+27 66 143 9477</p>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Mail className="h-6 w-6 text-blue-600 mr-2" />
                      Email Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold text-gray-900 mb-2">info@lightpathproperty.com</p>
                    <p className="text-gray-600">We typically respond within 2 hours during business hours</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                      Visit Our Office
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-semibold text-gray-900">LPS Solar Head Office</p>
                      <p className="text-gray-600">
                        DIH Offices<br />
                        20 Georgian Crescent<br />
                        Bryanston East<br />
                        Johannesburg, 2191<br />
                        South Africa
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="h-6 w-6 text-blue-600 mr-2" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>9:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Emergency Support:</span>
                        <span>24/7 Available</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Happens Next?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures you get the information and solutions you need quickly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Initial Contact</h3>
              <p className="text-gray-600">We'll contact you within 24 hours to discuss your energy needs and schedule a site assessment.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Site Assessment</h3>
              <p className="text-gray-600">Our engineers conduct a comprehensive site survey and energy audit to design the optimal solution.</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Proposal</h3>
              <p className="text-gray-600">Receive a detailed proposal with system design, financial analysis, and implementation timeline.</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Project Kickoff</h3>
              <p className="text-gray-600">Once approved, we handle all permits, installation, and commissioning to get you saving energy.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get quick answers to common questions about our solar solutions and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How long does the assessment take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our initial site assessment typically takes 2-4 hours, depending on the complexity of your facility. We'll provide a preliminary analysis on-site and a detailed proposal within 5 business days.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What information do you need for a quote?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We need your recent electricity bills (12 months), roof plans or photos, and information about your energy usage patterns. This helps us design the most effective solution for your needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you handle all permits and approvals?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we manage all regulatory approvals, municipal permits, and utility interconnection applications. Our team ensures full compliance with all local regulations and standards.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What warranty do you provide?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We provide comprehensive warranties: 25 years on solar panels, 10-15 years on inverters, and 5 years on installation workmanship. Our PPA customers receive performance guarantees throughout the contract period.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can you work with existing electrical systems?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Absolutely. Our engineers specialize in integrating solar systems with existing electrical infrastructure, including backup generators, UPS systems, and complex industrial equipment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What ongoing support do you provide?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We offer 24/7 monitoring, preventive maintenance, emergency support, and performance optimization. Our AI-powered platform provides real-time alerts and predictive maintenance scheduling.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Solar Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join hundreds of businesses across South Africa who have already made the switch to intelligent solar energy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="h-5 w-5 mr-2" />
              Call Now: +27 66 143 9477
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link to="/projects">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
