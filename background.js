chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        let host = "https://old.reddit.com";
        let path = new URL(details.url).pathname;
        return {redirectUrl: host + path}; 
    },
    {
        urls: [
            "*://www.reddit.com/*",
            "*://new.reddit.com/*",
            "*://reddit.com/*",
        ]
    },   ["blocking"]
);
