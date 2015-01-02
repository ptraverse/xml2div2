 $(document).ready(function () {

	console.log('convert0!');    					
	
	$("#convert_button").click( function() {
		
			var xml_text = $('#xml_textarea').val();
			
			$.ajax({
				type: "GET",
				url: "/ajax/xml2div2.ajax.php",
				data: {
					xml_text: xml_text
				},
				success: function(msg){
					console.log('convert1!');    					
					$('#response_div').html(msg);    								
				},
				error: function(err){
					console.log('convert2!');
					console.log("error!");
				}
			}).done(function(){
				console.log('convert3!');
				console.log("done!");
			});
	
			console.log('convert4!');
			return false; //to prevent browser submit
		
	});
	
	$("#convert_button").click();
});