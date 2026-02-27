import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useTranslation } from 'react-i18next';
const Contact = () => {
  const {
    t
  } = useTranslation();
  const contactInfo = [{
    icon: MapPin,
    title: t('contactPage.contact.address.title'),
    details: [t('contactPage.contact.address.location'), t('contactPage.contact.address.hours')],
    action: t('contactPage.contact.address.action')
  }, {
    icon: Phone,
    title: t('contactPage.contact.phone.title'),
    details: [t('contactPage.contact.phone.number'), t('contactPage.contact.phone.hours')],
    action: t('contactPage.contact.phone.action')
  }, {
    icon: Mail,
    title: t('contactPage.contact.email.title'),
    details: [t('contactPage.contact.email.address'), t('contactPage.contact.email.response')],
    action: t('contactPage.contact.email.action')
  }];
  return <div className="min-h-screen">
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


      {/* Contact Form & Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-none shadow-warm">
              
              <CardContent>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe8_df3eLRk1e8RAx_sGPJZBb0KStutvqI2EsIW-c8RE_IoMQ/viewform?embedded=true" width="100%" height="1200" frameBorder="0" marginHeight={0} marginWidth={0} className="rounded-lg">
                  Loading…
                </iframe>
              </CardContent>
            </Card>

            {/* Office Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">{t('contactPage.office.title')}</h2>
                <p className="text-muted-foreground mb-8">
                  {t('contactPage.office.subtitle')}
                </p>
              </div>

              <Card className="border-none shadow-gentle hover:shadow-warm transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">{t('contactPage.office.location.name')}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">{t('contactPage.office.location.address')}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">{t('contactPage.contact.phone.number')}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">{t('contactPage.office.location.hours')}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="mt-4">
                    {t('contactPage.office.location.directions')}
                  </Button>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="border-none shadow-gentle bg-primary-glow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">{t('contactPage.office.hours.title')}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('contactPage.office.hours.weekdays')}</span>
                      <span className="font-semibold text-foreground">{t('contactPage.office.hours.weekdaysTimes')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('contactPage.office.hours.weekend')}</span>
                      <span className="font-semibold text-foreground">{t('contactPage.office.hours.weekendTimes')}</span>
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
              {t('contactPage.faq.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('contactPage.faq.subtitle')}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { question: t('contactPage.faq.questions.whatIsEcStem.question'), answer: t('contactPage.faq.questions.whatIsEcStem.answer'), color: 'bg-sky/10 border-sky/30' },
                { question: t('contactPage.faq.questions.howItWorks.question'), answer: t('contactPage.faq.questions.howItWorks.answer'), color: 'bg-sunshine/10 border-sunshine/30' },
                { question: t('contactPage.faq.questions.whyChooseUs.question'), answer: t('contactPage.faq.questions.whyChooseUs.answer'), color: 'bg-coral/10 border-coral/30' },
                { question: t('contactPage.faq.questions.safetyConcerns.question'), answer: t('contactPage.faq.questions.safetyConcerns.answer'), color: 'bg-leaf/10 border-leaf/30' },
                { question: t('contactPage.faq.questions.costEffective.question'), answer: t('contactPage.faq.questions.costEffective.answer'), color: 'bg-primary/10 border-primary/30' },
                { question: t('contactPage.faq.questions.getStarted.question'), answer: t('contactPage.faq.questions.getStarted.answer'), color: 'bg-sunshine/10 border-sunshine/30' },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className={`${faq.color} border rounded-2xl px-6 overflow-hidden`}>
                  <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>;
};
export default Contact;