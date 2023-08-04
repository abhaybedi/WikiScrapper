// popup.js
document.getElementById('scrapeBtn').addEventListener('click', function() {
    chrome.runtime.sendMessage({ action: 'scrape' });
  });
  
  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'scrapedData') {
      // Do something with the scraped data (e.g., display in popup or console.log)
      console.log(message.data);
    }
  });
  