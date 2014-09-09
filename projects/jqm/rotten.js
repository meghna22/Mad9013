// JavaScript Document
// JavaScript Document
var apikey = "pgygu62a2dum7tqzfux86tzu";
//get your own api key from 
//http://developer.rottentomatoes.com/member/register

//name of image if thumbnail is missing 
//http://images.rottentomatoescdn.com/images/redesign/poster_default.gif
$(document).on("mobileinit",function(){
	$.mobile.allowCrossDomainPages = true;
	$.support.cors = true;
	//alert("mobile init triggered!");
});

$(document).on("ready", init );

function init( ){
	$("#searchForm").on("submit",movies);
	$("#backBtn").on("click",function(){
		$.mobile.navigate("#mk");
		location.reload(true);
	});
};

function movies(ev){
	ev.preventDefault();
	//$("#searchForm").serialize();
	var picture = $("#text").val();
	console.log(picture);
	
	$.mobile.navigate("#myForm");
	$.mobile.loading("show");
	
		$.ajax({
		url: "http://api.rottentomatoes.com/api/public/v1.0/movies.json?",
		data: "apikey=" + apikey + "&q=" + picture + "&page_limit=10",
		crossDomain:true,
		dataType: "jsonp",
		xhrFields:{
			withCredentials:true
		}
		}).done( gotData ).always( afterwards );
	
	
};

function gotData( movieData ){
	var numMovies = movieData.movies.length;
	//console.log(numMovies);
	var mv = movieData.movies;
	
//	var ul = '<ul data-role="listview" data-inset="true" id="myUL"></ul>';
	//$("#myForm div[data-role=content]").append(ul);
	var lis=""; 
	for(var m=0; m<numMovies; m++){
		if( mv[m].posters.thumbnail != "http://images.rottentomatoescdn.com/images/redesign/poster_default.gif"){
			lis+= '<li><img src="' + mv[m].posters.thumbnail + '"/><h3>' + mv[m].title + '</h3></li>'
			<!---->$("#searchForm").on("button",numMovies);
		}
	}
	$("#myUL").html(lis);
	$("#myUL").listview("refresh");
}

function afterwards( jqXHR ){
	if( jqXHR.status && parseInt( jqXHR.status ) > 399 ){
		//problem
		alert("Sorry Dave. I can't do that");
	}else{
		//alert("should be done.");	
	}
}