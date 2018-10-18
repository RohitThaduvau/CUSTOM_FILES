
$( document ).ready(function() {
	
	//Modal pop up for sticks page
	var hasSizeChart = false;
	var chartImageSource = '';
	var mappingCharts = {
		666436: '950_bag_size_chart_popup',
		682117: '950_bag_size_chart_popup',
		664314: 'vapor_bag_size_chart_popup',
		615901: 'vapor_bag_size_chart_popup',
		 
	};
	
	var productid = $('.c-product-details__item-number.product-number span').attr('data-masterid') !== 'undefined' ? $('.c-product-details__item-number.product-number span').attr('data-masterid') : 00000;

	checkSizeChart(productid);

	function checkSizeChart(id) {
		try {
			for (var key in mappingCharts) {
				if(mappingCharts.hasOwnProperty(parseInt(id))) {
					hasSizeChart = true;
					var sizeChartSrc = mappingCharts[parseInt(id)];
					chartImageSource = 'https://i1.adis.ws/i/bauer/' + sizeChartSrc;
					addingStickCharts();
					exit;
				}
			}
		}catch(e) {}
	}
	
	function addingStickCharts() {
		try {
			if(window.location.href.indexOf("hockey-sticks") > -1) {
				addFlexChart();
				zoomImage();
			}
		}catch(e) {}
	}

	addingStickCharts();

	function addFlexChart () {
		try{
			var modalflex = $('<span class="modal-custom-popup"><img class="ruler-icon" src="https://bauer.a.bigcontent.io/v1/static/RulerIcon" alt="Ruler"/></span><div class="modal-dialog-custom"><img id="flex-chart-image" src="https://i1.adis.ws/i/bauer/SizeChart" style="display:none;" /><div id="flex-chart-data-image" class="modal-custom-image" data-scale="1.6" data-image="https://i1.adis.ws/i/bauer/SizeChart"></div><span class="modal-custom-close">&nbsp;</span></div>');
			$('#product-content .c-product-variations ul').children('li.variant-button-group').eq(0).find('label').append(modalflex);

			$('img#flex-chart-image').attr('src', chartImageSource);
			$('#flex-chart-data-image').attr('data-image', chartImageSource);
		}catch(e) {}
	}
	
	function zoomImage() {
		try{
			if(hasSizeChart) {
				$( ".modal-custom-popup" ).click(function(event) {
					event.preventDefault();
					$(this).next('.modal-dialog-custom').toggle();
				});
				$( ".modal-custom-close" ).click(function() {
					$('.modal-dialog-custom').css("display","none");
				});
				$('.modal-custom-image')
						.on('mouseover', function(){
							$(this).children('.custom-zoom').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
						})
						.on('mouseout', function(){
							$(this).children('.custom-zoom').css({'transform': 'scale(1)'});
						})
						.on('mousemove', function(e){
							$(this).children('.custom-zoom').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
						})
						.on('touchstart', function() {
							$(this).children('.custom-zoom').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
						})
						.on('touchend', function() {
							$(this).children('.custom-zoom').css({'transform': 'scale(1)'});
						})
						.on('touchmove', function(e) {
							e.preventDefault();
							$(this).children('.custom-zoom').css({'transform-origin': ((e.originalEvent.touches ?  e.originalEvent.touches[0].pageX : e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + (((e.originalEvent.touches ?  e.originalEvent.touches[0].pageY : e.pageY) - $(this).offset().top) / $(this).height()) * 100 +'%'});
						})
						.each(function(){
						$(this)                
							.append('<div class="custom-zoom"></div>')
							.children('.custom-zoom').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
						})
			}
		}catch(e) {}
	}
	
	try {
		var targetNode = document.getElementById('product-content');
		var config = { attributes: true, childList: true, subtree: true };
		var callback = function(mutationsList) {
			if($('.modal-custom-popup').length  == 0) {
				addFlexChart();
				zoomImage();
			}
		}
		var observer = new MutationObserver(callback);  
		observer.observe(targetNode, config);
	} catch(e) {}
	
	}); // DOM Ready

	$('.c-accordion__body.js-accordion__body a').click(function() {
		console.log("selected");
	});

	$('.c-accordion__body.js-accordion__body a').on('click' ,function() {
		console.log("selected we");
	});

	$('.c-accordion__body.js-accordion__body').on('click' , 'a' ,function() {
		console.log("selected we1");
	});

	$(document).delegate('.c-accordion__body.js-accordion__body a', 'click', function(){
		console.log("repeated");
	});

	$(document).delegate('.c-search-options-block__select.js-select-advanced.select2-hidden-accessible', 'change', function(){
		console.log("repeated");
	});

	$('.c-search-options-block__select.js-select-advanced.select2-hidden-accessible').change(function () {
		console.log("ssssss");
	});