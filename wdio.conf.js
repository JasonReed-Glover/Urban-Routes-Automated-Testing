exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    headless: true,
    capabilities: [
        {
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
           // args: ['headless', 'disable-gpu']
        }
    }
    
],
    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://cnt-da4f4385-27d0-47a8-9f71-f3302017e3de.containerhub.tripleten-services.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        'chromedriver', 
        'intercept', 
    ],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}