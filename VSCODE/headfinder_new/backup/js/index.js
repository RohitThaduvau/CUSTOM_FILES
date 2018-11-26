/*
GSAP JS Demo
https://www.greensock.com/gsap-js/
Animation and Bezier motion: 
https://cdnjs.cloudflare.com/ajax/libs/gsap/1.9.2/TweenMax.min.js

Canvas help provided by KineticJS: 
https://cdnjs.cloudflare.com/ajax/libs/kineticjs/4.3.1/kinetic.min.js

Best in Chrome / Safari
*/

var appHeight = 400,
    appWidth = 840,
    appCenterX = appWidth/2,
    appCenterY = appHeight/2,
    stage = new Kinetic.Stage({
       container: 'container',
       width: appWidth,
       height:appHeight
     }),
    layer = new Kinetic.Layer(),
    bugFile = new Image(),
    tl;

stage.add(layer);
bugFile.src = "https://www.greensock.com/_img/codepen/bezierCreature/creature.png";

function getAnimation() {
  var creature = new Kinetic.Image({
    image: bugFile,
    width:27,
    height:29,
    x:-50
  });

  //bezier magic provided by GSAP BezierPlugin (included with TweenMax)
  //https://api.greensock.com/js/com/greensock/plugins/BezierPlugin.html
  var bezTween = new TweenMax(creature, 6, {
    bezier:{
      type:"soft", 
      values:[{setX:150, setY:300}, {setX:300, setY:-10}, {setX:500 + Math.random() *100, setY:320*Math.random() + 50}, {setX:650, setY:320*Math.random() + 50}, {setX:900, setY:-80}], 
      //autoRotate needs to know how to adjust x/y/rotation so we pass in the names of the apporpriate KineticJS methods
autoRotate:["setX","setY","setRotationDeg"]
    }, 
    ease:Linear.easeNone, autoCSS:false});
  
  layer.add(creature); 
  
  return bezTween;
  
}

//create a bunch of Bezier tweens and add them to a timeline
function buildTimeline() {
  tl = new TimelineMax({repeat:4, onUpdate:updateSlider, delay:1});
  for (i = 0 ; i< 30; i++){
    //start creature animation every 0.12 seconds
  tl.add(getAnimation(), i * 0.17);
  }
}

function redraw(){
  layer.draw();
}


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


$("#slider, .ui-slider-handle").mousedown(function() {
  $('html, #slider, .ui-slider-handle').one("mouseup", function(e){
    tl.resume();
  });
});















//redraw layer each time a tick event fires
TweenLite.ticker.addEventListener("tick", redraw);
buildTimeline();