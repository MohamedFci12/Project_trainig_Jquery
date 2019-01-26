/*global  console ,$, jQuery, alert, prompt*/
	
	$(function() {
		
		
	'use strict';
		$('.navbar li a').click(function(e) {
			e.preventDefault();
			// animate to body to scroll smothly
			$('html, body').animate({
				scrollTop: $('#' + $(this).data('scroll')).offset().top
			},1000);
			
			
		});
		
		$('body').css('paddingTop',$('.navbar').innerHeight());
			// add class active to all li and remove it from sublings
		$('.navbar li a').click(function() {
			$(this).addClass('active').parents().siblings().find('a').removeClass('active');
			
		});
	
		$(window).scroll(function() {
				// sync link 
			$(".block").each(function(){
				
				if($(window).scrollTop() > $(this).offset().top)
					{
						var id = $(this).attr("id");
						$('.navbar a').removeClass("active");
						$(".navbar li a[data-scroll =  "+ id + "]").addClass("active");
					}
				
			});
					// end sync link
			// *********************************************************************** //
			// start button scroll to top
			if($(window).scrollTop() >= 1000)
				{
					if($('.scroll-to-top').is(':hidden'))
						{
							$('.scroll-to-top').fadeIn(400);
						} else
							{
								console.log("your butoon is appear");
							}
				}
			else {
				
				$('.scroll-to-top').fadeOut(400);
			}
			// click to go to top  of the page
			$('.scroll-to-top').click(function(e) {
				e.preventDefault();
				$('html,body').animate({
					
					scrollTop: 0
					
				},2000);
			});
			// end scroll  to top
			// 
			//////////////////////////// //
			
		
			
		});		
		
		// start popup section

		$('.show-popup').click(function() {
				
			$($(this).data('popup')).fadeIn();
			
			});
		$(".popup").click(function(){
			$(this).fadeOut(1000);
		});
		
		// to stop progapation
		$('.popup .inner').click(function(e){
			
			e.stopPropagation();
		});
		
		$('.popup .close').click(function(e) {
			e.preventDefault();
			/* ******************************  */
			
			$(this).parentsUntil('.popup').parent().fadeOut();
		});
		// every number in the keyboard have a unique code esc ==> 27 check if you click esc the pop up fade out
		$(document).keydown(function(e){
			
			
			if(e.keyCode == 27)
				{
					$('.popup').fadeOut();
				}
		});
		
/*                                                                                     
	
		*
		**
		****
		*****
		******
		********
		*********
		**********
*/		
		
		/*  how to make overlay on the button  */ 
		
		
		$('.from-left').hover(function(){
			
			$(this).find('span').eq(0).animate({
				
				width:'100%'
			},200);
			
		},function(){
			$(this).find('span').eq(0).animate({
				
				width:'0'
			},200);
			
			
		});
		$('.from-top').hover(function(){
			
			$(this).find('span').eq(0).animate({
				height:'100%'
				
			},200);
		},function(){
			$(this).find('span').eq(0).animate({
				height:'0'
				
			},200);
		});
		
		/* start animate to border */
		$('.border-left').hover(function(){
			
			$(this).find('span').eq(0).animate({
				
				display:'block',
				width:'100%'
				
			},200);
		},function(){
			
			$(this).find('span').eq(0).animate({
				
				display:'block',
				width:'0'
				
			});
		},200);
		/* end animate border */ 
		$('.border-top').hover(function(){
			
			$(this).find('span').eq(0).animate({
				height:'100%'
				
			},200);
		},function(){
			$(this).find('span').eq(0).animate({
				height:'0'
				
			},200);
		});
		//start data progress animated 
		 $('.progress-animated span').each(function(){
			 
			 $(this).animate({
				width: $(this).data('progress') + '%',
			 },2000,function(){
				 
				 $(this).text($(this).data('progress') + '%');
				 
			 });
			 
			
		});
		
		
		 //fixed menu
		// 	 
			 $('.fixed-color i').click(function(){
				 
				$(this).parent('.fixed-color').toggleClass('is-visible');
				 	if($(this).parent('.fixed-color').hasClass('is-visible'))
						{
							$(this).parent('.fixed-color').animate({
								left:'0'
							},300);
							$('body').animate({
								paddingLeft:'220px'
							},300);
							
						} else{
					 
					 $(this).parent('.fixed-color').animate({
								left: '-230px'
							},300);
							
							$('body').animate({
								paddingLeft: 0
							},300);
				 }
				 
				 
			 });
		
		// start thumblines 
		$('.thumblines img').click(function(){
			$(this).addClass('selected').siblings().removeClass('selected');
			$('.master-gallery img').hide().attr('src',$(this).attr('src')).fadeIn(500);
			
		});
		
		$('.master-gallery .fa-chevron-right').click(function(){
			if($('.thumblines .selected').is(':last-child'))
				{
					$('.thumblines img').eq(0).click();
				}
			else{
					$('.thumblines .selected').next().click();

			}
		});
		
		$('.master-gallery .fa-chevron-left').click(function(){
			
			if($('.thumblines .selected').is(':first-child'))
			{
				$('.thumblines img:last').click();
			}
			else{
					$('.thumblines .selected').prev().click();
			}
		});
		
		
	
		// cahnge colors
		$('.change-color li').click(function(){
			$("body").attr('data-deafult-color',$(this).data('color'));
			
		});
		
		// end change color
		//start products 
		$('.products .product i').click(function(){
			$(this).toggleClass('fa-plus fa-minus').next('p').slideToggle();;
			
		});
		
		//end products
		
		// start placeholder 
		var placeholder = '';
		$('[placeholder]').focusin(function(){
			
			placeholder = $(this).attr('placeholder'); 
			$(this).attr('placeholder','');
			
		}).focusout(function(){
			$(this).attr('placeholder',placeholder);
		});
		// end placeholder
		// show message requried
		$('[requried]').focusout(function(){
			
			if($(this).val() == '')
				{
					$(this).next().fadeIn().delay(1000);
				}
			
		});
		//Add Astresick to all requried filled
		$('<span class="asterisk">*</span>').insertBefore(':input[requried]');
		
		$('.asterisk').parent('div').css({
			position:'relative',
		});
		
		$('.asterisk').each(function(){
			$(this).css({
				
			display:'inline-block',
			position:'absolute',
			top:'13px',
			left: $(this).parent().find(':input').innerWidth()  + 140,
			color:'#f00',
			fontWeight:'bold'
		});
			 

		});
		$('.our-form input[type = "file"]').wrap('<div class="custom-file skin-color"></div>');
		$('.custom-file').prepend('<span>choose file</span>');
		$('.custom-file').append('<i class="fa fa-upload fa-lg skin-color"></i>');
		$('.our-form input[type = "file"]').change(function(){
			
			
			$(this).prev('span').text($(this).val());
		});
		$('.uni-code').keyup(function(e){
			var keyboard = e.keyCode || e.which;
			$('.unique-code').text(keyboard);
		}); 
		
				$('.auto-direction').keyup(function(){
				//if asci of char < 200 => englis then dirct ltr
				if($(this).val().charCodeAt(0) < 200) {
						$(this).css('direction','ltr');
					}else {
							$(this).css('direction','rtl');
					}
		});
		// convert comaa to tag
		$('.add-tag').keyup(function(e){
		var keycode = e.keyCode || e.which;
				if(keycode === 188)
					{
						var thisvalue = $(this).val().slice(0,-1);
						// put the value iside div ==> appendto p + icon class and css => p 
						$('.tags').append('<p><i class="fa fa-times"></i>'+ thisvalue) ;
						$(this).val('');
					}
			// when click icon class remove ===> p & i are append not in the dom
		$('.tags').on('click','p i',function(){
				$(this).parent('p').fadeOut(800);
			
		});
		
		});
		// function trim text 
		function texttrim(selector,maxlength)
		{
			$(selector).each(function(){
				if($(this).text().length > maxlength)
					{
						var trim = $(this).text().substr(0,maxlength);
						$(this).text(trim);
					}
			});
		}
		texttrim('.trim-text .p-one',100);
		texttrim('.trim-text .p-two',200);	
		texttrim('.trim-text .p-three',300);
		// add eventlistener
		/*var clk = document.querySelector('.popup a');
		clk.addEventListener('click',function(e){
			
			e.preventDefault();
			console.log(e.target.textContent);
		});
		var doc = document.forms['form-id'];
		doc.addEventListener('submit',function(e){
			e.preventDefault();
		const value = doc.querySelector('input[type="text"]').value;
			console.log(value);
			
		});*/
			});
		//calculate textarea with event oninput
		/*cash the textarea by id and cash span by id cash textarea attribute maxlengh*/
var $textarea = document.getElementById('text'),
	$count = document.getElementById('count'),
	$maxLenght = $textarea.getAttribute('maxlength');
	$textarea.oninput = function(){
		
		$count.innerHTML = $maxLenght - this.value.length;
		//if the textarea reach zero add class on $count = span
		if($count.innerHTML == 0){
			$count.classList.add("red")
		}else{
			$count.classList.remove("red")
		}
	};
//To Hide PlaceHolder

var myInput = document.getElementById('my-input');
myInput.onfocus = function(){
	'use strict';
	// Store placeholder attr in Backup Attr
	this.setAttribute('data-place', this.getAttribute('placeholder'));
	//Set Placeholder attr zero 
	this.setAttribute('placeholder','');
};
myInput.onblur= function(){
	'use strict';
	//Get Placeholder att from Backup attr
	this.setAttribute('placeholder', this.getAttribute('data-place'));
	//Empty Backup Attr
	this.setAttribute('data-place', '');
};

var myText = "THis is Type Writer Paragraph";
var i = 0,
	mybutton = document.getElementById('btn');
mybutton.onclick = function(){
		var typeWriter = setInterval(function(){
			document.getElementById('type').textContent += myText[i];	
			i += 1
			if(i > myText.length - 1){
					clearInterval(typeWriter);
			}
		},100);

};
var myInput2 = document.getElementById("pas-input"),
	btn2 = document.getElementById("mybutton");
btn2.onclick = function(){
	if(this.textContent == 'show password'){
		myInput2.setAttribute('type','text');
		this.textContent ='hide password';
	}else{
		
		myInput2.setAttribute('type','password');
		this.textContent = 'show password';
	}
};	
	
//create simple clock 
function showstime(){
	var now = new Date();
	var hours = now.getHours(),
	minutes = now.getMinutes(),
	seconds = now.getSeconds(),
txt  = document.getElementById('hour');
	//check if hours less tha 10 add zero before number
	if(hours < 10){
		hours = '0'+hours;
	}
	if(minutes < 10){
		minutes = '0'+minutes;
	}
	if(seconds < 10){
		seconds = '0'+seconds;
	}
txt.innerHTML  =  hours + ":" + minutes + ":"+ seconds;

}

window.onload = function(){
	setInterval(showstime,500);
}

