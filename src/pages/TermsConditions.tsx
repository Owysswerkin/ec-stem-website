import { Card, CardContent } from "@/components/ui/card";

const TermsConditions = () => {
  return (
    <main className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="space-y-8">
        {/* Header */}
        <header className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Terms & Conditions</h1>
          <p className="text-lg text-secondary font-medium">Ec stem Enrichment Programme</p>
          <p className="text-sm text-muted-foreground">
            <strong>Last updated:</strong> January 2025
          </p>
        </header>

        {/* Table of Contents */}
        <Card className="bg-primary-glow border-primary/20 shadow-soft">
          <CardContent className="p-6">
            <h2 className="font-bold text-lg text-primary mb-4">Table of Contents</h2>
            <ol className="grid md:grid-cols-2 gap-2 text-sm list-decimal list-inside">
              <li><a href="#introduction" className="text-primary hover:text-primary/80 hover:underline">Introduction & Acceptance of Terms</a></li>
              <li><a href="#program" className="text-primary hover:text-primary/80 hover:underline">Program Description & Deliverables</a></li>
              <li><a href="#eligibility" className="text-primary hover:text-primary/80 hover:underline">Eligibility & Enrollment</a></li>
              <li><a href="#pricing" className="text-primary hover:text-primary/80 hover:underline">Pricing & Fees</a></li>
              <li><a href="#payment" className="text-primary hover:text-primary/80 hover:underline">Payment Terms & Methods</a></li>
              <li><a href="#late-payments" className="text-primary hover:text-primary/80 hover:underline">Late Payments & Collections</a></li>
              <li><a href="#discounts" className="text-primary hover:text-primary/80 hover:underline">Discounts, Promotions & Coupons</a></li>
              <li><a href="#cancellation" className="text-primary hover:text-primary/80 hover:underline">Cancellation</a></li>
              <li><a href="#refunds" className="text-primary hover:text-primary/80 hover:underline">Refunds & Refund Exceptions</a></li>
              <li><a href="#attendance" className="text-primary hover:text-primary/80 hover:underline">Attendance & Punctuality</a></li>
              <li><a href="#makeup" className="text-primary hover:text-primary/80 hover:underline">Make-Up Classes Policy</a></li>
              <li><a href="#materials" className="text-primary hover:text-primary/80 hover:underline">Materials, Supplies & Equipment</a></li>
              <li><a href="#health" className="text-primary hover:text-primary/80 hover:underline">Health, Illness & Safety</a></li>
              <li><a href="#media" className="text-primary hover:text-primary/80 hover:underline">Photo, Video & Recording Consent</a></li>
              <li><a href="#liability" className="text-primary hover:text-primary/80 hover:underline">Liability Waiver & Assumption of Risk</a></li>
              <li><a href="#privacy" className="text-primary hover:text-primary/80 hover:underline">Confidentiality & Data Protection</a></li>
              <li><a href="#amendments" className="text-primary hover:text-primary/80 hover:underline">Amendments</a></li>
            </ol>
          </CardContent>
        </Card>

        {/* Section 1 */}
        <Card id="introduction" className="shadow-gentle">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-border pb-3">1. Introduction & Acceptance of Terms</h2>
            <p className="text-foreground leading-relaxed">
              By enrolling a child in our EC STEM Enrichment Programme ("the Programme"), the parent/guardian ("you") agrees to be bound by these Terms & Conditions. Submission of the registration form and/or payment constitutes full acceptance of these terms.
            </p>
          </CardContent>
        </Card>

        {/* Section 2 */}
        <Card id="program" className="shadow-gentle">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-border pb-3">2. Program Description & Deliverables</h2>
            <p className="text-foreground leading-relaxed">
              The Programme provides age-appropriate STEM enrichment activities, including hands-on learning, guided play, building, exploration, and use of child-safe tools. Lesson content, materials, and activities may be adjusted to suit developmental needs, safety considerations, or operational requirements.
            </p>
          </CardContent>
        </Card>

        {/* Section 3 */}
        <Card id="eligibility" className="shadow-gentle">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-border pb-3">3. Eligibility & Enrollment</h2>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>The Programme is open to children within the specified age range stated at enrolment.</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Enrollment is subject to availability and confirmation by the Company.</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>The Company reserves the right to refuse or discontinue enrollment if a child's participation poses safety concerns or significantly disrupts the class.</span></li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 4 */}
        <Card id="pricing" className="shadow-gentle">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-border pb-3">4. Pricing & Fees</h2>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Fees are offered based on 1-Term or 2-Term packages.</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>All fees are quoted in Singapore Dollars (SGD).</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Fees exclude any applicable registration fee unless otherwise stated.</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Fees are non-transferable.</span></li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 5 */}
        <Card id="payment" className="shadow-gentle">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-border pb-3">5. Payment Terms & Methods</h2>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Fees are collected during the first week of each term via PayNow to the Company's designated UEN or QR code.</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Enrollment is only confirmed upon successful receipt of payment.</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Parents/guardians are required to upload or provide proof of payment upon request.</span></li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 6 */}
        <Card id="late-payments" className="shadow-gentle">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-border pb-3">6. Late Payments & Collections</h2>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>A grace period of up to two (2) weeks from the payment due date is allowed.</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>If payment is not received within two (2) weeks, the Company reserves the right to release the child's slot without further notice.</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Any classes attended prior to payment do not constitute a waiver of this policy.</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Re-enrollment after slot release is subject to availability.</span></li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 7 */}
        <Card id="discounts" className="shadow-gentle">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-border pb-3">7. Discounts, Promotions & Coupons</h2>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Discounts, promotions, or cashback offers are subject to specific terms and conditions.</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Promotional benefits are non-refundable, non-transferable, and cannot be exchanged for cash.</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>The Company reserves the right to amend or withdraw promotions without prior notice.</span></li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 8 */}
        <Card id="cancellation" className="shadow-gentle">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-border pb-3">8. Cancellation by Parent/Guardian & Company</h2>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-secondary">By Parent/Guardian:</h3>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Cancellations must be made in writing.</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">•</span><span>All fees paid are non-refundable, except where explicitly stated in writing by the Company.</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Withdrawal requires 1 month's written notice. Failure to provide notice will result in fees being fully chargeable.</span></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-secondary">By Company:</h3>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start"><span className="text-accent mr-2">•</span><span>The Company reserves the right to cancel or reschedule classes due to unforeseen circumstances (e.g., low enrollment, instructor illness, force majeure).</span></li>
                <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Where applicable, make-up classes or alternatives may be offered.</span></li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Section 9 */}
        <Card id="refunds" className="shadow-gentle">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-border pb-3">9. Refunds & Refund Exceptions</h2>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Fees paid are strictly non-refundable, including cases of absence, withdrawal, or early termination.</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>No refunds will be provided for missed classes.</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Exceptions, if any, are at the sole discretion of the Company.</span></li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 10 */}
        <Card id="attendance" className="shadow-gentle">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-border pb-3">10. Attendance & Punctuality</h2>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Parents/guardians are responsible for ensuring punctual attendance.</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Late arrivals may miss part of the lesson, and no extensions or refunds will be given.</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Repeated lateness may affect the child's learning experience.</span></li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 11 */}
        <Card id="makeup" className="shadow-gentle">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-border pb-3">11. Make-Up Classes Policy</h2>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Make-up classes are only applicable for absence due to sickness or illness.</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Parents/guardians must provide a valid Medical Certificate (MC) to qualify for a make-up class.</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span><strong>Deadline for MC Submission:</strong> MC must be submitted within 48 hours of the missed class.</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Each child is entitled to <strong>one (1) MC-based make-up class per term only</strong>.</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Absences beyond the one (1) MC entitlement will not be eligible for additional make-up classes, even if supported by further MCs.</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Make-up classes are subject to availability and scheduling determined by the Company.</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>No refunds or class credits will be provided for missed lessons.</span></li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 12 */}
        <Card id="materials" className="shadow-gentle">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-border pb-3">12. Materials, Supplies & Equipment</h2>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>All learning materials provided remain the property of the Company unless stated otherwise.</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Parents/guardians are responsible for any intentional damage caused by the child to equipment or facilities.</span></li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 13 */}
        <Card id="health" className="shadow-gentle">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-border pb-3">13. Health, Illness & Safety (Including COVID-19)</h2>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Children who are unwell should not attend classes.</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>The Company reserves the right to refuse entry to any child who appears unwell, in the interest of health and safety.</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Health and safety measures will be implemented in accordance with prevailing guidelines.</span></li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 14 */}
        <Card id="media" className="shadow-gentle">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-border pb-3">14. Photo, Video & Recording Consent</h2>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Photos and videos may be taken during lessons for internal documentation and/or marketing purposes.</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Consent preferences indicated during registration will be respected.</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Media will be used in compliance with PDPA regulations.</span></li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 15 */}
        <Card id="liability" className="shadow-gentle">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-border pb-3">15. Liability Waiver & Assumption of Risk</h2>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>While all reasonable precautions are taken, participation in enrichment activities involves inherent risks.</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>The Company shall not be held liable for injury, loss, or damage except in cases of proven negligence.</span></li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 16 */}
        <Card id="privacy" className="shadow-gentle">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-border pb-3">16. Confidentiality & Data Protection / Privacy Policy</h2>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>All personal data collected will be handled in accordance with the Personal Data Protection Act (PDPA) of Singapore.</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Information will be used solely for administrative, operational, and communication purposes related to the Programme.</span></li>
            </ul>
            <p className="text-foreground mt-4">
              For more details, please refer to our{" "}
              <a href="/privacy-policy" className="text-primary hover:text-primary/80 underline font-medium">
                Privacy Policy
              </a>.
            </p>
          </CardContent>
        </Card>

        {/* Section 17 */}
        <Card id="amendments" className="shadow-gentle">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-primary border-b border-border pb-3">17. Amendments</h2>
            <p className="text-foreground leading-relaxed">
              The Company reserves the right to amend these Terms & Conditions at any time. Updated terms will be communicated where applicable.
            </p>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="shadow-gentle bg-muted/50">
          <CardContent className="p-6 space-y-4 text-center">
            <h2 className="text-xl font-bold text-primary">Questions?</h2>
            <p className="text-foreground">
              If you have any questions about these Terms & Conditions, please contact us at{" "}
              <a href="mailto:admin@ecstem.education" className="text-primary hover:text-primary/80 underline font-medium">
                admin@ecstem.education
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default TermsConditions;
