chrome.runtime.onMessage.addListener(function (
  message,
  _sender,
  _sendResponse
) {
  if (message.url) {
    chrome.tabs.create({ url: message.url });
  }
});
