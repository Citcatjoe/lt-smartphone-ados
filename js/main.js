(function($, videojs){

	
	data = [
				{ 
					hasEpTitle: '- épisode 1 -',
					hasBigTitle: 'Nina',
					hasText: "12 ans, collégienne, Lausanne",
					isVideo: true,
					autoplay: true,
					loop: true,
					source: "https://player.vimeo.com/external/560832546.sd.mp4?s=7d7fcaf1b012d2d749f62bb927b1670a2d1b1ba3&profile_id=164",
					sourceHd: "https://player.vimeo.com/external/560832546.hd.mp4?s=dea3d2289de7499bddf74c812eb3221642a48862&profile_id=174", 
					controls: false,
					overlay: true ,
				},
				{ 
					hasQuote: 'Moi ce que jaime bien des fois, cest aller manger des glaces',
					quoteAuth: '- Nina',
					hasGradient: true,
				},
				{ 
					hasQuote: 'Moi ce que jaime bien des fois, cest aller manger des glaces',
					quoteAuth: '- Nina',
					hasImgBg: 'placeholder-ice.jpg',
					overlay: true
				},
				{ 
					isVideo: true,
					autoplay: true,
					source: "https://player.vimeo.com/external/555710878.sd.mp4?s=898e1aff51e841b9cecd071cfb8be9c9100ec9f7&profile_id=164", 
					sourceHd: "https://player.vimeo.com/external/555710878.hd.mp4?s=8ac4e00239f9845a96b4134ea2891678a6e939bc&profile_id=174",
					controls: true,
					overlay: false,
				},
				{ 
					hasChapterNo: '- chapitre 1 -',
					hasChapterTitle: 'lamitié',
					hasText: false,
					isVideo: true,
					autoplay: true,
					loop: true,
					source: "https://player.vimeo.com/external/559844885.sd.mp4?s=5b93967d16736c7800272fc12937879b2ef543c4&profile_id=164", 
					sourceHd: "https://player.vimeo.com/external/559844885.hd.mp4?s=e5ecadad4e95fc717ab69db16829e8866cfd8cd6&profile_id=174",
					overlay: true,
				},
				{ 
					hasText: 'Echange whatsapp ici a accepté de payer <span>11 millions de dollars</span> pour se débarrasser d’un «ransomware»',
					hasImgBg: 'placeholder.jpg'
				},
				{ 
					hasText: "Alors que l’hésitation vaccinale touche 30 et 40% de la population, les nouveaux vaccins tendent parfois les conversations entre proches.",
					isVideo: true,
					autoplay: true,
					source: "https://player.vimeo.com/external/559844537.sd.mp4?s=bfaea2d66b65a8d86fb38008a5c9ab420b3f51f5&profile_id=164", 
					sourceHd: "https://player.vimeo.com/external/559844537.hd.mp4?s=a28869aabc1277f16674beb6ccaf422fe3a434aa&profile_id=174",
					controls: true
				},
				{ 
					hasText: "nina-copines.mp4",
					isVideo: true,
					autoplay: true,
					source: "https://player.vimeo.com/external/559844498.sd.mp4?s=83a82e9a56f29233a482861427895c2c3befaff0&profile_id=164", 
					sourceHd: "https://player.vimeo.com/external/559844498.hd.mp4?s=4680ca841031826feb11aa40eb3a663c9bd7ee66&profile_id=174"
				},
				{ 
					hasText: "nina-vocaux.mp4",
					isVideo: true,
					autoplay: true,
					source: "https://player.vimeo.com/external/559844399.sd.mp4?s=49bce8ec98a6a049fc5a1a9ae563aa89d344ee4f&profile_id=164", 
					sourceHd: "https://player.vimeo.com/external/559844399.hd.mp4?s=7fbd1d84dcc6625946d284f7757fdf83edbe6f8d&profile_id=174",
					controls: true
				},
				{ 
					hasText: "Séquence vocaux ??",
					hasImgBg: 'placeholder.jpg'
				},
				{ 
					hasText: "nina-cousin.jpg et TITRE LAMOUR",
					hasImgBg: 'nina-cousin.jpg',

				},
				{ 
					hasText: "nina-amour-intro.mp4",
					isVideo: true,
					autoplay: true,
					source: "https://player.vimeo.com/external/559844300.sd.mp4?s=70cc9f946edb35d7d28b138deda82c0bfd4cc493&profile_id=164", 
					sourceHd: "https://player.vimeo.com/external/559844300.hd.mp4?s=534c26b1f5fe8ba45de8f2524cf82d27ad8da07d&profile_id=174"
				},
				{ 
					hasText: "nina-amour-cousin.jpg",
					hasImgBg: 'nina-amour-cousin.jpg',
					imgContained: true
				},
				{ 
					hasText: "nina-amour-suite.mp4",
					isVideo: true,
					autoplay: true,
					source: "https://player.vimeo.com/external/559844125.sd.mp4?s=95b0824ef04ee59a09e58366efa567bcaabd40c3&profile_id=164", 
					sourceHd: "https://player.vimeo.com/external/559844125.hd.mp4?s=de567e962cc2aef0edddf3aa68f88d2de46a5ea7&profile_id=174",
					controls: true
				},
				{ 
					hasText: "nina-lena-situation-nb-final.mp4",
					isVideo: true,
					autoplay: true,
					source: "https://player.vimeo.com/external/559844023.sd.mp4?s=983312747bd5106a8f0d2d81a1a7a9ac217e25bb&profile_id=164", 
					sourceHd: "https://player.vimeo.com/external/559844023.hd.mp4?s=014baa5aa1a363942f4ba7449e23190f5bbaf751&profile_id=174",
					controls: true
				},
				{ 
					isHSlider: true,
					hSliderChildren :
						[
							{
								text: 'Pinterest1',
								img: 'nina-pinterest-1.jpg'
							},
							{
								text: 'Pinterest2',
								img: 'nina-pinterest-2.jpg'
							},
							{
								text: 'Pinterest3',
								img: 'nina-pinterest-3.jpg'
							},
							{
								text: 'Pinterest4',
								img: 'nina-pinterest-4.jpg'
							},
							{
								text: 'Pinterest5',
								img: 'nina-pinterest-5.jpg'
							},
						]
				},
				{ 
					isHSlider: true,
					hSliderChildren :
						[
							{
								text: 'Pinterest1',
								img: 'nina-pinterest-1.jpg'
							},
							{
								text: 'Pinterest2',
								img: 'nina-pinterest-2.jpg'
							},
							{
								text: 'Pinterest3',
								img: 'nina-pinterest-3.jpg'
							},
							{
								text: 'Pinterest4',
								img: 'nina-pinterest-4.jpg'
							},
							{
								text: 'Pinterest5',
								img: 'nina-pinterest-5.jpg'
							},
						]
				},
				{ 
					hasText: "nina-youlookcutie.mp4",
					isVideo: true,
					autoplay: true,
					source: "https://player.vimeo.com/external/560846998.sd.mp4?s=01c2912ccfe64834dbed1ef77b612952b847d907&profile_id=164", 
					sourceHd: "https://player.vimeo.com/external/560846998.sd.mp4?s=01c2912ccfe64834dbed1ef77b612952b847d907&profile_id=164",
					controls: true
				},
				{ 
					hasText: "nina-routine.mp4",
					isVideo: true,
					autoplay: true,
					source: "https://player.vimeo.com/external/559843880.sd.mp4?s=3ffae248fa82273ba1e7269e6e12c8f0587cb437&profile_id=164", 
					sourceHd: "https://player.vimeo.com/external/559843880.hd.mp4?s=250e10d0f4791fbd9245e4918eec2ca7d4f1daa1&profile_id=174",
					controls: true
				},
				{ 
					hasText: "video whatsapp maman",
					hasImgBg: 'placeholder.jpg'
				},
				{ 
					hasText: "Selfie papa/maman TITRE LES PARENTS",
					hasImgBg: 'placeholder.jpg'
				},
				{ 
					hasText: "nina-parents.mp4",
					isVideo: true,
					autoplay: true,
					source: "https://player.vimeo.com/external/559843645.sd.mp4?s=ea560bc157905aa31b6d9de19aa5b6b67287c0c5&profile_id=164", 
					sourceHd: "https://player.vimeo.com/external/559843645.hd.mp4?s=bd53b98edbca5e965ddeaf17d550de17e2ca174a&profile_id=174",
					controls: true				},
				{ 
					isCredits: true,
					
				}
	];
	console.log(data);

    buildMainSlider(data);
    function buildMainSlider(data){
        var source   = $("#slide-template").html();
        var template = Handlebars.compile(source);
        var html = template({'slide':data});
        $(".swiper-wrapper").html(html); 
    }

   
    



	const swiper = new Swiper('.swiper-main', {
	  direction: 'vertical',
	  loop: false,
	  pagination: {
	    el: '.swiper-pagination',
	  },
	  navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
	  },
	  scrollbar: {
	    el: '.swiper-scrollbar',
	  },
	  mousewheel: {
	    invert: false,
	  },
	  on: {
	    activeIndexChange: function () {
	    	stopTheVid(swiper.previousIndex);
	    	runTheVid(swiper.activeIndex);
	    	console.log(swiper.activeIndex);
	      //$('#nina-intro')[0].play();
	    },
	  },
	});

	function stopTheVid(previousIndex) {
		if(previousIndex > 0) {
			var slide = $('#slide' + previousIndex);
			var video = slide.find('video').get(0);
			if (video){
				var player = videojs(video);
				player.currentTime(0);
				player.pause();
				player.muted(true);
			}
		}
	}

	function runTheVid(activeIndex){
		var slide = $('#slide' + activeIndex);
		var video = slide.find('video').get(0);

		if(video) {
			var player = videojs(video);
			player.play();

			var btnSound = slide.find('.btn-sound');
			var btnReset = slide.find('.btn-reset');

			if (!btnSound.hasClass('already-fixed')) {
				btnSound.addClass('already-fixed');
				btnSound.on('click', function(){
					if (player.muted()) {
						player.muted(false);
					}else{
						player.muted(true);
					}
				});
			}

			if (!btnReset.hasClass('already-fixed')) {
				btnReset.addClass('already-fixed');
				btnReset.on('click', function(){
					player.currentTime(0);
					player.play();
				});
			}
		}
	}

	var swiper2 = new Swiper(".swipper-nina-horizontal1", {
	        direction: "horizontal",
	        spaceBetween: 0,
	        freeMode: false,
	        pagination: {
	          el: ".swiper-pagination",
	          clickable: true,
	        },
	});

	// var swiper2 = new Swiper(".swipper-nina-horizontal2", {
	//         direction: "horizontal",
	//         spaceBetween: 0,
	//         pagination: {
	//           el: ".swiper-pagination",
	//           clickable: true,
	//         },
	// });

	// var swiper3 = new Swiper(".mySwiper", {
	//         slidesPerView: 3,
	//         spaceBetween: 30,
	//         freeMode: true,
	//         pagination: {
	//           el: ".swiper-pagination",
	//           clickable: true,
	//         },
	// });


	

})(jQuery, videojs);