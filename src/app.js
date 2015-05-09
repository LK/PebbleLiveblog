/*
Liveblog Tracking App for Pebble Watch
Original code by Lenny Khazan (github.com/LK)
Updated by Thomas Suarez (github.com/tomthecarrot)
*/

// Liveblog Configuration
var conf = {
  LIVEBLOG_URL: 'http://live.theverge.com/google-io-2014-keynote-liveblog/live.json',
  LIVEBLOG_NAME: 'Google IO 2014',
  REFRESH_INTERVAL: 30 /* seconds */
};

// Import required libraries
var UI = require('ui');
var ajax = require('ajax');

var HTML5Entities = require('html5-entities.js');
var Html5Entities = new HTML5Entities();

// Main UI Card
var mainCard = new UI.Card({
  title: conf.LIVEBLOG_NAME + ' Liveblog',
  subtitle: 'theverge.com',
  body: 'Press select to refresh.'
});

// Add a new UI Card for latest liveblog update
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

// ID of the last shown 
var lastShownId = -1;

// Refresh liveblog updates/data
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

// Show Main UI Card
mainCard.on('click', 'select', refreshData);
mainCard.show();

refreshData();