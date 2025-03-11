"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Card, 
  CardContent 
} from '@/components/ui/card'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send
} from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/80 z-10"></div>
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" 
            alt="Office building" 
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Get in touch with our team for expert legal assistance
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Our Location</h3>
                <p className="text-gray-600">
                  SUITE 027, RIGHT WING, TECHNICAL FLOOR, BOLINGO XPERIA HOTEL & TOWERS, PLOT 777, INDEPENDENT AVENUE, CENTRAL BUSINESS DISTRICT ABUJA
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Phone & Email</h3>
                <p className="text-gray-600 mb-2">
                  <a href="tel:+2348035239032" className="hover:text-accent">+234 8035239032</a>
                  <br />
                  <a href="tel:+2347057106732" className="hover:text-accent">+234 7057106732</a>
                </p>
                <p className="text-gray-600">
                  <a href="mailto:soniegbaji@gmail.com" className="hover:text-accent">soniegbaji@gmail.com</a>
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Office Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 5:00 PM
                  <br />
                  Saturday: 10:00 AM - 2:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Send Us a Message</h2>
              <div className="w-20 h-1 bg-accent mb-8"></div>
              
              <form
                action="https://formsubmit.co/soniegbaji@gmail.com"
                method="POST"
                className="space-y-6"
              >
                {/* <input type="hidden" name="_next" value="https://brickstome.com/thank-you" /> */}
                <input type="hidden" name="_subject" value="New Contact Form Submission" />
                {/* <input type="hidden" name="_captcha" value="true" /> */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <Input 
                      name="name"
                      placeholder="Your full name"
                      required
                      minLength={2}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <Input 
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input 
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                      required
                      minLength={6}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input 
                      name="subject"
                      placeholder="Subject of your message"
                      required
                      minLength={2}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    name="message"
                    placeholder="How can we help you?" 
                    className="min-h-[150px]"
                    required
                    minLength={10}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Location</h2>
              <div className="w-20 h-1 bg-accent mb-8"></div>
              
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
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
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-primary mb-4">Getting Here</h3>
                <p className="text-gray-600 mb-4">
                  Our office is conveniently located in the Central Business District of Abuja, within the Bolingo Xperia Hotel & Towers complex. We are easily accessible from all parts of the city.
                </p>
                <p className="text-gray-600">
                  If you need assistance finding us, please don&apos;t hesitate to call our office for directions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about working with our firm
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How do I schedule a consultation?",
                answer: "You can schedule a consultation by calling our office, sending us an email, or filling out the contact form on this page. Our team will get back to you promptly to arrange a convenient time."
              },
              {
                question: "What should I bring to my initial consultation?",
                answer: "For your initial consultation, please bring any relevant documents related to your legal matter, such as contracts, correspondence, court papers, or other materials that might help us understand your situation better."
              },
              {
                question: "What are your fees and billing practices?",
                answer: "Our fees vary depending on the nature and complexity of your legal matter. We offer various fee arrangements, including hourly rates, fixed fees, and contingency fees for certain cases. We'll discuss our fee structure during your initial consultation."
              },
              {
                question: "How long will my legal matter take to resolve?",
                answer: "The timeline for resolving legal matters varies widely depending on the complexity of the case, court schedules, and many other factors. We'll provide you with an estimated timeline based on your specific situation during our consultation."
              },
              {
                question: "Do you offer virtual consultations?",
                answer: "Yes, we offer virtual consultations via video conference or telephone for clients who prefer remote meetings or are unable to visit our office in person."
              },
              {
                question: "What areas of law does your firm practice?",
                answer: "Our firm offers comprehensive legal services across various practice areas, including corporate law, litigation, intellectual property, real estate, employment law, international law, banking and finance, energy and resources, and tax law."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Discuss Your Legal Needs?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Our team of experienced attorneys is ready to help you navigate your legal challenges and achieve your goals.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}