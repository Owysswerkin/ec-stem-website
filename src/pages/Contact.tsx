import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    centre: '',
    childAge: '',
    enquiryType: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your enquiry. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      centre: '',
      childAge: '',
      enquiryType: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+65 6234 5678', 'Mon - Fri: 8:00 AM - 6:00 PM'],
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@ecstem.club', 'We reply within 24 hours'],
      action: 'Send Email'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: ['+65 9123 4567', 'Quick responses available'],
      action: 'Message Us'
    }
  ];

  const centres = [
    {
      name: 'Little Stars Main Campus',
      address: '123 Learning Street, Central District, Singapore 123456',
      phone: '+65 6234 5678',
      hours: 'Mon - Fri: 7:00 AM - 7:00 PM'
    },
    {
      name: 'Little Stars East',
      address: '456 Sunshine Avenue, East District, Singapore 456789',
      phone: '+65 6345 6789',
      hours: 'Mon - Fri: 7:00 AM - 7:00 PM'
    },
    {
      name: 'Little Stars West',
      address: '789 Rainbow Road, West District, Singapore 789012',
      phone: '+65 6456 7890',
      hours: 'Mon - Fri: 7:00 AM - 7:00 PM'
    }
  ];

  const enquiryTypes = [
    'General Information',
    'Programme Details',
    'Admission Process',
    'Centre Visit',
    'Fees & Payment',
    'Other'
  ];

  const childAges = [
    '18 months - 2 years',
    '2 - 3 years',
    '3 - 4 years',
    '4 - 5 years',
    '5 - 6 years',
    'Multiple children'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-soft-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              {t('contactPage.title')}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('contactPage.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('contactPage.getInTouch')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('contactPage.getInTouchSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="group hover:shadow-warm transition-all duration-300 transform hover:scale-105 border-none shadow-gentle">
                <CardContent className="p-8 text-center">
                  <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <contact.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{contact.title}</h3>
                  <div className="space-y-2 mb-6">
                    {contact.details.map((detail, idx) => (
                      <p key={idx} className={`${idx === 0 ? 'font-semibold text-foreground' : 'text-muted-foreground text-sm'}`}>
                        {detail}
                      </p>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    {contact.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-none shadow-warm">
              <CardHeader>
                <h2 className="text-3xl font-bold text-foreground mb-2">Send us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Parent's Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="rounded-xl"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="rounded-xl"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="rounded-xl"
                        placeholder="+65 1234 5678"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Preferred Centre
                      </label>
                      <select
                        name="centre"
                        value={formData.centre}
                        onChange={handleInputChange}
                        className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select a centre</option>
                        <option value="main">Main Campus</option>
                        <option value="east">East Centre</option>
                        <option value="west">West Centre</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Child's Age
                      </label>
                      <select
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleInputChange}
                        className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select age range</option>
                        {childAges.map((age) => (
                          <option key={age} value={age}>{age}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Enquiry Type
                      </label>
                      <select
                        name="enquiryType"
                        value={formData.enquiryType}
                        onChange={handleInputChange}
                        className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select enquiry type</option>
                        {enquiryTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="rounded-xl"
                      placeholder="Tell us about your enquiry, your child's interests, or any specific questions you have..."
                    />
                  </div>

                  <Button type="submit" variant="default" size="lg" className="w-full">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Centre Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Centres</h2>
                <p className="text-muted-foreground mb-8">
                  Visit any of our three convenient locations. Each centre offers the same high-quality 
                  programmes with unique features.
                </p>
              </div>

              {centres.map((centre, index) => (
                <Card key={index} className="border-none shadow-gentle hover:shadow-warm transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">{centre.name}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-muted-foreground text-sm">{centre.address}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                        <p className="text-muted-foreground text-sm">{centre.phone}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                        <p className="text-muted-foreground text-sm">{centre.hours}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="mt-4">
                      Get Directions
                    </Button>
                  </CardContent>
                </Card>
              ))}

              {/* Office Hours */}
              <Card className="border-none shadow-gentle bg-primary-glow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Office Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="font-semibold text-foreground">7:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="font-semibold text-foreground">8:00 AM - 12:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-semibold text-foreground">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quick answers to common questions. Can't find what you're looking for? Contact us directly!
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What are your operating hours?",
                answer: "We're open Monday to Friday from 7:00 AM to 7:00 PM, and Saturday mornings from 8:00 AM to 12:00 PM for centre visits."
              },
              {
                question: "How do I schedule a centre visit?",
                answer: "You can call us, send an email, or fill out our contact form. We offer guided tours every Tuesday and Thursday at 10:00 AM."
              },
              {
                question: "What documents do I need for enrollment?",
                answer: "You'll need your child's birth certificate, immunization records, and a completed application form with recent photos."
              },
              {
                question: "Do you provide meals?",
                answer: "Yes, we provide nutritious meals and snacks. We can accommodate special dietary requirements with advance notice."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-none shadow-gentle">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;