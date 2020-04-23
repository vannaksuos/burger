// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-devour").on("click", function (event) {
        var id = $(this).data("id");
        var newBurger = $(this).data("burgerDevoured");

        var burgerDevouredState = {
            devoured: newBurger
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerDevouredState
        }).then(
            function () {
                console.log("changed devoured to", burgerDevouredState);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $("$submitBtn").on("click", function (event) {
        event.preventDefault();

        const burgerData = {
            burger_name: $("#burger").val().trim(),
        };
    });

    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: burgerData
    }).then(
        function () {
            console.log("created new burgers");
            // Reload the page to get the updated list
            location.reload();
        }
    );
});

$(".delete-burgers").on("click", function (event) {
var id = $(this).data("id");

// Send the DELETE request.
$.ajax("/api/burgers/" + id, {
    type: "DELETE"
}).then(
    function () {
        console.log("deleted burgers", id);
        // Reload the page to get the updated list
        location.reload();
    }
);
});
