import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  Award, 
  CheckCircle2, 
  Scale, 
  Users, 
  Building, 
  BookOpen,
  ChevronRight,
  Briefcase,
  Landmark,
  FileText,
  MapPin,
  Phone,
  Mail,
  Clock
} from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/80 z-10"></div>
        <div className="absolute inset-0">
          <Image 
            src="/images/9.jpg" 
            alt="Law firm building" 
            fill
            style={{ objectFit: 'fill' }}
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Firm</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            A young and dynamic law firm providing exceptional legal services since our founding
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">The Firm&apos;s Overview</h2>
              <div className="w-20 h-1 bg-accent mb-8"></div>
              <p className="text-gray-600 mb-6">
                BRICKSTONE ATTORNEYS & SOLICITORS is a multi-specialist law firm that provides corporate legal services, Consultancy and General legal practice. A young and dynamic Law Firm that provides legal services to both Government Agencies, Parastatals, corporate bodies and individual with the strength of the Firm being the profound understanding of the investment environment of Nigeria.
              </p>
              <p className="text-gray-600 mb-6">
                The Law Firm is distinguished by excellence, integrity, industrious, depth and scope of its legal advisory. We are poised to provide seamless services to our highly diversified clientele which include high net-worth individuals, public and privately held Commercial Businesses and Financial institutions, as well as Government and State owned entities involved in sophisticated corporate and financial transactions and complex Dispute Resolution Proceeding.
              </p>
              <p className="text-gray-600 mb-6">
                The Firm has a great competence in the handling of matters relating to corporate Dispute, crimes and Recoveries. We also interpret Statutes, resolutions, Bills and present legal opinions.
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/5.jpg" 
                alt="Law firm history" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Office</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Abuja&apos;s Central Business District
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/images/10.jpg"
                  alt="Office exterior" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/images/2.jpg"
                  alt="Office interior" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/images/8.jpg"
                  alt="Office interior" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-primary mb-6">Visit Our Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-accent mr-3 mt-1" />
                    <p className="text-gray-600">
                      SUITE 027, RIGHT WING, TECHNICAL FLOOR, BOLINGO XPERIA HOTEL & TOWERS, PLOT 777, INDEPENDENT AVENUE, CENTRAL BUSINESS DISTRICT ABUJA
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-accent mr-3" />
                    <p className="text-gray-600">+234 8035239032 / +234 7057106732</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-accent mr-3" />
                    <p className="text-gray-600">soniegbaji@gmail.com</p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-accent mr-3" />
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-primary mb-6">Location Map</h3>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1353383146366!2d7.4902863!3d9.0476123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ba5c5936d27%3A0x5e7a7a2a9c0a3c1a!2sBolingo%20Hotels%20and%20Towers!5e0!3m2!1sen!2sng!4v1651234567890!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Coverage */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Areas of Legal Coverage</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The firm is involved in corporate and public practice covering all aspects of legal services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                {
                  icon: <Landmark className="h-6 w-6 text-accent" />,
                  title: "Criminal & Civil Law",
                  description: "Comprehensive coverage of criminal and civil law matters"
                },
                {
                  icon: <Building className="h-6 w-6 text-accent" />,
                  title: "Company Law",
                  description: "Expert handling of corporate and business legal matters"
                },
                {
                  icon: <Briefcase className="h-6 w-6 text-accent" />,
                  title: "Debt Recovery",
                  description: "Professional debt recovery services with proven results"
                },
                {
                  icon: <Scale className="h-6 w-6 text-accent" />,
                  title: "Alternative Dispute Resolution",
                  description: "Expertise in mediation, arbitration, and conciliation"
                }
              ].map((service, index) => (
                <div key={index} className="flex items-start p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="mr-4">{service.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {[
                {
                  icon: <FileText className="h-6 w-6 text-accent" />,
                  title: "Property Law",
                  description: "Handling property matters, contracts, and conveyancing"
                },
                {
                  icon: <Users className="h-6 w-6 text-accent" />,
                  title: "Employment Law",
                  description: "Resolution of industrial and employment disputes"
                },
                {
                  icon: <Building className="h-6 w-6 text-accent" />,
                  title: "Oil & Gas",
                  description: "Specialized services for the energy sector"
                },
                {
                  icon: <Scale className="h-6 w-6 text-accent" />,
                  title: "General Practice",
                  description: "Comprehensive legal services across various domains"
                }
              ].map((service, index) => (
                <div key={index} className="flex items-start p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="mr-4">{service.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Approach</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide legal services with professionalism and transparency to earn the confidence of our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Proactive Approach",
                description: "The Firm has a policy of being proactive and routinely reviews relevant statute laws to advise clients on matters of interest, helping them avoid legal complications."
              },
              {
                title: "Client-Focused Service",
                description: "We provide seamless services to our highly diversified clientele, understanding and addressing their unique legal needs and challenges."
              },
              {
                title: "Professional Excellence",
                description: "Our firm is distinguished by excellence, integrity, and the depth and scope of its legal advisory services."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-accent mr-3" />
                  <h3 className="text-xl font-bold text-primary">{value.title}</h3>
                </div>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Experience the difference of working with a firm that combines legal excellence with a client-centered approach.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
              Schedule a Consultation
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-black border-white hover:bg-white">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}