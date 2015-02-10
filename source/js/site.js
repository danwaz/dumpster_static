$(function(){
	$('#js-search').on({
		submit : function (e) {
			e.preventDefault();
			var dest = $('.idNum').val();
			console.log(dest.length);
			if(dest.length > 0) {
				window.location.href = '/items/' + dest;
			} else {
				window.location.href = '/items/321';
			}
		}
	});

	$('.idNum').on({
		focus : function() {
			$(this).attr('placeholder', '');
		},
		blur : function() {
			if($(this).val() === '') {
				$(this).attr('placeholder', '321');
			}
		}
	})

	$('.js-mailchimp, .js-close').on({
		click : function(e) {
			e.preventDefault();
			closeModal();
		}
	});

	$('#js-overlay').on({
		click : function() {
			closeModal();
		}
	})

	$(window).on({
		resize : function() {
			if($('body').hasClass('modal-open')) {
				centerModal();
			}
		}
	});

	var centerModal = function() {
		var windowWidth = $(window).width(),
			windowHeight = $(window).height(),
			$modal = $('#js-signup-modal'),
			modalWidth = $modal.width(),
			modalHeight = $modal.height();

		if( windowWidth > 500 ) {
			$modal.css({
				left: windowWidth/2 - modalWidth/2,
			});
		} else {
			$modal.css({
				left: 0
			});
		}

		if( windowHeight > modalHeight ) {
			$modal.css({
				top: windowHeight/2 - modalHeight/2,
			});
		} else {
			$modal.css({
				top: 0,
			});
		}
	};

	var closeModal = function() {
		if($('body').hasClass('modal-open')) {
			$('#js-signup-modal').css({
				top: -400
			});
			$('body').removeClass('modal-open');
		} else {
			centerModal();
			$('body').addClass('modal-open');
		}
	};

});