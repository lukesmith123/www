$(document).ready(function() {

var pg_id = 3;
var db;
loadData();

function loadData() {
$.ajax({ 
		url: "http://www.aquintable.com/bboyjams/pick.php", 
		type: "post", 
		data: {page_id: pg_id }, 
		success: function(data) { 

		db = $.parseJSON(data);
		if(pg_id == 1){ //EVENTS
			parseEvents();
		}
		else if(pg_id == 3) {
			parseCrews();
		}
		else if(pg_id == 4) {
			parseLessons();
		}
	 }, 
	 error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
	}
});
}

function parseEvents(){
	for (var i = 0, len = db.length; i < len; i++) {
	  var str="";
	  str += '<li><a href="#"><h1>';
	  str += db[i].name;
	  str += '</h1><p>';
	  str += db[i].date;
	  str += '</p></a></li>';
	  $('#listv').append(str);
  }
  $("#listv").listview("refresh");
}

function parseCrews() {
	for (var i = 0, len = db.length; i < len; i++) {
	  var str="";
	  str += '<li><a href="#"><h1>';
	  str += db[i].name;
	  str += '</h1><p>';
	  str += db[i].location;
	  str += '</p></a></li>';
	  $('#listv').append(str);
  }
  $("#listv").listview("refresh");
}

function parseLessons() {
	for (var i = 0, len = db.length; i < len; i++) {
	  var str="";
	  str += '<li><a href="#"><h1>';
	  str += db[i].location;
	  str += '</h1><p>';
	  str += db[i].instructor;
	  str += '</p><p>';
	  str += db[i].level;
	  str += '</p></a></li>';
	  $('#listv').append(str);
  }
  $("#listv").listview("refresh");
}
   
});