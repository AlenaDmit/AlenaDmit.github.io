// inititalization
var st = '';

var stack = [];
var state;
//clear input and result fields
$(".clear").click(function(e){
	e.preventDefault();
	$("#input_string").text("");
	$("#result").text("");
});

$(".answer").click(function(e){
	e.preventDefault();
	state = 'OK';
	stack=[];
	
	st = $("#input_string").text();
	var stLen = st.length;

	// main loop
	for (i = 0; i < stLen; i++) {
		if (!checkBracket(st[i])) break;
	}

	// final check and results
	var res = ' string is invalid';

	if (stack.length == 0 && state == 'OK') {
		res = ' string is valid';
	}
		$("#result").text(res);
	stack = [];
});




// --------------------------------------------------------------

function getCommonBracket(bracket){

	switch (bracket){
		case '(': return ')'
		case '{':  return '}'
		case '[': return ']'
		
		default:
			return false;
	}
}

// compare brackets in stack with current bracket in string
function checkBracket(currBracket)
{
	switch (currBracket) {
		case '(':
		case '[':
		case '{':
			stack.push(currBracket);
			break;

		case ')':
		case ']':
		case '}':
			if (stack.length == 0) { state = 'BAD'; return false; }

			if (currBracket == getCommonBracket(stack[stack.length - 1]) ) 
				stack.pop();
			else{
				state= 'BAD';
				return false;
			}
			break;

		default:
			state = 'BAD';
			console.log('Unacceptable symbol!');
			return false;
	}

	return true;
}


// Get JSON------------------------------------

function showJson(object) {
    for(var key in object){
       
       console.log(object[key] + " type: "+ $.type(object[key])); 
        if ($.type(object[key]) == "object"){
            $('#package').append("<div>"+key+"</div>");
            showJson(object[key]);
        }
        else
            $('#package').append("<div>"+key+": "+object[key]+"</div>");
    }
};

jQuery(document).ready(function($) {
    $('button').click(function(){
        console.log("hell");
        $.getJSON('./assets/img/package.json', function(object) {
            showJson(object);
        });
    });
});


// Live SVG -------------------------------------

$(document).ready(() => {
  setBg();
  $(".editor").draggable();

  $("#editor").keyup(() => {
    setBg();
  });
});

function setBg() {
  var plainSvg = $("#editor").val();
  var escapedSvg = escapeHtml(plainSvg);
  var result = "background-image: url(\"data:image/svg+xml,"+escapedSvg+"\");";

  $("body").attr("style", result);
}
function escapeHtml(unsafe) {
    return unsafe
         .replace(/#/g, "%23")
         .replace(/</g, "%3C")
         .replace(/>/g, "%3E")
         .replace(/"/g, "'")
         .replace(/\s{2,}/g, " ")
 }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluaXRpdGFsaXphdGlvblxyXG52YXIgc3QgPSAnJztcclxuXHJcbnZhciBzdGFjayA9IFtdO1xyXG52YXIgc3RhdGU7XHJcbi8vY2xlYXIgaW5wdXQgYW5kIHJlc3VsdCBmaWVsZHNcclxuJChcIi5jbGVhclwiKS5jbGljayhmdW5jdGlvbihlKXtcclxuXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0JChcIiNpbnB1dF9zdHJpbmdcIikudGV4dChcIlwiKTtcclxuXHQkKFwiI3Jlc3VsdFwiKS50ZXh0KFwiXCIpO1xyXG59KTtcclxuXHJcbiQoXCIuYW5zd2VyXCIpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRzdGF0ZSA9ICdPSyc7XHJcblx0c3RhY2s9W107XHJcblx0XHJcblx0c3QgPSAkKFwiI2lucHV0X3N0cmluZ1wiKS50ZXh0KCk7XHJcblx0dmFyIHN0TGVuID0gc3QubGVuZ3RoO1xyXG5cclxuXHQvLyBtYWluIGxvb3BcclxuXHRmb3IgKGkgPSAwOyBpIDwgc3RMZW47IGkrKykge1xyXG5cdFx0aWYgKCFjaGVja0JyYWNrZXQoc3RbaV0pKSBicmVhaztcclxuXHR9XHJcblxyXG5cdC8vIGZpbmFsIGNoZWNrIGFuZCByZXN1bHRzXHJcblx0dmFyIHJlcyA9ICcgc3RyaW5nIGlzIGludmFsaWQnO1xyXG5cclxuXHRpZiAoc3RhY2subGVuZ3RoID09IDAgJiYgc3RhdGUgPT0gJ09LJykge1xyXG5cdFx0cmVzID0gJyBzdHJpbmcgaXMgdmFsaWQnO1xyXG5cdH1cclxuXHRcdCQoXCIjcmVzdWx0XCIpLnRleHQocmVzKTtcclxuXHRzdGFjayA9IFtdO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBnZXRDb21tb25CcmFja2V0KGJyYWNrZXQpe1xyXG5cclxuXHRzd2l0Y2ggKGJyYWNrZXQpe1xyXG5cdFx0Y2FzZSAnKCc6IHJldHVybiAnKSdcclxuXHRcdGNhc2UgJ3snOiAgcmV0dXJuICd9J1xyXG5cdFx0Y2FzZSAnWyc6IHJldHVybiAnXSdcclxuXHRcdFxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxufVxyXG5cclxuLy8gY29tcGFyZSBicmFja2V0cyBpbiBzdGFjayB3aXRoIGN1cnJlbnQgYnJhY2tldCBpbiBzdHJpbmdcclxuZnVuY3Rpb24gY2hlY2tCcmFja2V0KGN1cnJCcmFja2V0KVxyXG57XHJcblx0c3dpdGNoIChjdXJyQnJhY2tldCkge1xyXG5cdFx0Y2FzZSAnKCc6XHJcblx0XHRjYXNlICdbJzpcclxuXHRcdGNhc2UgJ3snOlxyXG5cdFx0XHRzdGFjay5wdXNoKGN1cnJCcmFja2V0KTtcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSAnKSc6XHJcblx0XHRjYXNlICddJzpcclxuXHRcdGNhc2UgJ30nOlxyXG5cdFx0XHRpZiAoc3RhY2subGVuZ3RoID09IDApIHsgc3RhdGUgPSAnQkFEJzsgcmV0dXJuIGZhbHNlOyB9XHJcblxyXG5cdFx0XHRpZiAoY3VyckJyYWNrZXQgPT0gZ2V0Q29tbW9uQnJhY2tldChzdGFja1tzdGFjay5sZW5ndGggLSAxXSkgKSBcclxuXHRcdFx0XHRzdGFjay5wb3AoKTtcclxuXHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRzdGF0ZT0gJ0JBRCc7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHN0YXRlID0gJ0JBRCc7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdVbmFjY2VwdGFibGUgc3ltYm9sIScpO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuXHJcbi8vIEdldCBKU09OLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBzaG93SnNvbihvYmplY3QpIHtcclxuICAgIGZvcih2YXIga2V5IGluIG9iamVjdCl7XHJcbiAgICAgICBcclxuICAgICAgIGNvbnNvbGUubG9nKG9iamVjdFtrZXldICsgXCIgdHlwZTogXCIrICQudHlwZShvYmplY3Rba2V5XSkpOyBcclxuICAgICAgICBpZiAoJC50eXBlKG9iamVjdFtrZXldKSA9PSBcIm9iamVjdFwiKXtcclxuICAgICAgICAgICAgJCgnI3BhY2thZ2UnKS5hcHBlbmQoXCI8ZGl2PlwiK2tleStcIjwvZGl2PlwiKTtcclxuICAgICAgICAgICAgc2hvd0pzb24ob2JqZWN0W2tleV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICQoJyNwYWNrYWdlJykuYXBwZW5kKFwiPGRpdj5cIitrZXkrXCI6IFwiK29iamVjdFtrZXldK1wiPC9kaXY+XCIpO1xyXG4gICAgfVxyXG59O1xyXG5cclxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigkKSB7XHJcbiAgICAkKCdidXR0b24nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGVsbFwiKTtcclxuICAgICAgICAkLmdldEpTT04oJy4vYXNzZXRzL2ltZy9wYWNrYWdlLmpzb24nLCBmdW5jdGlvbihvYmplY3QpIHtcclxuICAgICAgICAgICAgc2hvd0pzb24ob2JqZWN0KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG4vLyBMaXZlIFNWRyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XHJcbiAgc2V0QmcoKTtcclxuICAkKFwiLmVkaXRvclwiKS5kcmFnZ2FibGUoKTtcclxuXHJcbiAgJChcIiNlZGl0b3JcIikua2V5dXAoKCkgPT4ge1xyXG4gICAgc2V0QmcoKTtcclxuICB9KTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBzZXRCZygpIHtcclxuICB2YXIgcGxhaW5TdmcgPSAkKFwiI2VkaXRvclwiKS52YWwoKTtcclxuICB2YXIgZXNjYXBlZFN2ZyA9IGVzY2FwZUh0bWwocGxhaW5TdmcpO1xyXG4gIHZhciByZXN1bHQgPSBcImJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLFwiK2VzY2FwZWRTdmcrXCJcXFwiKTtcIjtcclxuXHJcbiAgJChcImJvZHlcIikuYXR0cihcInN0eWxlXCIsIHJlc3VsdCk7XHJcbn1cclxuZnVuY3Rpb24gZXNjYXBlSHRtbCh1bnNhZmUpIHtcclxuICAgIHJldHVybiB1bnNhZmVcclxuICAgICAgICAgLnJlcGxhY2UoLyMvZywgXCIlMjNcIilcclxuICAgICAgICAgLnJlcGxhY2UoLzwvZywgXCIlM0NcIilcclxuICAgICAgICAgLnJlcGxhY2UoLz4vZywgXCIlM0VcIilcclxuICAgICAgICAgLnJlcGxhY2UoL1wiL2csIFwiJ1wiKVxyXG4gICAgICAgICAucmVwbGFjZSgvXFxzezIsfS9nLCBcIiBcIilcclxuIH1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
