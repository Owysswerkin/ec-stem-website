import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

const CookiesPolicy = () => {
  const { t } = useTranslation();

  // Replace all email references in the HTML blob
  const cookiesHtml = `<style>
  [data-custom-class='body'], [data-custom-class='body'] * {
          background: transparent !important;
        }
[data-custom-class='title'], [data-custom-class='title'] * {
          font-family: Arial !important;
font-size: 26px !important;
color: #000000 !important;
        }
[data-custom-class='subtitle'], [data-custom-class='subtitle'] * {
          font-family: Arial !important;
color: #595959 !important;
font-size: 14px !important;
        }
[data-custom-class='heading_1'], [data-custom-class='heading_1'] * {
          font-family: Arial !important;
font-size: 19px !important;
color: #000000 !important;
        }
[data-custom-class='heading_2'], [data-custom-class='heading_2'] * {
          font-family: Arial !important;
font-size: 17px !important;
color: #000000 !important;
        }
[data-custom-class='body_text'], [data-custom-class='body_text'] * {
          color: #595959 !important;
font-size: 14px !important;
font-family: Arial !important;
        }
[data-custom-class='link'], [data-custom-class='link'] * {
          color: #3030F1 !important;
font-size: 14px !important;
font-family: Arial !important;
word-break: break-word !important;
        }
</style>
<div data-custom-class="body">
<div><p style="font-size: 14px; font-family: Arial;">Effective date: May 16, 2024</p>
<br />
<p style="font-size: 26px; font-family: Arial;"><strong>Cookies Policy</strong></p>
<br />
<p style="font-size: 14px; font-family: Arial;">This Cookies Policy explains how ECSTEM Education ("<strong>ECSTEM Education</strong>", "<strong>we</strong>", "<strong>us</strong>", and "<strong>ours</strong>") uses cookies and similar technologies to recognize you when you visit our websites at <a href="http://www.ecstem.education/" style="font-size: 14px; font-family: Arial;">http://www.ecstem.education/</a>, ("<strong>Websites</strong>"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.</p>
<br />
<p style="font-size: 14px; font-family: Arial;">In some cases, we may use cookies to collect personal information, or that becomes personal information if we combine it with other information. In such cases, our Privacy Policy <a href="https://termly.io/products/privacy-policy/" style="font-size: 14px; font-family: Arial;">https://ecstem.education/privacy-policy</a> will apply in addition to this Cookies Policy.</p>
<br />
<p style="font-size: 17px; font-family: Arial;"><strong>What are cookies?</strong></p>
<br />
<p style="font-size: 14px; font-family: Arial;">Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
<br />
<p style="font-size: 14px; font-family: Arial;">Cookies set by the website owner (in this case, ECSTEM Education) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g. like advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.</p>
<br />
<p style="font-size: 17px; font-family: Arial;"><strong>Why do we use cookies?</strong></p>
<br />
<p style="font-size: 14px; font-family: Arial;">We use first- and third-party cookies for several reasons. Some cookies are required for our Websites to operate and for technical reasons; these are referred to as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Websites for advertising, analytics, and other purposes. This is described in more detail below.</p>
<br />
<p style="font-size: 14px; font-family: Arial;">The specific types of first- and third-party cookies served through our Websites and the purposes they perform are described in the table below (please note that the specific cookies served may vary depending on the specific Online Properties you visit):</p>
<br />
<table border="1" style="border-collapse:collapse;">
<tbody>
<tr>
<td style="width:283px;border:1px solid black;padding:5px;">
<p><strong>Type of Cookie</strong></p>
</td>
<td style="width:283px;border:1px solid black;padding:5px;">
<p><strong>Purpose</strong></p>
</td>
<td style="width:283px;border:1px solid black;padding:5px;">
<p><strong>How to refuse</strong></p>
</td>
</tr>
<tr>
<td style="width:283px;border:1px solid black;padding:5px;">
<p>Essential website cookies:</p>
</td>
<td style="width:283px;border:1px solid black;padding:5px;">
<p>These cookies are strictly necessary to provide you with services available through our Websites and to use some of its features, such as access to secure areas.</p>
</td>
<td style="width:283px;border:1px solid black;padding:5px;">
<p>Because these cookies are strictly necessary to deliver the Websites, you cannot refuse them. You can block or delete them by changing your browser settings as described below under the heading "<strong>How can I control cookies?</strong>"</p>
</td>
</tr>
<tr>
<td style="width:283px;border:1px solid black;padding:5px;">
<p>Performance and functionality cookies:</p>
</td>
<td style="width:283px;border:1px solid black;padding:5px;">
<p>These cookies are used to enhance the performance and functionality of our Websites but are non-essential to their use. However, without these cookies, certain functionality (like videos) may become unavailable.</p>
</td>
<td style="width:283px;border:1px solid black;padding:5px;">
<p>To refuse these cookies, please follow the instructions below under the heading "<strong>How can I control cookies?</strong>"</p>
</td>
</tr>
<tr>
<td style="width:283px;border:1px solid black;padding:5px;">
<p>Analytics and customization cookies:</p>
</td>
<td style="width:283px;border:1px solid black;padding:5px;">
<p>These cookies collect information that is used either in aggregate form to help us understand how our Websites are being used or how effective our marketing campaigns are, or to help us customize our Websites for you.</p>
</td>
<td style="width:283px;border:1px solid black;padding:5px;">
<p>To refuse these cookies, please follow the instructions below under the heading "<strong>How can I control cookies?</strong>"</p>
</td>
</tr>
<tr>
<td style="width:283px;border:1px solid black;padding:5px;">
<p>Advertising cookies:</p>
</td>
<td style="width:283px;border:1px solid black;padding:5px;">
<p>These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.</p>
</td>
<td style="width:283px;border:1px solid black;padding:5px;">
<p>To refuse these cookies, please follow the instructions below under the heading "<strong>How can I control cookies?</strong>"</p>
</td>
</tr>
<tr>
<td style="width:283px;border:1px solid black;padding:5px;">
<p>Social networking cookies:</p>
</td>
<td style="width:283px;border:1px solid black;padding:5px;">
<p>These cookies are used to enable you to share pages and content that you find interesting on our Websites through third-party social networking and other websites. These cookies may also be used for advertising purposes.</p>
</td>
<td style="width:283px;border:1px solid black;padding:5px;">
<p>To refuse these cookies, please follow the instructions below under the heading "<strong>How can I control cookies?</strong>"</p>
</td>
</tr>
</tbody>
</table>
<br />
<p style="font-size: 17px; font-family: Arial;"><strong>How can I control cookies?</strong></p>
<br />
<p style="font-size: 14px; font-family: Arial;">You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.</p>
<br />
<p style="font-size: 14px; font-family: Arial;">You can access the Cookie Consent Manager via the notification banner or on our website.</p>
<br />
<p style="font-size: 14px; font-family: Arial;">In addition, most web browsers allow you to control cookies through their settings. You can usually find these settings in the "options" or "preferences" menu of your browser. In order to understand these settings, the following links may be helpful, or you can use the "Help" option in your browser for more details:</p>
<br />
<p style="font-size: 14px; font-family: Arial;"><a href="https://support.microsoft.com/en-us/windows/microsoft-edge-delete-cookies-a492f647-ba49-ce09-8947-a0a2d1ede0b1" style="font-size: 14px; font-family: Arial;">Cookie settings in Microsoft Edge</a></p>
<br />
<p style="font-size: 14px; font-family: Arial;"><a href="https://support.apple.com/en-ca/guide/safari/sfri11471/mac" style="font-size: 14px; font-family: Arial;">Cookie settings in Safari</a></p>
<br />
<p style="font-size: 14px; font-family: Arial;"><a href="https://support.google.com/chrome/answer/95647?hl=en" style="font-size: 14px; font-family: Arial;">Cookie settings in Chrome</a></p>
<br />
<p style="font-size: 14px; font-family: Arial;"><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US" style="font-size: 14px; font-family: Arial;">Cookie settings in Firefox</a></p>
<br />
<p style="font-size: 14px; font-family: Arial;">To find information relating to other browsers, visit the browser developer's website.</p>
<br />
<p style="font-size: 14px; font-family: Arial;">To opt out of being tracked by Google Analytics across all websites, visit <a href="https://tools.google.com/dlpage/gaoptout" style="font-size: 14px; font-family: Arial;">https://tools.google.com/dlpage/gaoptout</a>.</p>
<br />
<p style="font-size: 17px; font-family: Arial;"><strong>What about other tracking technologies, like web beacons?</strong></p>
<br />
<p style="font-size: 14px; font-family: Arial;">Cookies are not the only way to recognize or track visitors to a website. We may use other, similar technologies from time to time, like web beacons (sometimes called "tracking pixels" or "clear gifs"). These are tiny graphics files that contain a unique identifier that enables us to recognize when someone has visited our Websites or opened an email including them. This allows us, for example, to monitor the traffic patterns of users from one page within our Websites to another, to deliver or communicate with cookies, to understand whether you have come to our Websites from an online advertisement displayed on a third-party website, to improve site performance, and to measure the success of email marketing campaigns.</p>
<br />
<p style="font-size: 14px; font-family: Arial;">In many instances, these technologies are reliant on cookies to function properly, and so declining cookies will impair their functioning.</p>
<br />
<p style="font-size: 17px; font-family: Arial;"><strong>Do you use Flash cookies or Local Shared Objects?</strong></p>
<br />
<p style="font-size: 14px; font-family: Arial;">Websites may also use so-called "Flash Cookies" (also known as Local Shared Objects or "LSOs") to, among other things, collect and store information about your use of our services, fraud prevention and for other site operations.</p>
<br />
<p style="font-size: 14px; font-family: Arial;">If you do not want Flash Cookies stored on your computer, you can adjust the settings of your Flash player to block Flash Cookies storage using the tools contained in the <a href="https://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html" style="font-size: 14px; font-family: Arial;">Website Storage Settings Panel</a>. You can also control Flash Cookies by going to the <a href="https://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager03.html" style="font-size: 14px; font-family: Arial;">Global Storage Settings Panel</a> and following the instructions (which may include instructions that explain, for example, how to delete existing Flash Cookies (referred to "information" on the Macromedia site), how to prevent Flash LSOs from being placed on your computer without your being asked, and (for Flash Player 8 and later) how to block Flash Cookies that are not being delivered by the operator of the page you are on at the time).</p>
<br />
<p style="font-size: 14px; font-family: Arial;">Please note that setting the Flash Player to restrict or limit acceptance of Flash Cookies may reduce or impede the functionality of some Flash applications, including, potentially, Flash applications used in connection with our services.</p>
<br />
<p style="font-size: 17px; font-family: Arial;"><strong>Do you serve targeted advertising?</strong></p>
<br />
<p style="font-size: 14px; font-family: Arial;">Third parties may serve cookies on your computer or mobile device to serve advertising through our Websites. These companies may use information about your visits to this and other websites in order to provide relevant advertisements about goods and services that you may be interested in. They may also employ technology that is used to measure the effectiveness of advertisements. This can be accomplished by them using cookies or web beacons to collect information about your visits to this and other sites in order to provide relevant advertisements about goods and services of potential interest to you. The information collected through this process does not enable us or them to identify your name, contact details or other personally identifying details unless you choose to provide these.</p>
<br />
<p style="font-size: 17px; font-family: Arial;"><strong>How often will you update this Cookie Policy?</strong></p>
<br />
<p style="font-size: 14px; font-family: Arial;">We may update this Cookies Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please, therefore, re-visit this Cookies Policy regularly to stay informed about our use of cookies and related technologies.</p>
<br />
<p style="font-size: 14px; font-family: Arial;">The date at the top of this Cookies Policy indicates when it was last updated.</p>
<br />
<p style="font-size: 17px; font-family: Arial;"><strong>Where can I get further information?</strong></p>
<br />
<p style="font-size: 14px; font-family: Arial;">If you have any questions about our use of cookies or other technologies, please email us at <a href="mailto:hello@ecstem.education" style="font-size: 14px; font-family: Arial;">hello@ecstem.education</a> or by post to:</p>
<br />
<p style="font-size: 14px; font-family: Arial;">CDL King's Centre #06-03</p>
<br />
<p style="font-size: 14px; font-family: Arial;">390 Havelock Road, Singapore 169662</p>
</div></div>`.replace(/hello@ecstem\.education/g, 'hello@ecstem.education');

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
                  {/* Sourced from Termly.io Privacy Policy Generator */}
                </p>
                <div dangerouslySetInnerHTML={{ __html: cookiesHtml }} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default CookiesPolicy;
