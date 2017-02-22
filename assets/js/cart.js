(function(){

	$('body').on('click', '#btn_add_whishlist', function(){
		
		var product_id = $(this).attr('value');
		
		$.ajax({
			url: '/add_product_whishlist',
			type: 'post',
			contentType: 'application/json',
			data: JSON.stringify({product_id:product_id}),
			success: function (data) {
				console.log(data)
			},
			error: function (err) {
				console.log(err.responseJSON.message);
			}
		});


	})

	$('body').on('click', '#btn_add_cart', function(){
		
		var product_id = $(this).attr('value');
		
		$.ajax({
			url: '/add_product_whishlist',
			type: 'post',
			contentType: 'application/json',
			data: JSON.stringify({product_id:product_id}),
			success: function (data) {
				console.log(data)
			},
			error: function (err) {
				console.log(err.responseJSON.message);
			}
		});


	})

})();