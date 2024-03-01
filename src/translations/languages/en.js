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
            text: "Within Switzerland, delivery time is usually 24 to 75 hours after the order is shipped, while foreign (US and Europe) shipments take 10 to 21 working days.  For an extra price, faster shipping can be applied.</br></br> We do not deliver to P.O. boxes. Orders with P.O. box addresses may be cancelled, as some courier services are unable to deliver to the specified location. </br></br> The messaging service is carried out with tracking control. Shipping shall be done with the use of UPS, DHL, and TNT. We have the express right to use any Courier service as we deem fit. </br></br> Due to shipping carrier restrictions, there are certain destinations that are not covered. For a comprehensive list of restricted countries, please refer to the FedEx Express list here. Please note that there are also shipping restrictions for Ukraine and Russia, where our shipping carriers currently cannot deliver our goods. </br> Please note that Shipping fees would be calculated together with your order price upon checkout."
          },
          internationalShipping: {
            title: "International Shipping",
            text: "Please keep in mind that shipping costs vary by country. You will see individual shipping prices for your order before you place it at checkout. For orders shipping outside of the Switzerland, we are not liable for any tariffs, customs, or taxes. Orders will not be dispatched until payment has been received.</br></br>Shipments to Russia require a commercial address (such as an office or company address) and cannot be shipped to a personal address. We reserve the right to cancel orders that do not comply with this requirement."
          },
          placeDelivery: {
            title: "Place of delivery, deadlines and losses",
            text: "Approximate delivery times are indicated in working days in the description of each product, although a delay in delivery will not be a reason for penalty.</br></br>   FAVRE-BULLE SARL will not be liable for errors caused in delivery when the delivery address entered by the User / Customer in the order form does not match the reality or has been missed.</br></br>Depending on the destination of the order can be used various ways or methods of shipping, each method and each destination have shipping times that are specified in the order confirmation process.</br></br>Deadlines may change for logistical reasons or for reasons of force majeure. In cases of delays in deliveries, FAVRE-BULLE SARL will inform its User/Customer, as soon as it has knowledge of them.</br></br>Each delivery is considered made from the moment the company makes the product available to the User / Customer, which is materialized through the control system used by the transport company.</br></br>Delays in delivery shall not be considered those cases in which the order has been made available to the User/Customer, by the transport company within the agreed time and could not be delivered for cause attributable to the User/Customer.</br></br>When the order leaves our warehouse, you will be sent an email notifying you that your order has been accepted and is being sent."
          },
          whenFails: {
            title: "When delivery fails?",
            text: "In the event of a failed delivery of any watch purchased from Favre-Bulle SARL, we are committed to ensuring customer satisfaction through the following options:",
            text2: "</br><b>Investigation and Resolution:</b> The customer may opt to wait for Favre-Bulle SARL to conduct a thorough investigation with the courier service to determine the cause of the failed delivery. We will make every effort to resolve the issue in a timely manner and keep the customer informed throughout the process.</br></br><b>Refund:</b> Should the customer prefer not to wait for the investigation to conclude, or if the investigation determines that the watch cannot be delivered, the customer is entitled to a full refund of the purchase price. Refunds will be processed to the original method of payment within 21 business days.</br></br><b>Replacement:</b> Alternatively, the customer may choose to have a new watch sent to them at no additional cost. Favre-Bulle SARL will expedite the shipping of the replacement watch, subject to availability. In the event the original watch model is no longer available, the customer will be offered a selection of equivalent value watches to choose from.",
            text3:"</br>Favre-Bulle SARL is dedicated to ensuring that all delivery issues are resolved to the satisfaction of our customers. Customers are encouraged to contact our customer service team immediately upon noticing any discrepancies or issues with their delivery."
          }
          
        },
        refundPolicies: {
          refundPolicies: "Refund Policies",
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
