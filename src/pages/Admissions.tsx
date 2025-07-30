import React, { useState } from 'react';
import { CheckCircle, FileText, Calendar, Users, Clock, ArrowRight, Download } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Admissions = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    childBirthdate: '',
    preferredCentre: '',
    preferredStartDate: '',
    programme: '',
    previousSchool: '',
    specialNeeds: '',
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
      title: "Application Submitted!",
      description: "Thank you for your application. We'll contact you within 2 business days to schedule your visit.",
    });
    
    // Reset form
    setFormData({
      parentName: '',
      email: '',
      phone: '',
      childName: '',
      childAge: '',
      childBirthdate: '',
      preferredCentre: '',
      preferredStartDate: '',
      programme: '',
      previousSchool: '',
      specialNeeds: '',
      additionalInfo: ''
    });
  };

  const admissionSteps = [
    {
      step: 1,
      title: 'Submit Application',
      description: 'Fill out our online application form with your child\'s information.',
      icon: FileText,
      estimated: '10 minutes'
    },
    {
      step: 2,
      title: 'Schedule Visit',
      description: 'We\'ll contact you to arrange a centre tour and meet with our team.',
      icon: Calendar,
      estimated: '1-2 days'
    },
    {
      step: 3,
      title: 'Centre Tour',
      description: 'Visit your preferred centre and see our facilities and classrooms.',
      icon: Users,
      estimated: '45 minutes'
    },
    {
      step: 4,
      title: 'Final Steps',
      description: 'Complete enrollment paperwork and prepare for your child\'s first day.',
      icon: CheckCircle,
      estimated: '1 week'
    }
  ];

  const requiredDocuments = [
    'Child\'s birth certificate (original + copy)',
    'Parent\'s identification documents',
    'Child\'s immunization records',
    'Recent medical examination report',
    '2 passport-sized photos of child',
    'Previous school records (if applicable)',
    'Completed application form'
  ];

  const programmes = [
    { value: 'nursery', label: 'Nursery (18 months - 3 years)' },
    { value: 'prek', label: 'Pre-Kindergarten (3 - 4 years)' },
    { value: 'kindergarten', label: 'Kindergarten (4 - 6 years)' }
  ];

  const centres = [
    { value: 'main', label: 'Main Campus - Central District' },
    { value: 'east', label: 'East Centre - East District' },
    { value: 'west', label: 'West Centre - West District' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Admissions
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Join the Little Stars family! Start your child's educational journey with us. 
              Our simple admission process makes it easy to get started.
            </p>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Simple 4-Step Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Getting your child enrolled is easy. Follow these simple steps to join our learning community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
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
                {index < admissionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form & Requirements */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Application Form */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-warm">
                <CardHeader>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Application Form</h2>
                  <p className="text-muted-foreground">
                    Please fill out all required fields to begin the admission process.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Parent Information */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Parent Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Parent's Name *
                          </label>
                          <Input
                            type="text"
                            name="parentName"
                            value={formData.parentName}
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

                    {/* Child Information */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Child Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Child's Name *
                          </label>
                          <Input
                            type="text"
                            name="childName"
                            value={formData.childName}
                            onChange={handleInputChange}
                            required
                            className="rounded-xl"
                            placeholder="Child's full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Date of Birth *
                          </label>
                          <Input
                            type="date"
                            name="childBirthdate"
                            value={formData.childBirthdate}
                            onChange={handleInputChange}
                            required
                            className="rounded-xl"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Current Age *
                          </label>
                          <select
                            name="childAge"
                            value={formData.childAge}
                            onChange={handleInputChange}
                            required
                            className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                          >
                            <option value="">Select age</option>
                            <option value="18m">18 months</option>
                            <option value="2">2 years</option>
                            <option value="3">3 years</option>
                            <option value="4">4 years</option>
                            <option value="5">5 years</option>
                            <option value="6">6 years</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Previous School/Childcare
                          </label>
                          <Input
                            type="text"
                            name="previousSchool"
                            value={formData.previousSchool}
                            onChange={handleInputChange}
                            className="rounded-xl"
                            placeholder="Previous school name (if any)"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Programme Selection */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Programme Selection</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Preferred Programme *
                          </label>
                          <select
                            name="programme"
                            value={formData.programme}
                            onChange={handleInputChange}
                            required
                            className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                          >
                            <option value="">Select programme</option>
                            {programmes.map((prog) => (
                              <option key={prog.value} value={prog.value}>{prog.label}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Preferred Centre *
                          </label>
                          <select
                            name="preferredCentre"
                            value={formData.preferredCentre}
                            onChange={handleInputChange}
                            required
                            className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                          >
                            <option value="">Select centre</option>
                            {centres.map((centre) => (
                              <option key={centre.value} value={centre.value}>{centre.label}</option>
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
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Additional Information</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Special Needs or Allergies
                          </label>
                          <Textarea
                            name="specialNeeds"
                            value={formData.specialNeeds}
                            onChange={handleInputChange}
                            rows={3}
                            className="rounded-xl"
                            placeholder="Please describe any special needs, allergies, or medical conditions..."
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Additional Comments
                          </label>
                          <Textarea
                            name="additionalInfo"
                            value={formData.additionalInfo}
                            onChange={handleInputChange}
                            rows={3}
                            className="rounded-xl"
                            placeholder="Any additional information you'd like to share about your child..."
                          />
                        </div>
                      </div>
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Requirements & Documents */}
            <div className="space-y-8">
              <Card className="border-none shadow-gentle">
                <CardHeader>
                  <h3 className="text-xl font-bold text-foreground flex items-center">
                    <FileText className="h-6 w-6 text-primary mr-3" />
                    Required Documents
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Please prepare these documents for your centre visit:
                  </p>
                  <ul className="space-y-3">
                    {requiredDocuments.map((doc, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{doc}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full mt-6">
                    <Download className="h-4 w-4 mr-2" />
                    Download Checklist
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-gentle bg-primary-glow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Application Fee</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Application Processing</span>
                      <span className="font-semibold text-foreground">SGD $50</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Registration Fee</span>
                      <span className="font-semibold text-foreground">SGD $200</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between">
                      <span className="font-semibold text-foreground">Total</span>
                      <span className="font-bold text-foreground">SGD $250</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    * Application fee is non-refundable. Registration fee is deductible from first month's fees.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-gentle">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Contact Our Admissions Team</h3>
                  <div className="space-y-3 text-sm">
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Phone:</strong> +65 6234 5678
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Email:</strong> admissions@ecstem.club
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Hours:</strong> Mon-Fri, 8:00 AM - 6:00 PM
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    Call Admissions
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
              Admissions FAQ
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Common questions about our admission process and requirements.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What is the minimum age for enrollment?",
                answer: "We accept children from 18 months old. Our Nursery program is specially designed for toddlers starting their educational journey."
              },
              {
                question: "When can my child start?",
                answer: "We have rolling admissions throughout the year, subject to availability. Most children start at the beginning of each quarter."
              },
              {
                question: "Do you have a waiting list?",
                answer: "Yes, for popular time slots we maintain a waiting list. We recommend applying early to secure your preferred start date."
              },
              {
                question: "Can we visit before applying?",
                answer: "Absolutely! We encourage centre visits. You can schedule a tour before or after submitting your application."
              },
              {
                question: "What if my child has special needs?",
                answer: "We welcome children with diverse needs. Please discuss your child's requirements during your visit so we can provide appropriate support."
              },
              {
                question: "Is there financial assistance available?",
                answer: "We offer various government subsidies and have scholarship programs. Contact our admissions team to discuss available options."
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