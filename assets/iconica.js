// ICONICA INFO// ------------------------------->var iconica = {	email: "contacto@iconica.mx",    phone: "5080249",    phoneFormat: "5-08-02-49 ext. 610, 611",    cel: "5217226560428",    celFormat: "(722) 656-0428",    address1: "Av. Benito Juárez Norte 907 Int. 2",    address2: "Col. La Purísima. CP 52158",    address3: "Metepec, Estado de México",    zipCode: "52158",    country: "México",    days: "Lunes a Viernes",    open: "9:00am",    close: "5:00pm",    developerSite: "https://iconica.mx",    legalName: "Luis Enrique Ruíz Carvajal",    nickName: "Icónica Studio",    developer: "ICÓNICA STUDIO",    facebook: "https://www.facebook.com/IconicaMx/",    messenger: "https://m.me/IconicaMx",    instagram: "https://instagram.com/iconicamx",    behance: "https://behance.net/iconicamx",    twitterHashtag: "https://twitter.com/search?q=hazloasombroso",    vimeo: "https://vimeo.com/iconicamx",    pinterest: "https://www.pinterest.com.mx/iconicamx/",    linkedin: "https://www.linkedin.com/company/iconica-studio",    map: "https://goo.gl/maps/ZpqiDBvDM1z"};// HEADER// ------------------------------->$(document).on("scroll", function () {	"use strict";	if ($(document).scrollTop() > 50) {		$(".navbar").addClass("navbar-small");	} else {		$(".navbar").removeClass("navbar-small");	}});// FOOTER// ------------------------------->function siteFooter() {	"use strict";    var mainContent = $('main');    var mainContentHeight = mainContent.height();    var mainContentWidth = mainContent.width();    var siteFooter = $('footer');    var siteFooterHeight = siteFooter.height();    var siteFooterWidth = siteFooter.width();	var d = new Date();	var n = d.getFullYear();    mainContent.css('margin-bottom', siteFooterHeight + 25);	$('#info-year').html(n);	$('#info-developer').html(iconica.developer);}// WOW JS// ------------------------------->var wow = new WOW({    offset:       -10,    mobile:       true});// SMOOTH SCROLL// ------------------------------->var smoothScroll = new SmoothScroll('a[href*="#"]', {	speed: 1000,	easing: 'easeInOutQuart'});// PARALLAX// ------------------------------->if($(window).width() >= 768){	if($('#intro').length){		$('#intro').parallax({			imageSrc: 'assets/img/home/iconica-studio-background.jpg',			zIndex: 1,			position: 'top center'		});	}	if($('#branding').length){		$('#branding').parallax({			imageSrc: 'assets/img/services/estudio-branding-diseno-grafico-toluca-metepec.jpg',			zIndex: 1,			position: 'top left'		});	}	if($('#startups').length){		$('#startups').parallax({			imageSrc: 'assets/img/services/agencia-marketing-digital-publicidad-toluca-metepec.jpg',			zIndex: 1,			position: 'top left'		});	}	if($('#video').length){		$('#video').parallax({			imageSrc: 'assets/img/services/edicion-videos-corporativos-toluca-metepec.jpg',			zIndex: 1,			position: 'top left'		});	}}// WAYPOINTS// ------------------------------->$(document).ready(function() {	"use strict";	$("#contact").waypoint(function(direction){	    if(direction === 'down'){	        $(".navbar").addClass('yellow-navbar');	    } else {	        $(".navbar").removeClass('yellow-navbar');	    }	}, {offset: '20px'});});// GET DATE// ------------------------------->function myFunction() {	"use strict";	var d = new Date();	var n = d.getFullYear();	$("#year-privacy").write = n;}// DOCUMENT READY// ------------------------------->$(document).ready(function() {	"use strict";	$('.info-facebook').attr("href", iconica.facebook);	$('.info-instagram').attr("href", iconica.instagram);	$('.info-pinterest').attr("href", iconica.pinterest);	$('.info-behance').attr("href", iconica.behance);	$('.info-linkedin').attr("href", iconica.linkedin);	$('.info-vimeo').attr("href", iconica.vimeo);	$('#info-map').attr("href", iconica.map);	$('#info-address1').html(iconica.address1);	$('#info-address2').html(iconica.address2);	$('#info-address3').html(iconica.address3);	$('#info-phone').attr("href", "tel:" + iconica.phone);	$('#info-phoneFormat').html(iconica.phoneFormat);	$('#info-cel').attr("href", 'https://api.whatsapp.com/send?phone=' + iconica.cel);	$('#info-celFormat').html(iconica.celFormat);	$('a.info-email').attr("href", 'mailto:' + iconica.email);	$('span.info-email').html(iconica.email);    siteFooter();	$(window).resize(function() {		siteFooter();	});		if($('#year-privacy').length){		myFunction();	}    // wow.init();});