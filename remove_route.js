module.exports = {
  remove_route: function(app, target_route) {
    var routes = app._router.stack;
    routes.forEach(function removeRoute(route, i , routes){
      if (route.route != undefined){
        if (route.route.path === target_route) {
	  routes.splice(i,1);
	}
      }
    });
  }
};
