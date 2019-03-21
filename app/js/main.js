//мобильное меню
$(function () {
    var openMenu = $('.open-menu')
        menu = $('.menu');
    openMenu.click(function (e) {
        if (menu.css('display') !== 'block') {
            openMenu.addClass('transform')
            menu.slideDown(500);
            var yourClick = true;
            $(document).bind('click.myEvent', function (e) {
                if (!yourClick && $(e.target).closest(menu).length === 0) {
                    menu.slideUp(500);
                    openMenu.removeClass('transform')
                    $(document).unbind('click.myEvent');
                }
                yourClick = false;
            });
        }
        e.preventDefault();
    });
});
//кнопка список услуг
$(function () {
    var openList = $('.list__headline')
        listMenu= $('.list__nav');
    openList.click(function (e) {
        if (listMenu.css('display') !== 'block') {
            openList.addClass('open-list')
            listMenu.slideDown(500);
            var yourClick = true;
            $(document).bind('click.myEvent', function (e) {
                if (!yourClick && $(e.target).closest(listMenu).length === 0) {
                    listMenu.slideUp(500);
                    openList.removeClass('open-list')
                    $(document).unbind('click.myEvent');
                }
                yourClick = false;
            });
        }
        e.preventDefault();
    });
});
// раскрытие блоков услуг
$(function () {
    var header = $('.services__header')
        info = $('.services__info')
    if (info.css('display') !== 'block') {
        info.hide()
        header.click(function(){
            $(this).next().slideToggle("slow");
            $(this).children('.services__header_after').toggleClass('open-list')
        })
    }
})
// обновление страницы при изменении размера экрана
$(window).resize(function(){
    window.setTimeout('location.reload()', 500);
});

