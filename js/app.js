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
	
	if(pg_id == 1)
	{
	$("#hde").html('<a href="#" onclick="reloadPage();" data-role="button" data-icon="carat-l" class="ui-btn-left">Back</a><h3 style="text-align:center;">Events</h3>');
	$("#hde").trigger('create');
	
	var str = '<h1>';
	str += dbe[index].name;
	str += '</h1><h3>Date: ';
	str += dbe[index].date;
	str += '</h3><h3>Price: £';
	str += dbe[index].price;
	str += '</h3><h3>Location: ';
	str += dbe[index].location;
	str += '</h3><h3>Info:</h3>';
	str += '<p>';
	str += dbe[index].info;
	str += '</p>';
	
	$("#cnte").html(str);
	}
	else if(pg_id == 3)
	{
		$("#hdc").html('<a href="#" onclick="reloadPage();" data-role="button" data-icon="carat-l" class="ui-btn-left">Back</a><h3 style="text-align:center;">Crews</h3>');
	$("#hdc").trigger('create');
	
	var str = '<h1>';
	str += dbc[index].name;
	str += '</h1><h3>Location: ';
	str += dbe[index].location;
	str += '</h3><h3>Crew Members: ';
	str += dbe[index].members;
	str += '</h3><h3>Info:</h3>';
	str += '<p>';
	str += dbe[index].info;
	str += '</p>';
	
	$("#cntc").html(str);
	}
	else if(pg_id == 4)
	{
		$("#hdl").html('<a href="#" onclick="reloadPage();" data-role="button" data-icon="carat-l" class="ui-btn-left">Back</a><h3 style="text-align:center;">Lessons</h3>');
	$("#hdl").trigger('create');
	
	var str = '<h1>';
	str += dbc[index].name;
	str += '</h1><h3>Experience Level: ';
	str += dbe[index].level;
	str += '</h3><h3>When: ';
	str += dbe[index].when;
	str += '</h3><h3>Cost: £';
	str += dbe[index].cost;
	str += '</h3><h3>Location: ';
	str += dbe[index].location;
	str += '</h3><h3>Info:</h3>';
	str += '<p>';
	str += dbe[index].info;
	str += '</p>';
	
	$("#cntl").html(str);
	}
}

function reloadPage() {
	location.reload();
}

