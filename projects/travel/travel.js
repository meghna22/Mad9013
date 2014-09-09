// JavaScript Document
$(function() {
    $( "#datepicker1" ).datepicker();
	$( "#datepicker2" ).datepicker();
  });
$(function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 1000,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  }); 
  
function AddListItem(form)
{

var TestVar = form.txtInput.value;

var TestVar = form.txtInput1.value;
form.txtInput.value = "";
form.select.options[3]=new Option(TestVar, TestVar, true);

}
function validateForm()
{
var desticity=document.forms["TravelForm"]["cityName"].value;
var depcity=document.forms["TravelForm"]["ciname"].value;
if (desticity==null || desticity=="")
  {
	  
  alert("Departure City must be filled out");
  return false;
  }
  if (depcity==null || depcity=="")
  {
	  var label ="";
  alert("Destination city must be filled out");
  return false;
}
}