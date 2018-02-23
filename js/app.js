function begin()
{
	ajaxGet("https://jsonplaceholder.typicode.com/posts/1", function(l){
		console.log(l);
	});
}


(function(){
	click(element('#btn'), function(){
		alert(element('#number').value);	
	})
})();

(function(){
	keyUp(element('#number'), function(){
		alert(element('#number').value);	
	})
})();

//element("#number").val();

	
function click(element, action)
{
	element.addEventListener("click", action);
}

function keyUp(element, action)
{		
	element.addEventListener("keyup", action);
}


function element(attribute)
{
	return document.querySelector(attribute);
}


function ajaxGet(url, action)
{
	
	let _ajax = new XMLHttpRequest();

	_ajax.open("GET", url, true);
	_ajax.send();

	_ajax.onreadystatechange = function() {
	  	
		if (_ajax.readyState == 4 && _ajax.status == 200) {
	    
			let _data = _ajax.responseText;
			
			action(_data);
		}
	}	


}

