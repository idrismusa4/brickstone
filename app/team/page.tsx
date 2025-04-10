"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, Linkedin, GraduationCap, Award, BookOpen, X } from 'lucide-react'

interface TeamMember {
  id: string
  name: string
  title: string
  image: string
  shortBio: string
  fullBio: string
  education: string[]
  achievements?: string[]
}

export default function TeamPage() {
  const attorneys: TeamMember[] = [
    {
      id: '1',
      name: 'N.S EGBAJI ESQ',
      title: 'Principal Solicitor',
      image: '/images/Egbaji .jpg',
      shortBio: 'LLB (Hons) BL, LLM, Ph.D (In view) Notary public',
      fullBio: 'Njang Sunday Egbaji is the Principal Solicitor of Brickstone Attorneys & Solicitors and he is responsible in directing the implementation of corporate policy and strategy of the firm. N.S Egbaji holds an LL.B from The University of Calabar and a B.L from the Nigeria Law School (Lagos). He holds an LL.M degree from the University of Jos and currently a Ph.D research student in the Faculty of law in the same University. He holds a proficiency certificate in Debt Recovery from the Institute of Debt Recovery Practitioners of Nigeria (Abuja). Egbaji has also acquired a National Diploma in Tourism at (upper credit level) from Plateau State Polytechnic (Jos) and has written two academic books in this field title Contemporary Perspective on Domestic & International Tourism & Tourism Development in Nigeria. He is married to Esther (a Nurse).',
      education: [
        'LL.B - University of Calabar',
        'B.L - Nigeria Law School (Lagos)',
        'LL.M - University of Jos',
        'Ph.D (In view) - University of Jos',
        'National Diploma in Tourism - Plateau State Polytechnic'
      ],
      achievements: [
        'Notary Public',
        'Proficiency certificate in Debt Recovery',
        'Author of two academic books on Tourism'
      ]
    },
    {
      id: '2',
      name: 'FELIX ELIJAH NNANNA ESQ',
      title: 'Counsel in Chambers',
      image: '/images/felix.jpg',
      shortBio: 'LLB (Hons) BL, LLM',
      fullBio: 'Felix Elijah Nnanna Esq gained a degree in Law (LL.B) from the University of Uyo and a B.L from the Nigerian Law School Lagos. He has a Masters in Law as well from Bayero University Kano at distinction level. He has an uncommon analytical mind and a tremendous ability to understand and attend to complex legal instructions. He is effective in time and resources management with a dogged determination to excel in his chosen field of specialization particularly his interest in commercial law and general litigation. In his over 10 years in practice, He has been involved in various forms of court room litigation, debt recovery, corporate practice and consultancy services. He has also been involved in various forms of alternative dispute resolutions.',
      education: [
        'LL.B - University of Uyo',
        'B.L - Nigerian Law School Lagos',
        'LL.M (Distinction) - Bayero University Kano'
      ]
    },
    {
      id: '3',
      name: 'OCHIGBO GIDEON ALECHENU',
      title: 'Counsel in Chambers',
      image: 'https://placehold.co/600x400?text=Hello+World',
      shortBio: 'LLB (Hons) BL, LLM',
      fullBio: 'Ochigbo Gideon Alechenu is a lawyer with an unwavering commitment to meeting and exceeding client\'s expectations. He is a prolific writer and has authored two books, namely, "The Law of Search, Bail and Detention in Nigeria; a Comparative Analysis in Honour of Senator Ameh Ebute", and \'Anatomy of the Offence of Criminal Breach of Trust\' in Honour of Dr. Paul Orhi, DG. NAFDAC" respectively. Ochigbo is driven by a determination to excel in his areas of expertise which include Company Law, Property Law, Criminal Law, Debt Recovery, Industrial Matters and General Legal Practice. Ochigbo is a great researcher.',
      education: [
        'Diploma in Law (Upper Credit) - Benue State Polytechnic',
        'LL.B (Hons) 2nd class (Upper Division) - University of Uyo',
        'B.L - Called to Nigerian Bar in 2010',
        'LL.M (In view) - University of Jos'
      ],
      achievements: [
        'Author of "The Law of Search, Bail and Detention in Nigeria"',
        'Author of "Anatomy of the Offence of Criminal Breach of Trust"'
      ]
    },
    {
      id: '4',
      name: 'JUDITH IDIGO',
      title: 'https://placehold.co/600x400?text=Hello+World',
      shortBio: 'LLB (Hons) BL, LLM',
      fullBio: 'Judith Idigo holds an LL.B Degree from Enugu State University and currently an LL.M student of the University of London. She has a keen interest in Telecommunication Law, Corporate Litigation, Debt Recovery and Banking Law, she has an uncommon analytical and a tremendous ability to understand and attend to complex task. She is effective in time and resource management with dogged determination to excel in law practice. She is a member of the Nigerian Bar Association, Unity Bar, Abuja.',
      education: [
        'LL.B - Enugu State University',
        'LL.M (In view) - University of London'
      ]
    },
    {
      id: '5',
      name: 'OKITADE OLUWADARE',
      title: 'Counsel in Chambers',
      image: 'https://placehold.co/600x400?text=Hello+World',
      shortBio: 'LLB (Hons) BL, LLM',
      fullBio: 'OKITADE OLUWADARE is a skilled attorney with experiences in litigation, corporate practice, real estate and property management. He is highly analytical and innovative with an ability to work under pressure. He received a degree in law (LL.B) from the Obafemi Awolowo University Ile Ife and a Bachelor of Law from the Nigerian Law School Lagos.',
      education: [
        'LL.B - Obafemi Awolowo University Ile Ife',
        'B.L - Nigerian Law School Lagos'
      ]
    }
  ]

  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (member: TeamMember) => {
    setSelectedMember(member)
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/80 z-10"></div>
        <div className="absolute inset-0">
          <Image 
            src="/images/4.jpg"
            alt="Law firm team"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Meet our experienced team of legal professionals dedicated to serving your needs
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Attorneys</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team of experienced attorneys brings specialized knowledge and a strategic approach to each matter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attorneys.map((attorney) => (
              <Card 
                key={attorney.id} 
                className="group cursor-pointer hover:shadow-xl transition-shadow duration-300"
                onClick={() => openModal(attorney)}
              >
                <CardContent className="p-0">
                  <div className="relative h-64">
                    <Image
                      src={attorney.image}
                      alt={attorney.name}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-white">Click to view profile</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{attorney.name}</h3>
                    <p className="text-accent mb-3">{attorney.title}</p>
                    <p className="text-gray-600">{attorney.shortBio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Member Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedMember && (
            <>
              <DialogHeader className="relative">
                <DialogTitle className="text-2xl font-bold text-primary">
                  {selectedMember.name}
                </DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="relative h-[300px] md:h-[400px]">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-accent mb-2">{selectedMember.title}</h3>
                    <p className="text-gray-600">{selectedMember.fullBio}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary flex items-center mb-2">
                      <GraduationCap className="h-5 w-5 mr-2" />
                      Education
                    </h4>
                    <ul className="space-y-1">
                      {selectedMember.education.map((edu, index) => (
                        <li key={index} className="text-gray-600 flex items-start">
                          <span className="text-accent mr-2">•</span>
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {selectedMember.achievements && (
                    <div>
                      <h4 className="font-semibold text-primary flex items-center mb-2">
                        <Award className="h-5 w-5 mr-2" />
                        Achievements
                      </h4>
                      <ul className="space-y-1">
                        {selectedMember.achievements.map((achievement, index) => (
                          <li key={index} className="text-gray-600 flex items-start">
                            <span className="text-accent mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Work With Our Team</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Our experienced attorneys are ready to help you navigate your legal challenges and achieve your goals.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}