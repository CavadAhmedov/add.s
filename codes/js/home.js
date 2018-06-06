$(function(){

$("#openBtn").click(function(){
	$("#navbar").removeClass("resize")
	$("#navbar").addClass("grow")
	$("#openBtn").css("display","none")
	$("#closeBtn").css("display","block")
	$("#navbar span").addClass("moveright")
	$("#navbar span").removeClass("moveleft")
	$(".open").css("justify-content","flex-start")
})

$("#closeBtn").click(function(){
	$("#navbar").removeClass("grow")
	$("#navbar").addClass("resize")
	$("#openBtn").css("display","block")
	$("#closeBtn").css("display","none")
	$("#navbar span").removeClass("moveright")
	$("#navbar span").addClass("moveleft")
})
$("textarea").click(function(){
	$(".questionOperations").css("display","block")
})



var textarea = document.querySelector('#question');

textarea.addEventListener('keydown', autosize);
             
function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    // for box-sizing other than "content-box" use:
    // el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}




});