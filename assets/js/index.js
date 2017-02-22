(function(){

	function get_brands(){

		
		$.ajax({
			url: '/get_brands',
			type: 'post',
			contentType: 'application/json',
			data: JSON.stringify({ }),
			success: function (data) {

				//console.log(data)
				
				var brands = data.data[0].image;
				console.log(brands)

				if(brands){
					for(var i=0; i<brands.length; i++){
						//$('#brands_content').append('<div class="item"><a href="#"><img src="'+brands[i].document_url+'" alt=""/></a></div>')
					}
				}
			},
			error: function (err) {
				console.log(err.responseJSON.message);
			}
		});

	}

	$( document ).ready(function() {
		get_brands();
	});


})();
