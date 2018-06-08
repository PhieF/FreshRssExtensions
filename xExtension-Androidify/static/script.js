jQuery(function ($) {

    var width = $(window).width();
    if (width <= 768) {
        document.getElementsByClassName('configure-feeds')[0].classList.remove('no-mobile')
        var el = document.getElementsByClassName('toggle_aside')[1];
        el.parentNode.removeChild(el);
        $('.nav-login').prepend(el);
        $(".nav-login").append('<a id="menubutton" class="btn" title="Suche"><img class="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAJxJREFUaN7t1kEKgzAURdFL11HHrr1F6LiD7qgt6AZ0YDqRIAZSk8A98EcZ5H1I4IEkSfl1wABMYR5AXzpUSvgPMG/mG86qN0TC/+ZeOtwR084CY+7LLicvN7ewwGvn7PmH+7LrWT/s9vm8gWvpcEd1rB92DHNrKbwku1BZdqEUdqEIu1AN7EJS4+xCJdmFUtiFIuxCNbALSZJOsQDsRm5EOayTowAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0wN1QxOToxNjozMyswMDowMMpy084AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMDdUMTk6MTY6MzMrMDA6MDC7L2tyAAAAKHRFWHRzdmc6YmFzZS11cmkAZmlsZTovLy90bXAvbWFnaWNrLU1ZekNIakls5jWX8gAAAABJRU5ErkJggg==" alt="🔍"></a>');
        $("#menubutton").on('click', function () {
            $(".nav_menu").slideToggle();
        });
        $(".nav_menu").hide();
        // $('head').append('<link rel="manifest" href="data:application/json;base64,ew0KICAiYmFja2dyb3VuZF9jb2xvciI6ICJwdXJwbGUiLA0KICAiZGVzY3JpcHRpb24iOiAiU2hvd3MgcmFuZG9tIGZveCBwaWN0dXJlcy4gSGV5LCBhdCBsZWFzdCBpdCBpc24ndCBjYXRzLiIsDQogICJkaXNwbGF5IjogImZ1bGxzY3JlZW4iLA0KICAiaWNvbnMiOiBbDQogICAgew0KICAgICAgInNyYyI6ICJpY29uL2ZveC1pY29uLnBuZyIsDQogICAgICAic2l6ZXMiOiAiMTkyeDE5MiIsDQogICAgICAidHlwZSI6ICJpbWFnZS9wbmciDQogICAgfQ0KICBdLA0KICAibmFtZSI6ICJBd2Vzb21lIGZveCBwaWN0dXJlcyIsDQogICJzaG9ydF9uYW1lIjogIkZveGVzIiwNCiAgInN0YXJ0X3VybCI6ICIvcHdhLWV4YW1wbGVzL2EyaHMvaW5kZXguaHRtbCINCn0=" />');
        $('head').append('<link rel="manifest" href="/manifest.json" />');

    }

});
