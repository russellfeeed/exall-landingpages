var Rebrander = {

	redirectLookup: {
		
		'devwebsyscouk': { redirect: '', img: 'exertis.gif' }, // replace with 'squashed' test domain

		'exertismicropcouk' : {redirect: 'www.micro-p.com', img: 'exertis-micro-p.gif'},                        
		'exertisconectcouk' : {redirect: 'www.micro-p.com', img: 'exertis-micro-p.gif'},                        
		'exertissecuritycouk' : {redirect: 'www.micro-p.com', img: 'exertis-micro-p.gif'},
                
		'exertisgemcouk' : {redirect: 'www.gem.co.uk', img: 'exertis-gem.gif'},
		'exertisadventcouk': { redirect: 'www.adventdata.co.uk', img: 'exertis-advent.gif' },
		'exertismsecouk': { redirect: 'www.msegroup.co.uk', img: 'exertis-mse.gif' },
		'exertiscomtradefr': { redirect: 'www.comtrade.fr', img: 'exertis-comtrade.gif' },
		'exertisbanquemagnetiquefr': { redirect: 'www.banquemagnetique.fr', img: 'exertis-banque-magnetique.gif' },
		'exertisgoconnectnl': { redirect: 'www.goconnect.nl', img: 'exertis-go-connect.gif' },
		'exertisztormse': { redirect: 'www.ztorm.com', img: 'exertis-ztorm.gif' },
		'exertisie': { redirect: 'www.sharptext.com', img: 'exertis-ireland.gif' },
		'exertissupplychaincom': { redirect: 'www.sercomsolutions.com', img: 'exertis-supply-chain-services.gif' },

		'exertiscom': { redirect: '', img: 'exertis.gif' },
		'exertiscouk': { redirect: '', img: 'exertis.gif' },
                
                'exertisdigitalcom': { redirect: 'www.ztorm.com', img: 'exertis-ztorm.gif' }

	},
	

	imgpath: 'assets/img/',

	/**
	* This gives us a nice usuable key for indexing out lookup table
	* It is www. agnostic.
	*/
	getSquashedHost: function (host) {
		var squashedhost = host.replace(/www\./gi,'');
		squashedhost = squashedhost.replace(/[-\.]/gi,'');
		return squashedhost;
	},

	getImageFilename : function(host) { 
		return this.imgpath + this.redirectLookup[this.getSquashedHost(host)]['img'] ;
	},
 
	getLinkURL : function (host) {
		return this.redirectLookup[this.getSquashedHost(host)]['redirect'];
	}
};



$(document).ready(function() {

	var host = window.location.host;

	// update page content - url & company image
	var redirectionURL = Rebrander.getLinkURL(host);
	var imageSRC = Rebrander.getImageFilename(host);

	if (redirectionURL != '') {
		$('#company-redirect').attr('href', 'http://' + redirectionURL);
	} else {	
		$('#company-redirect').remove();
	}

	if (imageSRC != '') {
		$('#company-image').css('background-image', 'url(' + imageSRC + ')');
	} else {
		$('#company-image').css('background-image', 'url(' + imgpath + 'exertis.gif' + ')');
	}

	// layout - vert.centre  site
	function setShim(wh, ch) {
		$('div.site-shim').height((wh / 2) + 'px');
		$('div.site-shim').css('margin', '-' + (ch / 2) + 'px 0 0 0');
	}

	var content_height = 706;
	var window_height = $(window).height();
	var new_window_height = window_height;

	// configure shim
	setShim(window_height, content_height);

	// set window resize check to re-configure shim
	setInterval(function () {

		new_window_height = $(window).height();

		if (window_height != new_window_height) {
			setShim(new_window_height, content_height);
			window_height = new_window_height;
		}

	}, 500);

	setTimeout(function () {
		$('body').css('visibility', 'visible');
	}, 750);

});