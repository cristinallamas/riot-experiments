<favorites>
  <h3>Your favorite list {empty}</h3>
  <ul>
    <li each={item in favorites}>
      {item.name}<button onclick={unFav.bind(item)} > X</button>
    </li>

  </ul>

  <script>

  var self = this;

  RiotControl.on('favorites_update', function(favorites) {
    self.favorites = favorites;
    self.update();
  });


  unFav(item){
    RiotControl.trigger('favorite_remove', item.item.item);
  }
  </script>
</favorites>
