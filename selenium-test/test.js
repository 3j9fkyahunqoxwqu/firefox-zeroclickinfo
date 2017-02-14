var firefox = require('selenium-webdriver/firefox');
var webdriver = require('selenium-webdriver');
var assert = require('selenium-webdriver/testing/assert');
var until = webdriver.until;
var By = webdriver.By;
var process = require('process');
var env = process.env;
var fs = require('fs');

var ddgEmail = env.DDG_TEST_EMAIL;
var ddgEmailPw = env.DDG_TEST_EMAIL_PW;

if(!ddgEmail || !ddgEmailPw){
    console.log('Missing login user and pass');
    process.exit(1);
}

var profile = new firefox.Profile();
profile.addExtension( __dirname + '/../build/duckduckgo_plus.xpi');

var options = new firefox.Options().setProfile(profile);
var driver = new firefox.Driver(options);
var capabilities = webdriver.Capabilities.firefox();
capabilities.set('firefox_profile', profile);

var wd = new webdriver.Builder()
	.forBrowser('firefox')
	.setFirefoxOptions(options)
	.build();

wd.get('http://google.com');
wd.findElement({id: 'gb_70'}).click().then(function() {
        wd.wait(until.elementLocated( By.id('Email')), 2000).then(function(emailBox) {
            emailBox.sendKeys(ddgEmail);
            wd.findElement({id: 'next'}).click();

            wd.wait(until.elementLocated( By.id('Passwd')), 2000).then(function(passwordBox){
                wd.wait(until.elementIsVisible(passwordBox), 2000).then(function(passwordBox){
                    passwordBox.sendKeys(ddgEmailPw);
                    wd.findElement({id: 'signIn'}).click();

                    wd.wait(until.elementLocated( By.className('gb_9a gbii')), 2000, 'User icon should exist').then(function(userIcon) {
                        wd.wait(until.elementIsVisible(userIcon), 2000).then(function(){
                            userIcon.click().then(function() {
                                wd.takeScreenshot( ).then(function(img) {
                                    fs.writeFile("screenshot.png", img, 'base64');
                                });

                                wd.getPageSource().then(function(page) {
                                    fs.writeFile('source.html', page);
                                });
                            });
                        });

                        wd.wait(until.elementLocated( By.id('signout')), 2000, 'Signout button should exist').then( function(logoutBtn){
                            wd.wait(until.elementIsVisible(logoutBtn), 2000).then( function(logoutBtn) {
                                logoutBtn.click();
                                wd.wait(until.elementLocated( By.id('gb_70')), 2000, 'Signin button should exist');
                            });
                        });

                    });
                });
            });
        });
});

