$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newDevoured = $(this).data("newdevoured");
  
      var newDevouredState = {
        devoured: newDevoured
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed sleep to", newDevoured);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBuns = {
        burger_name: $("#ca").val().trim(),
        // devoured: false
      };
        console.log(newBuns)
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBuns
      }).then(
        function() {
          console.log("created new burger!");
          location.reload();
        }
      );
    });

  });