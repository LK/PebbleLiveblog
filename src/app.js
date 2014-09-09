/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

function main() {

  var conf = {
    LIVEBLOG_URL: 'http://live.theverge.com/apple-iphone-iwatch-live-blog/live.json',
    LIVEBLOG_NAME: 'iPhone 6 Event',
    REFRESH_INTERVAL: 30 /* seconds */
  };

  var UI = require('ui');
  var ajax = require('ajax');

  var HTML5Entities = require('html5-entities.js');
  var Html5Entities = new HTML5Entities();

  var mainCard = new UI.Card({
    title: conf.LIVEBLOG_NAME + ' Liveblog',
    body: 'Press select to refresh.'
  });
  
  var addCard = function(entry) {
    var body = entry.body.replace(/(<([^>]+)>)/ig, '');
    body.trim();
    if (body.length === 0) return;
    var card = new UI.Card({
      body: Html5Entities.decode(body),
      scrollable: true
    });
    
    card.on('click', 'select', function() {
      card.hide();
    });
  
    card.show();
  };

  var lastShownId = -1;

  var refreshData = function() {
    mainCard.body('Downloading new messages...');
    ajax({url: conf.LIVEBLOG_URL, type: 'json'}, function(data) {
      if (!data) {
        mainCard.body('[!] Something went wrong.');
      } else {
        for (var i = data.entries.length-1; i >= 0; i--) {
          if (data.entries.length - i > 15) break; //prevent too many messages
          var entry = data.entries[i];
          if (!entry.pinned && entry.id > lastShownId) {
            addCard(entry);
          }
        }
        lastShownId = data.entries[data.entries.length-1].id;
      
        mainCard.body('Press select to refresh.');
      }
    });
  };

  mainCard.on('click', 'select', refreshData);
  mainCard.show();

  refreshData();
}

main();