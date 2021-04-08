module.exports = {
    before: browser => {
        global.mainPage = browser.page.pricing();
        browser.maximizeWindow();
    },

    after: browser => {
        browser.end(() => {
            process.exit();
        }); 
    },
    
    "Sleek Test Cases": client => {       
        const LOGGER = msg => {
            client.perform(done => {
                console.log(msg);
                done();
            });
        }
        
    /*Scenario: 	
    Given I went to the Sleek SG "Home" page
    When I click on the "Pricing" link
    Then I should be navigated to the Sleek SG "Pricing" page
    */
    let slider = ["40~41~1200", "10~11~780"];
    const def = {
            shareholder: "1",
            annualBilling: "300"
    };

        LOGGER("Go to Sleek SG Homepage");
        client.url('https://sleek.com/sg/');
        mainPage.waitForElementVisible("@pricingLink");

        LOGGER("Click the Pricing Link");
        mainPage
            .click("@pricingLink")
            .waitForElementVisible("@corporateSecretaryBtn")
            .assert.visible("@corporateSecretaryBtn");

    /*Scenario Outline: Correct corporate secretary details should display after selecting a shareholder value from the slider
    Given I am on the Sleek SG "Pricing" page
    When 
    Then the "Shareholder" cell text should be "<shareholder_number>"
    And the "Annual Billing" cell text should be "s$<annual_billing_value>/ Year"

    Examples:
      | shareholder_number | annual_billing_value |
      | 41                 | 1200                 |
      | 11                 | 780                  |
    */
        LOGGER("Select Corporate Secretary");
        mainPage
            .click("@corporateSecretaryBtn")
            .assert.containsText("@corporateSecretaryLbl", "Corporate Secretary");
        
        LOGGER("Verify Shareholder and Annual Billing");
        mainPage
            .assert.containsText("@shareholderLbl", def.shareholder)
            .assert.containsText("@annualAmountLbl", def.annualBilling);

        LOGGER("Test Slider for Shareholder - Verify Annual Billing and Shareholder value");
        slider.forEach(value => {
            mainPage
                .click(`@sliderValue${value.split("~")[0]}Btn`).pause(1200)
                .assert.containsText("@shareholderLbl", value.split("~")[1])
                .assert.containsText("@annualAmountLbl", "s$" + value.split("~")[2])
        });
    },
};