import { Link } from 'react-router-dom'
import { Sun, Mail, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Sun className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-xl font-bold">LPS Solar</span>
            </div>
            <p className="text-gray-400 mb-4">
              Powering Industry, Farming & Retail Through Smarter Solar
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/solutions" className="hover:text-white transition-colors">Rooftop Solar</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">Power Purchase Agreements</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">Hybrid & Battery Storage</Link></li>
              <li><Link to="/smart-energy" className="hover:text-white transition-colors">AI Energy Management</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Sectors</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/sectors" className="hover:text-white transition-colors">Industrial</Link></li>
              <li><Link to="/sectors" className="hover:text-white transition-colors">Agricultural</Link></li>
              <li><Link to="/sectors" className="hover:text-white transition-colors">Shopping Centres</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Case Studies</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                info@lpssolar.co.za
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1" />
                DIH Offices, 20 Georgian Crescent<br />
                Bryanston East, Johannesburg, 2191
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 LPS Solar. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
