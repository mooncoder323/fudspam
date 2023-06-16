import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import {
  Home,
  GmailCookies,
  OneDrive,
  Apple,
  AlibabaScamPage,
  Excel,
  ScamPageOne,
  ScamPageTwo,
  BankScamPages,
  Adobe,
} from "./pages/Pages";
import { Footer, Header } from "./components/Components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
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
          <Route path="/category/scam-pages-2/pdf-scam-page/" element={<Excel />} />
          <Route path="/category/scam-pages-2/office-365-scam-page/" element={<Excel />} />
          <Route path="/category/scam-pages-2/rackspace/" element={<Excel />} />
          <Route path="/category/scam-pages-2/yahoo/" element={<Excel />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
