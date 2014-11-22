var dbe;
var dbc;
var dbl;

var sPGID;
var sIDX;

function loadData(pg_id) {
$.ajax({ 
		url: "http://www.aquintable.com/bboyjams/pick.php", 
		type: "post", 
		data: {page_id: pg_id }, 
		success: function(data) { 

		
		if(pg_id == 1){ //EVENTS
			dbe = $.parseJSON(data);
			parseEvents();
		}
		else if(pg_id == 3) { //CREWS
			dbc = $.parseJSON(data);
			parseCrews();
		}
		else if(pg_id == 4) { //LESSONS
			dbl = $.parseJSON(data);
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
	for (var i = 0, len = dbe.length; i < len; i++) {
	  var str="";
	  str += '<li><a href="#" onclick="loadNextPage(1,';
	  str += i;
	  str += ');"><h1>';
	  str += dbe[i].name;
	  str += '</h1><p>';
	  str += dbe[i].date;
	  str += '</p></a></li>';
	  $('#liste').append(str);
  }
  $("#liste").listview("refresh");
}

function parseCrews() {
	for (var i = 0, len = dbc.length; i < len; i++) {
	  var str="";
	  str += '<li><a href="#" onclick="loadNextPage(3,';
	  str += i;
	  str += ');"><h1>';
	  str += dbc[i].name;
	  str += '</h1><p>';
	  str += dbc[i].location;
	  str += '</p></a></li>';
	  $('#listc').append(str);
  }
  $("#listc").listview("refresh");
}

function parseLessons() {
	for (var i = 0, len = dbl.length; i < len; i++) {
	  var str="";
	  str += '<li><a href="#" onclick="loadNextPage(4,';
	  str += i;
	  str += ');"><h1>';
	  str += dbl[i].location;
	  str += '</h1><p>';
	  str += dbl[i].instructor;
	  str += '</p><p>';
	  str += dbl[i].level;
	  str += '</p></a></li>';
	  $('#listl').append(str);
  }
  $("#listl").listview("refresh");
}

function loadNextPage(pg_id, index) {
	
	sPGID = pg_id;
	sIDX = index;
	
	window.location.href = "templatee.html";
}

function loadTemplatee() {
	var content = '<h1>Event Name: ';
	content += dbe[sIDX].name;
	content += '</h1>';
	content += '<h3>';
	content += dbe[sIDX].date;
	content += '</h3><h3>Price: ';
	content += dbe[sIDX].price;
	content += '</h3><h3>Location: ';
	content += dbe[sIDX].location;
	content += '</h3><h3>Info: ';
	content += dbe[sIDX].info;
	content += '</h3>'
	$("#cnte").html(content);
}

