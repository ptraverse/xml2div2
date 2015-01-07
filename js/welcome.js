 $(document).ready(function () {
	
	$("#xml_textarea").focus();
	
	$("#convert_button").click( function() {		
		var xml_text = $('#xml_textarea').val();
		$.ajax({
			type: "POST",
			url: "/ajax/xml2div2.ajax.php",
			data: {
				xml_text: xml_text
			},
			success: function(msg){																	    				
				json = JSON.parse(msg);				
				
				//Finish this transform...
				var transform = [{					
					tag: 'div', class: 'Match', children: [{
						tag: 'div', class: 'Country', html: '${Match.0.Country}'
					}, {
						tag: 'div', class: 'LeagueName', html: '${Match.0.LeagueName}'
					}, {
						tag: 'div', class: 'MatchName', html: '${Match.0.MatchName}'
					}, {
						tag: 'div', class: 'KickOffTime', html: '${Match.0.KickOffTime}'
					}, {
						tag: 'div', class: 'TextOutput', html: '${Match.0.TextOutput}'
					}, {
						tag: 'button', class: 'btn-lg btn-primary', style: 'margin: 10px;', html: '${Match.0.Marketname}'
					}]				
             	}];			
				
				var result = json2html.transform(json,transform);				
				$('#render_div').html(result);				
			},
			error: function(err){
				console.log("error!");
			}
		}).done(function(){
			console.log("done!");
		});
		
		return false; //to prevent browser submit
	
	});	
	
	$("#convert_button").click();
});