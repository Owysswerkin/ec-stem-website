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
    
    // Submit to Netlify
    const form = e.target as HTMLFormElement;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form) as any).toString(),
    })
    .then(() => {
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
    })
    .catch((error) => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contactPage.contact.address.title'),
      details: [t('contactPage.contact.address.location'), t('contactPage.contact.address.hours')],
      action: t('contactPage.contact.address.action')
    },
    {
      icon: Phone,
      title: t('contactPage.contact.phone.title'),
      details: [t('contactPage.contact.phone.number'), t('contactPage.contact.phone.hours')],
      action: t('contactPage.contact.phone.action')
    },
    {
      icon: Mail,
      title: t('contactPage.contact.email.title'),
      details: [t('contactPage.contact.email.address'), t('contactPage.contact.email.response')],
      action: t('contactPage.contact.email.action')
    }
  ];

  const enquiryTypes = [
    t('contactPage.form.enquiryTypes.general'),
    t('contactPage.form.enquiryTypes.partnership'),
    t('contactPage.form.enquiryTypes.programs'),
    t('contactPage.form.enquiryTypes.pricing'),
    t('contactPage.form.enquiryTypes.visit'),
    t('contactPage.form.enquiryTypes.other')
  ];

  const childAges = [
    t('contactPage.form.childAges.toddler'),
    t('contactPage.form.childAges.early'),
    t('contactPage.form.childAges.preschool'),
    t('contactPage.form.childAges.kindergarten'),
    t('contactPage.form.childAges.primary'),
    t('contactPage.form.childAges.multiple')
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


      {/* Contact Form & Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-none shadow-warm">
              <CardHeader>
                <h2 className="text-3xl font-bold text-foreground mb-2">{t('contactPage.form.title')}</h2>
                <p className="text-muted-foreground">
                  {t('contactPage.form.subtitle')}
                </p>
              </CardHeader>
              <CardContent>
                <form name="contact" method="POST" netlify data-netlify="true" className="space-y-6">
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        {t('contactPage.form.fields.name')} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder={t('contactPage.form.placeholders.name')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        {t('contactPage.form.fields.email')} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder={t('contactPage.form.placeholders.email')}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        {t('contactPage.form.fields.phone')}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder={t('contactPage.form.placeholders.phone')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        {t('contactPage.form.fields.centre')}
                      </label>
                      <input
                        type="text"
                        name="centre"
                        className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder={t('contactPage.form.placeholders.centre')}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        {t('contactPage.form.fields.childAge')}
                      </label>
                      <select
                        name="childAge"
                        className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">{t('contactPage.form.placeholders.childAge')}</option>
                        {childAges.map((age, index) => (
                          <option key={index} value={age}>{age}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        {t('contactPage.form.fields.enquiryType')}
                      </label>
                      <select
                        name="enquiryType"
                        className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">{t('contactPage.form.placeholders.enquiryType')}</option>
                        {enquiryTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      {t('contactPage.form.fields.message')}
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder={t('contactPage.form.placeholders.message')}
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full h-12 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center space-x-2">
                    <Send className="h-5 w-5" />
                    <span>{t('contactPage.form.submit')}</span>
                  </button>
                </form>
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

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: t('contactPage.faq.questions.whatIsEcStem.question'),
                answer: t('contactPage.faq.questions.whatIsEcStem.answer')
              },
              {
                question: t('contactPage.faq.questions.howItWorks.question'),
                answer: t('contactPage.faq.questions.howItWorks.answer')
              },
              {
                question: t('contactPage.faq.questions.whyChooseUs.question'),
                answer: t('contactPage.faq.questions.whyChooseUs.answer')
              },
              {
                question: t('contactPage.faq.questions.safetyConcerns.question'),
                answer: t('contactPage.faq.questions.safetyConcerns.answer')
              },
              {
                question: t('contactPage.faq.questions.costEffective.question'),
                answer: t('contactPage.faq.questions.costEffective.answer')
              },
              {
                question: t('contactPage.faq.questions.getStarted.question'),
                answer: t('contactPage.faq.questions.getStarted.answer')
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