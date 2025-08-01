import React, { useState } from 'react';
import { CheckCircle, FileText, Calendar, Users, Clock, ArrowRight, Phone, Mail, Building2 } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Admissions = () => {
  const [formData, setFormData] = useState({
    centreName: '',
    contactPerson: '',
    email: '',
    phone: '',
    centreLocation: '',
    numberOfStudents: '',
    currentAge: '',
    programmeInterest: '',
    preferredStartDate: '',
    currentCurriculum: '',
    additionalInfo: ''
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
    toast({
      title: "Enquiry Submitted!",
      description: "Thank you for your interest. We'll contact you within 1 business day to schedule your consultation call.",
    });
    
    // Reset form
    setFormData({
      centreName: '',
      contactPerson: '',
      email: '',
      phone: '',
      centreLocation: '',
      numberOfStudents: '',
      currentAge: '',
      programmeInterest: '',
      preferredStartDate: '',
      currentCurriculum: '',
      additionalInfo: ''
    });
  };

  const partnershipSteps = [
    {
      step: 1,
      title: 'Submit Enquiry',
      description: 'Fill out our partnership enquiry form with your centre details.',
      icon: FileText,
      estimated: '5 minutes'
    },
    {
      step: 2,
      title: 'Consultation Call',
      description: 'We\'ll schedule a call to discuss your needs and our STEM programs.',
      icon: Phone,
      estimated: '1 day'
    },
    {
      step: 3,
      title: 'Program Demo',
      description: 'Experience our STEM activities and see how they fit your centre.',
      icon: Users,
      estimated: '30 minutes'
    },
    {
      step: 4,
      title: 'Partnership Setup',
      description: 'Finalize partnership agreement and begin program implementation.',
      icon: CheckCircle,
      estimated: '1-2 weeks'
    }
  ];

  const programmeOptions = [
    { value: 'stem-enrichment', label: 'STEM Enrichment Programs' },
    { value: 'robotics', label: 'Robotics & Coding' },
    { value: 'science-experiments', label: 'Science Experiments' },
    { value: 'mathematics', label: 'Early Mathematics' },
    { value: 'all-programs', label: 'All Programs' }
  ];

  const studentCounts = [
    { value: '10-20', label: '10-20 students' },
    { value: '21-50', label: '21-50 students' },
    { value: '51-100', label: '51-100 students' },
    { value: '100+', label: '100+ students' }
  ];

  const ageGroups = [
    { value: 'toddler', label: 'Toddler (18 months - 3 years)' },
    { value: 'preschool', label: 'Preschool (3-5 years)' },
    { value: 'kindergarten', label: 'Kindergarten (5-6 years)' },
    { value: 'mixed', label: 'Mixed Ages' }
  ];

  const partnershipBenefits = [
    'Expert STEM educators and facilitators',
    'Age-appropriate curriculum and materials',
    'Regular progress reports and assessments',
    'Teacher training and support',
    'Flexible scheduling options',
    'Ongoing program updates and improvements'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Partner with EC STEM
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Transform your centre with engaging STEM programs. 
              Join our network of partner centres and bring innovative early childhood STEM education to your students.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Simple 4-Step Partnership Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Getting started with EC STEM is easy. Follow these simple steps to bring quality STEM education to your centre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipSteps.map((step, index) => (
              <Card key={index} className="relative group hover:shadow-warm transition-all duration-300 transform hover:scale-105 border-none shadow-gentle">
                <CardContent className="p-8 text-center">
                  <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-sunshine text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{step.description}</p>
                  <div className="text-xs font-semibold text-primary bg-primary-glow px-3 py-1 rounded-full">
                    <Clock className="h-3 w-3 inline mr-1" />
                    {step.estimated}
                  </div>
                </CardContent>
                {index < partnershipSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form & Partnership Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Enquiry Form */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-warm">
                <CardHeader>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Partnership Enquiry Form</h2>
                  <p className="text-muted-foreground">
                    Tell us about your centre and we'll schedule a consultation call to discuss how EC STEM can help.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Centre Information */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Centre Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Centre Name *
                          </label>
                          <Input
                            type="text"
                            name="centreName"
                            value={formData.centreName}
                            onChange={handleInputChange}
                            required
                            className="rounded-xl"
                            placeholder="Your centre name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Centre Location *
                          </label>
                          <Input
                            type="text"
                            name="centreLocation"
                            value={formData.centreLocation}
                            onChange={handleInputChange}
                            required
                            className="rounded-xl"
                            placeholder="District or area"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Number of Students *
                          </label>
                          <select
                            name="numberOfStudents"
                            value={formData.numberOfStudents}
                            onChange={handleInputChange}
                            required
                            className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                          >
                            <option value="">Select student count</option>
                            {studentCounts.map((count) => (
                              <option key={count.value} value={count.value}>{count.label}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Age Group *
                          </label>
                          <select
                            name="currentAge"
                            value={formData.currentAge}
                            onChange={handleInputChange}
                            required
                            className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                          >
                            <option value="">Select age group</option>
                            {ageGroups.map((age) => (
                              <option key={age.value} value={age.value}>{age.label}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Contact Person *
                          </label>
                          <Input
                            type="text"
                            name="contactPerson"
                            value={formData.contactPerson}
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
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Phone Number *
                          </label>
                          <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="rounded-xl"
                            placeholder="+65 1234 5678"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Program Interest */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Program Interest</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Interested Programs *
                          </label>
                          <select
                            name="programmeInterest"
                            value={formData.programmeInterest}
                            onChange={handleInputChange}
                            required
                            className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                          >
                            <option value="">Select program</option>
                            {programmeOptions.map((prog) => (
                              <option key={prog.value} value={prog.value}>{prog.label}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Preferred Start Date *
                          </label>
                          <Input
                            type="date"
                            name="preferredStartDate"
                            value={formData.preferredStartDate}
                            onChange={handleInputChange}
                            required
                            className="rounded-xl"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Current Curriculum/Programs
                          </label>
                          <Input
                            type="text"
                            name="currentCurriculum"
                            value={formData.currentCurriculum}
                            onChange={handleInputChange}
                            className="rounded-xl"
                            placeholder="Describe your current educational programs (optional)"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Additional Information</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Questions or Special Requirements
                          </label>
                          <Textarea
                            name="additionalInfo"
                            value={formData.additionalInfo}
                            onChange={handleInputChange}
                            rows={4}
                            className="rounded-xl"
                            placeholder="Tell us about your specific needs, questions, or any special requirements for your centre..."
                          />
                        </div>
                      </div>
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Book Consultation Call
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Partnership Benefits */}
            <div className="space-y-8">
              <Card className="border-none shadow-gentle">
                <CardHeader>
                  <h3 className="text-xl font-bold text-foreground flex items-center">
                    <Building2 className="h-6 w-6 text-primary mr-3" />
                    Partnership Benefits
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    What you get when you partner with EC STEM:
                  </p>
                  <ul className="space-y-3">
                    {partnershipBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-gentle bg-primary-glow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Program Pricing</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Setup & Training</span>
                      <span className="font-semibold text-foreground">One-time</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monthly Program Fee</span>
                      <span className="font-semibold text-foreground">Per student</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Materials & Resources</span>
                      <span className="font-semibold text-foreground">Included</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    * Pricing varies based on program selection and centre size. Contact us for a custom quote.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-gentle">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Contact Our Partnership Team</h3>
                  <div className="space-y-3 text-sm">
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Phone:</strong> +65 6234 5678
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Email:</strong> partnerships@ecstem.club
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Hours:</strong> Mon-Fri, 9:00 AM - 6:00 PM
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Partnership Team
                  </Button>
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
              Partnership FAQ
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Common questions about partnering with EC STEM and our programs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What is the minimum centre size to partner?",
                answer: "We work with centres of all sizes, from small family-run centres to large educational institutions. Our programs are scalable to fit your needs."
              },
              {
                question: "Do you provide teacher training?",
                answer: "Yes! We provide comprehensive training for your staff, including ongoing support and professional development opportunities."
              },
              {
                question: "How often do programs run?",
                answer: "Programs can be scheduled weekly, bi-weekly, or monthly based on your centre's needs and preferences. We offer flexible scheduling options."
              },
              {
                question: "What materials are included?",
                answer: "All STEM materials, activity guides, and educational resources are included in our partnership packages. No additional purchases required."
              },
              {
                question: "Can we customize the curriculum?",
                answer: "Absolutely! We work with you to adapt our programs to align with your centre's educational philosophy and specific learning objectives."
              },
              {
                question: "Is there a long-term commitment?",
                answer: "We offer flexible partnership terms. You can start with a pilot program to see how it works for your centre before making a longer commitment."
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

export default Admissions;