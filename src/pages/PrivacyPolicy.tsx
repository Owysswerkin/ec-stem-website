const PrivacyPolicy = () => {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <style>{`
        .privacy-content { font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; line-height:1.6; color:#111; }
        .privacy-content h1,.privacy-content h2,.privacy-content h3 { color:#0b3a66; margin-top:1.2rem; }
        .privacy-content h1 { font-size:1.6rem; margin-bottom:0.2rem; }
        .privacy-content h2 { font-size:1.15rem; }
        .privacy-content p { margin:0.6rem 0; }
        .privacy-content ul { margin:0.4rem 0 0.8rem 1.2rem; }
        .privacy-content ol { margin:0.4rem 0 0.8rem 1.2rem; }
        .privacy-content li { margin:0.25rem 0; }
        .privacy-content nav { background:#f7fbff; border:1px solid #e6f0fb; padding:12px; margin-bottom:18px; border-radius:6px; }
        .privacy-content a { color:#0b66a3; text-decoration:none; }
        .privacy-content a:hover { text-decoration:underline; }
        .privacy-content .small { font-size:0.95rem; color:#444; }
        .privacy-content .address { white-space:pre-line; font-family:inherit; }
        .privacy-content .toc { margin:8px 0 0 0; padding-left:18px; }
        .privacy-content .section { padding-top:10px; border-top:1px solid #eee; margin-top:18px; }
        .privacy-content .note { background:#fff9e6; border:1px solid #fff0c2; padding:10px; border-radius:6px; margin:10px 0; }
      `}</style>
      
      <div className="privacy-content">
        <header>
          <h1>Privacy Policy</h1>
          <p className="small"><strong>Last updated</strong> 14 November 2025</p>
          <p>This Privacy Notice for <strong>EC STEM PTE. LTD</strong> ("we", "us", or "our") describes how and why we access, collect, store, use, and/or share ("process") your personal data when you use our services ("Services"), including when you:</p>
          <ul>
            <li>visit our website at <a href="https://ecstem.education">https://ecstem.education</a> or any related site</li>
            <li>use EC STEM education services</li>
            <li>engage with us through sales, marketing, or events</li>
          </ul>
        </header>

        <nav aria-label="Summary and links">
          <strong>Summary of key points</strong>
          <ul className="toc">
            <li><a href="#what-info">What personal information do we process?</a></li>
            <li><a href="#sensitive-info">Do we process sensitive information?</a></li>
            <li><a href="#third-parties">Do we collect information from third parties?</a></li>
            <li><a href="#how-process">How do we process your information?</a></li>
            <li><a href="#when-share">When do we share your information?</a></li>
            <li><a href="#safeguards">How do we keep your information safe?</a></li>
            <li><a href="#rights">What are your rights?</a></li>
            <li><a href="#toc">Table of contents</a></li>
          </ul>
        </nav>

        <section id="toc" className="section">
          <h2>Table of contents</h2>
          <ol>
            <li><a href="#what-info">What information do we collect?</a></li>
            <li><a href="#how-process">How do we process your information?</a></li>
            <li><a href="#when-share">When and with whom do we share your personal information?</a></li>
            <li><a href="#cookies">Do we use cookies and other tracking technologies?</a></li>
            <li><a href="#retention">How long do we keep your information?</a></li>
            <li><a href="#security">How do we keep your information safe?</a></li>
            <li><a href="#minors">Do we collect information from minors?</a></li>
            <li><a href="#privacy-rights">What are your privacy rights?</a></li>
            <li><a href="#dnt">Controls for Do-Not-Track</a></li>
            <li><a href="#updates">Updates to this Notice</a></li>
            <li><a href="#contact">Contacting us</a></li>
            <li><a href="#review">Reviewing or updating your data</a></li>
          </ol>
        </section>

        <section id="what-info" className="section">
          <h2>1. What information do we collect?</h2>

          <h3>Personal information you provide</h3>
          <p>We collect personal information that you voluntarily provide when you request information, use our Services, or contact us. This may include:</p>
          <ul>
            <li>names</li>
            <li>phone numbers</li>
            <li>email addresses</li>
            <li>mailing addresses</li>
            <li>job titles</li>
            <li>contact preferences</li>
            <li>login or authentication information</li>
          </ul>
          <p>Business contact information such as a work email or work phone number may be collected for partnership and operational purposes.</p>
          <p>All personal information you provide must be accurate and updated when necessary.</p>

          <h3>Information automatically collected</h3>
          <p>We automatically collect information such as IP address, browser type, device characteristics, operating system, language preferences, and activity logs when you use our website.</p>
          <p>We also use cookies and similar technologies. See our <a href="/cookies-policy">Cookie Notice</a> for details.</p>

          <h3>Information collected from other sources</h3>
          <p>We may receive information from public sources, marketing partners, affiliate networks, data providers, and social platforms, including:</p>
          <ul>
            <li>email addresses</li>
            <li>job titles</li>
            <li>phone numbers</li>
            <li>social media profiles</li>
            <li>user behavior or intent data</li>
          </ul>
        </section>

        <section id="how-process" className="section">
          <h2>2. How do we process your information?</h2>
          <p>We process personal data to:</p>
          <ul>
            <li>deliver and operate our Services</li>
            <li>respond to inquiries or support requests</li>
            <li>send administrative updates</li>
            <li>send marketing communications (with your consent)</li>
            <li>post testimonials with your permission</li>
            <li>protect our systems and prevent fraud</li>
            <li>understand how our Services are used</li>
          </ul>
          <p>We collect, use, and disclose personal data only for purposes that are reasonable and relevant for our operations.</p>
        </section>

        <section id="when-share" className="section">
          <h2>3. When and with whom do we share your personal information?</h2>
          <p>We may share your information when necessary, such as:</p>
          <ul>
            <li>with service providers that support our operations</li>
            <li>during business transfers such as mergers or acquisitions</li>
            <li>when required to comply with legal obligations</li>
            <li>when disclosure is necessary to protect rights, safety, or security</li>
          </ul>
          <p>If personal data is transferred outside Singapore, we ensure it is protected with comparable safeguards.</p>
        </section>

        <section id="cookies" className="section">
          <h2>4. Do we use cookies and other tracking technologies?</h2>
          <p>Yes. We use cookies, pixels, and similar tools to improve site performance, security, analytics, and user experience.</p>
          <p>Some third parties (such as analytics providers and ad networks) may also use tracking technologies on our Services. See our <a href="/cookies-policy">Cookie Notice</a> for more details.</p>
        </section>

        <section id="retention" className="section">
          <h2>5. How long do we keep your information?</h2>
          <p>We keep personal data only as long as necessary for operational, legal, or business purposes.</p>
          <p>When no longer required, we delete or anonymise the data. If deletion is not immediately possible (for example, in backups), the data will be securely stored until removal is possible.</p>
        </section>

        <section id="security" className="section">
          <h2>6. How do we keep your information safe?</h2>
          <p>We implement reasonable security measures to protect personal data from unauthorised access, disclosure, modification, or loss. These include administrative, technical, and physical safeguards.</p>
          <p>However, no system is completely secure, and we cannot guarantee absolute protection.</p>
        </section>

        <section id="minors" className="section">
          <h2>7. Do we collect information from minors?</h2>
          <p>We do not knowingly collect personal data from individuals under 18 unless provided or authorised by a parent or guardian.</p>
          <p>If we become aware of unauthorised collection, we will delete the data promptly.</p>
        </section>

        <section id="privacy-rights" className="section">
          <h2>8. What are your privacy rights?</h2>
          <p>You may:</p>
          <ul>
            <li>request access to your personal data</li>
            <li>request correction of inaccurate personal data</li>
            <li>withdraw consent to the collection, use, or disclosure of your personal data</li>
          </ul>
          <p>Withdrawing consent may affect your ability to use certain Services.</p>
        </section>

        <section id="dnt" className="section">
          <h2>9. Controls for Do-Not-Track</h2>
          <p>We currently do not respond to browser DNT signals, as no standard has been established.</p>
        </section>

        <section id="updates" className="section">
          <h2>10. Do we make updates to this Notice?</h2>
          <p>Yes. We may update this Notice to reflect operational or legal changes. Updates will be posted on this page with a revised date.</p>
        </section>

        <section id="contact" className="section">
          <h2>11. How can you contact us about this Notice?</h2>
          <p>Email our Data Protection Officer at:</p>
          <p><a href="mailto:dpo@ecstem.education">dpo@ecstem.education</a></p>

          <p>Or by post:</p>
          <p className="address">
EC STEM PTE. LTD
Data Protection Officer
390 Havelock Road, #06-03
King's Centre, Singapore 169662
          </p>
        </section>

        <section id="review" className="section">
          <h2>12. How can you review, update, or delete your data?</h2>
          <p>To request access, correction, or withdrawal of consent, contact us at <a href="mailto:dpo@ecstem.education">dpo@ecstem.education</a>. Requests will be processed within a reasonable timeframe.</p>
        </section>

        <footer className="small" style={{marginTop: '18px', borderTop: '1px solid #f0f0f0', paddingTop: '12px'}}>
          <p>For more information, see our <a href="/cookies-policy">Cookie Notice</a>.</p>
        </footer>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
