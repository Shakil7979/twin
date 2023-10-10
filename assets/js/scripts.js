$(document).ready(function () {
    $(".testi_owl").owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        items: 3,
        margin: 40,
        responsive : { 
            0 : {
                items: 1,
            }, 
            480 : {
                items: 1,
            }, 
            768 : {
                items: 3,
            }
        }
    });


    // script for popup 

    $('.weldone').show();
    $('.popup_overlay').show();

    $(document).on('click', '.yeah_sure', function () {
        $('.dashboard_popup').show();
        $('.popup_overlay').show();
        $('.weldone').hide();

        return false;
    });

    $(document).on('click', '.close_popup a', function () {
        $('.dashboard_popup').hide();
        $('.popup_overlay').hide();
        return false;
    });

    $(document).on('click', '.btn_not_now', function () {
        $('.weldone').hide();
        $('.popup_overlay').hide();
        return false;
    });

    $(document).on('click', '.popup_overlay', function () {
        $('.weldone').hide();
        $(this).hide();
        $('.dashboard_popup').hide();
        return false;
    });


    // chat box script  
    $(document).on('click', '.banner_chat', function () {
        $('.chat_area').show();
        return false;
    });
    $(document).on('click', '.chat_close', function () {
        $('.chat_area').hide();
        return false;
    });

    // Mobile menu script 
    $(document).on('click', '.mobile_bars', function () {
        $('.mobile_menus').slideToggle();
        return false;
    });
})





// celender script 

$(function () { function c() { p(); var e = h(); var r = 0; var u = false; l.empty(); while (!u) { if (s[r] == e[0].weekday) { u = true } else { l.append('<div class="blank"></div>'); r++ } } for (var c = 0; c < 42 - r; c++) { if (c >= e.length) { l.append('<div class="blank"></div>') } else { var v = e[c].day; var m = g(new Date(t, n - 1, v)) ? '<div class="today">' : "<div>"; l.append(m + "" + v + "</div>") } } var y = o[n - 1]; a.css("background-color", y).find("h1").text(i[n - 1] + " " + t); f.find("div").css("color", y); l.find(".today").css("background-color", y); d() } function h() { var e = []; for (var r = 1; r < v(t, n) + 1; r++) { e.push({ day: r, weekday: s[m(t, n, r)] }) } return e } function p() { f.empty(); for (var e = 0; e < 7; e++) { f.append("<div>" + s[e].substring(0, 3) + "</div>") } } function d() { var t; var n = $("#calendar").css("width", e + "px"); n.find(t = "#calendar_weekdays, #calendar_content").css("width", e + "px").find("div").css({ width: e / 7 + "px", height: e / 7 + "px", "line-height": e / 7 + "px" }); n.find("#calendar_header").css({ height: e * (1 / 7) + "px" }).find('i[class^="icon-chevron"]').css("line-height", e * (1 / 7) + "px") } function v(e, t) { return (new Date(e, t, 0)).getDate() } function m(e, t, n) { return (new Date(e, t - 1, n)).getDay() } function g(e) { return y(new Date) == y(e) } function y(e) { return e.getFullYear() + "/" + (e.getMonth() + 1) + "/" + e.getDate() } function b() { var e = new Date; t = e.getFullYear(); n = e.getMonth() + 1 } var e = 480; var t = 2013; var n = 9; var r = []; var i = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]; var s = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; var o = ["#16a085", "#1abc9c", "#c0392b", "#27ae60", "#FF6860", "#f39c12", "#f1c40f", "#e67e22", "#2ecc71", "#e74c3c", "#d35400", "#2c3e50"]; var u = $("#calendar"); var a = u.find("#calendar_header"); var f = u.find("#calendar_weekdays"); var l = u.find("#calendar_content"); b(); c(); a.find('i[class^="icon-chevron"]').on("click", function () { var e = $(this); var r = function (e) { n = e == "next" ? n + 1 : n - 1; if (n < 1) { n = 12; t-- } else if (n > 12) { n = 1; t++ } c() }; if (e.attr("class").indexOf("left") != -1) { r("previous") } else { r("next") } }) })