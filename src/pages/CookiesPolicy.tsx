import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

const CookiesPolicy = () => {
  const { t } = useTranslation();

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Cookies Policy
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <div id="termly-cookies-policy">
                <p className="text-muted-foreground italic">
                  Please paste your Termly.io cookies policy HTML content here using dangerouslySetInnerHTML.
                </p>
                {/* 
                To add your Termly.io HTML content, replace the paragraph above with:
                <div dangerouslySetInnerHTML={{ __html: "YOUR_TERMLY_HTML_CONTENT_HERE" }} />
                
                Example:
                <div dangerouslySetInnerHTML={{ 
                  __html: `<div>Your Termly.io HTML content goes here...</div>` 
                }} />
                */}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default CookiesPolicy;