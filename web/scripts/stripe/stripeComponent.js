module.exports = {
  scope: 'heinz',
  name: 'stripeComponent',
  dependencies: ['router', 'Vue', 'stripeRepo', 'storage'],
  factory: (router, Vue, repo, storage) => {
    'use strict'

    const component = Vue.component('stripe', {
      // code from: code from: https://github.com/stripe/elements-examples/#example-1
      template: `
      <div class="stripe">
      <div class="globalContent">
        <main>
        <div class="stripes">
          <div class="stripe s1"></div>
          <div class="stripe s2"></div>
          <div class="stripe s3"></div>
        </div>
        <section class="container-lg">
          <div class="cell example example5" id="example-5">
            <form>
              <div id="example5-paymentRequest">
                <!--Stripe paymentRequestButton Element inserted here-->
              </div>
              <fieldset>
                <legend class="card-only" data-tid="elements_examples.form.pay_with_card">Pay with card</legend>
                <legend class="payment-request-available" data-tid="elements_examples.form.enter_card_manually">Or enter card details</legend>
                <div class="row">
                  <div class="field">
                    <label for="example5-name" data-tid="elements_examples.form.name_label">Name</label>
                    <input id="example5-name" data-tid="elements_examples.form.name_placeholder" class="input" type="text" placeholder="Jane Doe" required="" autocomplete="name">
                  </div>
                </div>
                <div class="row">
                  <div class="field">
                    <label for="example5-email" data-tid="elements_examples.form.email_label">Email</label>
                    <input id="example5-email" data-tid="elements_examples.form.email_placeholder" class="input" type="text" placeholder="janedoe@gmail.com" required="" autocomplete="email">
                  </div>
                  <div class="field">
                    <label for="example5-phone" data-tid="elements_examples.form.phone_label">Phone</label>
                    <input id="example5-phone" data-tid="elements_examples.form.phone_placeholder" class="input" type="text" placeholder="(941) 555-0123" required="" autocomplete="tel">
                  </div>
                </div>
                <div data-locale-reversible>
                  <div class="row">
                    <div class="field">
                      <label for="example5-address" data-tid="elements_examples.form.address_label">Address</label>
                      <input id="example5-address" data-tid="elements_examples.form.address_placeholder" class="input" type="text" placeholder="185 Berry St" required="" autocomplete="address-line1">
                    </div>
                  </div>
                  <div class="row" data-locale-reversible>
                    <div class="field">
                      <label for="example5-city" data-tid="elements_examples.form.city_label">City</label>
                      <input id="example5-city" data-tid="elements_examples.form.city_placeholder" class="input" type="text" placeholder="San Francisco" required="" autocomplete="address-level2">
                    </div>
                    <div class="field">
                      <label for="example5-state" data-tid="elements_examples.form.state_label">State</label>
                      <input id="example5-state" data-tid="elements_examples.form.state_placeholder" class="input empty" type="text" placeholder="CA" required="" autocomplete="address-level1">
                    </div>
                    <div class="field">
                      <label for="example5-zip" data-tid="elements_examples.form.postal_code_label">ZIP</label>
                      <input id="example5-zip" data-tid="elements_examples.form.postal_code_placeholder" class="input empty" type="text" placeholder="94107" required="" autocomplete="postal-code">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="field">
                    <label for="example5-card" data-tid="elements_examples.form.card_label">Card</label>
                    <div id="example5-card" class="input"></div>
                  </div>
                </div>
                <button type="submit" data-tid="elements_examples.form.pay_button">Pay $25</button>
              </fieldset>
              <div class="error" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                  <path class="base" fill="#000" d="M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"></path>
                  <path class="glyph" fill="#FFF" d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"></path>
                </svg>
                <span class="message"></span></div>
            </form>
            <div class="success">
              <div class="icon">
                <svg width="84px" height="84px" viewBox="0 0 84 84" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <circle class="border" cx="42" cy="42" r="40" stroke-linecap="round" stroke-width="4" stroke="#000" fill="none"></circle>
                  <path class="checkmark" stroke-linecap="round" stroke-linejoin="round" d="M23.375 42.5488281 36.8840688 56.0578969 64.891932 28.0500338" stroke-width="4" stroke="#000" fill="none"></path>
                </svg>
              </div>
              <h3 class="title" data-tid="elements_examples.success.title">Payment successful</h3>
              <p class="message"><span data-tid="elements_examples.success.message">Thanks for Shopping! <br>We've emailed the download link to you!
              </span>
              <span class="token">tok_189gMN2eZvKYlo2CwTBv9KKh</span></p>

              <a class="reset" href="#">
                <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <path fill="#000000" d="M15,7.05492878 C10.5000495,7.55237307 7,11.3674463 7,16 C7,20.9705627 11.0294373,25 16,25 C20.9705627,25 25,20.9705627 25,16 C25,15.3627484 24.4834055,14.8461538 23.8461538,14.8461538 C23.2089022,14.8461538 22.6923077,15.3627484 22.6923077,16 C22.6923077,19.6960595 19.6960595,22.6923077 16,22.6923077 C12.3039405,22.6923077 9.30769231,19.6960595 9.30769231,16 C9.30769231,12.3039405 12.3039405,9.30769231 16,9.30769231 L16,12.0841673 C16,12.1800431 16.0275652,12.2738974 16.0794108,12.354546 C16.2287368,12.5868311 16.5380938,12.6540826 16.7703788,12.5047565 L22.3457501,8.92058924 L22.3457501,8.92058924 C22.4060014,8.88185624 22.4572275,8.83063012 22.4959605,8.7703788 C22.6452866,8.53809377 22.5780351,8.22873685 22.3457501,8.07941076 L22.3457501,8.07941076 L16.7703788,4.49524351 C16.6897301,4.44339794 16.5958758,4.41583275 16.5,4.41583275 C16.2238576,4.41583275 16,4.63969037 16,4.91583275 L16,7 L15,7 L15,7.05492878 Z M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z"></path>
                </svg>
              </a>
            </div>

            <div class="caption">
              <span data-tid="elements_examples.caption.no_charge" class="no-charge">Your card won't be charged</span>
            </div>
          </div>
        </section>
        </main>
      </div>
      </div>`,

      beforeMount() {
        var video = document.getElementsByTagName("video")[0];
        video.style.display = 'none';
        var header = document.getElementsByTagName("header")[0];
        header.style.display = 'none';
      },

      mounted(){
        var stripe = Stripe('pk_test_CLNZH3bnJyymbzChJVSqAEHB00cmXPGbZS'); //strip publishable key
        
        function registerElements(elements, exampleName) {
          var formClass = '.' + exampleName;
          var example = document.querySelector(formClass);

          var form = example.querySelector('form');
          var resetButton = example.querySelector('a.reset');
          var error = form.querySelector('.error');
          var errorMessage = error.querySelector('.message');

          function enableInputs() {
            Array.prototype.forEach.call(
              form.querySelectorAll(
                "input[type='text'], input[type='email'], input[type='tel']"
              ),
              function(input) {
                input.removeAttribute('disabled');
              }
            );
          }

          function disableInputs() {
            Array.prototype.forEach.call(
              form.querySelectorAll(
                "input[type='text'], input[type='email'], input[type='tel']"
              ),
              function(input) {
                input.setAttribute('disabled', 'true');
              }
            );
          }

          function triggerBrowserValidation() {
            // The only way to trigger HTML5 form validation UI is to fake a user submit
            // event.
            var submit = document.createElement('input');
            submit.type = 'submit';
            submit.style.display = 'none';
            form.appendChild(submit);
            submit.click();
            submit.remove();
          }

          // Listen for errors from each Element, and show error messages in the UI.
          var savedErrors = {};
          elements.forEach(function(element, idx) {
            element.on('change', function(event) {
              if (event.error) {
                error.classList.add('visible');
                savedErrors[idx] = event.error.message;
                errorMessage.innerText = event.error.message;
              } else {
                savedErrors[idx] = null;

                // Loop over the saved errors and find the first one, if any.
                var nextError = Object.keys(savedErrors)
                  .sort()
                  .reduce(function(maybeFoundError, key) {
                    return maybeFoundError || savedErrors[key];
                  }, null);

                if (nextError) {
                  // Now that they've fixed the current error, show another one.
                  errorMessage.innerText = nextError;
                } else {
                  // The user fixed the last error; no more errors.
                  error.classList.remove('visible');
                }
              }
            });
          });

          // Listen on the form's 'submit' handler...
          form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Trigger HTML5 validation UI on the form if any of the inputs fail
            // validation.
            var plainInputsValid = true;
            Array.prototype.forEach.call(form.querySelectorAll('input'), function(
              input
            ) {
              if (input.checkValidity && !input.checkValidity()) {
                plainInputsValid = false;
                return;
              }
            });
            if (!plainInputsValid) {
              triggerBrowserValidation();
              return;
            }

            // Show a loading screen...
            example.classList.add('submitting');

            // Disable all inputs.
            disableInputs();

            // Gather additional customer data we may have collected in our form.
            var name = form.querySelector('#' + exampleName + '-name');
            var address1 = form.querySelector('#' + exampleName + '-address');
            var city = form.querySelector('#' + exampleName + '-city');
            var state = form.querySelector('#' + exampleName + '-state');
            var zip = form.querySelector('#' + exampleName + '-zip');
            var additionalData = {
              name: name ? name.value : undefined,
              address_line1: address1 ? address1.value : undefined,
              address_city: city ? city.value : undefined,
              address_state: state ? state.value : undefined,
              address_zip: zip ? zip.value : undefined,
            };

            // Use Stripe.js to create a token. We only need to pass in one Element
            // from the Element group in order to create a token. We can also pass
            // in the additional customer data we collected in our form.
            stripe.createToken(elements[0], additionalData).then(function(result) {
              // Stop loading!
              example.classList.remove('submitting');

              if (result.token) {
                // If we received a token, show the token ID.
                example.querySelector('.token').innerText = result.token.id;
                example.classList.add('submitted');
                router.navigate('/success')

              } else {
                // Otherwise, un-disable inputs.
                enableInputs();
              }
            });
          });

          resetButton.addEventListener('click', function(e) {
            e.preventDefault();
            // Resetting the form (instead of setting the value to `''` for each input)
            // helps us clear webkit autofill styles.
            form.reset();

            // Clear each Element.
            elements.forEach(function(element) {
              element.clear();
            });

            // Reset error state as well.
            error.classList.remove('visible');

            // Resetting the form does not un-disable inputs, so we need to do it separately:
            enableInputs();
            example.classList.remove('submitted');
          });
        }

        var elements = stripe.elements({
          locale: window.__exampleLocale
        });

        /**
         * Card Element
         */
        var card = elements.create("card", {
          iconStyle: "solid",
          style: {
            base: {
              iconColor: "#fff",
              color: "#fff",
              fontWeight: 400,
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontSize: "16px",
              fontSmoothing: "antialiased",

              "::placeholder": {
                color: "#BFAEF6"
              },
              ":-webkit-autofill": {
                color: "#fce883"
              }
            },
            invalid: {
              iconColor: "#FFC7EE",
              color: "#FFC7EE"
            }
          }
        });
        card.mount("#example5-card");

        /**
         * Payment Request Element
         */
        var paymentRequest = stripe.paymentRequest({
          country: "US",
          currency: "usd",
          total: {
            amount: 2500,
            label: "Total"
          },
          requestShipping: true,
          shippingOptions: [
            {
              id: "free-shipping",
              label: "Free shipping",
              detail: "Arrives in 5 to 7 days",
              amount: 0
            }
          ]
        });
        paymentRequest.on("token", function(result) {
          var example = document.querySelector(".example5");
          example.querySelector(".token").innerText = result.token.id;
          example.classList.add("submitted");
          result.complete("success");
        });

        var paymentRequestElement = elements.create("paymentRequestButton", {
          paymentRequest: paymentRequest,
          style: {
            paymentRequestButton: {
              theme: "light"
            }
          }
        });

        paymentRequest.canMakePayment().then(function(result) {
          if (result) {
            document.querySelector(".example5 .card-only").style.display = "none";
            document.querySelector(
              ".example5 .payment-request-available"
            ).style.display =
              "block";
            paymentRequestElement.mount("#example5-paymentRequest");
          }
        });

        registerElements([card], "example5");
      }
      // data: () => {
      //   return state
      // }
    })
    return {
      component
    }
  }
}
