riot.tag2('favorites', '<h3>Your favorite list {empty}</h3><ul><li each="{item in favorites}"> {item.name}<button onclick="{unFav.bind(item)}"> X</button></li></ul>', '', '', function(opts) {

  var self = this;

  RiotControl.on('favorites_update', function(favorites) {
    self.favorites = favorites;
    self.update();
  });

  this.unFav = function(item){
    RiotControl.trigger('favorite_remove', item.item.item);
  }.bind(this);
});

riot.tag2('project', '<div id="project-list"><article each="{item in list}"><h4><a href="{item.url}">{item.name}</a></h4><div class="article-content"><img riot-src="{item.image[2][\'#text\']}"></div><button onclick="{addToFav.bind(item)}" class="fav"><i class="fa fa-star" aria-hidden="true"></i></button></article></div>', '', '', function(opts) {

  var self = this;

  self.on('mount', function() {
    RiotControl.trigger('project_init');
  });

  RiotControl.on('project_changed', function() {
    self.json = this.json;
    self.filtered = this.filtered;
    if(self.filtered.length){
      self.list = self.filtered;
    }
    else{
      self.list = self.json.topartists.artist;
    }
    self.update();
  });

  this.addToFav = function(item) {
    RiotControl.trigger('favorite_add', item.item.item);
  }.bind(this);
  this.remove = function(e) {
    RiotControl.trigger('favorite_remove');
  }.bind(this);

});

riot.tag2('search-bar', '<form id="search-form"><input class="search-input" type="text" onkeyup="{submitQuery}" placeholder="Filter by band name"></form>', '', '', function(opts) {
  var self = this;

  this.submitQuery = function(e){
    var text = e.currentTarget.value;
    RiotControl.trigger('search_band', text);

  }.bind(this);

});
