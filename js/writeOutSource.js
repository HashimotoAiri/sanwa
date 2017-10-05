function writeHeader(){

	$.ajax({
		url: "/sanwa_re/common/header.html", 
		cache: false, 
		async: false, 
		success: function(html){
			document.write(html);	
		}
	});

}

function writeFooter(){

	$.ajax({
		url: "/sanwa_re/common/footer.html", 
		cache: false, 
		async: false, 
		success: function(html){
			document.write(html);	
		}
	});

}

function writeNav(){

	$.ajax({
		url: "/sanwa_re/common/nav.html", 
		cache: false, 
		async: false, 
		success: function(html){
			document.write(html);	
		}
	});

}

function writeCommonBody(){

	$.ajax({
		url: "/sanwa_re/common/commonBody.html", 
		cache: false, 
		async: false, 
		success: function(html){
			document.write(html);	
		}
	});

}

function writeInfo(){

	$.ajax({
		url: "/sanwa_re/common/info.html", 
		cache: false, 
		async: false, 
		success: function(html){
			document.write(html);	
		}
	});

}

function writeVoice(){

	$.ajax({
		url: "/sanwa_re/common/voice.html", 
		cache: false, 
		async: false, 
		success: function(html){
			document.write(html);	
		}
	});

}