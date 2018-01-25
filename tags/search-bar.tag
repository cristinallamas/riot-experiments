<search-bar>


  <form id="search-form" >
    <input class="search-input" type="text" onkeyup={submitQuery} placeholder="Filter by band name" />
  </form>


<script>
  var self = this;


  submitQuery(e){
    var text = e.currentTarget.value;
    RiotControl.trigger('search_band', text);

  }


</script>


</search-bar>
