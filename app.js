var app = new Mn.Application();

app.on('before:start', function(options){
	options.startMessage = "My app is starting";
});

// This will start backbone history to navigate back and forth
app.on('start', function(options) {
	console.log(options.startMessage);
  Backbone.history.start();
});

$(document).ready(function() {
	app.start(); // options passed here will be availble in all initializer functions and initialize methods
});