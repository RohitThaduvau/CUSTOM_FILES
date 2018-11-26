

var titleText = new SplitText(".wrapper h1", {type:"chars"}),
    numTitleChars = titleText.chars.length,
    redboxes = $(".boxes div");
    tl = new TimelineMax();//{delay:0.5, repeat:3}

TweenLite.set(".wrapper", {visibility:"visible"});

tl.staggerFrom(titleText.chars, 0.8, {ease:Back.easeOut, x:100, cycle:{y:curve}, opacity:0}, 0.02)
//   .staggerTo(titleText.chars, 0.8, {ease:Back.easeOut, cycle:{y:[100, -100], rotation:[-120, 120]}, opacity:0}, 0.03, "+=1")
  .staggerFrom(redboxes, 0.5, {
    opacity: 0,
    ease:Back.easeOut,
    cycle:{
        rotationX:[-90, 90],
        x:function(i){
            return (i + 1) * 100;
        },
        ease:function(i){
            return Back.easeOut.config(i * 2);
        }

    } 
  }, 0.2);

//position starting y of each letter on a cos curve;
function curve(i){
    var n = i / numTitleChars * 6.24;
    return  (Math.cos(n)) * -200;
}

$(".redbox").click(function(){
    
    $(this).css("background-color", "yellow");
    $(this).css("color", "gray");

    t2 = new TimelineMax();
    t2.staggerTo(titleText.chars, 0.5, {ease:Back.easeOut, cycle:{y:[100, -100], rotation:[-120, 120]}, opacity:0}, 0.03, "+=1")
      .staggerTo(redboxes, 0.5, {ease:Back.easeOut, 
        cycle:{
        y:[300, -300], 
        //rotation:[-120, 120]
    }, opacity:0}, 0.03, "+=1");
});

t1.timeScale(3);


