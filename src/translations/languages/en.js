export const content = {
  en: {
    translations: {
      header: {
        home: "Home",
        collections: "Collections",
        dna: "DNA",
        account: "My account",
        login: "Login",
        logout: "Sign Out",
        admin: "Admin",
      },
      errors: {
        notFound404: "404: Page not found",
        backButton: "Back Home",
      },
      cookiePopup: {
        title: "Cookie Settings",
        accept: "Accept All Cookies",
        settings: "Cookie Settings",
        description:
          "By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage and assist in our marketing efforts. More info",
      },
      cookieSettings: {
        title: "Customize Consent Preferences",
      },
      footer: {
        registeredBrand:
          "© 2023 Favre-Bulle - All intelectual rights are proprietary",
      },
      cartDrawer: {
        title: "Cart",
        totalPrice: "Total Price",
        clearCart: "Clear Cart",
        checkout: "Checkout",
        noProducts: "There aren't any products on the cart",
      },
      pages: {
        admin: {
          sidebar: {
            products: "Products",
            backHome: "Home",
          },
          manageProducts: {
            title: "Manage Products",
            createProduct: "Create Product",
            list: {
              model: "Model",
              movement: "Movement",
              sku: "SKU",
              price: "Price",
              actions: "Actions",
              actionsHints: {
                delete: {
                  tooltip: "Delete this product",
                  title: "Delete product",
                  confirm: "Confirm",
                  reject: "Reject",
                  description:
                    "Are you sure you want to delete this product, this is irreversible",
                },
              },
            },
          },
          createProducts: {
            title: "Manage Products - Create Product",
            editTitle: "Manage Products - Edit Product",
            isCreatingProduct: "The product is being created",
            isLoadingProduct: "The product is being fetched",
            form: {
              required: "Required",
              mustNumber: "Must be a number",
              thumbnail: "Thumbnail",
              fileSize: "The file size should be less than:",
              specialThumbnail: "Special Thumbnail",
              images: "Images",
              model: "Model",

              dimensions: "Dimensions",
              color: "Color",
              description: "Description",
              sku: "SKU",
              submit: "Create Product",
              bracelet: "Bracelet",
              numberWatches: "Number Watches",
              price: "Price",
            },
          },
        },
        auth: {
          login: {
            welcome: "Enter in the world of Favre-Bulle",
            subWelcome: "Login to your account",
            loaderMessage: "Logging in",
            username: "Username",
            password: "Password",
            login: "Login",
            newUser: "New User?",
            register: "Not registered yet? Click here",
            forgotPassword: "Forgot your password, click here",
          },
          recoverPassword: {
            welcome: "Recover here your password",
            subWelcome: "You will receive an email",
            submit: "Recover",
            loaderMessage: "Sending an e-mail",
          },
          register: {
            loaderMessage: "Creating new user",
            phone: "Phone",
            username: "Username*",
            fullName: "Full Name",
            birthday: "Birthday",
            password: "Password*",
            address1: "Address line 1",
            address2: "Address line 2",
            city: "City",
            postalCode: "Postal Code",
            confirmPassword: "Confirm Password*",
            email: "E-mail*",
            register: "Register",
          },
        },
        dna: {
          theBrand: "The brand",
          theLogo: "The logo",
        },
        myCollection: {
          edit: "Edit Information",
        },
        policies: {
          termsOfService: "Terms of Service",
        },
        shippingPolicies: {
          shippingPolicies: "Shipping Policies",
          shipping: {
            title: "Shipping",
            text: "Within Switzerland, delivery time is usually 24 to 75 hours after the order is shipped, while foreign (US and Europe) shipments take 10 to 21 working days.  For an extra price, faster shipping can be applied.</br></br> We do not deliver to P.O. boxes. Orders with P.O. box addresses may be cancelled, as some courier services are unable to deliver to the specified location. </br></br> The messaging service is carried out with tracking control. Shipping shall be done with the use of UPS, DHL, and TNT. We have the express right to use any Courier service as we deem fit. </br></br> Due to shipping carrier restrictions, there are certain destinations that are not covered. For a comprehensive list of restricted countries, please refer to the FedEx Express list here. Please note that there are also shipping restrictions for Ukraine and Russia, where our shipping carriers currently cannot deliver our goods. </br> Please note that Shipping fees would be calculated together with your order price upon checkout.",
          },
          internationalShipping: {
            title: "International Shipping",
            text: "Please keep in mind that shipping costs vary by country. You will see individual shipping prices for your order before you place it at checkout. For orders shipping outside of the Switzerland, we are not liable for any tariffs, customs, or taxes. Orders will not be dispatched until payment has been received.</br></br>Shipments to Russia require a commercial address (such as an office or company address) and cannot be shipped to a personal address. We reserve the right to cancel orders that do not comply with this requirement.",
          },
          placeDelivery: {
            title: "Place of delivery, deadlines and losses",
            text: "Approximate delivery times are indicated in working days in the description of each product, although a delay in delivery will not be a reason for penalty.</br></br>   FAVRE-BULLE SARL will not be liable for errors caused in delivery when the delivery address entered by the User / Customer in the order form does not match the reality or has been missed.</br></br>Depending on the destination of the order can be used various ways or methods of shipping, each method and each destination have shipping times that are specified in the order confirmation process.</br></br>Deadlines may change for logistical reasons or for reasons of force majeure. In cases of delays in deliveries, FAVRE-BULLE SARL will inform its User/Customer, as soon as it has knowledge of them.</br></br>Each delivery is considered made from the moment the company makes the product available to the User / Customer, which is materialized through the control system used by the transport company.</br></br>Delays in delivery shall not be considered those cases in which the order has been made available to the User/Customer, by the transport company within the agreed time and could not be delivered for cause attributable to the User/Customer.</br></br>When the order leaves our warehouse, you will be sent an email notifying you that your order has been accepted and is being sent.",
          },
          whenFails: {
            title: "When delivery fails?",
            text: "In the event of a failed delivery of any watch purchased from Favre-Bulle SARL, we are committed to ensuring customer satisfaction through the following options:",
            text2:
              "</br><b>Investigation and Resolution:</b> The customer may opt to wait for Favre-Bulle SARL to conduct a thorough investigation with the courier service to determine the cause of the failed delivery. We will make every effort to resolve the issue in a timely manner and keep the customer informed throughout the process.</br></br><b>Refund:</b> Should the customer prefer not to wait for the investigation to conclude, or if the investigation determines that the watch cannot be delivered, the customer is entitled to a full refund of the purchase price. Refunds will be processed to the original method of payment within 21 business days.</br></br><b>Replacement:</b> Alternatively, the customer may choose to have a new watch sent to them at no additional cost. Favre-Bulle SARL will expedite the shipping of the replacement watch, subject to availability. In the event the original watch model is no longer available, the customer will be offered a selection of equivalent value watches to choose from.",
            text3:
              "</br>Favre-Bulle SARL is dedicated to ensuring that all delivery issues are resolved to the satisfaction of our customers. Customers are encouraged to contact our customer service team immediately upon noticing any discrepancies or issues with their delivery.",
          },
        },
        refundPolicies: {
          refundPolicies: "Return Policies",
          returnpolicy: {
            title: "Return Policy",
            text: "All sales on the site are complete and final and FAVRE-BULLE SARL only accepts returns and offers a refund under the terms and conditions set forth below:",
            text2: "</br><b>(a) Damaged in Shipment</b>",
            text3: "</br>If you receive your product and it has been damaged during shipment, please email us at <u>info@favre-bulle.com</u>   within 10-14 business days of receiving the shipment. Include a description of the damages and include pictures if possible. This information is extremely helpful to us in making sure that our products are packaged and shipped properly. We will arrange for the damaged products to be repaired or replaced.",
            text4: "</br><b>(b) Exchanges</b>",
            text5: "</br>We understand that customer satisfaction is paramount. If a customer is dissatisfied with the product and wishes to seek an exchange, we will be happy to exchange the item based on the conditions for return we have set herein in this return policy. To initiate an exchange, you must do so between 10-14 days of receiving the item, by contacting us at info@favre-bulle.com. Once eligibility is confirmed, we will provide instructions on how to return the product. The exchanged product will be dispatched once we receive and inspect the returned item, ensuring it meets the specified conditions set forth in this policy. Shipping costs related to the return of unwanted products will not be covered by FAVRE-BULLE SARL.",
            text6: "</br><b>(c) Important conditions for return</b>",
            text7: "</br>Please note that you can only return a product if it is defective and not when you are dissatisfied with a purchase. The product returned shall be inspected on its receipt. Please ensure that the following conditions are fulfilled before returning the product:",
            text8: "</br>The product shall be in unused and original condition;</br></br>Free from stains</br></br>You shall inform about the return of the product to us within a period of 30 business days;</br></br>You shall not accept any open box deliveries;</br></br>The return package shall include everything that arrived with the package when you made the purchase, including price tags, labels, original packing, freebies & accessories, invoices/warrantee cards and other documentation.</br></br>You agree and acknowledge that FAVRE-BULLE SARL reserves the right to determine whether or not product is in saleable condition. Items considered unsellable will be discarded. FAVRE-BULLE SARL will not issue a Store Credit or Exchange these item(s).",
            text9: "</br><b>(d) Refunds</b>",
          text10: "</br>We will send you an email after your return has been received and examined to advise you that we have received your returned item. We will also tell you if your return has been approved or rejected. If you are approved, we will work with you to make a free reparation, or swap it for you at our discretion."
          },
          termsOfService: {
            title: "Privacy Policy",
            text: "Effective Date: ____ day of ____ 2024</br></br>PLEASE READ THE FOLLOWING CAREFULLY</br></br>THIS STATEMENT PROVIDES GENERAL INFORMATION ABOUT THE PRIVACY STATEMENT OF THIS WEBSITE AND ITS RELATED APP. IF YOU ARE UNDER 18 YEARS OF AGE, PLEASE BE SURE TO READ THIS PRIVACY STATEMENT WITH YOUR PARENTS OR GUARDIAN AND ASK THEM QUESTIONS ABOUT WHAT YOU DO NOT UNDERSTAND.</br></br>YOUR USE OF THIS SERVICE CONSTITUTES ACCEPTANCE BY YOU OF THIS PRIVACY STATEMENT.</br></br>FAVRE-BULLE SARL (collectively, “FAVRE-BULLE SARL”, “we”, “our” and “us”.) has created this privacy statement (“Statement”) in order to demonstrate its firm commitment to the privacy of the details that you provide to us when using www.favre-bulle.com (“collectively “the website”), as the data controller for the purposes of – Switzerland’s revised Federal Data Protection Act (revFADP),  the California Consumer Privacy Act (CCPA), The California Online Privacy Protection Act and the EU General Data Protection Regulation (GDPR).</br></br>At FAVRE-BULLE SARL, we are committed to maintaining the trust and confidence of all visitors to our website. In particular, we want you to know that the website is not in the business of selling, renting or trading email lists with other companies and businesses for marketing purposes.</br></br>We believe your business is no one else’s. Your Privacy is important to you and to us. So, we’ll protect the information you share with us. To protect your privacy, FAVRE-BULLE SARL follows different principles in accordance with worldwide practices for customer privacy and data protection.</br></br>",
            text2: "</br>We won’t sell or give away your name, mail address, phone number, email address or any other information to anyone.",
            text3: "</br>We ‘ll use state – of – the – art security measures to protect your information from unauthorized users.",
            text4:'Therefore, to provide you with our services we need (and sometimes are obliged by the law) to collect your personal data. This Privacy Policy (the “Policy”) informs Users (a "User", or "You") of our policies regarding the processing of Personal Information we receive from Users of the website.</br></br>In this Privacy Policy, we’ve provided detailed information on when and why we collect personal information, how we use it, the limited conditions under which we may disclose it to others, and how we keep it secure.</br></br>We take your privacy seriously and take measures to provide all visitors and users of the website with a safe and secure environment.</br></br>The Personal Information on the website, is collected, controlled and processed by the data controller; collected on behalf of;</br></br>FAVRE-BULLE SARL</br></br>Chemin du Château-de-Bellerive 8, 1245 Collonge-Bellerive</br></br>| Switzerland</br></br>Telephone; +41 76 372 21 41</br></br>EMAIL: info@favre-bulle.com',
            title2:"Information we collect and obtain",
            text5: "We obtain personal information about you from a variety of sources. This includes personal information you provide to us directly, information we obtain from other sources, and information we gather through automated means.</br></br>Information you provide to us. When you visit to use the website to complete our order or, seek access to certain content or features, or directly correspond with us, we may collect certain types of information from you:",
            text6: "</br>Contact information (such as name, postal address, email address and telephone and/or mobile numbers);</br></br>Your payment information, when needed to facilitate certain transactions;</br></br>Reviews, comments, and/or surveys on our media blog; and</br></br>Other information you may provide to us when you fill a form, such as through our “Contact Us” feature.</br></br>",
            text7:"Information obtained from other sources. We may obtain personal information about you in connection with the Services from publicly and commercially available sources and from our affiliates and/or business partners (such as advertising networks or social networking services), including:",
            text8: "</br>Demographic data (such as gender, age range, educational level, household income range, number of children in household, ethnicity to the extent permitted);</br></br>Purchasing data, including information about advertisements you have seen or acted upon and information about your interaction with advertisers’ products and services;</br></br>Occupational data (such as profession, position, title, industry; and business address);",
            text9:"</br>Information Collected by Automated Means through Our Services. We may gather by automated means (such as cookies, web beacons, web server logs, JavaScript and other similar technologies) certain information through our Services:",
            text10:"</br>Your Internet Protocol (IP) address;</br></br>Device information, including unique identifiers and connection information, including mobile device advertising IDs (e.g., Apple’s IDFA or Google’s AAID) and the means of internet connection (e.g., WiFi connection, ISP) that can identify the physical location of such devices, in accordance with applicable law;</br></br>Your device type and settings, software used, browser type and operating system;</br></br>Websites or other services you visited before and after visiting the Services (referring URL);</br></br>Web pages and advertisements you view and links you click on within, and what search queries you may have run on, the Services (clickstream);</br></br>Viewing behavior, including the content you view, how long you view content, the quality of the service you receive, and advertisements you have been shown or interacted with;</br></br>Dates and times you access or use the Services;</br></br>Location information, including the city, state and zip code associated with your IP Address, information derived through WiFi triangulation, and precise location information from GPS-based functionality on your mobile apps, with your consent;</br></br>Your phone number and mobile carrier details in connection with our mobile app.",
            title3: "Cookies and similar technologies",
            text11:"Cookies are small files that we or others send to and store on or with your computer so that your computer, browser, mobile app or other application can be recognized as unique the next time you access, visit, use or otherwise take advantage of the Services or other media. Cookies may also reflect demographic data pertaining to you or other data linked to information you submit. One use or consequence of cookies is to enable you to receive customized ads, alerts, content, services or information. You are always free to decline any cookies we use by adjusting the settings of your browser, as your browser may permit; however, some products, services or features might not be available or operate properly if cookies are not enabled. Some of our advertisers and third-party service providers may also utilize their own cookies.</br></br>In addition, we, our service providers and others sometimes use data-gathering mechanisms on the Services, including without limitation “web beacons”, “clear GIFs”, “pixels” and/or “tags”. These perform statistical and administrative functions, such as measuring site and page traffic, verifying advertising paths, better understanding user interests and activity, gathering related information (such as information relating to a particular browser, device or IP address) and positioning images, and typically do so without detracting from your online experience. Such mechanisms are not necessarily designed to collect Personal Information. In addition, if you have provided your email address, we might use a non-human unreadable form (or “hash”) of your email address to deliver, or facilitate delivery of, relevant advertisements and information to you on or by way of the Services or on or by way of other websites or media, including, for example, popular social media sites and features."
          ,  title4: "How we use the information we obtain",
          text12:"We, or service providers acting on our behalf, may use the information collected from and about you to:",
          text13:"</br>Provide our services, including authorizing a purchase, or completing a transaction that you requested;</br></br>Send promotional materials as well as running social media Ads, alerts regarding available offers and other communications, including text/SMS messages if you provided your mobile number and opted in to receive such messages;</br></br>Communicate about, and administer participation in, special events, promotions, programs, offers, surveys, contests and market research;</br></br>Respond to inquiries from you and other third-parties, including inquiries from law enforcement agencies;</br></br>Anonymize or de-identify personal information to provide third parties with aggregated data reports showing anonymized information and other non-personal information;</br></br>Provide technical support;</br></br>Generate suggestions about the type of content you may enjoy;</br></br>Supplement your personal information collected directly from you and/or from automated means with additional information from publicly and commercially available sources, and/or information from our affiliates and our business partners;</br></br>Associate your browser and/or device with other browsers or devices you use for the purpose of providing relevant and easier access to content, advertising across browsers and devices, and other operational/business purposes;</br></br>Operate, evaluate and improve our business (including developing, enhancing, analyzing and improving our Services; managing our communications; reviewing and processing employment applications, performing data and statistical analytics; and performing accounting, auditing and other internal functions);</br></br>Protect against, identify and prevent fraud and other unlawful activity, claims and other liabilities;</br></br>Comply with and enforce applicable legal requirements, relevant industry standards, contractual obligations and our terms of service and other policies;</br></br>In other ways for which we provide specific notice at the time of collection.",
            title5:"Disclosure of your personal information",
            text14: "We may disclose your personal information to selected third parties, including:",
            text15:"</br>Third party service providers who perform services on our behalf, such as providers of IT and email distribution services, who may use your personal information for the purposes mentioned above;</br></br>Advisors such as accountants, lawyers, and consultants;</br></br>In the event that we sell or buy any business or assets, the prospective seller or buyer of such business or assets (and their respective advisers), who may use the personal information in connection with the sale or purchase;</br></br>If FAVRE-BULLE SARL or substantially all of its assets are acquired by a third party, to the relevant third party (and its advisers) who may use the data in connection with the acquisition;</br></br>Analytics providers that assist us in the improvement and optimization of our websites;</br></br>Law enforcement agencies or other third parties for the purposes described below.",
            text16: "</br>We may also disclose your personal information to third parties if we are under a duty to disclose or share your personal information in order to comply with any legal obligation, or in order to enforce or apply our Website Terms of Use, our Terms and Conditions and other agreements, or to protect the rights, property, or safety of FAVRE-BULLE SARL, our customers, or others. This includes exchanging information with other companies and organizations for the purposes of fraud detection and protection and credit risk reduction.",
            title6: "How we hold and protect your personal information",
            text17:"How we keep your personal information secure</br></br>We will take all steps reasonably necessary to ensure that your personal information is treated securely and in accordance with this privacy policy.</br></br>All information you provide to us is stored on our secure servers. Any payment transactions will be carried out by third parties over encrypted connections using SSL technology. Where we have given you (or where you have chosen) a password or API key which enables you to access certain parts of our site, or you have invited team members to access parts of our site or apps, you are responsible for keeping this password or API key confidential. We ask you not to share a password or API key with anyone.</br></br>Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your personal information, we cannot guarantee the security of your data transmitted to our site and any transmission is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorized access.",
            title7:"Our retention of your personal information",
            text18:"The periods for which we keep your information depend on why your information was collected and what we use it for. We will not keep your personal information for longer than necessary other than for our business purposes or for legal requirements." 
      ,  title8:"What are your rights to your data?",
      text19:"All Your Personal Information we collect will always belong to you. However, we are a collector and a processor of Your Personal Information. That implies on us obligations to respect your rights to Personal Information and facilitate the exercise of your rights thereto. In order to use any of your rights at any time please contact us and we will facilitate the exercise of your rights free of charge. We will inform you on the actions taken by us under your request as soon as practically possible, but in any case, not later than in 30 (thirty) calendar days.</br></br>In accordance with effective regulations, you have a significant number of rights related to your Personal Information, such as e.g.:</br></br><b>Right to access.</b> You may obtain from us the confirmation as to whether or not personal data concerning you is being processed and get an access to such personal data. You are entitled to view, amend, or delete the personal information that we hold. Email your request to our data protection office at info@favre-bulle.com and we will work with you to remove any of your personal data we may have.</br></br><b>Right to rectify</b>your inaccurate Personal Information and to have incomplete personal data completed, including by means of providing a supplementary statement</br></br><b>Right to erase</b>your Personal Information. Please note that a request to erase your Personal Information will also terminate your account on the Site. We will automatically and without undue delay erase your Personal Information when it is no longer necessary in relation to the purposes for which it was collected or otherwise processed;</br></br><b>Right to restrict</b>processing of your Personal Information;</br></br><b>Right to data portability.</b>You may obtain from us the personal data concerning you and which you have provided to us and transmit it to another Personal Information Controller;</br></br><b>Right to object</b> to processing of Your Personal Information</br></br><b>Right to withdraw</b>your consent to the usage of your Personal Information at any time</br></br><b>Right to lodge a complaint.</b>We take privacy concerns seriously. If you believe that we have not complied with this Privacy Policy with respect to your Personal Information, you may contact our respective Data Protection Office. We will investigate your complaint promptly and will reply you within 30 (thirty) calendar days.",
      title9:"Analythics",
      text20:"When someone visits the website, we use a third-party service, Google & Mailchimp Analytics, to collect standard internet log information, capturing email submissions, and details of visitor behavior patterns. We do this to track things such as the number of visitors to the various parts of the site and interactions with the site. This information is processed in a way which does not identify anyone. We do not make and do not allow Google to make, any attempt to find out the identities of visitors to our website.",
      title10:"Securing privacy",
      text21:"To transfer data between our websites, our applications and backends, communication is encrypted using the SSL (Secure Socket Layer) encryption. We protect the systems and processing by a series of technical and organizational measures. These include data encryption, pseudonymization and anonymization, logical and physical access restriction and control, firewalls and recovery systems, and integrity testing. Our employees are regularly trained in the sensitive handling of personal data and are obliged to observe data secrecy in accordance with legal requirements.",
      title11:"Minors",
      text22:"We do not knowingly gather or otherwise process personal data of minors under the age of 16. If we notice that one of our users/visitors is a minor we’ll immediately take steps to remove their information. If you believe we have processed or still hold information on minors, please send us an email at info@favre-bulle.com and we’ll remove it A.S.A.P.",
      title12:"Changes in the privacy statement",
      text23:"The effective date at the top of this page indicates when this Privacy Statement was last revised. We will notify you before any material change takes effect so that you have time to review the changes. Any change is effective when we post the revised Privacy Statement. Your use of the Services following these changes means that you accept the revised Privacy Statement."
          }
        },
      },
      technicalDetails: {
        description:
          "CHPTR_Δ is the first BA111OD manufacture watch complication: a unique timepiece that represents time in a revolutionary way.</br></br>Rather than simply rotating a hand around a central axis, the movement was designed to 'roll' a satellite hour wheel around a fixed central hour wheel. When a wheel is rotated around another wheel, the trajectory described by any point on this satellite wheel is a cycloid. There are several types of cycloids: in this BA111OD chapter, the chosen cycloid is a deltoid (with a ratio of 1/3), and as a result, the trajectory described by the tip of the hour hand is... a triangle.</br></br> Created with the help of renowned watchmaker Olivier Mory, CHPTR_Δ's asymmetrical reading of time is a world premiere that promises to captivate and inspire anyone who seeks a new and unique way of reading time.",
        movement:
          "Automatic, SW510B, stop second device, power reserve 62 hours, 27 jewels.",
        functions:
          "Cam operated chronographe – two push-buttons, hour, minute, small seconde",
        case: "Stainless steel 904L, diameter 42.50mm, thickness XXXXX, sapphire crystal with anti-reflective coating (on both sides ?), Sapphire crystal case back, Water resistance: to 10 bar (100 m)",
        strap:
          "Cuir XXXXXX, Stainless steel 904L pin lock folding clasp, Quick pin release",
        dial: "Grained with satin stainless steel subdials",
      },
    },
  },
};
