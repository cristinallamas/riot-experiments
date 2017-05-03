// ProjectStore definition.
function ProjectStore(){
 riot.observable(this); // Riot provides our event emitter

 // Fixing the scope problem.
 var self = this;
 // Initializing the list.
 self.items = [
   {title:'article title 1', body:'body of the article number 1'},
   {title:'article title 2', body:'body of the article number 2'},
   {title:'article title 3', body:'body of the article number 3'}
 ];


 // Inital event for my project_init
 // Calls the event update on start.
 self.on('project_init', function() {
   self.trigger('project_changed',self.items);
 });
};
