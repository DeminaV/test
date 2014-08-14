$(document).ready(function() {
	var main = $(".b-main"),
		iconMenu = $(".b-icon_type_menu"),
		iconMenuHide = $(".b-icon_type_menu-hide");
		iconMenu.click(function() {
			main.width(main.width());
			main.css("margin-left", 200);
			iconMenuHide.stop().fadeIn();
		});
		iconMenuHide.click( function() {
			main.css("margin-left", 0);
			iconMenuHide.stop().fadeOut();
		});
	$(window).resize(function() {
		if($(window).width() > 500) {
			main.width("auto");
			main.css("margin-left", 0);
			iconMenuHide.stop().fadeOut();
		}
	});
});