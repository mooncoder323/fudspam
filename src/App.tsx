import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import {
  Home,
  HeartSender,
  GmailCookies,
  OneDrive,
  Apple,
  AlibabaScamPage,
  Excel,
  ScamPageOne,
  ScamPageTwo,
  BankScamPages,
  Adobe,
  Office365,
  AntiBot,
  RDP,
  PHPMailer,
  PrivateSoftware,
  WebmailCracker,
  EmailSorter,
  EmailExtractor,
  EmailVerifier,
  Encoder,
  HackedSMTP,
  Rackspace,
  IonosSMTP,
  EarthSMTP,
  SendgridSMTP,
  StratoSMTP,
  TonlineSMTP,
  AmazonsesSMTP,
  ZimbraWebmail,
  JapanSMTP,
  AlibabaSMTP
} from "./pages/Pages";
import { Footer, Header } from "./components/Components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Heart Sender Page */}
          <Route
            path="/category/mailers/heart-sender/"
            element={<HeartSender />}
          />

          {/* Private Software Pages */}
          <Route
            path="/category/private-software/"
            element={<PrivateSoftware />}
          />
          <Route path="/category/webmail-cracker/" element={<WebmailCracker />} />
          <Route path="/category/software/email-sorter/" element={<EmailSorter />} />
          <Route path="/category/private-software/all-email-checker/" element={<Excel />} />
          <Route path="/category/private-software/owa-email-sorrter/" element={<Excel />} />
          <Route path="/category/private-software/zimbra-email-sorter/" element={<Excel />} />
          <Route path="/category/private-software/amazon-email-checker/" element={<Excel />} />
          <Route path="/category/private-software/paypal-email-checker/" element={<Excel />} />
          <Route path="/category/email-extractor/" element={<EmailExtractor />} />
          <Route path="/category/private-software/chase-email-checker/" element={<Excel />} />
          <Route path="/category/email-verifier/" element={<EmailVerifier />} />
          <Route path="/category/private-software/page-and-letter-encoder/" element={<Encoder />} />

          {/* Scam Pages 1 */}
          <Route path="/category/scam-pages-1-2/" element={<ScamPageOne />} />
          <Route
            path="/category/gmail-cookies-grab-page-bypass-2fa-security/"
            element={<GmailCookies />}
          />
          <Route
            path="/category/scam-pages-1-2/one-drive/"
            element={<OneDrive />}
          />
          <Route path="/category/scam-pages-1-2/apple/" element={<Apple />} />
          <Route
            path="/category/scam-pages-1-2/alibaba-scam-page/"
            element={<AlibabaScamPage />}
          />
          <Route path="/category/scam-pages-1-2/excel/" element={<Excel />} />
          <Route
            path="/category/scam-pages-1-2/we-transfer/"
            element={<Excel />}
          />
          <Route
            path="/category/scam-pages-1-2/webmail-scam-page/"
            element={<Excel />}
          />
          <Route
            path="/category/scam-pages-1-2/sharepoint/"
            element={<Excel />}
          />
          <Route path="/category/scam-pages-1-2/amazon/" element={<Excel />} />
          <Route path="/category/scam-pages-1-2/dropbox/" element={<Excel />} />
          <Route
            path="/category/scam-pages-1-2/outlook-scam-page/"
            element={<Excel />}
          />
          <Route
            path="/category/scam-pages-1-2/docusign/"
            element={<Excel />}
          />

          {/* Scam Pages 2 */}
          <Route path="/category/scam-pages-2/" element={<ScamPageTwo />} />
          <Route
            path="/category/scam-pages-2/box-page-with-pdf/"
            element={<Excel />}
          />
          <Route path="/category/scam-pages-2/godaddy/" element={<Excel />} />
          <Route path="/category/scam-pages-2/aol/" element={<Excel />} />
          <Route
            path="/category/scam-pages-2/bank-scam-pages/"
            element={<BankScamPages />}
          />
          <Route
            path="/category/scam-pages-1-2/outlook-scam-page/"
            element={<Excel />}
          />
          <Route
            path="/category/scam-pages-2/china-scam-pages/"
            element={<Excel />}
          />
          <Route path="/category/scampages/adobe/" element={<Adobe />} />
          <Route
            path="/category/scam-pages-2/pdf-scam-page/"
            element={<Excel />}
          />
          <Route
            path="/category/scam-pages-2/office-365-scam-page/"
            element={<Excel />}
          />
          <Route path="/category/scam-pages-2/rackspace/" element={<Excel />} />
          <Route path="/category/scam-pages-2/yahoo/" element={<Excel />} />

          {/* Fud Link Pages */}
          <Route path="/category/fud-link/" element={<Excel />} />
          <Route
            path="/category/fud-link-service/azure-fud-link/"
            element={<Excel />}
          />
          <Route
            path="/category/fud-link-service/cpanel-fud-link/"
            element={<Excel />}
          />

          {/* Hacked SMTP */}
          <Route path="/category/hacked-smtp/" element={<HackedSMTP />} />
          <Route path="/category/hacked-smtp/rackspace-smtp/" element={<Rackspace />} />
          <Route path="/category/hacked-smtp/ionos-smtp/" element={<IonosSMTP />} />
          <Route path="/category/hacked-smtp/earth-link-smtp/" element={<EarthSMTP />} />
          <Route path="/category/hacked-smtp/sendgrid-smtp/" element={<SendgridSMTP />} />
          <Route path="/category/hacked-smtp/strato-smtp/" element={<StratoSMTP />} />
          <Route path="/category/hacked-smtp/t-online-smtp/" element={<TonlineSMTP />} />
          <Route path="/category/hacked-smtp/amazon-ses-smtp/" element={<AmazonsesSMTP />} />
          <Route path="/category/hacked-smtp/zimbra-webmail/" element={<ZimbraWebmail />} />
          <Route path="/category/hacked-smtp/japan-smtp/" element={<JapanSMTP />} />
          <Route path="/category/hacked-smtp/alibaba-smtp/" element={<AlibabaSMTP />} />

          {/* General Scampages */}
          <Route path="/category/general-scampages/" element={<Excel />} />

          {/* Office 365 True Login Page */}
          <Route
            path="/category/office-365-true-login/"
            element={<Office365 />}
          />

          {/* Antibot system Page */}
          <Route path="/category/antibot-system/" element={<AntiBot />} />

          {/* RDP Page */}
          <Route path="/category/rdp/" element={<RDP />} />

          {/* Bullet Proof Hosting Page */}
          <Route path="/category/bullet-proof-hosting/" element={<Excel />} />

          {/* Fud Letters Page */}
          <Route path="/category/fud-letters/" element={<Excel />} />

          {/* Php Mailer Page */}
          <Route path="/category/php-mailer/" element={<PHPMailer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
