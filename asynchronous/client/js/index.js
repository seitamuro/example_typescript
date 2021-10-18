console.log("index.js was loaded.");

$(document).ready(function() {
    $("#submit").on("click", function(event){
        event.preventDefault();

        $form = $(this).parents("form:first");
        $.ajax({
            url: $form.attr("action"),
            type: $form.attr("method"),
            data: $form.serialize(),
            timeout: 10000,
        })
        .done(function(data) {
            var data = data.split("|");
            var name = data[0];
            var text = data[1];

            $("div#name").html(name);
            $("div#text").html(text);
        })
        .fail(function() {
            console.log("failed to ajax...");
        })
    });
});
