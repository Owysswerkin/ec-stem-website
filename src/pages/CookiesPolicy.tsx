import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

const CookiesPolicy = () => {
  const { t } = useTranslation();

  // Replace this empty string with your Termly.io HTML content
  const termlyHtml = `
    <!-- Paste your Termly.io HTML content here as a string -->
  `;

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
              {termlyHtml.trim() ? (
                <div dangerouslySetInnerHTML={{ __html: termlyHtml }} />
              ) : (
                <div className="text-center py-12">
                  <h2 className="text-2xl font-semibold mb-4">Cookies Policy Content</h2>
                  <p className="text-muted-foreground mb-4">
                    Please replace the termlyHtml variable content with your Termly.io HTML code.
                  </p>
                  <div className="bg-muted p-4 rounded-lg text-left">
                    <p className="font-mono text-sm">
                      const termlyHtml = `your-termly-html-content-here`;
                    </p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default CookiesPolicy;
