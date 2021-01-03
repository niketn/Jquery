$(document).ready(function(){
   $(".dropbtn").click(function(){
       $(".dropdown-content").slideToggle(500);
   });
    
    $(".services-box h2").click(function(){
       $(".services-box p").fadeToggle();
   });
    
   $(".page-style").append("===NEW INFO===STACKING THE ACTIVATION MAPS FOR ALL FILTERS ALONG THE DEPTH DIMENSION FORMS THE FULL OUTPUT VOLUME OF THE CONVOLUTION LAYER."); 
    $(".page-style").css('font-weight', "bold");
    
   
    
  $("#changecolor").on({
        mouseenter: function(){
            $(this).css("background-color", "gray");
        },  
       
        mouseleave: function(){
            $(this).css("background-color", "lightblue");
        },
       
        dblclick: function(){
            $(this).css("background-color", "lightGreen");
        }
    });
  
  $(".icon").mouseenter(function(){
	$(this).addClass("change").delay(5000).queue(function(){
		$(this).removeClass("change").dequeue();
	});
	
});
});