jQuery(document).ready(function(){
		"use strict";
		
		//menu toggle button
		$(".rs_menubtn span.rs_bars").on("click",function() {
			$(".rs_menubtn span.rs_bars").css("display", "none");
			$(".rs_menubtn span.rs_close").css("display", "block");
			
		});
		$(".rs_menubtn span.rs_close").on("click",function() {
			$(".rs_menubtn span.rs_close").css("display", "none");
			$(".rs_menubtn span.rs_bars").css("display", "block");
			
		});
		$('#open-button').on("click",function(e) {
			$('body').addClass('show-menu');
			e.preventDefault;
		});
		$('#close-button').on("click",function(e) {
				   setTimeout(function () {      
          $('body').removeClass('show-menu');}, 800);
					e.preventDefault;
			if (!$(e.target).is('.rs_menubtn span.rs_close ')) {
				$(".rs_menubtn span.rs_close").delay("400");
				$(".rs_menubtn span.rs_close").queue(function (next) {
				$(this).css("display", "none");
				next(); 
				});
				$(".rs_menubtn span.rs_bars").delay("400");
				$(".rs_menubtn span.rs_bars").queue(function (next) {
				$(this).css("display", "block");
				next(); 
				});
			}
			if (!$(e.target).is('.rs_user_pic *')) {
				 $(".rs_user_pic").removeClass('rs_active');
			}
			if (!$(e.target).is('.rs_sort *')) {
				 $(".rs_sort").removeClass('rs_active');
			}
			if (!$(e.target).is('.rs_user_profile *')) {
				$(".rs_user_profile").slideUp();
			}
			if (!$(e.target).is('.rs_product_sorting *')) {
				$(".rs_product_sorting").slideUp();
			}	
		});
		
		// Index Page Main Slider
		 var tpj = jQuery;
				
		// On focus Placeholder Hide/show
		var place = '';
		$('input,textarea').focus(function(){
			place = $(this).attr('placeholder');
		$(this).attr('placeholder','');
		}).blur(function(){
		$(this).attr('placeholder',place);
		});
		
		// User Porfile Hide/Show on Header
		$('.rs_user_profile').hide();
		$('.rs_user_pic').on("click",function(e){
			$('.rs_user_profile').slideToggle("slow");		
			e.stopPropagation();
		}); 
		$(".rs_user_pic, .rs_sort").on("click",function(){
        if($(this).hasClass("rs_active")){
			$(this).removeClass('rs_active');
		}
		else{
			$(this).addClass('rs_active');
		}
		});
		
		// Main Menu Hide/Show on Header
		$('.rs_menu').hide();
		$('.rs_menubtn').on("click",function(e){
			$('.rs_menu').fadeIn("slow");		
			e.stopPropagation();
		}); 
		
		// User Porfile Hide/Show on Header
		$('.rs_product_sorting').hide();
		$('.rs_sort').on("click",function(e){
			$('.rs_product_sorting').slideToggle("slow");		
			e.stopPropagation();
		});
		
		// Menu Window hight		
		var h = window.innerHeight;
		$('.rs_menu_inner_section ').css('height',h);
		
	
	 // show product in grid view and list view
    var elem = $('ul.dgm_listdata');
    $('#rs_viewcontrols a').on('click', function(e) {
        if ($(this).hasClass('gridview')) {
            elem.fadeOut(1000, function() {
                elem.removeClass('rs_listview').addClass('rs_grid');
                elem.fadeIn(1000);
            });
        } else if ($(this).hasClass('listview')) {
            elem.fadeOut(1000, function() {
                elem.removeClass('rs_grid').addClass('rs_listview');
                elem.fadeIn(1000);
            });
        }
    });
    $('#rs_viewcontrols a').on("click", function() {
        $("#rs_viewcontrols a").each(function() {
            $(this).removeClass('active');
        });
        $(this).addClass('active');
    });
	// author deshboard custom select
		$(".rs-custom-select").each(function(){
            $(this).wrap("<span class='rs-select-wrapper'></span>");
            $(this).after("<span class='rs-holder'></span>");
        });
        $(".rs-custom-select").change(function(){
            var selectedOption = $(this).find(":selected").text();
            $(this).next(".rs-holder").text(selectedOption);
        }).trigger('change');
		
		//increment decrement btn 
		$('.count_val').text('1');
		$('.count_plus').on("click", function() {
			var per = $(this).parent('div').find('.count_val');
			var cnt = per.text();
			per.text(parseInt(cnt, 10)+parseInt('1', 10));
			
		});
		
		$('.count_minus').on("click", function() {
			var per = $(this).parent('div').find('.count_val');
			var cnt = per.text();
			if(cnt >0){
				per.text(parseInt(cnt, 10)-parseInt('1', 10));	
			}
		});
		
		// Skill Bar Js on Product single page
			$('progress').each(function() {
				var max = $(this).val();
				$(this).val(0).animate({ value: max }, { duration: 5000, easing: 'easeOutCirc' });
			});
			
			
		//tooltip 
		$('[data-toggle="tooltip"]').tooltip();
			
		//preloader js
			$(".rs_preloader").delay(1000).fadeOut();
			$(".rs_preloaded").delay(1000).fadeOut("slow");
			
		
	
	});
