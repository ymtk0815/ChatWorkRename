setInterval(function(){
	var elements = document.getElementsByClassName("chatListTitleArea");
	for(var i = 0,l = elements.length; l > i; i++) {
		var splits = elements[i].innerText.split("/ hogehoge");
		elements[i].innerText = splits[0];
	}
}, 10);