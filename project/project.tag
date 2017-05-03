<project>

  <article>
    <h4>Article Title</h4>
    <div class="article-content">
      <p>Test article content</p>
    </div>
  </article>


  <script>

    var self = this;
    self.on('mount', function() {
      // Trigger init event when component is mounted to page.
      // Any store could respond to this.
      RiotControl.trigger('project_init');
    })


    // Register a listener for store change events.
    RiotControl.on('project_changed', function(variable_to_pass) {
      self.variable_to_pass = variable_to_pass;
      console.log('Updated!');
      self.update();
    })

  </script>

</project>
