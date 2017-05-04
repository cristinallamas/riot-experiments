<search-bar>


  <form id="search-form" >
    <label>Search:</label>
    <input class="search-input" type="text" onkeyup={submitQuery} placeholder="Search for bands.." />
    <button> Search </button>
  </form>


<script>
  var self = this;


  submitQuery(e){
    var text = e.currentTarget.value;
    RiotControl.trigger('search_band', text);

  }


</script>


</search-bar>
