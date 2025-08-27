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
              {/* Termly.io content will go here */}
              <div id="termly-code-snippet">
                {/* 
                  Replace this div with your termly.io embed code
                  Example: <div id="termly-embed" data-id="your-termly-id"></div>
                */}
                <p className="text-muted-foreground italic">
                  Insert your termly.io cookies policy embed code here
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Fallback content if termly.io doesn't load */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            If you have questions about our cookies policy, please{" "}
            <a href="/contact" className="text-primary hover:underline">
              contact us
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
};

export default CookiesPolicy;