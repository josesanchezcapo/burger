$(function() {
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");

    var eaten = {
      devoured: true
      
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eaten
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burg").val().trim()
    };

    // POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Inserted new Burger");

        // show updated list by by reloading page
        location.reload();

      }

    );

  });

});
