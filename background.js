chrome.action.onClicked.addListener((tab) => {
  var textInput = "Ваш текст для перенаправлення"; // змініть на потрібний текст
  var url1 = 'https://market.csgo.com/en/' + encodeURIComponent(textInput);
  var url2 = 'https://steamcommunity.com/market/listings/730/' + encodeURIComponent(textInput);
  
  chrome.tabs.create({ url: url1 });
  chrome.tabs.create({ url: url2 });
});
