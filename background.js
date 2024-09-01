chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.url) {
    chrome.tabs.create({ url: message.url });
  }
});
