

        $(function() {
          
          var path = window.location.href;

          var res = path.split("results-new.html");

          var folder = 'headfinder_new/';

          var temp = path.split("stick=");
          

          var stick = temp[1];

          console.log(stick);

          $("#stick_name").html(stick);

          var stickText = new SplitText("#stick_name", {type:"chars"});

          TweenMax.staggerFrom(stickText.chars, 0.8, {ease:Back.easeOut, x:300, opacity:0}, 0.02)

          TweenMax.from("#get_one_button", 1.5, {ease:Back.easeOut, opacity:0, width:150});

          var dir = res[0] + "assets/images/products/" + stick + "/";
          var fileextension = ".jpg";

          $.ajax({
            //This will retrieve the contents of the folder if the folder is configured as 'browsable'
            url: dir,
            success: function (data) {
              console.log
              //$(data).find("a:contains(" + fileextension + ")").each(function () {
                var i = 0;  
                $(data).find("a:contains(" + "." + ")").each(function () {
              
                  var filename = this.href.replace(window.location.host, "").replace("http://", "").replace("http://", "").replace(folder, "");
                  
                  console.log(filename);

                  $(".thumbs").append("<img class='img_tb' src='" + dir + filename + "'>");
                  if(i == 0){
                    $(".main_img").attr('src', dir + filename);
                    
                    $i=1;
                  }

                });
              TweenMax.staggerFrom(".img_tb", 0.5, {ease:Back.easeOut, opacity:0, y:200, delay:0.5}, 0.2);
            }
          });

          // t1.staggerFrom(".thumbs img", 0.5, {opacity: 0, y: 1000, scale:2, delay:0.5});

          $(document).on("click",".thumbs img", function(){
              //console.log("here");
              var src_img = $(this).attr("src");
              //console.log(src_img);
              $(".main_img").attr("src", src_img);
          });

          $.get("js/products.json", function(data) {
            $.each(data.products, function( key, val ) {
              if(val.id  == stick){
                $(".short_desc").html(val.shortDescription);
                $(".long_desc").html(val.description);   
                //               
                $(".prod_link").attr("href", val.itemUrl);
              }
            });                
          });

        });

