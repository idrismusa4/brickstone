import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Scale, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Scale className="h-8 w-8" />
              <div>
                <h3 className="text-xl font-bold">Egbaji & Associates</h3>
                <p className="text-xs opacity-80">Legal Practitioners</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-6">
              A prestigious law firm providing expert legal services across Nigeria with a commitment to excellence and client satisfaction.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-accent after:-mb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/practice-areas" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors">Practice Areas</Link>
              </li>
              <li>
                <Link href="/team" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors">Our Team</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-accent after:-mb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-accent" />
                <span className="text-sm opacity-80">
                  SUITE 027, RIGHT WING, TECHNICAL FLOOR, BOLINGO XPERIA HOTEL & TOWERS, PLOT 777, INDEPENDENT AVENUE, CENTRAL BUSINESS DISTRICT ABUJA
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-accent" />
                <span className="text-sm opacity-80">+234 8035239032 / +234 7057106732</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-accent" />
                <span className="text-sm opacity-80">soniegbaji@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-accent" />
                <span className="text-sm opacity-80">Mon - Fri: 9:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-accent after:-mb-2">Newsletter</h3>
            <p className="text-sm opacity-80 mb-4">
              Subscribe to our newsletter to receive updates on legal insights and firm news.
            </p>
            <div className="flex flex-col space-y-3">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="bg-accent hover:bg-accent/90 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm opacity-70">
          <p>&copy; {new Date().getFullYear()} Egbaji & Associates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}