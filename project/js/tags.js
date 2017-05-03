riot.tag2('project', '<article><h4>Static Title</h4><div class="article-content"><p>Test article content</p></div></article><article each="{item in items}"><h4>{item.title}</h4><div class="article-content"><p>{item.body}</p></div></article>', '', '', function(opts) {

    var self = this;
    self.on('mount', function() {

      RiotControl.trigger('project_init');
    });

    RiotControl.on('project_changed', function(items) {
      self.items = items;
      console.log('Updated!');
      self.update();
    });

});

