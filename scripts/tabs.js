chrome.browserAction.onClicked.addListener(function(activeTab) {
  var newURL = 'https://outlook.office.com/calendar/view/week?actSwt=true';
  chrome.tabs.create({ url: newURL });
});
