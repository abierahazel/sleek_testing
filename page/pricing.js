module.exports = {
    url: function () {
      return this.api.launchUrl;
    },
    elements: {
        //main screen
        pricingLink: "li[id='menu-item-15902']",
        
        //pricing screen
        corporateSecretaryBtn: "div[data-id='3346e10']",
        corporateSecretaryLbl: "div[data-id='4332991']",
        annualAmountLbl: "div.billing-slider-inner-main-block-price",
        shareholderLbl: "div.billing-slider-inner-main-block-number h4",
        sliderValue0Btn: "div.billing-value-slider  span.ui-slider-pip-0",
        sliderValue10Btn: "div.billing-value-slider  span.ui-slider-pip-10",
        sliderValue20Btn: "div.billing-value-slider  span.ui-slider-pip-20",
        sliderValue30Btn: "div.billing-value-slider  span.ui-slider-pip-30",
        sliderValue40Btn: "div.billing-value-slider  span.ui-slider-pip-40",
        sliderValue50Btn: "div.billing-value-slider  span.ui-slider-pip-50",
    },
  };