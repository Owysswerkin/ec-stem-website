import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              {/* Termly.io content container */}
              <div id="termly-privacy-policy">
                {/* 
                  Replace this div with your termly.io privacy policy HTML code
                  You can paste the HTML directly here using dangerouslySetInnerHTML
                  or replace this entire div with your Termly.io embed code
                */}
                <p className="text-muted-foreground italic">
                  Please insert your Termly.io privacy policy HTML code here.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default PrivacyPolicy;