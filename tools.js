const ui = require('./user_interface')

module.exports = {
   clone_a_website: function(){
     ui.prompt("Target URL: ", function(input) {
       console.log(input);
     });
   }
};
