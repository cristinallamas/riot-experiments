<music>






  <h3>Album Collection</h3>

<ul if={music && music.collections}>
  <!--{JSON.stringify(music.collections)}-->
    <li each={ collection in music.collections } > {collection.band}
      <ul>
        <li each={album in collection.albums}> <a>{album.title}</a></li>
      </ul>
    </li>
</ul>



  <script>
  this.collections = opts.collections;

  function loadJSON(file, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(xobj.responseText);
      }
    };
    xobj.send(null);
  }

    var load = function() {

    loadJSON("music.json", function(response) {
      this.music = JSON.parse(response);
      this.update();
    }.bind(this));
  }.bind(this);

  edit(e) {
    this.text = e.target.value
  }

  add(e) {
    if (this.text) {
      this.items.push({ title: this.text })
      this.text = this.refs.input.value = ''
    }
    e.preventDefault()
  }


  this.on('mount', function() {
    load();
  });



  </script>



</music>
