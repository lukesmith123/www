var dbe;
var dbc;
var dbl;

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
	if(pg_id == 1) {
		var content = '<div>Test Content</div>';
		$("#cnte").html(content);
		
		var header = '<a href="index.html" data-role="button" data-rel="back" data-icon="carat-l" class="ui-btn-left">Back</a><h3>';
		header += dbe[index].name;
		header += '</h3>';
		$("#hde").html(header);
		$("#hde").trigger( "create" );
	}
	else if (pg_id == 3) {
		var mywebpage = '<!DOCTYPE html><html><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>';

		element = document.getElementById('dom-id');  
		element.innerHTML = mywebpage;
	}
	else if (pg_id == 4) {
		var mywebpage = '<!DOCTYPE html><html><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>';

		element = document.getElementById('dom-id');  
		element.innerHTML = mywebpage;
	}
}
