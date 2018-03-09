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
      const util = require('util');
      const exec = util.promisify(require('child_process').exec);
      async function ls() {
        const { stdout, stderr } = await exec(
		'mkdir ./html/' + input + ' && cd ./html/' + input + ' && httrack --footer "" ' + input);
	console.log('stdout:',stdout);
	console.log('stderr:',stderr);
      }
      ls();
    });
  }
};
