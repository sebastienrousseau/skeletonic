/**
 * Manage service worker setup
 *
 * @constructor
 */
function ServiceWorkerSetup() {
    this.init();
};

/**
 * Initialise Service Worker
 */
ServiceWorkerSetup.prototype.init = function () {
    // Register the service worker
    if ('serviceWorker' in navigator) {
    	navigator.serviceWorker.register('/service-worker.js')
        .then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }).catch(function(err) {
        // registration failed :(
        	console.log('ServiceWorker registration failed: ', err);
        });
    }
};

window.ServiceWorkerSetup = new ServiceWorkerSetup();
