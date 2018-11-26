TweenMax.to($("#mylogo"), 2, {
    left:"80%", 
    ease:Elastic.easeOut, 
    rotation:360, 
    scale:2,
    backgroundColor:"white",
    padding:2,
    borderColor:"white",
    borderRadius:2
});
TweenMax.to($("#puck"), 0.5, {
    opacity:0,
    scale:0,
    y:500,
    x:500,
    delay:0.5
});

TweenMax.staggerFrom($(",box"), 0.5, {
    opacity:0,
    y:500,
    delay:0.5
}, 0.2);
