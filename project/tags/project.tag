<project>

  <article>
    <h4>Static Title</h4>
    <div class="article-content">
      <p>Test article content</p>
    </div>
  </article>


  <article each={ item in items}>
    <h4>{item.title}</h4>
    <div class="article-content">
      <p>{item.body}</p>
    </div>
  </article>



  <script>

    var self = this;
    self.on('mount', function() {
      // Trigger init event when component is mounted to page.
      // Any store could respond to this.
      RiotControl.trigger('project_init');
    });


    // Register a listener for store change events.
    RiotControl.on('project_changed', function(items) {
      self.items = items;
      console.log('Updated!');
      self.update();
    });

  </script>

</project>
