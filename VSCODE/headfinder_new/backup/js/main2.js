
var tl = new TimelineLite();

tl.to($("#mylogo"), 2, {left:"80%", backgroundColor:"white", padding:2, ease:Elastic.easeOut, rotation:360, scale:2});
tl.to($("#puck"), 0.5, {opacity:50, rotate:720, scale:0, y:500, x:500}, "-=0.10");
tl.from($(".text-box"), 0.5, {opacity:0, scale:0, y:500, x:500});
tl.staggerFrom($(".box"), 0.5, {ease:Elastic.easeOut, opacity:0, y:500}, 0.2);
tl.to($(".box"), 0.5, {fontWeight:"bold"}, 0.2);

tl.timeScale(0.5);

/* --- Control playback methods --- */

$("#play").click(function() {
		tl.play();
});
		
$("#pause").click(function() {
		tl.pause();
});
		
$("#reverse").click(function() {
		tl.reverse();
});
		
$("#resume").click(function() {
		tl.resume();	
});

$("#stagger").click(function() {
		tl.play("stagger");	
});
		
$("#restart").click(function() {
		tl.restart();
});

//when the timeline updates, call the updateSlider function
tl.eventCallback("onUpdate", updateSlider);
	
$("#slider").slider({
  range: false,
  min: 0,
  max: 100,
  step:.1,
  slide: function ( event, ui ) {
    tl.pause();
    //adjust the timeline's progress() based on slider value
    tl.progress( ui.value/100 );
    }
});	
		
function updateSlider() {
  $("#slider").slider("value", tl.progress() *100);
} 	

tl.progress(1)
