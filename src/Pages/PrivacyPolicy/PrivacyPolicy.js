import React from "react";
import "./PrivacyPolicy.css";

const datas = [
  "device’s IP address (captured and stored in an anonymized format)",
  "device screen resolution",
  "device type (unique device identifiers), operating system, and browser type",
  "geographic location",
  "preferred language used to display the Website",
  "mouse events (movements, location and clicks)",
  "keypresses",
  "referring URL and domain",
  "pages visited",
  "geographic location (country only)",
  "date and time when Website pages were accessed",
];

const PrivacyPolicy = () => {
  return (
    <div className="text-bg py-5 text-white">
      <div className="container">
        <h4 className="text-black d-inline-block bg-orange mb-4 text-black rounded p-2">
          <b>Privacy Policy:</b>
        </h4>
        <div className="text-justify">
          <p>
            The domain www.squarefeetbd.com ( the “Website”) and thereunder,
            provides a members-only platform addressed to manufacturers, brands,
            retailers and other buyers of fashion and lifestyle products (the
            “Platform”).
          </p>
          <p>
            The following privacy policy informs about the use and processing of
            personal data of users visiting the Website without registration or
            log-in. If you are a registered user of the Platform, you may view
            our privacy policy for registered users after logging in at
            www.squarefeetbd.com
          </p>
          <p>
            1. Processing of data in case of communication towards us The
            Website contains information which makes it possible to contact us
            quickly in electronic form and to directly communicate with us. If
            you decide to contact us, for example via e-mail or via the contact
            form, the personal data you transmitted is automatically stored in
            order to process your request. The data you communicated will not be
            transferred to third parties. It will only be stored as long as we
            need to deal with your request (e.g. to answer your question).
          </p>
          <p>2. Web tracking</p>
          <p>
            (a) Use of Log Files in Case of Errors When you visit the Website,
            SQUARE FEET BD collects the following usage data upon a crash or
            other malfunction of the Website and sends them to an internal log
            file: anonymized IP address, browser information, computer
            information, network information. SQUARE FEET BD uses such data only
            to detect or to eliminate errors which prevent the Website from
            operating properly
          </p>
          <p>(b) Use of Cookies</p>
          <p>
            SQUARE FEET BD also collects information on the use of the Website
            by using the browser Cookies from the third party provider Google.
            SQUARE FEET BD only uses this Cookie type. Browser Cookies are small
            text files stored on the users’ data storage medium, which save the
            specific settings and data exchange via the browser. A Cookie
            typically contains the name of the domain from which the Cookie has
            come, information on the age of the Cookie and alphanumeric
            identifiers. Cookies help SQUARE FEET BD to identify the user’s
            device and to immediately make available possible preferences. When
            you access the Website, a Cookie is transmitted to your hard disk of
            the computer or the mobile device. Cookies help SQUARE FEET BD to
            improve the Website and offer better services by making the services
            more user-friendly. The Cookies used by SQUARE FEET BD may save the
            following data on the use of the Website:
          </p>
          <ul>
            {datas.map((data, index) => (
              <li key={index}>{data}</li>
            ))}
          </ul>
          <p>
            There will be no reference to the name of an individual user, but a
            reference to an identification number pertaining to the Cookie
            (“Cookie-ID”). In case the user does not consent to the use of
            browser Cookies, the user can change the browser settings, so that a
            storage of Cookies will not be accepted. However, the Website may
            not function properly and/or some features may not be available in
            that case.
          </p>
          <p>In more detail:</p>
          <p>Google Analytics</p>
          <p>
            SQUARE FEET BD uses Google Analytics. We use Google Analytics in the
            form of the “universal analytics” function provided by Google, i.e.
            the analysis of data from your use of our Website is based on a
            pseudonymous user ID and pseudonymous profile which extends to
            various devices you use (so-called “cross-device tracking”). The
            information generated by Google Analytics Cookie about your use of
            the Website (including your IP address) will first be stored on a
            server of Google. Please note that on this Website, Google Analytics
            code is supplemented by “anonymizeIp” to ensure an anonymized
            collection of IP addresses (so called IP-masking), Google therefore
            anonymizes the last octet of the IP address. Only in exceptional
            cases, the full IP address is sent to and shortened by Google
            servers.
          </p>
          <p>
            On behalf of the Website provider Google will use this information
            for the purpose of evaluating your use of the Website, compiling
            reports on Website activity for Website operators and providing
            other services relating to Website activity and internet usage to
            the Website provider. Google will not associate your IP address with
            any other data held by Google. You may refuse the use of Cookies by
            selecting the appropriate settings on your browser. However, please
            note that if you do this, you may not be able to use the full
            functionality of this Website. Furthermore, you can prevent Google’s
            collection and use of data (Cookies and IP address) by downloading
            and installing the browser plug-in available under
            https://tools.google.com/dlpage/gaoptout?hl=en-GB. You can refuse
            the use of Google Analytics by clicking on the following link. An
            opt-out Cookie will be set on the computer, which prevents the
            future collection of your data when visiting this website:
            https://tools.google.com/dlpage/gaoptout?hl=en. Further information
            concerning the terms and conditions of use and data privacy can be
            found at http://www.google.com/analytics/terms/gb.html or at
            https://www.google.de/intl/en_uk/policies/. Google automatically
            deletes all information collected within 14 months.
          </p>
          <p>
            (c) Use of GoogleAds and Conversion Tracking without Sign-Up We also
            use Google’s online marketing tool “GoogleAds”. Via GoogleAds, we
            place advertisements (“ads”) within Google’s “Display Network” (i.e.
            such ads are shown above your Google search results when you use
            Google, or on websites of third parties which are partners within
            Google’s advertisement network). Such ads are personalized, i.e.
            shown to users who are more likely to be interested in them. This
            includes personalization for remarketing purposes, i.e. ads are more
            likely shown to you if you have formerly been interested in online
            offers similar to our products. To this end, when you visit any
            website within the Google Display Network, Google integrates a code
            on such websites (so called “web beacons”). With their help, a
            Cookie or a similar technology will be placed on your device. At the
            same time, we receive an individual “conversion Cookie”. With this
            conversion Cookie, Google prepares conversion statistics for us,
            enabling us to see how many users have clicked on an ad we placed
            and how many of these users then performed an activity which we
            defined beforehand (such as clicking on certain subpages on our
            Website, e.g. signing up, signing up for a newsletter, viewing
            promotional videos, following our social media channels, or
            contacting us via our website through chat or e-mail). To enable
            this, we equip the subpages which we want to count as a conversion
            activity with a “conversion tag” provided by Google. We do not see
            your identity when using Google’s conversion tracking (Certain
            information may, however, be stored if you sign-up to create an
            Account or successfully create an Account. For more information on
            this, please see our “Privacy Policy for Registered Users”, which
            will be provided to you before you sign up.) Data relevant for
            displaying such ads and subsequent conversion tracking is processed
            pseudonymously by Google and its partners, i.e. Google does not
            store or process data such as your name or email address, unless you
            have expressly permitted Google to do so. For more information about
            Google’s use of Cookies in advertising, please visit
            https://policies.google.com/technologies/ads?hl=en. You can manage
            your ad settings within the Google services on your Google account
            (https://adssettings.google.com/authenticated?hl=en). Also, you can
            manage cookies in the settings of the web browser you use. Data
            relevant for displaying such ads and subsequent conversion tracking
            is processed pseudonymously by Google and its partners, i.e. Google
            does not store or process data such as your name or email address,
            unless you have expressly permitted Google to do so. For more
            information about Google’s use of Cookies in advertising, please
            visit https://policies.google.com/technologies/ads?hl=en. You can
            manage your ad settings within the Google services on your Google
            account (https://adssettings.google.com/authenticated?hl=en). Also,
            you can manage cookies in the settings of the web browser you use.
            We use Google Ads and its personalization to show ads only to users
            who are potentially interested in them. Conversion tracking allows
            us to find out which ads users found interesting and therefore, to
            improve them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
