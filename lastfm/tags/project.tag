<project>


  <!--  {JSON.stringify(json.topartists.artist[0])}-->
  <!-- {JSON.stringify(json.topartists.artist[0].image[0]['#text'])}-->
  <div id="project-list">
    <article each={ item in json.topartists.artist}>
      <h4><a href= {item.url} >{item.name}</a></h4>
      <button onclick={addToFav.bind(item)} class="fav"><i  class="fa fa-star-o" aria-hidden="true"></i></button>
      <div class="article-content">
        <!--  <span>Playcount: {item.playcount } </span>-->
        <a href= {item.url} ><img src={item.image[2]['#text']}/></a>
      </div>
    </article>
  </div>

  <script>

  var self = this;
  self.on('mount', function() {
    RiotControl.trigger('project_init');
  });


  RiotControl.on('project_changed', function() {
    self.json = this.json;
    self.update();
  });

  addToFav(item) {
    RiotControl.trigger('favorite_add', item.item.item);
  }
  remove(e) {
    RiotControl.trigger('favorite_remove');
  }

  </script>

</project>
