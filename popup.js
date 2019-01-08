document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() {
        chrome.tabs.executeScript(null, {file: 'custom.js'});
    }, false);
  }, false);

  /*chrome://extensions/
  https://developer.chrome.com/extensions/windows
  https://www.sitepoint.com/create-chrome-extension-10-minutes-flat/
  */ 
 