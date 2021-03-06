// Autogenerated by Nightwatch
// Refer to the online docs for more details: https://nightwatchjs.org/gettingstarted/configuration/
const Services = {}; loadServices();

module.exports = {
  "src_folders" : ["./tests"],
  "output_folder" : "./reports",
  "page_objects_path" : "./page",
  "globals_path" : "globals.js",
  "test_workers": {
    "enabled": true,
    "workers": "auto"
  },

  "webdriver": {
    "start_process": true,
    "server_path": "node_modules/.bin/chromedriver",
    "server_path": require('chromedriver').path,
    "port": 9515,
  },
  
  "test_settings" : {
    "default" : {
      "launch_url" : "http://google.com", 
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "screenshots" : {
        "enabled" : true,
        "path" : "",
        "unit_tests_mode" : true,
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    }
  }

};

function loadServices() {
  try {
    Services.seleniumServer = require('selenium-server');
  } catch (err) {}

  try {
    Services.chromedriver = require('chromedriver');
  } catch (err) {}

  try {
    Services.geckodriver = require('geckodriver');
  } catch (err) {}
}
