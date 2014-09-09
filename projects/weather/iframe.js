
$(document).ready(function(){
	
			$(".btn").click(function(e){
			$(".weather iframe").remove(); 
					if(e.target.id=="btn1")
                {
	$(".weather").append("<iframe class='a' frameborder='0' height='200' width='60%' src='http://forecast.io/embed/#lat=45.3484&lon=-75.7570 &name=Algonquin'></iframe>")
                }
			
     				else if 
		 (e.target.id=="btn2") 
              {
			 $(".weather").append("<iframe class='m' frameborder='0' height='200' width='30%' src='http://forecast.io/embed/#lat=45.5124&lon=-73.5547 &name=Montreal'> </iframe >")
               }
		 			else 
               
	
          {
			  $(".weather").append("<iframe class='t' frameborder='0' height='230' width='50%' src='http://forecast.io/embed/#lat=43.6486 &lon=-79.3854 &name=Toronto'> </iframe>")
              }
			  
			
			});
});
			 
			 