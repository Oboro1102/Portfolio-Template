$(document).ready(function () {

    /*導覽列滑動Fixed*/
    $(window).bind("scroll load", function () {
        if ($(this).scrollTop() > 0) {
            $('#navarea').addClass('show-animate');
            $('#back-to-top').show("fade", 300);
        } else {
            $('#navarea').removeClass('show-animate');
            $('#back-to-top').hide();
        };
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
        $("button#close-left-menu").click();
    });

    /* 回到頂端動畫 */
    $('#back-to-top,#logo').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });

    /*連結轉跳*/
    $('.smooth_hash').on("click", function () {
        if ($("#navarea").hasClass("show-animate")) {
            $('html,body').animate({
                scrollTop: $($(this).attr("href")).offset().top - 49
            }, 500);
        } else {
            $('html,body').animate({
                scrollTop: $($(this).attr("href")).offset().top - 119
            }, 500);
        };
    });

});
