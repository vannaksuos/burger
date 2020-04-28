// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-devour").on("click", function (event) {
        var id = $(this).data("id");
        var newBurger = $(this).data("burgerDevoured");

        var burgerDevouredState = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerDevouredState
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $("#addBurger").on("click", function (event) {
        event.preventDefault();

        const burgerData = {
            burger_name: $(".burgerInput").val().trim(),
        };

    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: burgerData
    }).then(
        function () {
            // Reload the page to get the updated list
            location.reload();
        }
    );
});
})