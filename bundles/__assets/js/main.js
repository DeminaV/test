$(document).ready(function() {
	var menu = $(".b-header .b-menu"),
		logo = $(".b-menu .b-logo"),
		main = $(".b-main"),
		iconMenu = $(".b-icon_type_menu"),
		iconMenuHide = $(".b-icon_type_menu-hide");

	iconMenu.click(function() {
		main.width(main.width());
		main.css("margin-left", main.width());
		menu.addClass("visible");
		iconMenuHide.stop().fadeIn(function() {
			logo.css("opacity", 1);
		});
	});

	var menuHide = function() {
		menu.removeClass("visible");
		main.css("margin-left", 0);
		iconMenuHide.stop().fadeOut(function() {
			logo.css("opacity", 0);
		});
	}

	iconMenuHide.click( function() {
		menuHide();
	});

	$(window).resize(function() {
		var width = $(window).width();
		if(menu.hasClass("visible")) {
			main.css("margin-left", main.width());
		}
		if(width > 320) {
			main.width("auto");
			menuHide();
		}
	});
});