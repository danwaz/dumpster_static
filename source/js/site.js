$(function(){
	$('#js-search').on({
		submit : function (e) {
			e.preventDefault();
			var dest = $('.idNum').val();
			window.location.href = '/item/' + dest
		}
	})
});