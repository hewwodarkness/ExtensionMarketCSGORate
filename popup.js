document.addEventListener('DOMContentLoaded', function() {
  let textarea = document.getElementById('clipboard-text');
  textarea.focus();
  document.execCommand('paste');
  let clipboardText = textarea.value;

  if (clipboardText) {
      var url1 = 'https://market.csgo.com/en/' + encodeURIComponent(clipboardText);
      var url2 = 'https://steamcommunity.com/market/listings/730/' + encodeURIComponent(clipboardText);
      
      chrome.tabs.create({ url: url1 });
      chrome.tabs.create({ url: url2 });
  }

  // Закриваємо спливаюче вікно після виконання
  window.close();
});
