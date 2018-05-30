$(document).ready(function () {
    /*導覽列滑動Fixed*/
    $(window).scroll(function () {
        if ($(window).scrollTop() > 70) {
            $('body').addClass('fillNav');
            $('#navarea').addClass('show-animate');
            $('#back-to-top').addClass('show');
        } else {
            $('body').removeClass('fillNav');
            $('#navarea').removeClass('show-animate');
            $('#back-to-top').removeClass('show');
        }
    });
    /* 回到頂端動畫 */
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });
    /* 遮罩&禁止視窗滾動 */
    $(".navshow").on("click", function () {
        $(".overlay").show();
        $("body").addClass("windowband");
    });
    $(".navclose").on("click", function () {
        $(".overlay").hide();
        $("body").removeClass("windowband");
    });
    /* 遮罩關閉選單 */
    $(".overlay").on("click", function () {
        if ($("#left-side-item.show").length > 0) {
            $("button#close-left-menu").click();
        }
    });
    /*連結轉跳*/
    $('#logo').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
    $('#about-click').click(function (e) {
        var barH = $("#navarea").height();
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#about').offset().top - barH
        }, 1000);
    });
    $('#experience-click').click(function (e) {
        var barH = $("#navarea").height();
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#experience').offset().top - barH
        }, 1000);
    });
    $('#skill-click').click(function (e) {
        var barH = $("#navarea").height();
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#skill').offset().top - barH
        }, 1000);
    });
    $('#workcollection-click').click(function (e) {
        var barH = $("#navarea").height();
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#workcollection').offset().top - barH
        }, 1000);
    });
});
