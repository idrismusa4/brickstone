import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Building, 
  Landmark, 
  GraduationCap, 
  FileText, 
  Handshake, 
  Globe,
  Briefcase,
  Scale,
  Users,
  Shield,
  Banknote,
  ChevronRight
} from 'lucide-react'

const practiceAreas = [
  {
    id: "corporate-law",
    icon: <Building className="h-12 w-12 text-accent" />,
    title: "Corporate Law",
    description: "Our corporate law practice provides comprehensive legal services to businesses of all sizes, from startups to established corporations. We assist with entity formation, corporate governance, mergers and acquisitions, joint ventures, and regulatory compliance.",
    services: [
      "Business Formation & Structuring",
      "Corporate Governance",
      "Mergers & Acquisitions",
      "Joint Ventures & Strategic Alliances",
      "Corporate Compliance",
      "Commercial Contracts"
    ],
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "litigation",
    icon: <Landmark className="h-12 w-12 text-accent" />,
    title: "Litigation",
    description: "Our litigation team provides strategic representation in court proceedings across various areas of civil and commercial litigation. We combine thorough preparation, skilled advocacy, and strategic thinking to achieve favorable outcomes for our clients.",
    services: [
      "Civil Litigation",
      "Commercial Disputes",
      "Alternative Dispute Resolution",
      "Appellate Advocacy",
      "Class Action Defense",
      "Injunctions & Emergency Relief"
    ],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "intellectual-property",
    icon: <GraduationCap className="h-12 w-12 text-accent" />,
    title: "Intellectual Property",
    description: "Our intellectual property practice helps clients protect and leverage their creative and innovative assets. We provide comprehensive services for the protection and enforcement of patents, trademarks, copyrights, and trade secrets.",
    services: [
      "Trademark Registration & Protection",
      "Copyright Registration & Enforcement",
      "Patent Prosecution & Litigation",
      "Trade Secret Protection",
      "IP Licensing & Transactions",
      "IP Portfolio Management"
    ],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
  },
  {
    id: "real-estate",
    icon: <FileText className="h-12 w-12 text-accent" />,
    title: "Real Estate",
    description: "Our real estate practice provides legal guidance for property transactions, development projects, and real estate disputes. We assist clients with acquisitions, sales, leasing, financing, development, and property management.",
    services: [
      "Property Acquisitions & Sales",
      "Commercial & Residential Leasing",
      "Real Estate Development",
      "Construction Contracts & Disputes",
      "Property Disputes & Litigation",
      "Land Use & Zoning"
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
  },
  {
    id: "employment-law",
    icon: <Handshake className="h-12 w-12 text-accent" />,
    title: "Employment Law",
    description: "Our employment law practice provides advice on employment contracts, workplace policies, and resolution of employment disputes. We help employers navigate the complex landscape of employment regulations and best practices.",
    services: [
      "Employment Contracts & Policies",
      "Workplace Investigations",
      "Discrimination & Harassment Claims",
      "Labor Relations & Collective Bargaining",
      "Executive Compensation",
      "Severance Agreements"
    ],
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
  },
  {
    id: "international-law",
    icon: <Globe className="h-12 w-12 text-accent" />,
    title: "International Law",
    description: "Our international law practice provides legal support for cross-border transactions, international trade, and global business operations. We help clients navigate the complexities of doing business across jurisdictions.",
    services: [
      "Cross-Border Transactions",
      "International Trade & Customs",
      "Foreign Investment",
      "International Dispute Resolution",
      "Compliance with International Regulations",
      "International Business Structuring"
    ],
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "banking-finance",
    icon: <Banknote className="h-12 w-12 text-accent" />,
    title: "Banking & Finance",
    description: "Our banking and finance practice advises financial institutions, lenders, borrowers, and investors on a wide range of financial transactions and regulatory matters. We provide strategic counsel on complex financial arrangements and compliance issues.",
    services: [
      "Project Finance",
      "Structured Finance",
      "Banking Regulation & Compliance",
      "Loan Documentation",
      "Debt Restructuring",
      "Financial Services Litigation"
    ],
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "energy-resources",
    icon: <Briefcase className="h-12 w-12 text-accent" />,
    title: "Energy & Resources",
    description: "Our energy and resources practice provides specialized legal services to clients in the oil and gas, mining, power, and renewable energy sectors. We assist with regulatory compliance, project development, and dispute resolution.",
    services: [
      "Oil & Gas Transactions",
      "Mining & Minerals",
      "Power Projects",
      "Renewable Energy",
      "Environmental Compliance",
      "Energy Litigation & Arbitration"
    ],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "tax-law",
    icon: <Scale className="h-12 w-12 text-accent" />,
    title: "Tax Law",
    description: "Our tax law practice provides strategic advice on tax planning, compliance, and dispute resolution. We help clients navigate complex tax regulations and optimize their tax positions while ensuring compliance with applicable laws.",
    services: [
      "Tax Planning & Strategy",
      "Corporate Tax",
      "International Tax",
      "Tax Controversy & Litigation",
      "Transfer Pricing",
      "Tax Compliance"
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2011&q=80"
  }
];

export default function PracticeAreasPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/80 z-10"></div>
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Law books" 
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Practice Areas</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Comprehensive legal expertise across a wide range of specialties
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Legal Expertise</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 mb-8">
              At Egbaji & Associates, we offer comprehensive legal services across a wide range of practice areas. Our team of experienced attorneys brings specialized knowledge and a strategic approach to each matter, ensuring that our clients receive the highest quality legal representation.
            </p>
            <p className="text-lg text-gray-600">
              Whether you&apos;re facing a complex business transaction, a challenging litigation matter, or need ongoing legal counsel, our diverse expertise allows us to provide tailored solutions to meet your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {practiceAreas.map((area, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all duration-300" id={area.id}>
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image 
                      src={area.image} 
                      alt={area.title} 
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="absolute inset-0 bg-primary/60 flex items-center justify-center">
                      {area.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">{area.title}</h3>
                    <p className="text-gray-600 mb-4">{area.description}</p>
                    <h4 className="font-semibold text-primary mb-2">Our Services:</h4>
                    <ul className="space-y-1 mb-4">
                      {area.services.map((service, idx) => (
                        <li key={idx} className="flex items-start">
                          <ChevronRight className="h-4 w-4 text-accent mr-2 mt-1" />
                          <span className="text-gray-600">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Case Studies</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore some of our notable cases and how we&apos;ve helped our clients achieve their objectives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Corporate Restructuring for Energy Company",
                category: "Corporate Law",
                challenge: "A major energy company needed to restructure its operations across multiple jurisdictions to improve efficiency and reduce tax liability.",
                solution: "Our team developed and implemented a comprehensive restructuring plan that streamlined operations while ensuring compliance with regulatory requirements in all relevant jurisdictions.",
                result: "The restructuring resulted in a 15% reduction in operational costs and significant tax savings, while positioning the company for future growth."
              },
              {
                title: "Intellectual Property Dispute Resolution",
                category: "Intellectual Property",
                challenge: "A technology startup faced allegations of patent infringement from a larger competitor, threatening its core product line.",
                solution: "We conducted a thorough analysis of the patents in question and developed a strong defense strategy, while simultaneously negotiating with the opposing party.",
                result: "Successfully resolved the dispute through a favorable settlement that allowed our client to continue operations without disruption."
              },
              {
                title: "Complex Real Estate Development Project",
                category: "Real Estate",
                challenge: "A developer faced regulatory hurdles and community opposition to a large-scale mixed-use development project.",
                solution: "Our team navigated the complex regulatory landscape, engaged with community stakeholders, and structured agreements to address concerns while advancing the project.",
                result: "Secured all necessary approvals and successfully launched the development, which has become a landmark project in the region."
              },
              {
                title: "International Joint Venture",
                category: "International Law",
                challenge: "A Nigerian company sought to establish a joint venture with European partners, requiring navigation of complex cross-border legal issues.",
                solution: "We structured the joint venture to optimize legal protection, tax efficiency, and operational flexibility across multiple jurisdictions.",
                result: "Successfully established the joint venture, which has expanded operations across three continents."
              }
            ].map((study, index) => (
              <Card key={index} className="border border-gray-100 hover:border-accent/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full">{study.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{study.title}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary">Challenge:</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Solution:</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Result:</h4>
                      <p className="text-gray-600">{study.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Legal Assistance?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Our team of experienced attorneys is ready to help you navigate your legal challenges and achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
              Schedule a Consultation
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}