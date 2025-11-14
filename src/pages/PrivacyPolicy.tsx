import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <main className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="space-y-8">
        {/* Header */}
        <header className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground">
            <strong>Last updated:</strong> 14 November 2025
          </p>
          <p className="text-foreground leading-relaxed max-w-3xl mx-auto">
            This Privacy Notice for <strong className="text-primary">EC STEM PTE. LTD</strong> ("we", "us", or "our") describes how and why we access, collect, store, use, and/or share ("process") your personal data when you use our services ("Services"), including when you:
          </p>
          <ul className="text-left max-w-2xl mx-auto space-y-2 text-foreground">
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>visit our website at <a href="https://ecstem.education" className="text-primary hover:text-primary/80 underline">https://ecstem.education</a> or any related site</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>use EC STEM education services</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>engage with us through sales, marketing, or events</span>
            </li>
          </ul>
        </header>

        {/* Summary Navigation Card */}
        <Card className="bg-primary-glow border-primary/20 shadow-soft">
          <CardContent className="p-6">
            <h2 className="font-bold text-lg text-primary mb-4">Summary of key points</h2>
            <ul className="grid md:grid-cols-2 gap-2 text-sm">
              <li><a href="#what-info" className="text-primary hover:text-primary/80 hover:underline">→ What personal information do we process?</a></li>
              <li><a href="#sensitive-info" className="text-primary hover:text-primary/80 hover:underline">→ Do we process sensitive information?</a></li>
              <li><a href="#third-parties" className="text-primary hover:text-primary/80 hover:underline">→ Do we collect information from third parties?</a></li>
              <li><a href="#how-process" className="text-primary hover:text-primary/80 hover:underline">→ How do we process your information?</a></li>
              <li><a href="#when-share" className="text-primary hover:text-primary/80 hover:underline">→ When do we share your information?</a></li>
              <li><a href="#safeguards" className="text-primary hover:text-primary/80 hover:underline">→ How do we keep your information safe?</a></li>
              <li><a href="#rights" className="text-primary hover:text-primary/80 hover:underline">→ What are your rights?</a></li>
              <li><a href="#toc" className="text-primary hover:text-primary/80 hover:underline">→ Table of contents</a></li>
            </ul>
          </CardContent>
        </Card>

        {/* Table of Contents Card */}
        <Card id="toc" className="shadow-gentle">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-primary mb-4">Table of contents</h2>
            <ol className="space-y-2 text-foreground">
              <li><a href="#what-info" className="text-primary hover:text-primary/80 hover:underline">1. What information do we collect?</a></li>
              <li><a href="#how-process" className="text-primary hover:text-primary/80 hover:underline">2. How do we process your information?</a></li>
              <li><a href="#when-share" className="text-primary hover:text-primary/80 hover:underline">3. When and with whom do we share your personal information?</a></li>
              <li><a href="#cookies" className="text-primary hover:text-primary/80 hover:underline">4. Do we use cookies and other tracking technologies?</a></li>
              <li><a href="#retention" className="text-primary hover:text-primary/80 hover:underline">5. How long do we keep your information?</a></li>
              <li><a href="#security" className="text-primary hover:text-primary/80 hover:underline">6. How do we keep your information safe?</a></li>
              <li><a href="#minors" className="text-primary hover:text-primary/80 hover:underline">7. Do we collect information from minors?</a></li>
              <li><a href="#privacy-rights" className="text-primary hover:text-primary/80 hover:underline">8. What are your privacy rights?</a></li>
              <li><a href="#dnt" className="text-primary hover:text-primary/80 hover:underline">9. Controls for Do-Not-Track</a></li>
              <li><a href="#updates" className="text-primary hover:text-primary/80 hover:underline">10. Do we make updates to this Notice?</a></li>
              <li><a href="#contact" className="text-primary hover:text-primary/80 hover:underline">11. Contacting us</a></li>
              <li><a href="#review" className="text-primary hover:text-primary/80 hover:underline">12. Reviewing or updating your data</a></li>
            </ol>
          </CardContent>
        </Card>

        {/* Section 1 */}
        <Card id="what-info" className="shadow-gentle">
          <CardContent className="p-6 space-y-6">
            <h2 className="text-2xl font-bold text-primary border-b border-border pb-3">1. What information do we collect?</h2>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-secondary">Personal information you provide</h3>
              <p className="text-foreground leading-relaxed">
                We collect personal information that you voluntarily provide when you request information, use our Services, or contact us. This may include:
              </p>
              <ul className="space-y-1 ml-6 text-foreground">
                <li className="flex items-start"><span className="text-accent mr-2">•</span><span>names</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">•</span><span>phone numbers</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">•</span><span>email addresses</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">•</span><span>mailing addresses</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">•</span><span>job titles</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">•</span><span>contact preferences</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">•</span><span>login or authentication information</span></li>
              </ul>
              <p className="text-foreground leading-relaxed">
                Business contact information such as a work email or work phone number may be collected for partnership and operational purposes.
              </p>
              <p className="text-foreground leading-relaxed">
                All personal information you provide must be accurate and updated when necessary.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-secondary">Information automatically collected</h3>
              <p className="text-foreground leading-relaxed">
                We automatically collect information such as IP address, browser type, device characteristics, operating system, language preferences, and activity logs when you use our website.
              </p>
              <p className="text-foreground leading-relaxed">
                We also use cookies and similar technologies. See our <a href="/cookies-policy" className="text-primary hover:text-primary/80 underline font-medium">Cookie Notice</a> for details.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-secondary">Information collected from other sources</h3>
              <p className="text-foreground leading-relaxed">
                We may receive information from public sources, marketing partners, affiliate networks, data providers, and social platforms, including:
              </p>
              <ul className="space-y-1 ml-6 text-foreground">
                <li className="flex items-start"><span className="text-accent mr-2">•</span><span>email addresses</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">•</span><span>job titles</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">•</span><span>phone numbers</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">•</span><span>social media profiles</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">•</span><span>user behavior or intent data</span></li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Section 2 */}
        <Card id="how-process" className="shadow-gentle">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-border pb-3">2. How do we process your information?</h2>
            <p className="text-foreground leading-relaxed">We process personal data to:</p>
            <ul className="space-y-1 ml-6 text-foreground">
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>deliver and operate our Services</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>respond to inquiries or support requests</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>send administrative updates</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>send marketing communications (with your consent)</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>post testimonials with your permission</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>protect our systems and prevent fraud</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>understand how our Services are used</span></li>
            </ul>
            <p className="text-foreground leading-relaxed">
              We collect, use, and disclose personal data only for purposes that are reasonable and relevant for our operations.
            </p>
          </CardContent>
        </Card>

        {/* Section 3 */}
        <Card id="when-share" className="shadow-gentle">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-border pb-3">3. When and with whom do we share your personal information?</h2>
            <p className="text-foreground leading-relaxed">We may share your information when necessary, such as:</p>
            <ul className="space-y-1 ml-6 text-foreground">
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>with service providers that support our operations</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>during business transfers such as mergers or acquisitions</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>when required to comply with legal obligations</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>when disclosure is necessary to protect rights, safety, or security</span></li>
            </ul>
            <p className="text-foreground leading-relaxed">
              If personal data is transferred outside Singapore, we ensure it is protected with comparable safeguards.
            </p>
          </CardContent>
        </Card>

        {/* Section 4 */}
        <Card id="cookies" className="shadow-gentle">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-border pb-3">4. Do we use cookies and other tracking technologies?</h2>
            <p className="text-foreground leading-relaxed">
              Yes. We use cookies, pixels, and similar tools to improve site performance, security, analytics, and user experience.
            </p>
            <p className="text-foreground leading-relaxed">
              Some third parties (such as analytics providers and ad networks) may also use tracking technologies on our Services. See our <a href="/cookies-policy" className="text-primary hover:text-primary/80 underline font-medium">Cookie Notice</a> for more details.
            </p>
          </CardContent>
        </Card>

        {/* Section 5 */}
        <Card id="retention" className="shadow-gentle">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-border pb-3">5. How long do we keep your information?</h2>
            <p className="text-foreground leading-relaxed">
              We keep personal data only as long as necessary for operational, legal, or business purposes.
            </p>
            <p className="text-foreground leading-relaxed">
              When no longer required, we delete or anonymise the data. If deletion is not immediately possible (for example, in backups), the data will be securely stored until removal is possible.
            </p>
          </CardContent>
        </Card>

        {/* Section 6 */}
        <Card id="security" className="shadow-gentle">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-border pb-3">6. How do we keep your information safe?</h2>
            <p className="text-foreground leading-relaxed">
              We implement reasonable security measures to protect personal data from unauthorised access, disclosure, modification, or loss. These include administrative, technical, and physical safeguards.
            </p>
            <p className="text-foreground leading-relaxed">
              However, no system is completely secure, and we cannot guarantee absolute protection.
            </p>
          </CardContent>
        </Card>

        {/* Section 7 */}
        <Card id="minors" className="shadow-gentle">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-border pb-3">7. Do we collect information from minors?</h2>
            <p className="text-foreground leading-relaxed">
              We do not knowingly collect personal data from individuals under 18 unless provided or authorised by a parent or guardian.
            </p>
            <p className="text-foreground leading-relaxed">
              If we become aware of unauthorised collection, we will delete the data promptly.
            </p>
          </CardContent>
        </Card>

        {/* Section 8 */}
        <Card id="privacy-rights" className="shadow-gentle">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-border pb-3">8. What are your privacy rights?</h2>
            <p className="text-foreground leading-relaxed">You may:</p>
            <ul className="space-y-1 ml-6 text-foreground">
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>request access to your personal data</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>request correction of inaccurate personal data</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>withdraw consent to the collection, use, or disclosure of your personal data</span></li>
            </ul>
            <p className="text-foreground leading-relaxed">
              Withdrawing consent may affect your ability to use certain Services.
            </p>
          </CardContent>
        </Card>

        {/* Section 9 */}
        <Card id="dnt" className="shadow-gentle">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-border pb-3">9. Controls for Do-Not-Track</h2>
            <p className="text-foreground leading-relaxed">
              We currently do not respond to browser DNT signals, as no standard has been established.
            </p>
          </CardContent>
        </Card>

        {/* Section 10 */}
        <Card id="updates" className="shadow-gentle">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-border pb-3">10. Do we make updates to this Notice?</h2>
            <p className="text-foreground leading-relaxed">
              Yes. We may update this Notice to reflect operational or legal changes. Updates will be posted on this page with a revised date.
            </p>
          </CardContent>
        </Card>

        {/* Section 11 */}
        <Card id="contact" className="shadow-gentle">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-border pb-3">11. How can you contact us about this Notice?</h2>
            <p className="text-foreground leading-relaxed">Email our Data Protection Officer at:</p>
            <p>
              <a href="mailto:dpo@ecstem.education" className="text-primary hover:text-primary/80 underline font-medium text-lg">
                dpo@ecstem.education
              </a>
            </p>
            <p className="text-foreground leading-relaxed">Or by post:</p>
            <div className="bg-muted p-4 rounded-lg border border-border">
              <p className="text-foreground whitespace-pre-line font-mono text-sm">
EC STEM PTE. LTD
Data Protection Officer
390 Havelock Road, #06-03
King's Centre, Singapore 169662
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 12 */}
        <Card id="review" className="shadow-gentle">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-border pb-3">12. How can you review, update, or delete your data?</h2>
            <p className="text-foreground leading-relaxed">
              To request access, correction, or withdrawal of consent, contact us at <a href="mailto:dpo@ecstem.education" className="text-primary hover:text-primary/80 underline font-medium">dpo@ecstem.education</a>. Requests will be processed within a reasonable timeframe.
            </p>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="text-center text-sm text-muted-foreground border-t border-border pt-6">
          <p>
            For more information, see our <a href="/cookies-policy" className="text-primary hover:text-primary/80 underline font-medium">Cookie Notice</a>.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
