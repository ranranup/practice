var timeoutid;
$(document).ready(function () {
    $("#tabFirst li").each(function (index) {
        var liNode = $(this);
        $(this).mouseover(function () {
            timeoutid = setTimeout(function () {
                $("div.content").removeClass("content");
                $("#tabFirst li.tabin").removeClass("tabin");
                $("div").eq(index).addClass("content");
                liNode.addClass("tabin");
            }, 300);
        }).mouseout(function () {
            clearTimeout(timeoutid);
        })
    });

    $("#realContent").load("myTab1.html");
    $("#tabSecond li").each(function (index) {
        $(this).click(function () {
            $("#tabSecond li.tabin").removeClass("tabin");
            $(this).addClass("tabin");
            if (index == 0) {
                $("#realContent").load("myTab1.html");
            } else if (index == 1) {
                $("#realContent").load("myTab2.html");
            } else if (index == 2) {
                $("#realContent").load("myTab3.html");
            }
        })
    })
})