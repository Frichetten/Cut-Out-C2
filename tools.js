const ui = require('./user_interface')
const fs = require('fs');

module.exports = {
  choose_a_website: function( callback ) {
    // List available options
    fs.readdir('./html/', (err, files) => {
      val = 1;
      dict = {};
      files.forEach(file => {
        console.log('('+val+')'+file);
	dict[val] = file;
	val += 1;
      });
      ui.prompt("Select A Website>> ", function(input) {
        callback(dict[input]);
      });
    });
  },

  clone_a_website: function(){
    ui.prompt("Target URL: ", function(input) {
      console.log("This will take a while, please wait");
      const { spawn } = require('child_process');
      const child = spawn(
        'mkdir ./html/'+input+' && cd ./html/'+input+' && httrack ' + input,
	{ shell: true });

      child.on('exit',function(exitCode) {
        console.log("All Done. In directory ./html/"+input);
      });
    });
  }
};
