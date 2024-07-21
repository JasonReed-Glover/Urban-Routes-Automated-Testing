Sprint 8 Project
Description
In this project, I completed several automated tests that covered the full process of ordering a taxi in the Urban Routes App. Before starting the first test, I ran the npm install to the project folder. The tools used were Visual Code, The Urban Routes App, and Dev Tools to conduct the test. Dev Tools was used to inspect each required Key Point of the App. Those Key Points were: The From and To input in the Address fields. Adding a phone number. Adding a credit card for payment. Sending a message to the driver. Ordering a blanket and 2 ice creams.  I opened the app and inspected each required test, seeing where in the app each input field was filled. Added those codes to my test, to mimic someone ordering a taxi as expected.

Technologies:
This test contained.... 
Node.js
Webdriver I/O: NPX Wdio config.
Npm: npm install


How to run the test:
creating and copying New server URL. 
Updating it in the wdio.conf.js file under baseURL.
using the command: npm run wdio
8 Test were created:
    Setting the address
    Selecting Supportive plan
    Filling in the phone number
    Adding a credit card
    Writing a message for the driver
    Ordering a Blanket
    Ordering 2 Ice creams
    The car search modal appears.
All 8 test passed as expected.

Code style:
Camel case
No variables and no functions were left unused. let will be used for all of the variable changes.

