// content.js
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'scrape') {
      // Your web scraping logic goes here
      // You can call your Python script from here using Python shell execution libraries
      // Process the data and send it back to the background script
      // (Use `sendResponse` to send the data back)
    }
  });
  