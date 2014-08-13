$(document).ready(function() {
	var menu = $(".b-header .b-menu"),
		iconMenu = $(".b-icon_type_menu"),
		iconMenuHide = $(".b-icon_type_menu-hide");
		iconMenu.click(function() {
			menu.css("left", 0);
			iconMenuHide.stop().fadeIn();
		});
		iconMenuHide.click(function() {
			menu.css("left", -200);
			iconMenuHide.stop().fadeOut();
		});
	$(window).resize(function() {
		if($(window).width() > 500) 
			menu.css("left", -200);
			iconMenuHide.stop().fadeOut();
	});
});