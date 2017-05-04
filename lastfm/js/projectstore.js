// ProjectStore definition.
function ProjectStore(){
  riot.observable(this); // Riot provides our event emitter

  // Fixing the scope problem.
  var self = this;
  // Initializing the list.
  self.json = {};
  self.favorites = [];
  self.filtered =[];
  self.list = [];





  var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        callback(null, xhr.response);
      } else {
        callback(status);
      }
    };
    xhr.send();
  };




  self.on('project_init', function() {

    /**
    *
    */
    getJSON('http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=chriskinch&api_key=8a1051b163165029d6dcaed68752152a&format=json',
    function(err, data) {
      if (err != null) {
        alert('Something went wrong: ' + err);
        console.log('json load error');
      } else {
        self.json = data;
        self.trigger('project_changed',self);
      }
    });
  });

  /**
  *
  */
  self.on('favorite_add',function(item){
    if(!isItemFavorite(item)){
      self.favorites.push(item);
    }
    self.trigger('favorites_update',self.favorites);
  });

  /**
  *
  */
  self.on('favorite_remove',function(item){
    for (var i in this.favorites) {
      if (this.favorites[i].name == item.name) {
        this.favorites.splice(item, 1);
        self.trigger('favorites_update',this.favorites);
      }
    }
  });

  self.on('search_band',function(queryText){
    var artistList = self.json.topartists.artist;

    // console.log(self.json.topartists.artist);
    console.log(queryText);
    // console.log(self.filtered);

    // self.filtered = artistList.filter(function(word){
      var subArray= [];
          for (var i = 0; i < artistList.length; i++){
                    var bandName = artistList[i].name.toLowerCase();

                    if(bandName.startsWith( queryText.toLowerCase() ) ){
                      subArray.push(artistList[i]);
                    }

          }
          console.log(subArray);
          self.filtered = subArray;

          self.trigger('project_changed',self);


    // }


        // function(el){
        //     for (var i = 0; i < artistList.length; i++){
        //         // console.log("i is " + i);
        //
        //         if(str.includes(queryText)){
        //           // self.filtered.push(artistList[i]);
        //           console.log(artistList[i].name);
        //
        //           return true;
        //         }
        //         // if(artistList[i].name)
        //         //  for (var j in artistList){
        //         //     console.log("Passed Filter j " + self.filtered[j]);
        //         //     console.log("Passed Array  i " + self.json[i][1]);
        //         //     console.log("String Search " + self.json[i][1].search(self.filtered[j]));
        //         //
        //         //     // if (self.json[i][1].search(self.filtered[j]) != -1){
        //         //     //     return true;
        //         //     // }
        //         // }
        //     }
        //      return false;
        // }


     //.);




  });

  /**
  * Look for the item in the favorite array.
  */
  function isItemFavorite(item){
    for (var i=0; i < self.favorites.length; i++) {
      if (self.favorites[i].name === item.name) {
        return true;
      }
    }
  }



};
