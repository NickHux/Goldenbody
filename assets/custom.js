// class SpecialCollaboration extends HTMLElement {
//   constructor() {
//     super(); 
//     this.discountCodeElement = this.querySelector('js_discount_code');
//     this.copyIcon = this.querySelector('js-icon-copy');

//     if (this.copyIcon) {
//       console.log("this.copyIcon========>", this.copyIcon)
//       console.log("this.discountCodeElement========>", this.discountCodeElement)
//       this.copyIcon.addEventListener('click', () => this.copyToClipboard());
//     }
//   }

//   copyToClipboard() {
//     const discountCode = this.discountCodeElement ? this.discountCodeElement.innerText : '';
//     console.log("discountCode========>", discountCode)
//     if (discountCode) {
//       navigator.clipboard.writeText(discountCode).then(() => {
//         alert('Copied to clipboard!'); 
//       }).catch((err) => {
//         console.error('Failed to copy text: ', err);
//       });
//     } else {
//       console.error('No discount code found to copy.');
//     }
//   }
// }

// customElements.define('special-collaboration', SpecialCollaboration);

document.addEventListener('DOMContentLoaded', () => {
  // const minHeightElement = document.querySelector('.js-min-height-banner-image');
  // if (minHeightElement) {
  //   const height = minHeightElement.offsetHeight;
  //   minHeightElement.style.setProperty('--offsetHeight', `${height}px`);
  // }

  const onScreenChange = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    setDynamicPadding();
  };
  const setDynamicPadding = () => {
    const minHeightElement = document.querySelector('.js-min-height-banner-image');
    const sliderNavElement = document.querySelector('.banner-slider .thumbnail_swiper');
    if (minHeightElement && sliderNavElement) {
      const height = minHeightElement.offsetHeight;
      const paddingTop = (height - 250) / 2;
      sliderNavElement.style.paddingBlock = `${paddingTop}px`;
    }
  };
  window.addEventListener('resize', function(event){
      onScreenChange();
  });
  onScreenChange();

  
  const specialCollaborations = document.querySelectorAll('discount-block');
  specialCollaborations.forEach((element) => {
    const discountCodeElement = element.querySelector('.js_discount_code');
    const copyIcon = element.querySelector('.js-icon-copy');

    if (copyIcon) {
      copyIcon.addEventListener('click', () => {
        const discountCode = discountCodeElement ? discountCodeElement.innerText : '';
        if (discountCode) {
          navigator.clipboard.writeText(discountCode).then(() => {
            const tooltip = new bootstrap.Tooltip(copyIcon, {
              title: 'Copied to clipboard!',
              trigger: 'manual',  
            });
            tooltip.show(); 
            setTimeout(() => tooltip.hide(), 2000);
          }).catch((err) => {
            console.error('Failed to copy text: ', err);
          });
        } else {
          console.error('No discount code found to copy.');
        }
      });
    }
  });
});

// Newsletter updates
{
  let submitButton = document.querySelector(".js-newsletter-submit-btn");
  let emailInput = document.querySelector('.js-newsletter-email-field');
  let urlParams = new URLSearchParams(window.location.search);
  
  if (urlParams.get("customer_posted") === "true") {
    emailInput.placeholder = "Danke fürs Anmelden";
    if(!emailInput.classList.contains('subscription-succeed')) emailInput.classList.add('subscription-succeed');
  }
  else if(urlParams.get("form_type") === "customer" && window.location.hash === "#contact_form") {
    emailInput.placeholder =  "Du bist bereits angemeldet";
    if(!emailInput.classList.contains('subscription-succeed')) emailInput.classList.add('subscription-succeed');
  }
  
  if(submitButton) {
    submitButton.addEventListener('click', (event) => {
      event.preventDefault();

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (!emailPattern.test(emailInput.value)) {
        emailInput.value = "";
        emailInput.placeholder = "Bitte gib eine gültige Email an";
        if(!emailInput.classList.contains('invalid-email')) emailInput.classList.add('invalid-email');
        if(emailInput.classList.contains('subscription-succeed')) emailInput.classList.remove('subscription-succeed');
      } 
      else {
        emailInput.classList.remove('invalid-email', 'subscription-succeed');
        let newsletterForm = document.querySelector('.js-newsletter-form');
        newsletterForm.submit();
      }
    })
  }
}
