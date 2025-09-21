import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Sun, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Sectors', href: '/sectors' },
    { name: 'Smart Energy', href: '/smart-energy' },
    { name: 'Projects', href: '/projects' },
    { name: 'Finance', href: '/finance' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <Sun className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-2xl font-bold text-gray-900">LPS Solar</span>
          </Link>
          
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-gray-700 hover:text-blue-600 transition-colors ${
                  location.pathname === item.href ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link to="/contact">Request Free Assessment</Link>
            </Button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-gray-700 hover:text-blue-600 transition-colors ${
                    location.pathname === item.href ? 'text-blue-600 font-semibold' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-blue-600 hover:bg-blue-700 w-full mt-4" asChild>
                <Link to="/contact">Request Free Assessment</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
