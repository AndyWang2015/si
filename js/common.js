$(document).ready(function(){
	//Init
	var webData ={};
	webData.wrp=$('.wrapper');
	startBanner_swiper();
	checkMobile();

	//AddListener
	$('.menubtn').click(function(){if($(this).hasClass('on')){openMenu(false);}else{openMenu(true);}});
	$('.video .btn').click(function(){if($(this).hasClass('on')){playVideo(true);}else{playVideo(false)}});
	$('.video .btn').mouseover(function(){showVideoWord(true);});
	$('.video .btn').mousemove(function(){showVideoWord(true);});
	$('.video .btn').mouseout(function(){showVideoWord(false);});
	$('.menua').click(function(){if(webData.mobile){if(!$(this).parent().hasClass('on')){showSMenu(true,$(this).parent().index());}else{showSMenu(false);}}})
	$('.menua').mouseover(function(){if(!webData.mobile){menuBoxFc(true,$(this).parent());}});
	$('.menua').mouseout(function(){if(!webData.mobile){menuBoxFc(false);}});
	$('.s_menuBox').mouseover(function(){if(!webData.mobile){menuBoxFc(true,$(this).parent());}});
	$('.s_menuBox').mouseout(function(){if(!webData.mobile){menuBoxFc(false);}});
	$(window).resize(function(){webResize();});
	$(window).load(function(){
		webResize();
		creatVideo();

		//test
		// openMenu(true);		
	})


	//Event
	function showSMenu(_t,_o){
		if(_t){
			$('.menuBox').removeClass('on').eq(_o).addClass('on');
		}else{
			$('.menuBox').removeClass('on');
		}
	}
	function openMenu(_t){
		if(_t){
			$('.top').addClass('on');
			$('.menubtn').addClass('on');
			$('.content').addClass('on');
			$('.menu').addClass('on');
			$('.menubg').addClass('on');
			$('.logo').addClass('on');
			$('.lag').fadeIn();
			$('.searchBox').fadeIn();
		}
		else{
			$('.top').removeClass('on');
			$('.menubtn').removeClass('on');
			$('.content').removeClass('on');
			$('.menu').removeClass('on');
			$('.menubg').removeClass('on');
			$('.logo').removeClass('on');
			$('.lag').fadeOut();
			$('.searchBox').fadeOut();
		}
	}
	function showVideoWord(_t){
		if(_t){
			$('.video .word').addClass('on');
			clearTimeout(webData.videotime);
			webData.videotime = setTimeout(function(){
				showVideoWord(false);
				playVideo(true);				
			},4000);
		}
		else{
			$('.video .word').removeClass('on');
			clearTimeout(webData.videotime);
		}
	}
	function onPlayerStateReady(event){
		$('.video .btn').addClass('on');
	}
	function onPlayerStateChange(event){if(event.data == YT.PlayerState.ENDED){webData.player.seekTo(0);playVideo(true);}}
	function playVideo(_t){if(_t){webData.player.playVideo();$('.video .btn').removeClass('on');}else{webData.player.pauseVideo();$('.video .btn').addClass('on');}}
	function menuBoxFc(_t,_o){if(_t){_o.find('.s_menuBox').addClass('on').show();}else{$('.s_menuBox').removeClass('on').hide();}}
	function creatVideo(){
		webData.player = new YT.Player('player', {
	      height: '100%',
	      width: '100%',
	      videoId: '0I871Zvjx10',
	      playerVars:{
	        'controls':0,
	        'autoplay':false,
	        'enablejsapi':'0',
	        'hd':'1',
	        'rel':'0',
	        'showinfo':'0',
	        'modestbranding':'1',
	        'cc_load_policy':'1',
	        'wmode':'transparent'      
	      },
	      events: {'onReady': onPlayerStateReady,'onStateChange': onPlayerStateChange}
	    });
	}
	function startBanner_swiper(){
		webData.banner_swiper = new Swiper('.swiper-container', {
		  	speed:1000,	  
		  	wrapperClass: 'swiper-wrapper',
		  	slideClass: 'pica',
		    slidesPerView: 1,
		    pagination: '.swiper-pagination',        
		    paginationClickable: true,
		    spaceBetween: 0,
		    loop: true,
		    autoplay:6000,
		    autoplayDisableOnInteraction:false
		});		
	}
	function webResize(){
		checkMobile();
		if(!webData.mobile){$('.lag').fadeIn();$('.searchBox').fadeIn();}
		else{$('.lag').hide();$('.searchBox').hide();}
		webData.swiperImg = $('.swiper-wrapper .pic').find('img');
		if(webData.mobile){webData.swiperImg.css('height',$(window).width()*0.5);}
		else{webData.swiperImg.css('height',$(window).height()-$('.top').height());}
		webData.swiperImg.css('margin-left',($(window).width() - webData.swiperImg.width())/2);
		webData.banner_swiper.onResize();
	}
	function checkMobile(){if($(window).width()<1000){webData.mobile=true;}else{webData.mobile=false;}}
	
  
})//ready end  
































































































