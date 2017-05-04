<project>


  <div id="project-list">

    <!-- <ul>
       <li json.topartists.artist.filter(whatShow)></li>
    </ul> -->
    <article each={ item in json.topartists.artist}>
      <h4><a href= {item.url} >{item.name}</a></h4>
      <div class="article-content">
        <img src={item.image[2]['#text']}/>
      </div>
      <button onclick={addToFav.bind(item)} class="fav"><i  class="fa fa-star" aria-hidden="true"></i></button>

    </article>
  </div>







  <script>

  var self = this;
  // Mounting of the tag.
  self.on('mount', function() {
    RiotControl.trigger('project_init');
  });

  // Communication with the store
  RiotControl.on('project_changed', function() {
    self.json = this.json;
    self.update();
  });

  // Helper functions
  addToFav(item) {
    RiotControl.trigger('favorite_add', item.item.item);
  }
  remove(e) {
    RiotControl.trigger('favorite_remove');
  }

  </script>







</project>
