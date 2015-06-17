// JavaScript Document
$(function(){
	$(".answer").hide();
	$(".right").click(function(){
		if ($(this).hasClass("right")){
		$('.incorrect').hide();		
		$(this).parent().find(".answer").slideDown();
		$(this).parent().find(".wrong").removeClass("wrong");
		$(this).css("color","green").removeClass("right");
		}
	});
	$(".wrong").click(function(){
		if ($(this).hasClass("wrong")){
		$('.incorrect').hide();
		$(this).css("color","red").removeClass("wrong").after("<div class='incorrect'>Try again.</div>");
		}
	});
});
