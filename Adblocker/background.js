chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      return {cancel: details.url.indexOf("pagead") != -1};
    },
    {urls: ["<all_urls>"]},
    ["blocking"]
  );

  location.reload();
