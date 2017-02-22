(function(){

	function load_product_by_id(){

		var product_id = window.location.pathname.split('/')[2];

		$.ajax({
			url: '/load_product_by_id',
			type: 'post',
			contentType: 'application/json',
			data: JSON.stringify({product_id:product_id}),
			success: function (data) {

				console.log(data)
				var product_data = data.data;

				var name 			= product_data.name;
				var price 			= product_data.price;
				var stock 			= product_data.stock;
				var variables		= product_data.variables;
				var content 		= product_data.content;
				var image 			= product_data.image;

				document.title = 'Butterfly | ' + name
				$('#product_title').text(name)
				$('#product_stock').text('Stock :' + stock)
				$('#product_title_02').text(name)
				
				$('#product_content').html(content + '<br><br><br>')

				console.log('DTA', image, variables)
				$('#product_presentation').append('<option></option>')

				for(var i=0; i<variables.length; i++){

					$('#product_presentation').append('<option id="'+variables[i].variable_code+'" value="'+variables[i].variable_price+'|'+variables[i].variable_stock+'">'+variables[i].variable_name+'</option>')

				}

				for(var i=0; i<image.length; i++){
					var thumb 	= image[i].document_url_thumb;
					var url 	= image[i].document_url;
					
					if(i==0){
						$('#image_large').append('<div class="c-zoom" img_order="'+(i+1)+'"><img src="'+url+'"/></div>')

					}else{
						$('#image_large').append('<div class="c-zoom c-hide" img_order="'+(i+1)+'"><img src="'+url+'"/></div>')
					}
					
					$('#image_thumb').append('<div class="col-xs-3 c-product-thumb" style="height: 99px;"><img src="'+thumb+'" img_order="'+(i+1)+'"></div>')

				}
				

			},
			error: function (err) {
				console.log(err.responseJSON.message);
			}
		});

	}

	$('body').on('change', '#product_presentation', function(){
		var price = $(this).val().split('|')[0];
		var stock = $(this).val().split('|')[1];
		var code = $(this).find('option:selected').attr('id');

		console.log(price, stock, code)

		$('#product_price_section').fadeIn();
		$('#product_price').text('S/.' + Number(price).toFixed(2))


	})

	$('body').on('click', '.col-xs-3.c-product-thumb', function(){
		var image_selected = $(this).find('img').attr('img_order');

		
		$('#image_large').find('div').each(function(index){
			
			$(this).attr('class','c-zoom c-hide');

			if((index+1) == Number(image_selected)){
				$(this).attr('class','c-zoom');
			}
		})

		//$('#c-zoom')
	})

	$( document ).ready(function() {
		//load_products()
		load_categories();
		load_product_by_id();
		//load_products()
	});



})()