import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Scale, 
  Briefcase, 
  Users, 
  Award, 
  ChevronRight,
  Building,
  GraduationCap,
  Landmark,
  FileText,
  Handshake,
  Globe
} from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/80 z-10"></div>
        <div className="absolute inset-0">
          <Image 
            src="/images/4.jpg" 
            alt="Law firm building" 
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-20 text-center">
          <div className="max-w-3xl mx-auto animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              BRICKSTONE ATTORNEYS & SOLICITORS
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              A multi-specialist law firm providing corporate legal services, consultancy and general legal practice with excellence, integrity, and profound understanding of Nigeria&apos;s investment environment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
              <Link href={"https://wa.link/tyu0pt"} target='_blank'>
                Free Consultation
              </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-black border-white hover:bg-accent hover:text-white">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">The Firm&apos;s Overview</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              BRICKSTONE ATTORNEYS & SOLICITORS is distinguished by excellence, integrity, industrious, depth and scope of its legal advisory. We provide seamless services to our highly diversified clientele including high net-worth individuals, public and privately held Commercial Businesses and Financial institutions, as well as Government and State owned entities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Scale className="h-10 w-10 text-accent" />,
                title: "Legal Excellence",
                description: "Our firm provides comprehensive corporate legal services with profound understanding of Nigeria's investment environment."
              },
              {
                icon: <Users className="h-10 w-10 text-accent" />,
                title: "Client-Focused",
                description: "We serve a diverse clientele including high net-worth individuals, businesses, and government entities."
              },
              {
                icon: <Award className="h-10 w-10 text-accent" />,
                title: "Proactive Approach",
                description: "We routinely review relevant statute laws and provide preemptive legal advice to our clients."
              },
              {
                icon: <Briefcase className="h-10 w-10 text-accent" />,
                title: "Comprehensive Service",
                description: "From corporate disputes to debt recovery, we offer complete legal solutions across various domains."
              }
            ].map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Areas of Legal Coverage</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide legal services with professionalism and transparency across a wide range of practice areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Building className="h-10 w-10 text-accent" />,
                title: "Corporate Law",
                description: "Comprehensive legal services for businesses including company law and corporate disputes."
              },
              {
                icon: <Landmark className="h-10 w-10 text-accent" />,
                title: "Civil & Criminal Law",
                description: "Expert representation in civil and criminal matters with a focus on justice and results."
              },
              {
                icon: <FileText className="h-10 w-10 text-accent" />,
                title: "Property Law",
                description: "Handling property transactions, joint ventures, conveyance, and real estate disputes."
              },
              {
                icon: <Handshake className="h-10 w-10 text-accent" />,
                title: "Alternative Dispute Resolution",
                description: "Expertise in mediation, arbitration, conciliation, and other dispute resolution mechanisms."
              },
              {
                icon: <Globe className="h-10 w-10 text-accent" />,
                title: "Oil & Gas",
                description: "Specialized legal services for the energy sector and related industries."
              },
              {
                icon: <Users className="h-10 w-10 text-accent" />,
                title: "Employment Law",
                description: "Handling industrial and employment disputes with expertise and professionalism."
              }
            ].map((area, index) => (
              <Card key={index} className="border border-gray-100 hover:border-accent/50 transition-all duration-300 hover:shadow-md group">
                <CardContent className="p-8">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{area.icon}</div>
                  <h3 className="text-xl font-bold text-primary mb-3">{area.title}</h3>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <Link href={`/practice-areas#${area.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-accent font-medium flex items-center hover:underline">
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Discuss Your Legal Needs?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Our team of experienced attorneys are ready to help you navigate your legal challenges and achieve your goals.
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