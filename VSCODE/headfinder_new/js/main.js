

// var titleText = new SplitText(".wrapper h1", {type:"chars"}),
//     numTitleChars = titleText.chars.length,
var redboxes = $(".boxes div");
    //{delay:0.5, repeat:3}

var short_long = '';

var sticks = [];
sticks["centrik"] = 0;
sticks["havok"] = 0;
sticks["kinetik"] = 0;
sticks["optik"] = 0;
sticks["tactik"] = 0;
sticks["tank"] = 0;

var path = window.location.href;



$.get(path + "/steps/opening.html", function(data) {
    $("#holder").html(data);
    slidein();
});
//
$(document).on("click", ".boxes div", function(){

    $(this).css({"box-shadow":"1px 2px 31px 0px rgba(240,232,240,1)"});

    var cur_step = $(".container").data("step");

    if(cur_step == 0){
        short_long = $(this).data("val");
    }
    else{
        
        var cur =  $(this).data("val");
        var cur2 =  $(this).data("val2");
        if(short_long == 'short') var cur3 =  $(this).data("val3");

        sticks[cur] +=3;
        sticks[cur2] +=2;
        if(short_long == 'short') sticks[cur3] +=1;

        console.log(sticks);
        console.log("skoka - " + sticks.length);
    }

    console.log(cur_step + " - before click");

    if((cur_step == 6 && short_long == 'short') || (cur_step == 5 && short_long == 'long')){

        var str = '';
        var temp = []; 

        console.log(sticks);
       
        for(var index in sticks) {
            temp[sticks[index]] = index;
         //str += index + " : " + sticks[index] + "</br>";
        }

        //$("#holder").html("<h1 style='color: white; padding-top: 200px;'>" + str + "</h1>");
        temp = temp.reverse() 
        var i=1;

        console.log(temp);

        for(var t in temp){
            if(i == 2){
                var secondary = temp[t].trim();
                break;
            }
            if(i == 1){
                var primary = temp[t].trim();
                i = i + 1;
            }
        }
        if(!secondary) secondary = "optik";
        //console.log('results-new.html?stick1=' + primary + '&stick2=' + secondary);
        window.location.href = 'results-new2.html?stick1=' + primary + '&stick2=' + secondary;

    }
    else{

        // if(cur_step == 5) console.log("here");

        var next = cur_step + 1;
    
        var file_name = path + "/steps/" + next + '_' + short_long + ".html";
    
        $.get(file_name, function(data) {
            //console.log("next step");
            $("#holder").html(data);
            slidein();
        }); 
    }

});

// FUNCTIONS

function slidein(){
    
    // console.log("slide in");

    TweenLite.set(".wrapper", {visibility:"visible"});
    
    var titleText = new SplitText(".wrapper h1", {type:"chars"}),
        numTitleChars = titleText.chars.length,
        redboxes = $(".boxes div"),
        tl = new TimelineMax();
    
    tl.staggerFrom(titleText.chars, 0.8, {
            ease:Back.easeOut, x:300, 
        //    cycle:{y:curve}, 
            opacity:0
        }, 0.02)
    .staggerFrom(redboxes, 0.5, {
        opacity: 0,
        ease:Back.easeOut,
        cycle:{
            //rotationX:[-90, 90],
            x:function(i){
                return (i + 1) * 100;
            },
            ease:function(i){
                return Back.easeOut.config(i * 2);
            }

        } 
    }, 0.2);

    // t1.timeScale(7);
}

//position starting y of each letter on a cos curve;
function curve(i){
    var n = i / numTitleChars * 6.24;
    return  (Math.cos(n)) * -200;
}
//
function fade(){

    var titleText = new SplitText(".wrapper h1", {type:"chars"}),
        numTitleChars = titleText.chars.length,
        redboxes = $(".boxes div"),
        t2 = new TimelineMax();
    
    t2.staggerTo(titleText.chars, 0.5, {ease:Back.easeOut, cycle:{y:[100, -100], rotation:[-120, 120]}, opacity:0}, 0.03, "+=1")
      .staggerTo(redboxes, 0.5, {ease:Back.easeOut, 
        cycle:{
        y:[300, -300], 
        x:-300,
        rotation:[-120, 120]
    }, opacity:0}, 0.03, "+=1");
}



