

$( document ).ready(function() {
	
	//Modal pop up for sticks page
	
	function addingStickCharts() {
		try {
			if(window.location.href.indexOf("hockey-sticks") > -1) {
				addFlexChart();
				addSizeChart();
				zoomImage();
			}
		}catch(e) {}
	}

	addingStickCharts();
	
	function addFlexChart () {
		try{
			if(window.location.href.indexOf("666436") > -1) {
				var modalflex = $('<span class="modal-custom-popup"><img class="ruler-icon" src="https://bauer.a.bigcontent.io/v1/static/RulerIcon" alt="Ruler"/></span><div class="modal-dialog-custom"><img id="flex-chart-image" src="https://i1.adis.ws/i/bauer/SizeChart" style="display:none;" /><div id="flex-chart-data-image" class="modal-custom-image" data-scale="1.6" data-image="https://i1.adis.ws/i/bauer/SizeChart"></div><span class="modal-custom-close">&nbsp;</span></div>');
				$('#product-content .c-product-variations ul').children('li.variant-button-group').eq(1).find('label').append(modalflex);
			}
		}catch(e) {}
	}
	
	function addSizeChart() {
		try {
			if(window.location.href.indexOf("666436") > -1) {
				var stick_image = "vapor-sticks";
				var stick_types = ["vapor-sticks", "nexus-sticks", "supreme-sticks"];
				for ( var i=0; i< stick_types.length ; i++ ) {
					if(window.location.href.indexOf(stick_types[i]) > -1) {
						stick_image = stick_types[i];
						break;
					}
				}
				var stick_image_src = 'https://i1.adis.ws/i/bauer/' + stick_image;
	
				var modalsize = $('<span class="modal-custom-popup"><img class="ruler-icon" src="https://bauer.a.bigcontent.io/v1/static/RulerIcon" alt="Ruler"/></span><div class="modal-dialog-custom"><img id="size-chart-image" src="" style="display:none;" /><div id="size-chart-data-image" class="modal-custom-image size" data-scale="1.6" data-image=""></div><span class="modal-custom-close">&nbsp;</span><div>');
				$('#product-content .c-product-variations ul').children('li.variant-button-group').eq(0).find('label').append(modalsize);
	
				$('img#size-chart-image').attr('src', stick_image_src);
				$('#size-chart-data-image').attr('data-image', stick_image_src);
			}
		}catch(e){} 
	}
	
	function zoomImage() {
		try{
			if(window.location.href.indexOf("hockey-sticks") > -1) {
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
				addSizeChart();
				zoomImage();
			}
		}
		var observer = new MutationObserver(callback);  
		observer.observe(targetNode, config);
	} catch(e) {}
	
	}); // DOM Ready