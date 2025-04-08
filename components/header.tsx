"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { 
  Scale, 
  Menu, 
  X, 
  Phone, 
  Mail,
  MapPin
} from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Practice Areas', href: '/practice-areas' },
  { name: 'Our Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>+234 8035239032 / +234 7057106732</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span>soniegbaji@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">SUITE 027, RIGHT WING, TECHNICAL FLOOR, BOLINGO XPERIA HOTEL & TOWERS</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={cn(
          "py-4 px-4 transition-all duration-300",
          isScrolled ? "bg-white shadow-md" : "bg-white/90"
        )}
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-primary">BRICKSTONE</h1>
              <p className="text-xs text-muted-foreground">ATTORNEYS & SOLICITORS</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent relative py-2",
                  pathname === item.href 
                    ? "text-accent after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent" 
                    : "text-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button variant="default" className="bg-accent hover:bg-accent/90 text-white">
            <Link href={"https://wa.link/tyu0pt"} target='_blank'>
              Free Consultation
            </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t animate-fadeIn">
          <div className="container mx-auto py-4 px-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-base font-medium py-2 border-b border-gray-100",
                    pathname === item.href ? "text-accent" : "text-primary"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="default" className="bg-accent hover:bg-accent/90 text-white w-full mt-4">
              <Link href={"https://wa.link/tyu0pt"} target='_blank'>
                Free Consultation
              </Link>
              </Button>
            </div>
            
            {/* Mobile Contact Info */}
            <div className="mt-6 space-y-3 text-sm text-gray-600">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <span>+234 8035239032 / +234 7057106732</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <span>soniegbaji@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                <span>SUITE 027, RIGHT WING, TECHNICAL FLOOR, BOLINGO XPERIA HOTEL & TOWERS</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}