import React from 'react';
import { CheckCircle, FileText, Users, Clock, ArrowRight, Phone, Building2, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Admissions = () => {
  const { t } = useTranslation();

  const partnershipSteps = [
    {
      step: 1,
      title: t('admissionsPage.steps.submit.title'),
      description: t('admissionsPage.steps.submit.description'),
      icon: FileText,
      estimated: t('admissionsPage.steps.submit.time')
    },
    {
      step: 2,
      title: t('admissionsPage.steps.consultation.title'),
      description: t('admissionsPage.steps.consultation.description'),
      icon: Phone,
      estimated: t('admissionsPage.steps.consultation.time')
    },
    {
      step: 3,
      title: t('admissionsPage.steps.demo.title'),
      description: t('admissionsPage.steps.demo.description'),
      icon: Users,
      estimated: t('admissionsPage.steps.demo.time')
    },
    {
      step: 4,
      title: t('admissionsPage.steps.setup.title'),
      description: t('admissionsPage.steps.setup.description'),
      icon: CheckCircle,
      estimated: t('admissionsPage.steps.setup.time')
    }
  ];


  const partnershipBenefits = t('admissionsPage.benefits.list', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-soft-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Partner With Us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're currently inviting preschools to host complimentary demo sessions — let your teachers and children experience the fun and learning first-hand!
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('admissionsPage.processTitle')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('admissionsPage.processSubtitle')}
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

      {/* Partnership Benefits */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-primary-glow/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('admissionsPage.benefits.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {t('admissionsPage.benefits.subtitle')}
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {partnershipBenefits.map((benefit, index) => (
                <Card key={index} className="border-none shadow-gentle hover:shadow-warm transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-xl flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-foreground font-medium leading-relaxed">{benefit}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pricing and CTA */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-none shadow-gentle bg-primary-glow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                    <Building2 className="h-6 w-6 text-primary mr-3" />
                    Program Pricing
                  </h3>
                  <div className="space-y-4 text-base">
                    <div className="flex justify-between items-center pb-3 border-b border-border/50">
                      <span className="text-muted-foreground">Setup & Training</span>
                      <span className="font-semibold text-foreground">One-time</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-border/50">
                      <span className="text-muted-foreground">Monthly Program Fee</span>
                      <span className="font-semibold text-foreground">Per student</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Materials & Resources</span>
                      <span className="font-semibold text-foreground">Included</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
                    * Pricing varies based on program selection and centre size. Contact us for a custom quote.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-warm bg-gradient-to-br from-primary to-primary/80">
                <CardContent className="p-8 flex flex-col justify-center h-full">
                  <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                    Ready to Partner?
                  </h3>
                  <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                    Get in touch with us to schedule a consultation call and discuss how we can bring engaging STEM education to your centre.
                  </p>
                  <Link to="/contact">
                    <Button variant="secondary" size="lg" className="w-full group">
                      <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                      Contact Us
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
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
              Common questions about partnering with Ec stem and our programs.
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