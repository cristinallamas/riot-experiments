// ProjectStore definition.
function ProjectStore(){
 riot.observable(this); // Riot provides our event emitter

 // Fixing the scope problem.
 var self = this;
 // Initializing the list.
 self.list = [];



 // Inital event for my project_init
 // Calls the event update on start.
 self.on('project_init', function() {
   self.trigger('project_changed',self.list);
 });
};
