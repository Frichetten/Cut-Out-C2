const ui = require('./user_interface')

module.exports = {
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
