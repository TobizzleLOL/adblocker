const blocklist = [
  "ad.js",
  "pagead",
  ".doubleclick."
  ]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      return {cancel: !blocklist.every(checkurl, details.url)};
    },
    {urls: ["<all_urls>"],
    types: ['sub_frame'],
  },
    
    ["blocking"]
  );

  function checkurl(url){
      return this.indexOf(url) == -1;
  }