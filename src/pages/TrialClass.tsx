import React from 'react';

const TrialClass = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sign Up for a Trial Class
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience our hands-on STEM learning first-hand. Fill in the form below to register your child for a trial class.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfFcEDVyW_wfqg9cZM8WOZxNo3Sw8nmS2ygCG7V3NpVC4Q9uQ/viewform?embedded=true"
              width="100%"
              height="1200"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="Trial Class Registration Form"
              className="rounded-xl shadow-lg"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrialClass;
